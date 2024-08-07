# Frontend Aplication for TodoList postulation for LG LNS - Andres Nuñez


### Aplicación desplegada:

https://66b3f33c676f5c3f5a9ce386--dulcet-crepe-8bbc08.netlify.app/

## Table of contents

- [Overview](#overview)
  - [Comandos de Ejecución](#commands)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)

## Overview

Este programa es un listado básico de tareas, en el que se tienen sub-tareas con el checkbox 
para indicar las finalizadas. 

Tiene todos los puntos establecidos de la entrevista.
Para esta aplicación tambien se desarrolló sus API's correspondientes en Express js.
Sin embargo por por razones de tiempo de culminación, se tendrá en cuenta el archivo 
data.json para suplir el backend en caso de que este caiga. Este archivo SOLO se usaría
en caso de tener problemas con el servidor.

Al ejercicio se le dió un toque personal, se agregó un todolist un poco más completo,
con subtasks, y el todolist tiene su correspondiente "tema" o "Board".


## Iniciar Servidor Express
Para utilizar las API's primero se debe iniciar el servidor de Express.
iniciar el servidor 
1. Copiar el proyecto backend, extraer en su directorio,
2. Abrir una terminal en la carpeta raíz del servidor,
3. Correr los comandos: 
- npm i
- node server.js

NOTA 1: Antes de correr el servidor, asegurar que el puerto 4000 está libre y prendido

NOTA 2: El servidor de express, es funcional sin embargo, este no tiene las mejores practicas
de programación debido al tiempo establecido de la prueba y que la creación de la API no es
el enfoque de la prueba.


### Comandos de Ejecución Frontend

Pasos para copiar y correr el proyecto:


NOTA:
Verificar su versión de node con el comando: node -v (Este programa se hizo con la v16.15.1)
Verificar su versión de npm con el comando: npm -version (Este programa se hizo con la 8.11.0)
- Ingresar a la carpeta "fronend" para copiar y extraer en su directorio.
- Abrir carpeta con el codigo fuente en su editor de codigo
- Abrir terminal y escribir los siguiente comandos:
- node -v
- npm i
- npm start




### Built with

- [TailwindCSS](https://tailwindcss.com/) - CSS Framework
- Drag and Drop API
- [React](https://reactjs.org/) - JS library
- [Redux](https://redux.js.org/) - State management tool

### Useful resources

Drag & Drop part: https://www.youtube.com/watch?v=O5lZqqy7VQE
Dark & Light mode: https://www.youtube.com/watch?v=_8FTL-xNz9Q
Manage API's: https://www.youtube.com/watch?v=hzLDsxPGctY





