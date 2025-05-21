import os
from PIL import Image, ImageEnhance

def watermark_images_in_folder(root_dir, logo_path, output_dir=None, scale=0.15, opacity=0.5, margin=20):
    if output_dir is None:
        output_dir = os.path.join(root_dir, "watermarked")

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    logo = Image.open(logo_path).convert("RGBA")

    for subdir, _, files in os.walk(root_dir):
        for file in files:
            if not file.lower().endswith((".jpg", ".jpeg", ".png")):
                continue

            img_path = os.path.join(subdir, file)
            rel_path = os.path.relpath(subdir, root_dir)
            out_folder = os.path.join(output_dir, rel_path)
            os.makedirs(out_folder, exist_ok=True)
            out_path = os.path.join(out_folder, file)

            with Image.open(img_path).convert("RGBA") as base:
                base_width, base_height = base.size
                new_logo_w = int(base_width * scale)
                logo_resized = logo.resize((new_logo_w, int(new_logo_w * logo.height / logo.width)))

                # Set transparency
                alpha = logo_resized.split()[3]
                alpha = ImageEnhance.Brightness(alpha).enhance(opacity)
                logo_resized.putalpha(alpha)

                # Position logo
                pos = (base_width - logo_resized.width - margin, base_height - logo_resized.height - margin)
                base.paste(logo_resized, pos, logo_resized)
                base.convert("RGB").save(out_path)

    print(f"✅ Watermarked images saved to: {output_dir}")

# Example usage:
# watermark_images_in_folder(
#     root_dir=r"C:\Development\NYOvals\src",
#     logo_path=r"C:\Development\NYOvals\src\assets\logo.png"
# )