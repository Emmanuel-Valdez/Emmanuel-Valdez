import fs from 'fs';

const svgContent = fs.readFileSync('/DotNet.svg', 'utf-8');
console.log(svgContent);
