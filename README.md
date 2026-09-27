# Portfolio Magazine

Portfolio artistique en HTML/CSS/JavaScript, pensé pour GitHub Pages.

## Structure
- `index.html` : page générale
- `photographies.html` : photographie
- `peinture.html` : peinture
- `crochet.html` : crochet
- `css/style.css` : design
- `js/script.js` : menu mobile
- `assets/images/` : tes photos

## Ajouter une image
Dans une page, remplace par exemple :
`<div class="image-placeholder"><span>PHOTO 01</span></div>`

par :
`<div class="image-placeholder has-image" style="background-image:url('assets/images/photo-01.jpg')"><span></span></div>`

## GitHub Pages
1. Crée un dépôt GitHub.
2. Ajoute tous les fichiers en gardant l'arborescence.
3. Va dans Settings > Pages.
4. Choisis `Deploy from a branch`, puis `main` et `/root`.
5. Enregistre. GitHub fournira l'adresse du site.
