---
title: "Intro a git"
description: "guia para arrancar a usar git"
date: 23-10-2025
tags: ["code"]
cover: 
    src: ""
    alt: "XD"
---

# ¿Que es Git?
---
En pocas palabras, **git** es un controlador de versiones (creado por linus torvals O.O) #increible #poggers #mentioned

En un poco más de palabras, es un software de control de versiones distribuido, esto significa que sirve para que más de una persona pueda trabajar en un mismo proyecto sin necesidad de estar conectados a la misma red (a diferencia del control centralizado). Pero eso es muy ñoño y no es necesario para lo que quiero explicar :D lo pueden googlear si tienen ganas de crear el nuevo git y entender como funciona.

# Casos en los que conviene usar git:
---

**Git** es principalmente utilizado en el ámbito profesional, pero si sos un percebe desempleado como yo, esto no viene al caso...

## Para lo que nos puede servir a los simples mortales entonces? 
### Para varias cosas!
Primero que nada, me parece que aprender a usar esta herramiento es muy útil para que eventualmente puedas encontrar trabajo en la industria, porque vayas donde vayas, estan usando git. Ya sea si queres ser programador, QA, seguridad, lo que sea, medio que para trabajar, es indispensable.

---

### Otros usos:

1. Digamos que queres hacer un jueguito o una app/página sol@. Ahi tambien te viene joya usar git. Imaginate que en un momento queres añadir una *feature* (?) o un item, una mecánica, en fin, un cambio grande. Al hacerlo terminas borrando algo fundamental del código base o te arrepentis del cambio, no te queda otra que hacer ctrl+z un millon de veces.
   - **Si usas git!** Podes hacer una rama (*branch*) y hacer los cambios ahi, si ves que todo sale bien, entonces te lo quedas y si no te termina gustando del todo la idea, no pasa nada! No la mezclas con la rama principal y listo. No perdes nada, solo tiempo...
2. Otro caso, fijate, estas haciendo este mismo proyecto en tu PC principal, pero lo queres seguir en otra. Podrias ir por la vida con un pendrive y acordarte de siempre estar conectandolo y actualizando los archivos. Pero te lo llegas a olvidar o se rompe y fuiste.
   - **Si usas git!** Funciona de una forma parecida a un almacenamiento en la nube (siempre y cuando te acuerdes de hacer los cambios necesarios), si aplicaste los últimos cambios en git, es cuestion de simplemente clonar el repositorio (o fetchearlo) y lo tenes en la otra compu. *magia ✨*  
3. Se puede usar git para otras cosas también. No tiene que ser exclusivamente para proyectos de programación. También podes usarlo para sincronizar archivos que capaz no tienen nada que ver, como notas, archivos de texto, archivos pdf que tenes que leer, liros, dibujos, música, imagenes, etc.
    - Un gran uso que recomiendo, es por ejemplo, el software **[Obsidian](https://github.com/obsidianmd)** que es un programita que sirve para tomar notas en Markdown y los organiza, bla bla, como toda la funcionalidad de este programa es en base a este tipo de archivos, podes compartir tu carpeta por git y capaz terner como un "backup" de tus notas o ponerte más creativo y crear un blog en base a eso.
  
Bueno creo que con eso queda bastante clara la versatilidad de este programa. Se puede usar para mil cosas, pasemos entonces a cómo usarlo, que es lo más importante.

---
## Iniciar un repositorio de git
---

Primero, tenes que ir a la carpeta donde quieras tener tu repositorio almacenado. Una vez ahi, abris tu editor de texto y ahi en la terminal escibir este comando:
```
git init
```

Si te confundiste y no querias iniciar el repositorio en ese lugar, la forma más facil de arreglarlo es activando las carpetas escondidas de tu explorador de archivos y borrando una que se llama ` .git `.

## Agregar los archivos que ya tengas ahi
--- 
Una vez creado, le tenes que decir a git que lo importante de lo que hay ahí, en la misma consola, escribis este comando:
```
git add .
```
Hay una particularidad con ese *punto* al final, este hace referencia a que se agregue **TODO** lo de la carpeta, esto puede ser medio mucho a veces, tal vez tenes información que no te interesa publicar o que tal vez la estas subiendo al pedo (como puede ser la carpeta ` node_modules ` en un proyecto web). Hay dos formas de tener más control sobre esto, la primera es yendo uno por uno de los archivos de esa carpeta.

```
git add hola.txt
git add chau.txt
git add .env <---- ESTO NÚNCA x.x
```
Si tenes muchas cosas, vas a estar hasta mañana haciendo esto, no te lo recomiendo. Otra opcion que tenes es, dentro de la misma carpeta, crear un archivo con el nombre `.gitignore`, dentro de este archivo podes escribir los archivos o las carpetas que no queres que git tenga en cuenta, por ejemplo:

```
(dentro de .gitignore)

ejemplo.js
hola.txt
chau.txt
node_modules/
carpeta/massive.txt

```

Ahora cuando hagas `git add .` esos archivos y carpetas seran excluidas :D


