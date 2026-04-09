// Game logic started
let x = 1; 
let y = 1;

let countPersonne = 0;
let countBoot = 0;

let randomBoot = [1,2];
let personne = [1,2];

if (personne[y] === 1 && randomBoot[x] === 1){

    console.log("3 les deux");
    countPersonne += 3;
    countBoot += 3;

}
else if (personne[y] === 2 && randomBoot[x] === 2){

    console.log("1 les deux");
    countPersonne += 1;
    countBoot += 1;

}
else if (personne[y] === 2 && randomBoot[x] === 1){

    console.log("5 POUR PERSONNE");
    console.log("0 POUR RANDOMBOOT");

    countPersonne += 5;
    countBoot += 0;

}
else{

    console.log("0 POUR PERSONNE");
    console.log("5 POUR RANDOMBOOT");

    countPersonne += 0;
    countBoot += 5;

}

console.log("Score Personne:", countPersonne);
console.log("Score Boot:", countBoot);