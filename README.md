# 🎬 Desafío React + TypeScript + Vite + Tailwind

Proyecto frontend desarrollado con tecnologías modernas para consumir la API pública de [TMDB](https://www.themoviedb.org/).

> Este proyecto forma parte de un challenge técnico con foco en buenas prácticas, componentes reutilizables y documentación profesional.

---

## 🚀 Tecnologías principales

- ⚛️ **React 19** — UI moderna con hooks
- 🧠 **TypeScript** — Tipado estático robusto
- ⚡ **Vite** — Build tool ultra rápido
- 🎨 **Tailwind CSS** — Estilos con utilidades listas
- 🧪 **Storybook 9** — Catálogo visual de componentes

---

## 🌐 API utilizada

Se consume la API pública de **TMDB (The Movie Database)** para mostrar:

- Detalles de películas
- Popularidad
- Géneros
- Imágenes, fechas de estreno, sinopsis, etc.

> Requiere clave pública de TMDB configurada en el archivo `.env`

---

## 📦 Instalación local

```bash
git clone https://github.com/LucasFernandez11/desafio-react-tsoft.git
cd desafio-react-tsoft
npm install
```


## ▶️ Correr la app en modo desarrollo
```bash

npm run dev
```
Abre tu navegador en:
👉 http://localhost:5173


## 📚 Storybook: Catálogo de Componentes
Este proyecto cuenta con documentación visual de los componentes usando Storybook.

🔧 Para correr Storybook en local:
```bash

npm run storybook
```
Abre tu navegador en:
👉 http://localhost:6006

Desde ahí podés visualizar y testear componentes como:
Card, MovieDetailView y Chip


## ✨ Componentes documentados hasta ahora
Componente	Descripción
Card	Tarjeta reutilizable con 5 layouts distintos (hero, popular, etc.)
MovieDetailView	Vista detallada de película (versión presentacional)
Chip	Etiqueta dinámica con color por id

🛠 Scripts útiles
```bash

npm run dev              # Corre la app
npm run storybook        # Inicia Storybook
npm run build            # Compila el proyecto
npm run build-storybook  # Compila Storybook para deploy
```

## 📄 Licencia
Este proyecto es de uso educativo y demostrativo.

[![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=LucasFernandez11&repo=desafio-react-tsoft)](https://github.com/LucasFernandez11/desafio-react-tsoft)

## Desarrollado por Lucas Fernández

