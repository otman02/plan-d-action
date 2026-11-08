let apprenents=[
    {
        id :1,
        name: "hannoun otman ",
        age:24,
        note:15


    },
     {
        id :2,
        name: "hamza lechehab  ",
        age:23,
        note:13


    },
     {
        id :3,
        name: "hossni abid ",
        age:23,
        note:13


    },
     {
        id :4,
        name: "yahya chahi ",
        age:24,
        note:17


    },
     {
        id :5,
        name: "zakarya ayou ",
        age:22,
        note:19


    }
]

function ajouteapprenent(apprenent){
    apprenents.push(apprenent)
}

ajouteapprenent({  id:6,
                   name:"omar hannoun",
                   age:19,
                   note:12})



function modifierapprenent(ID,new_note){
    apprenents.forEach(apprenent=>{
        if(apprenent.id===ID){
            apprenent.note=new_note}
    })
}
  modifierapprenent(5,20)


  function suprimerapprennet(nom){
    for (let i=apprenents.length-1;i>=0;i--){
        if (apprenents[i].name===nom){
            apprenents.splice(i,1)
        }
    }
    

  }

  suprimerapprennet("hannoun otman ")



  function recherchapprenent(nom){
    apprenents.forEach(apprenent=>{
        if (apprenent.name===nom){
            console.log(apprenent)
            
        }
    })
  }

  recherchapprenent("hamza lechehab  ")
 