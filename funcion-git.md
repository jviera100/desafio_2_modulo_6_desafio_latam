# configuracion de git
- git --version: muestra version git
- git config --global user.name "Tu Nombre" : agregas tu nombre
- git config --global user.email tucorreo@mail.com : agregas tu correo
- git config --list : confirmar la configuracion de nobre y correo
- git init : iniciar proyecto nuevo (letar U)
- git add . : toma en cuenta todos los cambios (latra A)
- git commit -m "Nombre o descripción del commit" : guarda todos los cambios
- git log : muestra todas las versiones
- archivo (letra M) : cuando se modifica, debes poner git add . y luego git commit -m "nombre"
- git checkout : regresa a otras versiones, pones git log y copias numero que ves al lado de commit de la     version que quieres y pones el nombre del archivo, ejemplo index.html
q + enter: cuando ves END y no te deja escribir, ahora te dejara escribir
- git status : muestra si haz hecho cambios y si haz guardado
- git remote add origin git@github.com:usuario/nombre-archivo.git : vincular repositorio local con repositorio remoto
- git push -u origin main : subes archivos y pone contraseña
- git pull -u origin main : bajas archivos
- git branch -M main : cambio nombre de rama de master a main
- git remote -v : se utiliza para mostrar los nombres de los repositorios remotos y sus URLs correspondientes
- git fetch se utiliza para recuperar los cambios del repositorio remoto y actualizar el repositorio local sin fusionar los cambios.
- icono repositorio : entras a pagina https://gist.github.com/parmentf/035de27d6ed1dce0b36a y copias el titulo del icono que elijas y lo pones en el nombre de tu repositorio que pones en el terminal asi, ejemplo:
           git commit -m :sparkles:"Nombre o descripción del commit"
- git push -f origin main : No se recomienda utilizar este comando, ya que puede causar la pérdida de datos y la corrupción del historial de versiones, hay formas arreglar eso sin forzarlo pero hay que utilizar algo que se llama rebase
