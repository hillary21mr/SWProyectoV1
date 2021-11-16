const btn =document.querySelector("#nav-btn");
const menu =document.querySelector(".nav-bar");

btn.addEventListener("click", function(){
    if(menu.classList.contains("hide")){
        menu.classList.remove("hide");
        btn.classList.remove("up-btn");
    }else{
        menu.classList.add("hide");
        btn.classList.add("up-btn");
    }
            
});