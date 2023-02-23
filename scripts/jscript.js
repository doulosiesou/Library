// Book library project
// By: Gregory J. McKim
// Feb 23, 2023

//Declare global variables
let subBtn = document.querySelector('.submit-button');
let subEditBtn = document.getElementById('submit-edits-button')
let libraryTable = document.getElementById("library-table");
let libraryTableBody = document.getElementById("tableBody");
let myLibrary = [];
let rowInd = 0;

//Add 3 books to the library for start
let book1 = new Book(0,"The Hobbit", "JRR Tolkien", 1937, 310, true);
let book2 = new Book(1,"Dune", "Frank Herbert", 1965, 432, true);
let book3 = new Book(2,"Starship Troopers", "Robert Heinlein", 1959, 263, true);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

//Adds row to myLibrary array
function addBookToLibrary(row) {
    myLibrary.push(row);  
    
}

//Deletes row from array
function delRow(x) {
    
    myLibrary.splice(x, 1) 
    renderTable();
}

//Gets a row number from table with 'click' inside table
function getIndex(x) {  
    rowInd = x.rowIndex
}

//Deletes old table body, reads from array and repopulates table
function renderTable() {  

    libraryTableBody.remove();
    libraryTableBody = document.createElement("tbody");
    libraryTable.appendChild(libraryTableBody);

    for(rowi of myLibrary) {
        addNewRow(rowi);
    }
};

//Adds the new Book to the table
function addNewRow(newEntry) {  

    let ID = newEntry.ID
    let title = newEntry.title;
    let author = newEntry.author;
    let publishedDate = newEntry.publishedDate;
    let numPages = newEntry.numPages;
    let hasRead = newEntry.hasRead;

    let row = document.createElement("tr");
    row.innerHTML = `<tr class="table-row" onclick="getIndex(ID)"></tr>`
        
    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    let c3 = document.createElement("td");
    let c4 = document.createElement("td");
    let c5 = document.createElement("td");
    let c6 = document.createElement("td");
    let c7 = document.createElement("td");
    let c8 = document.createElement("td");
    
    c1.innerText = ID;
    c2.innerText = title;
    c3.innerText = author;
    c4.innerText = publishedDate;
    c5.innerText = numPages;
    c6.innerText = hasRead;
    c7.innerHTML = `<button class="delete-button" onclick="delRow(${Number(ID)})">Delete</button>`;
    c8.innerHTML = `<button class="edit-button" onclick="editBook(${Number(ID)})">Edit</button>`;

    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    row.appendChild(c5);
    row.appendChild(c6);
    row.appendChild(c7);
    row.appendChild(c8);

    libraryTableBody.appendChild(row);
}

//New Book constructor
function Book(ID,title, author, publishedDate, numPages, hasRead) {
    
    this.ID = ID
    this.title = title
    this.author = author
    this.publishedDate = publishedDate
    this.numPages = numPages
    this.hasRead = hasRead
    this.info = function() {
        return `The ${title} was written by ${author} in ${publishedDate} and is ${numPages} pages long`
    }
}

//Submits the new book values to the myLibrary array
subBtn.addEventListener("click", function() { 
    
    let ID = myLibrary.length;
    let title = document.querySelector('#book-title').value;
    let author = document.querySelector('#author').value;
    let publishedDate = document.querySelector('#published-date').value;
    let numPages = document.querySelector('#number-pages').value;
    let hasReadSelect = document.querySelector('#read-status');
    let hasRead = hasReadSelect.options[hasReadSelect.selectedIndex].text;
    
    document.querySelector('#book-title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#published-date').value = '';
    document.querySelector('#number-pages').value = '';

    newEntry = new Book(ID, title, author, publishedDate, numPages, hasRead);
    addBookToLibrary(newEntry);  //Adds to the array
    addNewRow(newEntry); //Adds to the table
})

//Edits a book in the myLibrary array then re-renders table with revised array using existing form for new book
function editBook(x) {  

    rowToEdit = Number(x)
    
    alert('The form fields above are populated with the books editable values, click Submit Edits to apply changes');
    
    document.querySelector('#book-title').value = myLibrary[rowToEdit].title;
    document.querySelector('#author').value =  myLibrary[rowToEdit].author;
    document.querySelector('#published-date').value =  myLibrary[rowToEdit].publishedDate;
    document.querySelector('#number-pages').value =  myLibrary[rowToEdit].numPages;

    subEditBtn.addEventListener("click", function() {
       
        myLibrary[rowToEdit].title = document.querySelector('#book-title').value;
        myLibrary[rowToEdit].author = document.querySelector('#author').value;
        myLibrary[rowToEdit].publishedDate = document.querySelector('#published-date').value;
        myLibrary[rowToEdit].numPages = document.querySelector('#number-pages').value;
        hasReadSelect = document.querySelector('#read-status');
        myLibrary[rowToEdit].hasRead = hasReadSelect.options[hasReadSelect.selectedIndex].text;

        renderTable();
    });
}
   
