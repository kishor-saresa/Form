//  Crud operations

function Submit(){
  var dataEntered = retrieveData();
  var readData = readingDataFromLocalStorage(dataEntered);
  
  
    insert(readData);
    msg.innerHTML="data inserted"; 
    update();
    msg.innerHTML="data updated";
}
// retrive data in form
function retrieveData(){
    var name =document.getElementById("Name").value;
    var email =document.getElementById("Email").value;

    var arr=[name,email];
    return arr;
}
// Read
// data in localStorage
function readingDataFromLocalStorage(dataEntered){
    var n = localStorage.setItem("Name",dataEntered[0]);
    var e = localStorage.setItem("Email",dataEntered[1]);
    
    // getting value in table
    var n1 =localStorage.getItem("Name",n);
    var e1 = localStorage.getItem("Email",e);
    var ph=localStorage.getItem("Phone number",ph)
    var dob=localStorage.getItem("Birthdate",dob)
    
    var arr=[n1,e1];
    return arr;
}
// Insert
function  insert(readData)
{
    var row = table.insertRow();
    row.insertCell(0).innerHTML =readData[0];
    row.insertCell(1).innerHTML =readData[1];
    row.insertCell(2).innerHTML =readData[2];
    row.insertCell(3).innerHTML = `<button onclick=edit(this)>Edit</button>
                                    <button onclick=remove(this)>Delete</button>`;

    // Edit 
    function edit(td){
         row= td.parentElement.prentElement;
        document.getElementById("Name").value=row.cells[0].innerHTML;
        document.getElementById("Email").value=row.cells[1].innerHTML;
    }
    // Updaet  
    function update(){
        row.cells[0].innerHTML=document.getElementById("Name").value;
        row.cells[1].innerHTML=document.getElementById("Email").value;
         row =null;

    } 
    // Delete
    function remove(td){
        row= td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
    }                         
}