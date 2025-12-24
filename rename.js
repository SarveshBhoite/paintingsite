// generate-gallery.js
const fs = require('fs');
const path = require('path');

// Configuration
const portfolioDir = path.join(__dirname, 'public/portfolio');
const outputFile = path.join(__dirname, 'public/portfolio.json');

console.log(`Scanning directory: ${portfolioDir}`);

try {
  // Read directory
  const files = fs.readdirSync(portfolioDir);

  // Filter for image files only (jpg, png, webp, etc.)
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png|webp|avif|gif)$/i.test(file)
  );

  // Create the data structure
  const galleryData = imageFiles.map((file, index) => ({
    id: index + 1,
    src: `/portfolio/${file}` // Path relative to the public folder
  }));

  // Write the JSON file
  fs.writeFileSync(outputFile, JSON.stringify(galleryData, null, 2));
  
  console.log(`✅ Success! Found ${galleryData.length} images.`);
  console.log(`📄 List saved to: ${outputFile}`);
  
} catch (err) {
  console.error("❌ Error scanning directory:", err);
}