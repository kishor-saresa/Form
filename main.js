//  Crud operations
//  global variable
function Submit(){
  var dataEntered = retrieveData();
  var readdata = readingDataFromLocalStorage(dataEntered);
  console.log(readdata);
}
// retrive data in form
function retrieveData(){
    var name =document.getElementById("Name").value;
    var email =document.getElementById("Email").value;

    var arr=[name,email];
    return arr;
}
// data in localStorage
function readingDataFromLocalStorage(dataEntered){
    var n = localStorage.setItem("Name",dataEntered[0]);
    var e = localStorage.setItem("Email",dataEntered[1]);
    
    // getting value in table
    var n1 =localStorage.getItem("Name",n);
    var e1 = localStorage.getItem("Email",e);
    
    var arr=[n1,e1];
    return arr;
}