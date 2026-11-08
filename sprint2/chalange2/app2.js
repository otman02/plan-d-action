let notes = [18,5,13,15,8,11,17,14,19,15]
let moyenne ;
let sum=0 ;
let max=0;
let cunt=0;
 for (let i=0;i<notes.length;i++){
    if (notes[i]>max){max=notes[i]}
    if(notes[i]>10){cunt++}
      sum+=notes[i];
      moyenne=sum/notes.length
      

 }
 console.log("la mailleur note de class et :" + max)
 console.log("le nomber de notes superieur a 10 est :"+ cunt)
 console.log("le moyenne de class est :"+ moyenne)
   if (moyenne>10){console.log("le muyenne de class est superier a 10")}
 
