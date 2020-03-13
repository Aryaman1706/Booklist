class Book { // class book
 constructor(title,author,isbn){
     this.title=title;
     this.author=author;
     this.isbn=isbn;
    }   
}
// UI elements
const form=document.querySelector('#book-form'),
    bookList=document.querySelector('#book-list'),
    container=document.querySelector('.container');
// Functions

// addBook function
function addBook(book){ 
    //create row
    const row=document.createElement('tr');
    // add columns
    row.innerHTML=
    `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X<a></td>`;
    // add row to table
    bookList.appendChild(row);
}

// showAlert function
function showAlert(message,className){
    // create a div
    const div=document.createElement('div');
    // add class to div
    div.className=`alert ${className}`;
    // add text
    const text=document.createTextNode(message);
    // add text to div
    div.appendChild(text);
    // insert div before form
    container.insertBefore(div,form);
    // remove div after 3 sec
    setTimeout(function(){
        div.remove();
    },3000);

}

// clearInputFeilds
function clearInputFeilds(){
    document.querySelector('#title').value='';
    document.querySelector('#author').value='';
    document.querySelector('#isbn').value='';
}



// event listener on submission of form
document.querySelector('#book-form').addEventListener('submit',function(e){
    const title=document.querySelector('#title').value,
        author=document.querySelector('#author').value,
        isbn=document.querySelector('#isbn').value;
        // creating a book
        const book= new Book(title,author,isbn);
        // initialising ui
        //const ui=new UI();

        //checking for valid submission
        if(title===''|| author==='' || isbn===''){
            showAlert('Not a valid input', 'error');
        }
        else{
            // add book to ui
            addBook(book);
            // show message
            showAlert('Book added!','success');
            // clear input feilds
            clearInputFeilds();
        }
        e.preventDefault();
})

// event listener for deletion of book
const random=document.querySelector('#book-list');
random.addEventListener('click',function(e){
    if(e.target.className==='delete'){
       e.target.parentElement.parentElement.remove()
       showAlert('Book deleted.','success')
    }
})
