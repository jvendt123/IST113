var myKey = "listValues"
var myItems = []; 

function setupLocal() {

  // check if any values have already been saved
  if(localStorage.getItem(myKey) !== null) {

    // First, we pull the string value using the key
    let myItemsString = localStorage.getItem(myKey);
    
    // Then we convert the string into our array
    myItems = JSON.parse(myItemsString);
    
    // now we can use jQuery's "each" function to add 
    $(myItems).each(function() {
      createItem(this);
    });
  } 
  else {
    createItem("List One Item");
  }
  
  $("#buttonElement").on("click", function() {
    // first we grab the value for the new item
    let curVal = $("#inputContent").val()
    
    // first call our DOM create function, passing it our value
    createItem(curVal);
    // then add the item value to the array
    myItems.push(curVal);
    // finally, save our array to local storage
    saveItems();
  });
}

function createItem(itemValue) {
  // create the list item
  $newElem = $("<li></li>").text(itemValue);

  // add a listener to the list item
  $newElem.on("click", function() { 
    // we'll use our own function to complete removal this time
    removeItem(this); 
  });

  // attach the list item to the list
  $("#listOne").append($newElem);
}

// Our more robust removal process is now its own function
function removeItem(item) {

  // first we need to get the index of our item in the list
  let index = $(item).index();
  
  // now we can remove the item from the array
  myItems.splice(index, 1);
  
  // then save the array to localStorage
  saveItems();
  
  // finally, we can remove it from the DOM
  $(item).remove();
}



function saveItems() {
  let myItemsString = JSON.stringify(myItems);
  localStorage.setItem(myKey, myItemsString);
}

$(function() {
  setupLocal();
});
