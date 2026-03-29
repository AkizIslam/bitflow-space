const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "src");

const declarations = {};

function scanDir(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else if (file.endsWith(".js") || file.endsWith(".jsx")) {
      const content = fs.readFileSync(fullPath, "utf-8");
      const regex = /(?:const|let|var|function|class)\s+([A-Za-z0-9_]+)/g;

      let match;
      while ((match = regex.exec(content)) !== null) {
        const name = match[1];
        if (!declarations[name]) {
          declarations[name] = [];
        }
        declarations[name].push(fullPath);
      }
    }
  });
}

scanDir(srcDir);

// Print duplicates
console.log("Duplicate Declarations Found:\n");
let hasDuplicates = false;
for (const [name, files] of Object.entries(declarations)) {
  if (files.length > 1) {
    hasDuplicates = true;
    console.log(`${name} declared in:`);
    files.forEach(f => console.log(`  - ${f}`));
    console.log("");
  }
}

if (!hasDuplicates) {
  console.log("No duplicate declarations found!");
}
