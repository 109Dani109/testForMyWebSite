let date = new Date();

//global


//global



let nameOfDayOfTheWeek = date.getDay();

let dayofweekContainer = document.querySelectorAll(".dayofweek");


dayofweekContainer.forEach(e =>{
    e.style.display="none";
})



dayofweekContainer[nameOfDayOfTheWeek -1 ].style.display = "block";



// search between containers

let searchBox = document.getElementById("searchBox");
let h1Names = document.querySelectorAll(".card h1");

document.body.addEventListener("keydown" ,(e) =>{
    if(e.keyCode == 13) {
        searchCards();
    }

})

searchBox.addEventListener("keyup" ,searchCards);


function searchCards() {



    for(let i = 0; i< h1Names.length; i++) {
        h1Names[i].parentNode.classList.remove("inActive");
        if(searchBox.value == h1Names[i].innerText) {
            console.log(searchBox.value,h1Names[i].innerText )

         h1Names[i].parentNode.classList.add("inActive");
        } 
       
    }


}



h1Names.forEach((e) =>{

    e.parentNode.addEventListener("click" , () =>{
        h1Names.forEach((e) =>{

            e.parentNode.classList.remove("inActive")
            
        })
        e.parentNode.classList.add("inActive");
    })
    
})





// search between containers


let firstTheme = false;


function changeRottInformatin() {
  
  

    

   

        if(firstTheme) {
            document.documentElement.style.setProperty("--backgroundCards", "rgb(231, 230, 230)");
            document.documentElement.style.setProperty("--colorCards", "black");
            
            firstTheme = false;
        } else {
            document.documentElement.style.setProperty("--backgroundCards", "black");
            document.documentElement.style.setProperty("--colorCards", "white");
            firstTheme = true;
        }

        
 
    
 
}


// nav active on scroll

let logo = document.querySelector(".logo");

document.addEventListener("scroll", (e) =>{
    if(window.scrollY > 200) {
        logo.style.transform = `rotate(${window.scrollY}deg)`;
        document.body.classList.add("active");
    } else {
        document.body.classList.remove("active");
    }

})

function rotateLogoOnScroll() {

    logo.classList.add("active")


}


let changePalet = document.getElementById("changePalet");


changePalet.addEventListener("change",() =>{
    changeColor();
})

let containerBottom = document.querySelector(".containerBottom");



function changeColor() {

   
 

        containerBottom.style.backgroundColor =  changePalet.value;
        localStorage.setItem("color",  changePalet.value);
 

    

        
   
        
      
   
}




changePalet.value = localStorage.getItem("color") || changePalet.value ;


containerBottom.style.backgroundColor =  localStorage.getItem("color") ||changePalet.value;