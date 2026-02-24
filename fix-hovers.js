const fs = require('fs');
const files = [
    'E:/ONETOPIC/onetopic-web/src/components/designed.tsx',
    'E:/ONETOPIC/onetopic-web/src/components/features.tsx',
    'E:/ONETOPIC/onetopic-web/src/components/problem.tsx',
    'E:/ONETOPIC/onetopic-web/src/components/how-it-works.tsx'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    // First, completely remove any existing `group-data-[hovering=true]:` blocks 
    // just in case we accidentally double-inject
    content = content.replace(/ group-data-\[hovering=true\]:[^\s"'`]+/g, '');

    // Now replace all group-hover:[X] with group-hover:[X] group-data-[hovering=true]:[X]
    content = content.replace(/(group-hover:([^\s"'`]+))/g, '$1 group-data-[hovering=true]:$2');
    fs.writeFileSync(file, content);
    console.log('Fixed', file);
});
