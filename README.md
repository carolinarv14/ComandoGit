#ejercicio_clase


## consulta clase

### 1.  consulta 30 etiquetas  de html.

``` html <body> para el contenido 
<head> para información sobre el documento
<div> división dentro del contenido
<a> para enlaces
<strong> para poner el texto en negrita
<br> para saltos de línea
<H1>…<H6> para títulos dentro del contenido
<img> para añadir imágenes al documento
<ol> para listas ordenadas, <ul> para listas desordenadas, <li> para elementos dentro de la lista
<p> para parágrafos
<span> para estilos de una parte del texto
<dl> Define una lista de definición
<dt> Define un término (un ítem) en
una lista de definición
<em> Define énfasis en un texto
<embed> Define el contenedor de una
aplicación externa (no html)
<fieldset> Grupo de elementos relacionados
en un formulario
<figcaption> Define el título para una figura
<figure>
<figure> Especifica auto-contenido
<footer> Define el pie de página de un
documento
<form> Define un formulario html
<h1> a <h6> Define encabezados o títulos
<head> Define información hacerca del
documento
<header> Define la sección de encabezado
del docuemnto
<hgroup> Grupo de encabezado (<h1> a
<6>)
<hr> Define un cámbio de temática a
partir de una línea dibujada
<html> Define la raíz del documento
<i> Define una parte del texto de
modo alternativo
<iframe> Define un frame en línea
<img> Define una imagen
<input> Define un control de entrada de
texto
<ins> Define texto que ha sido 
```

### 2. 30 stilos de css
```
width(ancho del elemento)

 background-color   el color de fondo del contenido y del relleno

color el color del contenido del elemento (generalmente texto)

text-shadow: coloca una sombra difuminada en el texto dentro del elemento

display: selecciona el modo de visualización para el elemento (no te preocupes de esto por ahora)

color	Color del texto

background-color	Color de fondo	

background-image	Imagen de fondo	url(…) | none

background-repeat	Repetición de la imagen de fondo	

background-attachment	Desplazamiento de la imagen de fondo

background-position	Posición de la imagen de fondo	percentage 

background-size	Tamaño de la imagen de fondo	

Opacity	Transparencia de un elemento

text-indent	Desplazamiento de la primera línea del texto	

text-align	Alineamiento del texto	

text-decoration	Efectos de subrayado y tachado	

letter-spacing	Espacio entre caracteres	

word-spacing	Espacio entre palabras	

text-transform	Transformación a mayúsculas / minúsculas	

line-height	Tamaño del espacio entre líneas	

vertical-align	Alineación vertical	

font-family	Familias de fuentes	nombre-familia

font-style	Estilo de la fuente	normal 

font-variant	Convierte a mayúsculas manteniendo un tamaño inferior	normal

font-weight	Anchura de los caracteres. 

font-size	Tamaño de la fuente

list-style-type	Estilo aplicable a los marcadores visuales de las listas

list-style-image	Imagen aplicable a los elementos de las listas	

list-style-position	Posición dentro de la lista de los elementos marcadores de las listas

list-style	Permite establecer el estilo de la lista, la imagen y/o la posición

border-collapse	Selección del modelo de los bordes
```



### 3. Consulta que es Display block, inline e inline-block

 block: hace que el comportamiento del elemento sea como un bloque. inline: el elemento se renderizará en línea con otros elementos. inline-block: el elemento tendrá un comportamiento mezcla entre los dos anteriores, que ahora voy a describir



### 5. eventos jabascript
```
abort (onabort)
Este evento se produce cuando un usuario detiene la carga de una imagen, ya sea porque detiene la carga de la página o porque realiza una acción que la detiene, como por ejemplo irse de la página.
Javascript 1.1

blur (onblur)
Se desata un evento onblur cuando un elemento pierde el foco de la aplicación. El foco de la aplicación es el lugar donde está situado el cursor, por ejemplo puede estar situado sobre un campo de texto, una página, un botón o cualquier otro elemento.
Javascript 1.0

change (onchange)
Se desata este evento cuando cambia el estado de un elemento de formulario, en ocasiones no se produce hasta que el usuario retira el foco de la aplicación del elemento. Javascript 1.0
Javascript 1.0

click (onclick)
Se produce cuando se da una pulsación o clic al botón del ratón sobre un elemento de la página, generalmente un botón o un enlace.
Javascript 1.0

dragdrop (ondragdrop)
Se produce cuando un usuario suelta algo que había arrastrado sobre la página web.
Javascript 1.2

error (onerror)
Se produce cuando no se puede cargar un documento o una imagen y esta queda rota.
Javascript 1.1

focus (onfocus)
El evento onfocus es lo contrario de onblur. Se produce cuando un elemento de la página o la ventana ganan el foco de la aplicación.
Javascript 1.0

keydown (onkeydown)
Este evento se produce en el instante que un usuario presiona una tecla, independientemente que la suelte o no. Se produce en el momento de la pulsación.
Javascript 1.2

keypress (onkeypress)
Ocurre un evento onkeypress cuando el usuario deja pulsada una tecla un tiempo determinado. Antes de este evento se produce un onkeydown en el momento que se pulsa la tecla..
Javascript 1.2

keyup (onkeyup)
Se produce cuando el usuario deja de apretar una tecla. Se produce en el momento que se libera la tecla.
Javascript 1.2

load (onload)
Este evento se desata cuando la página, o en Javascript 1.1 las imágenes, ha terminado de cargarse.
Javascript 1.0

mousedown (onmousedown)
Se produce el evento onmousedown cuando el uuario pulsa sobre un elemento de la página. onmousedown se produce en el momento de pulsar el botón, se suelte o no.
Javascript 1.2

mousemove (onmousemove)
Se produce cuando el ratón se mueve por la página.
Javascript 1.2

mouseout (onmouseout)
Se desata un evento onmuoseout cuando el puntero del ratón sale del área ocupada por un elemento de la página.
Javascript 1.1

mouseover (onmouseover)
Este evento se desata cuando el puntero del ratón entra en el área ocupada por un eolemento de la página.
Javascript 1.0

mouseup (onmouseup)
Este evento se produce en el momento que el usuario suelta el botón del ratón, que previamente había pulsado.
 ```
 ### 6. sectores simples y compuestos
 SELECTORES SIMPLES 
 ```
 Un selector simple es aquel que está formado sólo por una única cadena textual, sin ningún combinador. Son selectores simples el selector universal *, el selector por tipo de elemento del DOM div | p | article..., el selector de ID # y de clase ., el de atributo, el de pseudoclase : y el de pseudoelemento :: (notación actual). En la notación antigua o clásica de Css2 los pseudoelementos también se representan como las pseudoclases :.

Los combinadores son signos intercalados entre selectores simples para acotar o hacer más preciso el alcance del selector. Estos combinadores son el espacio en blanco, los signos + | ~ | > entre otros.
```
SELECTORES COMPUESTOS
```El Selector compuesto es una cadena de selectores simples sin combinadores (el espacio en blanco también queda excluido porque es un combinador):

section.noticias {}
.una_clase.otra_clase {}
Entre los selectores css compuestos también están incluidos los que tienen un selector de pseudoclase Css en su nombre:

a:hover {}
input:checked {}
.mi_clase:last-child {}
```
