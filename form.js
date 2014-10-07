console.log("JS IS ALIVE");

var myForm = document.getElementById("myForm");
var list = document.getElementById("submitlist");

myForm.addEventListener("submit", function (event) {

    // prevent the data from being sent to the server
    event.preventDefault();

    // add your code to deal with the user's data here.
    // if your form has an text field  with a `name` (not `id`) of
    // taco, then you can access what the user typed with:
    //
    // var userInput = this.taco.value;
    var userInput = this.textField.value;
    console.log(userInput);

    //create li element
    var newLi = document.createElement("li");

    //add class to new li element
    newLi.className += "col-lg-12 todo";

//DELETE BUTTON
    //create span for button element
    var deleter = document.createElement("span");
    deleter.className += "btn btn-default delete";

    //add delete X
    var deleteButton = document.createTextNode("X");
    deleter.appendChild(deleteButton);

    //add delete button span to Li
    newLi.appendChild(deleter);

    //add event listener to deletebutton
    deleter.addEventListener("click",deleteTask);

//COMPLETED BUTTON
        //create span for button element
    var complete = document.createElement("span");
    complete.className += "btn btn-default complete";

    //add complete X
    var completeButton = document.createTextNode("√");
    complete.appendChild(completeButton);

    //add complete button span to li
    newLi.appendChild(complete);

    //add event listener to complete button
    complete.addEventListener("click",completeTask);

//TODO TEXT
    //create text node, add user input, append to li element
    var text = document.createTextNode(userInput);
    newLi.appendChild(text);

    //To add to page, need to add to ul
    list.appendChild(newLi);

    //clear input box
    this.textField.value = "";

});

var deleteTask = function(){
  console.log("Delete button clicked");
  var r = confirm("Did you GYSHIDO on this tasks face?");
  if (r){
    this.parentNode.parentNode.removeChild(this.parentNode);
  }
};

var completeTask = function(){
  console.log("complete task has been clicked!");
  this.parentNode.className += " strike";

  //adding the undo button
  this.className = "btn btn-default undo";
  this.innerHTML = "Undo";
  this.removeEventListener("click",completeTask);
  this.addEventListener("click",undoTask);
};

var undoTask = function(){
  console.log("Undo button hit");
  this.className = "btn btn-default complete";
  this.parentNode.className = "col-lg-12 todo";

   //add this X
  this.innerHTML="√";

  //add event listener to this button
  this.removeEventListener("click",undoTask);
  this.addEventListener("click",completeTask);


};




//USE parentNode.remove to take out the li

