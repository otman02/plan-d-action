document.getElementById("information").addEventListener("click",()=>{
    document.getElementById("personale").classList.toggle("hidden")
})


document.getElementById("blue").addEventListener("click",()=>{
    
    document.getElementById("card").classList.remove("bg-red-200")
    document.getElementById("card").classList.remove("bg-purple-200")
    document.getElementById("card").classList.add("bg-blue-200")
})

document.getElementById("red").addEventListener("click",()=>{
    
    document.getElementById("card").classList.remove("bg-blue-200")
    document.getElementById("card").classList.remove("bg-purple-200")
    document.getElementById("card").classList.add("bg-red-200")
})

document.getElementById("purbel").addEventListener("click",()=>{
    
    document.getElementById("card").classList.remove("bg-red-200")
    document.getElementById("card").classList.remove("bg-blue-200")
    document.getElementById("card").classList.add("bg-purple-200")
})
