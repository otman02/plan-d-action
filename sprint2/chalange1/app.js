let produit =[

       {
        quantite:3,
        prix:50
       },
        {
        quantite:4,
        prix:60
       },
        {
        quantite:2,
        prix:120
       }

]

let sum=0;
for (let i=0 ;i<produit.length;i++){

    sum+=produit[i].quantite*produit[i].prix
    

   

} 

if (sum>500){
    let total = sum -(sum*10)/100
    console.log(sum +"dh")
 console.log(total +"dh")
    
}
 
