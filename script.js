let bookArray = []

const output = document.getElementById("bookOutput")
function addBook() {
let book = {
    name: "",
    author: "",
    genre: "",
    year: ""
    }

book.name = document.getElementById("bookName").value
book.author = document.getElementById("bookAuthor").value
book.genre = document.getElementById("bookGenre").value
book.year = document.getElementById("bookYear").value

bookArray.push(book)

displayBooks()
}

function displayBooks() {
console.log(bookArray)




for(let i = 0; i < bookArray.length; i++ ) 
{output.innerHTML += "Name-" + bookArray[i].name + " " + "Author-" + bookArray[i].author + " " + "Genre-" + bookArray[i].genre + " " + "Year-" + bookArray[i].year}

}