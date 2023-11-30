let keys = document.querySelectorAll('.key');
let audio = document.querySelectorAll('audio');

console.log(keys);



function playSound(){

let caractere = ["A", "Z", "E", "Q", "S", "D", "W", "X", "C"]
console.log(caractere);





for (let i = 0; i < caractere.length; i++) {
    
        document.addEventListener('keypress', (son) => {
if(son.key = caractere[i]) {
audio[i].play();
}
            

            
        });


        

        




    }
}

   playSound()
    