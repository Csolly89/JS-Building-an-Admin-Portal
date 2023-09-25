// Retrieve list of books from the server
// // Display a list of book titles to the admin
// place a text input next to each book , give each text input a value: the quanitity of the associated book
// place a submit button next to each text input
// when the submit button is clickd retrieve the quantity from the associated text input and save the updated quantity to the server

let apiURL = "http://localhost:3001"
let apiUpdate = "http://localhost:3001/updateBook"
// let apiDel = "http://localhost:3001/removeBook/{bookId}"
// let apiAddBook = "http://localhost:3001/addBook"


async function bookList (){
    let response = await fetch(apiURL + "/listbooks")
    console.log("response from api", response)

    let books = await response.json()
    console.log(books)

    books.forEach(displayBooks)
}

function displayBooks(book) {
    let bookContainer = document.querySelector('.book-container')
    bookContainer.innerHTML += `
        <div class="col-sm-3">
            <div class="card" style="width: 100%;">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <input type="text" value="${book.quantity}"/>
                    <input id="submit-button" type="submit" value="book-totals">
                </div>
            </div>
        </div>
    `
    let submitButton = document.querySelector("#submit-button")
    submitButton.addEventListener("click", function(e){
        async function updateBookTotal(){
            let response = await fetch(apiUpdate, {
                method: 'PATCH',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    quantity: document.querySelector("#submit-button")
                    })
            })
        }
     })
}

bookList()
displayBooks()

// ---ACCEPTENACE CRITERIA---
// When viewing the page in the browser, http://localhost:3001/listBooks must show the list of books specified in db.json.
// When viewing the page in the browser, http://localhost:3001/admin must show the list of books specified in db.json.
// When viewing the page in the browser, http://localhost:3001/admin must have a text input and submit button next to each book title.
// When a book's submit button is clicked after entering a quantity in the text input, the quantity of the book must be updated and rendered correctly when viewing the /listBooks endpoint

// Reference day 10 order.js for bonus product on deleting and adding a book 