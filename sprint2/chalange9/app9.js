let tasks = JSON.parse(localStorage.getItem("tasks"))||[]
  

let taskinput = document.getElementById("task-input")
let idcompteur=  tasks.length ? Math.max(...tasks.map(t=>t.id)) + 1 : 1
function savetasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks))
}

 function randertask(){
    savetasks()
        document.getElementById("task-list").innerHTML =""
        tasks.forEach(task=>
    
    document.getElementById("task-list").innerHTML += `
     <div class=" task flex gap-5" >
             <h1 class="${task.status==="done"? 'bg-green-300':'bg-red-300'}  border" id="status">${task.status}</h1>

            <li class="border rounded-md w-60 h-10">${task.nom}</li><button
               data-id="${task.id}" class=" delete rounded-md bg-red-400 w-20">suprimer</button><button
                data-id="${task.id}"  class=" modifier rounded-md bg-blue-400 w-20">modifier</button><button
                data-id="${task.id}"  class=" done rounded-md bg-green-400 w-20">done</button>
        </div>
    
    `
)

supremiertask()
changestatus()
modifiertask()

}
document.getElementById("add-task").addEventListener("click",(event)=>{
    event.preventDefault()
    if (taskinput.value!=""){
         tasks.push({id:idcompteur,nom:taskinput.value,status:"to be done "})
         idcompteur++
         taskinput.value=""
       

        

    } 


   

randertask()
     
})


function supremiertask(){
         document.querySelectorAll(".delete").forEach(button=>{
        button.addEventListener("click",()=>{
            let ID=Number(button.dataset.id)

             let index= tasks.findIndex(task=>task.id == ID)
             tasks.splice(index,1)
             randertask()


        })
    })
}



function changestatus(){
        document.querySelectorAll(".done").forEach(button=>{
        button.addEventListener("click",()=>{
            let ID=Number(button.dataset.id)

             let index= tasks.findIndex(task=>task.id == ID)
           tasks[index].status = "done"
          
        randertask()
       
        })
    })
}



function modifiertask(){

    document.querySelectorAll(".modifier").forEach(button=>{
        button.addEventListener("click",()=>{
              let ID=Number(button.dataset.id)

              let index= tasks.findIndex(task=>task.id == ID)
              taskinput.value=tasks[index].nom
              tasks.splice(index,1)
              randertask()



        })
    })
}

randertask()