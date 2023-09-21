// Retrieve list of books from the server
// // Display a list of book titles to the admin
// place a text input next to each book , give each text input a value: the quanitity of the associated book
// place a submit button next to each text input
// when the submit button is clicekd retrieve the quantity from the associated text input and save the updated quantity to the server

let apiURL = "http://localhost:3001/listBooks"

async function booklist (){
    let response = await fetch(apiURL)
    console.log("response from api", response)

    let books = await response.json()
    console.log(books)
}

async function bookTitles (title){
    try{
    let response = await fetch (apiURL+ "/"+ "title" )
    console.log(response)
    } catch (error) {
        console.error("Could not find book title", title)
    }
}












// ---ACCEPTENACE CRITERIA---
// When viewing the page in the browser, http://localhost:3001/listBooks must show the list of books specified in db.json.
// When viewing the page in the browser, http://localhost:3001/admin must show the list of books specified in db.json.
// When viewing the page in the browser, http://localhost:3001/admin must have a text input and submit button next to each book title.
// When a book's submit button is clicked after entering a quantity in the text input, the quantity of the book must be updated and rendered correctly when viewing the /listBooks endpoint.