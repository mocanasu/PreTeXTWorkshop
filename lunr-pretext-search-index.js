var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Matrices - Definition",
  "body": " Matrices - Definition  For each of the following matrices, decide if they are in row-reduced echelon form; recall that a $*$ marks any possible entry (zero or non-zero). \\item If yes, describe the outcome of the associated system (unique sol, no sol, multiple solutions). \\item if not, explain why not and what step(s) are needed to put it into row-reduced echelon form. \\end{itemize}  "
},
{
  "id": "sec-secname2",
  "level": "1",
  "url": "sec-secname2.html",
  "type": "Section",
  "number": "1.2",
  "title": "Matrix Adition",
  "body": " Matrix Adition  lets puts something  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
