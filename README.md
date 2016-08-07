# ENVIRONTMENT

Espesificacións necesaries per construir l'entorn de desevolupament pel front
end de la web.

Durant el desenvolupament del front end es dona forma al codi html, fulles
d'estil i javascript. A més de tenir cura del performace del costat client.

-   html
-   css
-   js
-   performace

Per dur a terme aquestes tasques amb eficacia entre en joc el Grunt un sistema
d'execucuó de tasques. Util per a fer varies coses a la vegada i de forma
repetitiva cridant només a una sola comanda.

## Grunt

Pel desenvolupament del frontend fa falta dur a terme diverses tasques que
pertanyen a aquest nivell del projecte. Les quals son: Comilar els fitxers LESS
en un sol fitxer CSS. Minimitzar les fulles d'estil. Unir en un sol fitxers els
recursos estatics esterns amb els propis del projecte. Tot això s'ha de fer de
forma automatica cada vegada que un dels fitxers estatics canvii.

-   compilar LESS
-   unir CSS
-   unir JS
-   minimitzar CSS
-   minimitzar JS
-   minimitzar imatges
-   linters
-   automatitzar tasques


## Fulles d'estil

Els estils de la web estan escrits en LESS. Això s'ignifica que s'han de
compilar en CSS.

Per a tenir el màxim rediment possible al costat client cal reduir el numero de
crides a fitxers externs. Alguns navegadors poden tenir un numero limitat de
crides a fitxers estatics. Això pot provocar relantitizació a la hora de
carregar la web perque hi pot haver recursos que han d'esperar-se per ser
descarregats. Per tant, cal concatenar tots es les fulles d'estils en un sol
fitxer. Els estils comuns es compilen en LESS en un sol fitxer, però encara
podem utilitzar gitxers externs que vinguin amb alguna dependencia. Per reduir
el maxim el tamany del fitxer es convenient minimtzar el seu contingut eliminat
tots els caracters que no afectin als estils, com espais en blanc i comentaris.

Tampoc s'ha de deixar enrere els LESS, cal compilar-los.

-   compilar LESS
-   minimitzar CSS
-   concatenar fitxers

Per a realitzar aquestes tasques tenim el pluguin: grunt-contrib-cssmin

### Tasks
