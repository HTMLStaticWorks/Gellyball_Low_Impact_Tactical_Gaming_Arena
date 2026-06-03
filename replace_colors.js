const fs = require('fs');
const path = require('path');

const dir = './';

const replacements = [
    { regex: /purple-500/g, replacement: 'neonBlue' },
    { regex: /pink-500/g, replacement: 'neonGreen' },
    { regex: /yellow-500/g, replacement: 'neonGreen' },
    { regex: /red-500/g, replacement: 'neonBlue' },
    { regex: /red-900/g, replacement: 'neonBlue' }
];

function processDirectory(directory) {
    fs.readdirSync(directory).forEach(file => {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                processDirectory(fullPath);
            }
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            
            replacements.forEach(({ regex, replacement }) => {
                if (regex.test(content)) {
                    content = content.replace(regex, replacement);
                    modified = true;
                }
            });
            
            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    });
}

processDirectory(dir);
