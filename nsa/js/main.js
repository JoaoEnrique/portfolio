const btnMenu = document.getElementById("menu-botao")
const itemsMenu = document.querySelector(".items>ul")


btnMenu.onclick = () =>{
    if(itemsMenu.getBoundingClientRect().left <0){
        itemsMenu.style.left = "0%"
    }else{
        itemsMenu.style.left = "-100%"
    }
}
