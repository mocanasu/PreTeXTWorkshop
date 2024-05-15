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
  "title": "Matrices-Definition New",
  "body": " Matrices-Definition New  Consider the following matrices:    "
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
  "id": "sec-secname3",
  "level": "1",
  "url": "sec-secname3.html",
  "type": "Section",
  "number": "1.3",
  "title": "Matrix Multiplication",
  "body": " Matrix Multiplication  Now, the next operation is matrix multiplication.  "
},
{
  "id": "sec-worksheets",
  "level": "1",
  "url": "sec-worksheets.html",
  "type": "Section",
  "number": "1.4",
  "title": "intro to Matrices",
  "body": " intro to Matrices   Definitions and examples  Consider the following matrices:   and    "
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
