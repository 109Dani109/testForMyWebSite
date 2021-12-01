// form 


let form = document.querySelector("form");

let emailInput = document.querySelector("input[type=email]")

let inputs = document.querySelectorAll(".inputs");

let submitBtn = document.querySelector("input[type=submit]")

function checkFormBox(e) {
 
    inputs.forEach((elm) =>{
        
        if(elm.value.length == 0) {
            elm.classList.add("incomplete");
            form.classList.add('formWrong');
            form.addEventListener("animationend",() =>{
                form.classList.remove("formWrong");
            });
            e.preventDefault();
        } else {
            elm.classList.remove("incomplete");
        }
        
    })

}

form.addEventListener("submit",(e) =>{
    checkFormBox(e);
})


submitBtn.addEventListener("mouseover",() =>{

    inputs.forEach((elm) =>{
        if(elm.value.length == 0) {
            submitBtn.classList.add("incomplete");
        } else {
            submitBtn.classList.remove("incomplete");

        }
        
    })
})



