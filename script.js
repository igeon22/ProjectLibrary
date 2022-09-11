let  buttons = document.querySelectorAll(".remove-btn")
var books = {}
const bod = document.querySelector("body")
let libContainer = document.querySelector(".biblio")

let formTitle = document.querySelector("#title")
let formAuthor = document.querySelector("#author")
let formYear = document.querySelector("#year")
let FormCheck = document.querySelector(".read-btn")
let FormAddBook = document.querySelector("#create-book")

let count  = 0
var bc = 0

let bTitle = formTitle.value
let bAuthor = formAuthor.value
let bYear = formYear.value
let bRead = FormCheck.checked




let LibraryManage = function(titre,auteur,annee,checked){
	this.titre = titre
	this.auteur = auteur
	this.annee = annee
	this.checked = checked
}


FormAddBook.addEventListener("click",(e)=>{
	e.preventDefault()


	a = new LibraryManage(formTitle.value,formAuthor.value,formYear.value,FormCheck.checked)
	a.AddBook()
})


LibraryManage.prototype.AddBook = function(){
	newBooks = [this.titre,this.auteur,this.annee,this.ch]
	bc += 1
	books.news = newBooks
	createBook(this.titre,this.auteur,this.annee,this.checked)
	
}

	



function createBook(t,a,y,r){
	count++;

	let bookCont = document.createElement("div")
	bookCont.className = `book ${count}`
	libContainer.appendChild(bookCont)

	let bookTitle = document.createElement("p")
	bookTitle.textContent = `Title: ${t}`
	bookTitle.className = "book-title"
	bookCont.appendChild(bookTitle)

	let authorName = document.createElement("p")
	authorName.textContent = `Author: ${a}`
	authorName.className = "auth"
	bookCont.appendChild(authorName)


	let pubYear = document.createElement("p")
	pubYear.textContent = 
	pubYear.className = `Year of pub. : ${y}`
	bookCont.appendChild(pubYear)

	
	let bt = document.createElement("button")
	bt.textContent = "Remove"
	bt.classList = `remove-btn`
	bookCont.append(bt)

	let checkbox = document.createElement("input")
	checkbox.type = 'checkbox'
	checkbox.className = "read-btn"
	checkbox.checked = r
	bookCont.appendChild(checkbox)

	let checkLabel = document.createElement("label")
	checkLabel.textContent = "Read"
	bookCont.append(checkLabel)
	

	bt.addEventListener("click",(e)=>{
		console.log("d");
		bt.parentElement.remove()
	})

}



