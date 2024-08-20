let keys = document.querySelectorAll('.key');
let audio = document.querySelectorAll('audio');
function playSound() {
     let caractere = ["A", "Z", "E", "Q", "S", "D", "W", "X", "C"]
        for (let i = 0; i < caractere.length; i++) {
                document.addEventListener('keydown', (e) => {
         if (e.key === caractere[i]) {
                                keys[i].classList.add('playing');
                                audio[i].play();
                        }
                        
                        document.addEventListener('keyup', (e) => {
                                if (e.key === caractere[i]) {
                        keys[i].classList.remove('playing');
                                }
                        })
                })
        }
}
playSound();


const touches = document.querySelectorAll('.key');
const musiques = document.querySelectorAll('audio');
let tlb = ['a', 'z', 'e', 'q', 's', 'd', 'w', 'x', 'c']
for (let i = 0; i < tlb.length; i++){
   document.addEventListener('keydown', (e) => {
      
      if (e.key === tlb[i]) {
         touches[i].classList.add('playing');
         musiques[i].play();
      }

   })

document.addEventListener('keyup', (e) => {
  

   if (e.key === tlb[i]) {

      touches[i].classList.remove('playing');
   }

})
}