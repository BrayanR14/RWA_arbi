const fs = require('fs');
const path = require('path');

const componentName = process.argv[2];

if (!componentName) {
  console.log("❌ Escribe un nombre: npm run g NombreComponente");
  process.exit(1);
}

const dir = `src/components/${componentName}`;
fs.mkdirSync(dir, { recursive: true });

const tsx = `import "./${componentName}.css";

const ${componentName} = () => {
  return (
    <div className="${componentName.toLowerCase()}">
      <h2>${componentName} component</h2>
    </div>
  );
};

export default ${componentName};
`;

const css = `.${componentName.toLowerCase()} {
  padding: 1rem;
}
`;

fs.writeFileSync(path.join(dir, `${componentName}.tsx`), tsx);
fs.writeFileSync(path.join(dir, `${componentName}.css`), css);

console.log(`✅ Componente ${componentName} creado`);
console.log(`Ruta: ${dir}`);
console.log(`Archivos: ${componentName}.tsx, ${componentName}.css`);
console.log("👉 Ahora puedes importarlo y usarlo en tu proyecto.");
