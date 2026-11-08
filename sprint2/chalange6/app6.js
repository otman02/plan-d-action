


let livres= [
    {
        titre:"one hundred years of solitud",
        autore: "gabreil garcia",
        prix: 150 
    },
       {
        titre:"the alchemist",
        autore: "paule coelho",
        prix: 120 
    },
       {
        titre:"the yacoubian building ",
        autore: "alaa al asawny",
        prix: 160 
    },
       {
        titre:"1984",
        autore: "georga orwell",
        prix: 100 
    }
]


let livrecontener = document.getElementById("liver-contener")

function livrecards(){livres.forEach(levre=>livrecontener.innerHTML += ` <div class="border rounded-md pl-6 w-100">
        <h1 class="text-xl font-bold">title:</h1>
        <p>${levre.titre}</p>
       <h1 class="text-xl font-bold">author:</h1>
       <p>${levre.autore}</p>
       <h1 class="text-xl font-bold">price:</h1>
       <p>${levre.prix} dh</p>
    </div>`)}


    livrecards()


    let nomberdelivers = document.getElementById("nomber-livres")

    let counter=0;
    function countlivre(){livres.forEach(livre=>{
            counter+=1
        nomberdelivers.textContent=counter
    }
    
        

    )}

    countlivre()

  