require('dotenv').config();

const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, '..', process.env.THEME_PREVIEW_PATH);
const destination = path.join(__dirname, 'theme.ts');

fs.copyFile(source, destination, (err) => {
  if (err) {
    console.error('Error occurred:', err);
    return;
  }
  console.log('File copied successfully');
});
