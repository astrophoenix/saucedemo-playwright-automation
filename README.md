# Saucedemo Playwright Automation

Framework de automatización de pruebas E2E para [Saucedemo](https://www.saucedemo.com/) usando Playwright y TypeScript.

## 📋 Descripción

Este proyecto implementa pruebas automatizadas para el sitio de demostración Saucedemo, utilizando el patrón Page Object Model para una arquitectura mantenible y escalable.

## 🚀 Características

- **Playwright** - Framework de automatización moderno y rápido
- **TypeScript** - Tipado estático para mayor robustez
- **Page Object Model** - Patrón de diseño para tests mantenibles
- **BDD Ready** - Configuración preparada para pruebas con Gherkin/Cucumber
- **CI/CD** - Integración continua con GitHub Actions

## 📁 Estructura del Proyecto

```
saucedemo-playwright-automation/
├── .github/
│   └── workflows/
│       └── playwright.yml    # Configuración CI/CD
├── data/
│   └── users.ts              # Datos de prueba (usuarios)
├── pages/
│   ├── BasePage.ts           # Clase base para Page Objects
│   ├── LoginPage.ts          # Page Object de Login
│   └── index.ts              # Exportaciones centralizadas
├── tests/
│   └── login.spec.ts         # Tests de login
├── .gitignore
├── package.json
├── playwright.config.ts      # Configuración de Playwright
└── README.md
```

## 🛠️ Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/astrophoenix/saucedemo-playwright-automation.git
cd saucedemo-playwright-automation
```

2. Instalar dependencias:
```bash
npm install
```

3. Instalar navegadores de Playwright:
```bash
npx playwright install
```

## 🧪 Ejecutar Tests

### Ejecutar todos los tests
```bash
npm test
```

### Ejecutar con interfaz visual
```bash
npm run test:ui
```

### Ejecutar en modo debug
```bash
npm run test:debug
```

### Ejecutar con navegador visible
```bash
npm run test:headed
```

### Ver reporte de pruebas
```bash
npm run report
```

## 👤 Usuarios de Prueba

El sitio Saucedemo proporciona los siguientes usuarios de prueba:

| Usuario | Contraseña | Descripción |
|---------|------------|-------------|
| `standard_user` | `secret_sauce` | Usuario estándar sin problemas |
| `locked_out_user` | `secret_sauce` | Usuario bloqueado |
| `problem_user` | `secret_sauce` | Usuario con problemas visuales |
| `performance_glitch_user` | `secret_sauce` | Usuario con lentitud |
| `error_user` | `secret_sauce` | Usuario que causa errores |
| `visual_user` | `secret_sauce` | Usuario con diferencias visuales |

## 🔧 Configuración

### Navegadores
El proyecto está configurado para ejecutar pruebas en:
- Chrome (Desktop)
- Firefox (Desktop)
- Safari/WebKit (Desktop)

### Reportes
Los reportes HTML se generan en `playwright-report/` después de cada ejecución.

## 📦 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm test` | Ejecuta todas las pruebas |
| `npm run test:ui` | Ejecuta con interfaz visual |
| `npm run test:debug` | Ejecuta en modo debug |
| `npm run test:headed` | Ejecuta con navegador visible |
| `npm run report` | Muestra el reporte HTML |

## 🤝 Contribuir

1. Fork el repositorio
2. Crear una rama para la feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de los cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 🔗 Enlaces

- [Documentación de Playwright](https://playwright.dev/)
- [Saucedemo Demo Site](https://www.saucedemo.com/)
- [GitHub Repository](https://github.com/astrophoenix/saucedemo-playwright-automation)
