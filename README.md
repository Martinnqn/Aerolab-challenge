# Aerolab Coding Challenge

### ![EzShop](https://raw.githubusercontent.com/Martinnqn/Aerolab-challenge/master/src/assets/Combined%20Shape%202.png "EzShop") EzShop

Este proyecto es una implementación del [desafío de Aerolab](https://github.com/Aerolab/challenge)

---

# Table of contents

- [Requerimientos cumplidos](#requerimientos-cumplidos)
- [Tecnologías](#tecnologías)
- [Frontend](#frontend)
- [API](#API)

---

## Requerimientos cumplidos

### Parte 1

1. :heavy_check_mark: Vista mobile first.
2. :heavy_check_mark: Consumir API con React.
   - :heavy_check_mark: Infinite scroll
   - :heavy_check_mark: Funcionalidades agregar/restar productos del carrito.
   - :heavy_check_mark: Persistir productos cuando se actualiza el sitio.
3. :heavy_check_mark: API específica.
4. :heavy_check_mark: [Site online en Vercel](https://aerolab-challenge.martinnqn.vercel.app/)

### Parte 2: Electric Boogaloo

#### UI

a) :heavy_check_mark: Cambiar el formato de las imágenes.

b) :heavy_check_mark: Avisar si la app está funcionando offline.

#### JS

a)

- [ ] Mejorar el rendimiento para conexiones _slow_. Server side.

b) :heavy_check_mark: Crear árbol de categorías.

---

## Tecnologías

- bootstrapped [Create React App](https://github.com/facebook/create-react-app).
- React 16.13.1
  - hooks
  - functional components
  - [Styled Components](https://styled-components.com/)
- CSS3

## Frontend

Scripts de ejecución del frontend:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## API

La API provee dos endpoint:

- El primer endpoint se encuentra en el path /api ([Enlace aqui](https://aerolab-challenge.martinnqn.vercel.app/api)). Este endpoint extiende el modelo de datos de los productos de Aerolab agregándole los precios en dólares. Para consultar las diferentes páginas utilizar el parámetro `page`. Ejemplo: `/api?page=2`
- EL segundo endpoint se encuentra en el path /api/category_tree ([Enlace aqui](https://aerolab-challenge.martinnqn.vercel.app/api/category_tree)). Genera un árbol de categorías a partir del endpoint [https://challenge-api.aerolab.co/categories](https://challenge-api.aerolab.co/categories).
