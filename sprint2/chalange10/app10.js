document.getElementById("add-contact").addEventListener("click", () => {

    document.getElementById("contact-form").classList.toggle("hidden")
})



let contacts = JSON.parse(localStorage.getItem("contacts")) || []
function save(){localStorage.setItem("contacts",JSON.stringify(contacts))}
let nom = document.getElementById("name")
let tel = document.getElementById("tel")
let email = document.getElementById("email")
document.getElementById("add").addEventListener("click", (event) => {
    event.preventDefault()
    contacts.push({ id: Date.now(), name: nom.value, tel: tel.value, email: email.value, favorie: false })
    save()
    nom.value = ""
    tel.value = ""
    email.value = ""
    randercontac(contacts)

})


function randercontac(list) {
    document.getElementById("contact-continer").innerHTML = ""
    list.forEach(contact => {
        document.getElementById("contact-continer").innerHTML += `
        
          
        
        <div class="flex flex-col gap-5 border rounded-md ${contact.favorie ? 'bg-yellow-200' : ''}" id="singl-contact">
            
         <div class="flex justify-between"> <p>name:</p> <button class="rounded border bg-green-500 modifier" 
         data-id="${contact.id}">midifier</button> <button class="rounded border bg-red-500 supprimer" data-id="${contact.id}">suprimer</button></div>
          <h1>${contact.name}</h1>
          <p>tel:</p>
          <h1>${contact.tel}</h1>
          <p>email:</p>
          <h1>${contact.email}</h1>
          <button class=" favori rounded border bg-red-200" data-id="${contact.id}">favorite</button>

        </div>
        
        
        
        `
    }
    )
    suprimer()
    midifier()
    fovoriet()
}


randercontac(contacts)


let recherch = document.getElementById("recherch")



document.getElementById("btn-rechercher").addEventListener("click", () => {
    let result = contacts.filter(contact => contact.name.toLowerCase() === recherch.value.toLowerCase())
    randercontac(result)
})



function suprimer() {
    document.querySelectorAll(".supprimer").forEach(button => {
        button.addEventListener("click", () => {
            let id = Number(button.dataset.id)
            let index = contacts.findIndex(contact => contact.id === id)
            if (index != -1) { contacts.splice(index, 1) }
            save()
            randercontac(contacts)
        })
    })



}



function midifier() {
    document.querySelectorAll(".modifier").forEach(button => {
        button.addEventListener("click", () => {
            let ID = Number(button.dataset.id)
            let index = contacts.findIndex(contact => contact.id === ID)
            nom.value = contacts[index].name
            tel.value = contacts[index].tel
            email.value = contacts[index].email
            if (index != -1) { contacts.splice(index, 1) }
            save()
            randercontac(contacts)
        })
    })


}


function fovoriet() {
    document.querySelectorAll(".favori").forEach(button => {
        button.addEventListener("click", () => {
            let id = Number(button.dataset.id)
            let index = contacts.findIndex(contact => contact.id === id)

            if (index != -1) { contacts[index].favorie = !contacts[index].favorie; }
            save()
            randercontac(contacts)
        })
    })


}



