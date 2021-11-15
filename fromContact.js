let firstName = document.getElementById("firstName");

let lastName = document.getElementById("lastName");

let message = document.getElementById("message");

let formSubmit = document.getElementById("formSubmit");

let submitButton = document.getElementById("submit");

let notificationCont= document.querySelector(".notificationContainer");

let submitTest = document.querySelector("#submitTest");

let email = document.querySelector("#email");



submitTest.addEventListener("click", () =>{

    let fieldNeeded = ""

    let executionWork;
   

    if(firstName.value == "" )  {
        fieldNeeded = "firstName";
        executionWork = false;
    
    } else if(lastName.value == "" ) {
        fieldNeeded = "lastName";
        executionWork = false;
    } else if( message.value == "") {
        fieldNeeded = "message";
        executionWork = false;
    } else if(email.value == "") {
        fieldNeeded = "email";
        executionWork = false;
    } else {
        executionWork = true;
        alert("ready")
    }
    if(!executionWork) {
        alertErrorField(fieldNeeded);
    }

})


function alertErrorField(param) {

    notificationCont.innerHTML += `
    <div class="alertBox" ontransitionend= "dissaper(this)"  onclick= "dissaper(this)">
    <i class="fas fa-times"></i>
        You need to complete the ${param} field.
    </div>
    `
    let alertBox = document.querySelectorAll(".alertBox");


    alertBox.forEach((e) =>{
        e.classList.add("showAlert");
    })
    let deleteAlert = document.querySelectorAll(".fa-times");
    deleteAlert.forEach((e)=>{
        e.addEventListener("click",removeElement)
       
    })
    alertBox.forEach((e) =>{
        e.addEventListener("animationend",() =>{
            e.style.display = "none";
        })
    })
}


function removeElement() {
    this.parentNode.classList.add("hidden");
}


function dissaper(param) {

    setTimeout(() =>{
        console.log(param)
        param.classList.add("hidden");
    }, 100)
}



function checkFormCompleted(e) {

    console.log(firstName.value)

    let allCompleted;

    if(firstName.value && lastName.value  && message.value ) {
        allCompleted = true;
    } else {
        allCompleted = false;
    }


    if(allCompleted) {
        alert("Ready For Submit");
    } else {
        e.preventDefault();
        alert("Complete all the fields!");
    }

}


formSubmit.addEventListener("submit", (e) =>{
    checkFormCompleted(e);
});