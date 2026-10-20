# Taller IV — Programación Web

## Herramientas utilizadas

- Node.js: 24.21.0
- npm: 11.19.0
- Frontend: Vite, React 18, Reactstrap 9 y Bootstrap 5.
- Backend: Express y CORS.

## Instalar las dependencias

Después de clonar el repositorio, abrir una terminal
en la carpeta principal y ejecutar:

```bash
cd frontend
npm ci
cd ../backend
npm ci
cd ..
```

## Ejecutar el frontend

En una terminal desde la carpeta principal:

```bash
cd frontend
npm run dev -- --port 5173 --strictPort
```

Abrir http://localhost:5173

## Ejecutar el backend

En otra terminal desde la carpeta principal:

```bash
cd backend
npm run dev
```

El servidor escucha en http://localhost:3000

Mantener ambas terminales ejecutándose.
Para detener un servidor, presionar Ctrl + C en su terminal.

## Estado del proyecto

Entorno inicial preparado.
Pendiente implementar los endpoints y la interfaz del taller.