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
  "id": "sec-worksheets",
  "level": "1",
  "url": "sec-worksheets.html",
  "type": "Section",
  "number": "1.1",
  "title": "intro to Matrices",
  "body": " intro to Matrices   Definitions and examples  Consider the following matrices:   and   Elements in a Matrix and The Order of a Matrix    Because the matrix has 3 rows and 3 columns we say that the order of the matrix is .    Because the matrix has ...... rows and ....... columns we say that the order of the matrix is .... .    Because the matrix has ..... rows and columns we say that the order of the matrix is ...........    A matrix is called a square matrix if it has the same number of rows and of columns. In our examples, is a square matrix (because it is a matrix), but neither nor are square.     The element is the element in the first row, third column - so for our example we have .    Find the following elements:           = =   =   =    "
},
{
  "id": "sec-worksheets-2-4",
  "level": "2",
  "url": "sec-worksheets.html#sec-worksheets-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Elements "
},
{
  "id": "sec-worksheets-2-5-4-1",
  "level": "2",
  "url": "sec-worksheets.html#sec-worksheets-2-5-4-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "square matrix "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.2",
  "title": "Matrices-Definition New",
  "body": " Matrices-Definition New  Consider the following matrices:    "
},
{
  "id": "sec-secname2",
  "level": "1",
  "url": "sec-secname2.html",
  "type": "Section",
  "number": "1.3",
  "title": "Matrix Adition",
  "body": " Matrix Adition  lets puts something  "
},
{
  "id": "sec-secname3",
  "level": "1",
  "url": "sec-secname3.html",
  "type": "Section",
  "number": "1.4",
  "title": "Matrix Multiplication",
  "body": " Matrix Multiplication  Now, the next operation is matrix multiplication.  "
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
