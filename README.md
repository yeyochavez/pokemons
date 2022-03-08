# pokemons

## Herramientas utilizadas:

- Se tomo la decisión de no utilizar algún framework para los estilos, creando así propios componentes para el proyecto, aportando mayor personalización de los elementos de la interfaz grafica.

- Se utilizo el lenguage de programación Typescript para la creación de la lógica de los diferentes componentes del proyecto.

- Se procedio a implementar la arquitectura frontEnd planteada por Atomic design para la descomposición del proyecto en componentes reutilizables, haciendo uso de estos en repetidas ocaciones.

- Se implemento Lazy Loading en la carga de información relacionada a los pokemons, haciendo llamados secuenciales a medida que el usuario baja con el scroll contribuyendo rendimiento de la aplicación.

- Se implemento Lazy Loading en la carga de los diferentes modulos del proyecto, de modo que solo se montara aquel modulo del cual estemos haciendo, uso contribuyendo rendimiento de la aplicación.

- Para la maquetación del proyecto se implemento la tecnica Mobile first apoyado bajo media querys,aportando a la responsividad del proyecto en los tamaños planteados en los prototipos: mobile(Width 375px - Height 812px) y desktop (Width 1152px - Height 700px).

- Para en nombramiento de los estilos css se utilizo la metodologia BEM, permitiendo un mayor entendimiento y estructuración de los estilos del proyecto.

- Se agrega un efecto animado al icono de pokebola indicando la carga de la pagina, para este escenario debido a que la petición se consumia rapidamente (aún modificando la velidad de internet por consola), se procede a dejar un timeout simulado la carga lenta de una petición.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
