addEventListener('DOMContentLoaded', () => {
    //accedemos al boton con clase btn-menu
    const btn_menu= document.querySelector('.btn-menu')

    //verificamos si el boton existe
    if(btn_menu){
        //cuando el usuario aga click en el btn-menu, muestre el menu de {ul}
        btn_menu.addEventListener('click', ()=>{
            const menu_items= document.querySelector('.menu-items')
            menu_items.classList.toggle('show')
        })
    }
})

console.log("Hola desde consola");

//prompt("hola");dffsf

