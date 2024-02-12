const barEL = document.getElementById("bar")
const navEl = document.getElementById("navbar")
const closeEl = document.getElementById("close")
if(barEL){
    barEL.addEventListener("click",()=>{
        navEl.classList.add("active")
    })
}
if(closeEl){
    closeEl.addEventListener("click",()=>{
        navEl.classList.remove("active")
    })
}