let produits= [
    {
       id :1,
       nom : "table",
       prix:200 ,
       categori: "Furniture"
       

    },
     {
       id :2,
       nom : "chaire",
       prix:50 ,
       categori: "Furniture"
       

    },
     {
       id :3,
       nom : "plate",
       prix:30 ,
       categori: "Ustensiles"
       

    },
     {
       id :4,
       nom : "Réfrigérateur",
       prix:4000 ,
       categori: "appliances"
       

    },
     {
       id :5,
       nom : "Marmite",
       prix:100 ,
       categori: "Ustensiles"
       

    },
     {
       id :6,
       nom : "cup",
       prix:5 ,
       categori: "Ustensiles"
       

    }
]


// produits.forEach(produit=>{
//     if (produit.prix<200){console.log(produit)}
// })


let moinsde200= produits.filter(produit=>produit.prix<200)
console.log(moinsde200)



// function rechercherproduit(id){
//     produits.forEach(produit=>{
//         if (produit.id===id){console.log(produit)}
//     })
// }
// rechercherproduit(3)

function recherchunproduit(id){
    let recherch= produits.find(produit=>produit.id===id)
    console.log(recherch)

}

recherchunproduit(3)







// let produits_nom =[];

// function creattabluedenom(){
//     produits.forEach(produit=>{
//         produits_nom.push(produit.nom)
//     })
// }
// creattabluedenom()
// console.log(produits_nom)



function lesnoms(nom){
    const noms = produits.map(produit=>produit.nom)
    console.log(noms)
}

lesnoms()


// let somme_de_prix=0;

// function calculersommedeprixdeproduits(){
//     produits.forEach(produit=>{
//         somme_de_prix+=produit.prix
//     })
// }

// calculersommedeprixdeproduits()
// console.log(somme_de_prix)


let somme = produits.reduce((sum,produit)=>sum+produit.prix,0)

console.log(somme)