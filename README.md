# ☼ Weather Forecast ☼

Aplicación web de una sola página (SPA) para visualizar el pronóstico del clima actual y de los próximos días en función de la ubicación actual o de una búsqueda por ciudad. La app utiliza la API de **OpenWeatherMap** y está desarrollada con **JavaScript**, **jQuery**, y **SCSS** para una experiencia de usuario fluida y responsiva.

## 📑 Índice

- [✨ Requisitos](#-requisitos)
- [⚙️ Instalación](#-instalación)
- [📁 Estructura de Archivos](#-estructura-de-archivos)
- [🔧 Configuración](#-configuración)
- [🚀 Uso de la Aplicación](#-uso-de-la-aplicación)
- [🌟 Funcionalidades Principales](#-funcionalidades-principales)
- [💅 Estilos y Responsividad](#-estilos-y-responsividad)
- [☁️ API de Clima](#-api-de-clima)
- [🤝 Contribuciones](#-contribuciones)

---

## ✨ Requisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- **Node.js** (para gestionar paquetes npm si trabajas con SCSS)
- **Git** (para el control de versiones y colaboración)
- **Navegador Web** actualizado para pruebas y visualización

## ⚙️ Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/nombre-del-repositorio.git
   cd nombre-del-repositorio
   ```

2. **Instala dependencias (si necesitas compilar SCSS a CSS):**
   
   ```bash
   npm install
   ```

3. **Compila el SCSS** (si trabajas en estilos):

   ```bash
   npm run build-css
   ```

## 📁 Estructura de Archivos

La estructura del proyecto es la siguiente:

```
📦 nombre-del-repositorio
 ┣ 📂 css
 ┃ ┣ 📜 style.css            # CSS principal compilado desde SCSS
 ┃ ┣ 📜 style.css.map
 ┣ 📂 sass      
 ┃ ┣ 📜 _variables.scss      # Variables de colores y estilos
 ┃ ┣ 📜 _mixins.scss         # Mixins reutilizables
 ┃ ┣ 📜 _icons.scss          # Estilos para los iconos del clima
 ┃ ┗ 📜 _components.scss     # Estilos de componentes como botones y tarjetas
 ┣ 📂 js
 ┃ ┗ 📜 script.js            # Código JavaScript principal para la app
 ┣ 📜 index.html             # HTML de la página principal
 ┗ 📜 README.md              # Documentación del proyecto
```

## 🔧 Configuración

1. Obtén una **clave de API** de OpenWeatherMap [aquí](https://home.openweathermap.org/users/sign_up).
2. Sustituye `API_KEY` en `js/script.js` por tu clave de API personal:

   ```javascript
   const apiKey = "TU_API_KEY";
   ```

## 🚀 Uso de la Aplicación

1. **Pronóstico Actual:** Haz clic en "Pronóstico Actual" para obtener el clima de tu ubicación.
2. **Buscar por Ciudad:** Haz clic en "Buscar por Ciudad", introduce el nombre de una ciudad y presiona el botón "Buscar".

## 🌟 Funcionalidades Principales

- **Pronóstico Actual**: Consulta el clima de tu ubicación actual usando la API de OpenWeatherMap y la geolocalización del navegador.
- **Búsqueda por Ciudad**: Busca el pronóstico del clima por nombre de ciudad.
- **Visualización Dividida por Días**: Muestra el pronóstico horario y diario con íconos dinámicos.

## 💅 Estilos y Responsividad

La app utiliza **SCSS** para la organización de estilos y **Bootstrap Icons** para los íconos de clima. Incluye:

- **Componentes estilizados**: Botones redondeados, tarjetas de pronóstico y sombras sutiles.
- **Colores** y temas **customizables** con SCSS.
- **Responsividad** para distintos tamaños de pantalla.

## ☁️ API de Clima

La aplicación consume datos de la API de OpenWeatherMap. Consulta la documentación de la API [aquí](https://openweathermap.org/forecast5) para explorar más posibilidades de configuración y parámetros de respuesta.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Puedes realizar un fork del proyecto, abrir issues o hacer un pull request con mejoras. 😊

---

### 📜 Licencia

Este proyecto está licenciado bajo la [MIT License](https://opensource.org/licenses/MIT).

---

### 👩‍💻 Desarrollado por

Ibai Loharces

