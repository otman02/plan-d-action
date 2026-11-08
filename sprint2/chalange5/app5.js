let cunteraffichage= document.getElementById("the-cunter")

cunter =0;

function augmenter(){
    document.getElementById("augmenter").addEventListener("click",()=>{
    cunter++
    cunteraffichage.textContent =cunter
    if (cunter>=10){
    cunteraffichage.classList.remove("text-red-500")
    cunteraffichage.classList.add("text-blue-500")
     }else{
         cunteraffichage.classList.remove("text-blue-500")
          cunteraffichage.classList.add("text-red-500")
     }
})
} 
augmenter()

function diminuer(){
    document.getElementById("diminuer").addEventListener("click",()=>{
      if(cunter>0){cunter--}
        cunteraffichage.textContent =cunter
      if (cunter>=10){
    cunteraffichage.classList.remove("text-red-500")
    cunteraffichage.classList.add("text-blue-500")
     }else{
         cunteraffichage.classList.remove("text-blue-500")
          cunteraffichage.classList.add("text-red-500")
     }
    })
}
diminuer()


function reinitialiser(){
    document.getElementById("reinitialiser").addEventListener("click",()=>{
        cunter=0
        cunteraffichage.textContent = cunter
         if (cunter>=10){
    cunteraffichage.classList.remove("text-red-500")
    cunteraffichage.classList.add("text-blue-500")
     }else{
         cunteraffichage.classList.remove("text-blue-500")
          cunteraffichage.classList.add("text-red-500")
     }
    })
}
reinitialiser()

