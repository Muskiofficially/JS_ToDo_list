let listed_item = document.getElementById("lists")


//create a function to call on add_btn to add the list item.
let Add_item = ()=>{

    //Let take the input from users to add a list
    let list_index = prompt("Enter the list-index here: ")
    let list_note = prompt("Enter the to-do list note here: ")
    //Add the item in localstorage
    let to_do_list = localStorage.setItem(list_index, list_note)
    // Let's check weather the list is successfully added or not
    console.log("List Added Successsfully")
    // call the function of displaying the list.
    displayAllItems()
  
}

// Function for deleting the item from list.
let delete_node = () =>{

    // Ask the user the index number of list , which should be deleted
    let delete_item = prompt("Enter the index of number of list which you want to delete: ")

    // Confirmation alert to for deleting the list item from list
    let confirmation = confirm("Do you want to delete this list-item ?" + delete_item)
    if(confirmation){
        localStorage.removeItem(delete_item)
    }
    else if(confirmation == "No" || confirmation == "no" || confirmation == "no"){
        alert("Deletion Cancelled.")
    }
}

// Function for displaying all items present in lists.
let displayAllItems = () => {
    // Clear the current content
    listed_item.innerHTML = ""; 

    for (let i = 0; i < localStorage.length; i++) {
        let index = localStorage.key(i);
        let note = localStorage.getItem(index);

        // Create a list item element
        let listItem = document.createElement("li");
        listItem.textContent = `${index} : ${note}`;

        // Append the list item to the existing list
        listed_item.appendChild(listItem);
    }
};

let delete_item_from_screen = (indexToDelete) => {
    // Clear the current content
    listed_item.innerHTML = ""; 

    for (let i = 0; i < localStorage.length; i++) {
        let index = localStorage.key(i);
        let note = localStorage.getItem(index);

        if (index !== indexToDelete) {
            // Create a list item element for items other than the one to delete
            let listItem = document.createElement("li");
            listItem.textContent = `${index} : ${note}`;

            // Append the list item to the existing list
            listed_item.appendChild(listItem);
        }
    }
};






