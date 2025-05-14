// Required: npm install axios form-data fs path

const axios = require('axios');
const fs = require('fs');
const path = require('path');
const FormData = require('form-data');

// Vercel team project config
const VERCEL_TOKEN = 'Yvf8PYIZdzXTWNNP5Np4Tzwc';
const PROJECT_SLUG = 'fiesta-decor-sit-4ila';
const TEAM_SLUG = 'gajjalasandeep84';
const SOURCE_DIR = './watermarked'; // Folder with images

async function uploadFile(filePath) {
  const form = new FormData();
  form.append('file', fs.createReadStream(filePath));

  try {
    const res = await axios.post(
      `https://api.vercel.com/v2/blob/upload?teamId=${TEAM_SLUG}&project=${PROJECT_SLUG}`,
      form,
      {
        headers: {
          ...form.getHeaders(),
          Authorization: `Bearer ${VERCEL_TOKEN}`,
        },
      }
    );

    console.log(`✅ Uploaded: ${path.basename(filePath)}`);
    console.log(`   ➤ CDN URL: ${res.data.url}\n`);
  } catch (err) {
    const error = err.response?.data || err.message;
    console.error(`❌ Failed to upload ${filePath}:`, error);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      uploadFile(fullPath);
    }
  });
}

walkDir(SOURCE_DIR);