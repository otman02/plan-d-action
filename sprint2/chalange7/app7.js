



function buyelement() {



    document.getElementById("add").addEventListener("click", (event) => {
        event.preventDefault()

        let item_to_bought = document.getElementById("item-input").value
        console.log(item_to_bought)
        if (document.getElementById("item-input").value != "") {
            document.getElementById("items-list").innerHTML += `<div class=" item flex gap-5">
             <li class=" single-itme flex justify-center border w-20 h-7">${item_to_bought}</li>
             <button class=" bought bg-yellow-400" >bought</button><button
             class="delete bg-red-400" >delete</button> </div>`
        }

        document.getElementById("item-input").value = ""


    })


}

buyelement()


function suprimer() { document.getElementById("items-list").addEventListener("click",(event)=>{
    if(event.target.classList.contains("delete")){
        event.target.closest(".item").remove()
    }
})
    
} suprimer()



function bought(){ document.getElementById("items-list").addEventListener("click",(event)=>{
    if(event.target.classList.contains("bought")){
    event.target.closest(".item").querySelector(".single-itme").classList.add("bg-green-400")
        
    }
   
}) 
}

bought()