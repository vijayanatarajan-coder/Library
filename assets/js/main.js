const formEl = document.querySelector('form')

const lib = new Library()

formEl.addEventListener('submit' , (e) => {
    e.preventDefault()
   // console.log(formEl.elements)
const bookTitle = document.getElementById('bookTitle').value.trim()
const bookAuthor = document.getElementById('bookAuthor').value.trim()
//console.log(bookTitle ,bookAuthor)
if(bookTitle && bookAuthor){
const addedBook = new Book(bookTitle , bookAuthor)

//add book to the library class

lib.addBook(addedBook)

renderLibrary()

//remove the entered book information  
document.getElementById('bookTitle').value = ''
document.getElementById('bookAuthor').value = ''

}
}
)
function removeBook(index){
lib.removeBook(index)
renderLibrary()
}

function markAsRead(index){
    lib.getBooks()[index].markAsRead()
    renderLibrary()
    }

function renderLibrary(){
    const renderLibraryEl = document.getElementById('renderLibrary')

    const bookCountEl = document.querySelector('#bookCount')

    bookCountEl.textContent = lib.bookCount()

    //resetting previous value
    renderLibraryEl.innerHTML = ''
   
    lib.getBooks().forEach((book, index) =>{

        
    renderLibraryEl.innerHTML += `
    
    <li class="p-3 bg-orange-100 rounded flex justify-between">
    <div class= "${book.isRead() ? 'line-through' : ''}">
    ${book.title} by ${book.author}
    </div>
    <div>
    <button class="px-2 py-1 bg-green-600 text-sm rounded text-white" onclick = "markAsRead(${index})">read</button>
    <button class="px-2 py-1 bg-red-600 text-sm rounded text-white" onclick = "removeBook(${index})">remove</button>
    </div>
    </li>
    
    `

    })

   
}