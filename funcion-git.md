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
- git push -u origin main : subes archivos
- git pull -u origin main : bajas archivos
- git branch -M main : cambio nombre de rama de master a main
