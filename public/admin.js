// Retrieve list of books from the server
// // Display a list of book titles to the admin
// place a text input next to each book , give each text input a value: the quanitity of the associated book
// place a submit button next to each text input
// when the submit button is clickd retrieve the quantity from the associated text input and save the updated quantity to the server

let apiURL = "http://localhost:3001/listBooks"
let apiUpdate = "http://localhost:3001/updateBook"
let apiDel = "http://localhost:3001/removeBook/{bookId}"
let apiAddBook = "http://localhost:3001/addBook"


async function bookList (){
    let response = await fetch(apiURL)
    console.log("response from api", response)

    let book = await response.json()
    console.log(book)

    book.forEach(displayBooks)
}

async function bookTitles (title){
    try{
    let response = await fetch (apiURL+ "/"+ "title" )
    console.log(response)
    } catch (error) {
        console.error("Could not find book title", title)
    }
}

function displayBooks(book){
    // creating a link to the html ID to be a connection from JS to Html
    let root = document.querySelector("#root")

    // creating a list by booktitles
    let li = document.createElement('li')
    li.textContent = book.title

    // allowing admin to give value in a input bracket to change quantity's on hand 
    let quantityInput = document.createElement("input")
    quantityInput.value = book.quantity

    // makes a save button
    let saveButton = document.createElement("button")
    saveButton.textContent = "Save"

// everytime the save button is clicked it does a fetch/patch
    saveButton.addEventListener("click",() =>{
        fetch(apiUpdate, {
            method: "PATCH",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: books.id,
                quantity: quantityInput.value
            })
        })
    })
// putting values from books.quantity and submit button into the list element
    li.append(quantityInput,saveButton)
    // putting the list into the rootID connected to the HTML page to display
    root.append.li

}

bookList()
displayBooks()


// ---ACCEPTENACE CRITERIA---
// When viewing the page in the browser, http://localhost:3001/listBooks must show the list of books specified in db.json.
// When viewing the page in the browser, http://localhost:3001/admin must show the list of books specified in db.json.
// When viewing the page in the browser, http://localhost:3001/admin must have a text input and submit button next to each book title.
// When a book's submit button is clicked after entering a quantity in the text input, the quantity of the book must be updated and rendered correctly when viewing the /listBooks endpoint.