
# funcion de class 
<!--                            agrega comentarios Ctrl+K seguido de Ctrl+C
active                          elemento de navegación activo 
card                            tarjeta con imágenes, títulos y texto.(bootstrap>components>card)
card-body                       Es el cuerpo de la tarjeta como texto, listas o enlaces.
card-img-top                    imagen parte superior tarjeta (card).
card-link                       Estiliza un enlace en la tarjeta, ejemplo "Comprar".
card-text                       texto tarjeta.
card-title                      título tarjeta 
col-12                          una columna porque el ancho total pagina es 12
col-6                           dos columnas porque el ancho total pagina es 12 (bootstrap>layout>grid)
col-sm-4                        tres columnas porque el ancho total pagina es 12 en dispositivos pequeños (sm)
collapse navbar-collapse        agrupa y oculta los elementos de la barra de navegación en dispositivos pequeños.
container                       centraliza y limita el ancho del contenido en una página.
container-fluid                 define un contenedor que ocupa todo el ancho de la pantalla 
del                             tacha texto
display-5                       define tamaño de los encabezados.(bootstrap>content>typografhy)
d-none d-sm-none d-md-block     definen que el contenedor no se muestra en dispositivos pequeños se muestra en dispositivos medianos y grandes. 
fixed-top                       fija en la parte superior de la página.
fw-bold                         aplicar negrita (bold)
list-group list-group-flush     list-group crea una lista sin estilos,
list-group-flush                elimina los bordes y márgenes de la lista, dejando solo los elementos de la lista.
list-group-item                 Define un elemento de la lista en la lista sin estilos.
ms-auto                         coloca los elementos restantes en el margen derecho.
navbar                          define la barra de navegación.
navbar-brand                    crea el área del logo de la marca.
navbar-dark border-light        estilos para el botón de hamburguesa.
navbar bg-dark navbar-dark      pone fondo negro y letras blancas
navbar-expand-lg                indica que la barra de navegación se expandirá en dispositivos grandes.
navbar-light                    establece el fondo claro y letras oscuras.
navbar-nav                      define una lista de elementos de navegación.
navbar-toggler                  estilos para el botón de hamburguesa.
nav-item                        elemento individual en la barra de navegación.
nav-link                        enlace en navegación.
p                               define el relleno del contenedor
row                             Define una fila para organizar y alinear columnas en la cuadrícula de Bootstrap.
sr-only                         oculta el texto solo visualmente y es accesible para lectores de pantalla.
text-body                       e
text-black                      e
text-center                     alinea texto centro.
text-dark                       texto negro.
text-danger                     texto rojo. (bootstrap>utilies>colors)
text-end                        alinea texto derecha.
text-info                       texto celeste.
text-light                      texto blanco. 
text-muted                      e
text-primary                    exto azul.
text-start                      alinea texto izquierda.
text-secondary                  texto gris.
text-success                    texto verde.
text-warning                    texto amarillo. 
text-white                      e
m                               margin
p                               padding
px-5                            padding horizontal columna
t                               superior contenedor
b                               inferior contenedor
s                               izquierda contenedor
e                               derecha contenedor
x                               izquierda y derecha contenedor
y                               superior e inferior del contenedor
xs                              <576px	
sm                              ≥576px
md                              ≥768px	
lg                              ≥992px	
xl                              ≥1200px	
xxl                             ≥1400px
px-5” define el  y la clase “

-->
# elementos de bootstrap

# grid: diseño de columnas
https://getbootstrap.com/docs/5.3/layout/grid/
# diseño y tamaño de encabezados
https://getbootstrap.com/docs/5.3/content/typography/
# formularios
https://getbootstrap.com/docs/5.3/forms/form-control/
# botones
https://getbootstrap.com/docs/5.3/components/buttons/
# tarjetas
https://getbootstrap.com/docs/5.3/components/card/
# carousel, muestra deslizamiento de diapositivas
https://getbootstrap.com/docs/5.3/components/carousel/
# menu o barra de navegacion
https://getbootstrap.com/docs/5.3/components/navbar/
# popovers es un boton con mensajes
https://getbootstrap.com/docs/5.3/components/popovers/
   # para ininiarlo se pone en JS lo siguiente:
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
   # despues se pone en HTML un popover 
<button type="button" class="btn btn-secondary - aqui cambio color o dejo el primer btn y con un espacio pongo un nombre de clase y doy color hexadecimal desde CSS" 
        data-bs-toggle="popover" data-bs-placement="right - aqui cambio ubicacion"
        data-bs-custom-class="custom-popover"
        data-bs-title="aqui agrego titulo" 
        data-bs-content="aqui agrego contenido.">
  Custom popover
</button>

# tooltips similar a popovers es un boton con mensajes
https://getbootstrap.com/docs/5.3/components/tooltips/
# color texto
https://getbootstrap.com/docs/5.3/utilities/colors/ 