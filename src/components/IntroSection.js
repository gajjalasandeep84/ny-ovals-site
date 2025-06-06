import React from "react";
export default function IntroSection({
  title,
  subtitle,
  icon,
  iconImg,
  iconImgs = [],
  size = "default", // new parameter: 'default' | 'large'
  padding = "py-10"
}) {
  const hasMultiple = iconImgs && iconImgs.length > 0;

  // Conditional sizing
  const iconSize = size === "large" ? "h-40 md:h-48" : "h-16";

  return (
    <section className={`text-center ${padding} px-4 max-w-4xl mx-auto`}>
      {hasMultiple ? (
        <div className="flex justify-center items-center gap-2 mb-2">
          {iconImgs.map((src, idx) => (
            <img key={idx} src={src} alt={`icon-${idx}`} className={`${iconSize}`} />
          ))}
        </div>
      ) : iconImg ? (
        <img src={iconImg} alt="icon" className={`mx-auto ${iconSize} mb-2`} />
      ) : (
        <div className="text-pink-400 text-2xl mb-2">{icon}</div>
      )}

      <h2 className="text-4xl elegant-font mb-4">{title}</h2>
      <div className="text-gray-600 text-base leading-relaxed text-left space-y-4">
        {subtitle}
      </div>
    </section>
  );
}