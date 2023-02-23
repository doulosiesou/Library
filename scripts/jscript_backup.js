// Book library project
// By: Gregory J. McKim
// Feb 13, 2023

let subBtn = document.querySelector('.submit-button');
let tableContents = document.querySelector("#library-table");
let count = 4;

function addRow() {
    let table = document.getElementById("library-table");
    let row = table.insertRow(-1);

    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);
    let c6 = row.insertCell(5);

    if (count % 2 === 1) {
       c1.innerHTML = `<td class = "table-row-odd">${newEntry.title}</td>`;
   } else {
       c1.innerHTML = `<td class = "table-row-even">${newEntry.title}</td>`;
   }

    // c1.innerText = newEntry.title;
    c2.innerText = newEntry.author;
    c3.innerText = newEntry.publishedDate;
    c4.innerText = newEntry.numPages;
    c5.innerText = newEntry.hasRead;
    c6.innerHTML = "<button class='delete-button'>Delete</button>";

    
}

function Book(title, author, publishedDate, numPages, hasRead) {
    this.title = title
    this.author = author
    this.publishedDate = publishedDate
    this.numPages = numPages
    this.hasRead = hasRead
    this.info = function() {
        return `The ${title} was written by ${author} in ${publishedDate} and is ${numPages} pages long`
    }
}



subBtn.addEventListener("click", function() {
    let title = document.querySelector('#book-title').value
    let author = document.querySelector('#author').value
    let publishedDate = document.querySelector('#published-date').value
    let numPages = document.querySelector('#number-pages').value
    let hasReadSelect = document.querySelector('#read-status');
    let hasRead = hasReadSelect.options[hasReadSelect.selectedIndex].text;
    
    newEntry = new Book(title, author, publishedDate, numPages, hasRead);
    addRow(newEntry);
})






