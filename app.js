let favMovie = "avenger";
let guessMovie = prompt("Guess what is the faviourate movie");
while(guessMovie != favMovie && guessMovie !="quit"){
        
guessMovie = prompt("Guess what is the faviourate movie");

}
if(guessMovie==favMovie){
        console.log("congrasse you guess the correct answer");
}
else{
        console.log("you are quitting");
}