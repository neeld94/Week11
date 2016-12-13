(function(){

  let myName = document.getElementById("my-name"); 
  let getName = document.getElementById("get-name");
  let userName = document.getElementById("user-name"); 
  let nameStored = localStorage.name;
  console.log(`Name on page load: ${nameStored}`);
  // creating button variable to use below for clear local storage function
  let ClearButton = document.getElementById("ClrButton");
  
  if(nameStored) {
    // If there's a name in localStorage, use it:
    myName.innerHTML = `again ${nameStored}`;
    console.log(`Name stored is: ${nameStored}`);
  }
  else {
    // There's no name in localStorage:
    myName.innerHTML = "stranger";
    console.log(`No name stored`);
  }

  function PerformGreeting() {
    if(userName.value === "") {
      alert("Please enter a name");
      userName.focus();
    }
    // Get the name the user entered:
    nameStored = userName.value;
    // Show the name in "my-name":
    myName.innerHTML = nameStored;
    // Put the name into localStorage:
    localStorage.name = nameStored;
    console.log(`New name stored: ${nameStored}`);
    return false;
  }

  // Listens for a form submit action: 
  if (typeof event === "undefined") {
    getName.onsubmit = PerformGreeting; // for Firefox
  }
  else {
    getName.addEventListener("submit", PerformGreeting);
    event.preventDefault();
  }
  
  // Adding clear button for clearing local storage 
  ClearButton.addEventListener("click", localStorage.clear());

}());
