document.addEventListener('DOMContentLoaded', () => {
   const keys = document.querySelectorAll('.key');
   const audioElements = document.querySelectorAll('audio');
   const keyCodes = ['65', '90', '69', '81', '83', '68', '87', '88', '67']; // Corresponding key codes for A, Z, E, Q, S, D, W, X, C

   // Function to play sound based on key code
   function playSound(keyCode) {
       const key = document.querySelector(`.key[data-key="${keyCode}"]`);
       const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
       if (!key) return;

       key.classList.add('playing');
       audio.currentTime = 0; // Rewind to the start
       audio.play();
   }

   // Function to remove transition
   function removeTransition(e) {
       if (e.propertyName !== 'transform') return;
       e.target.classList.remove('playing');
   }

   // Add event listeners for each key
   keys.forEach(key => key.addEventListener('transitionend', removeTransition));

   // Handle keydown event for keyboard
   window.addEventListener('keydown', (e) => {
       const keyCode = e.keyCode.toString();
       if (keyCodes.includes(keyCode)) {
           playSound(keyCode);
       }
   });

   // Handle touchstart event for mobile
   keys.forEach(key => {
       key.addEventListener('touchstart', (e) => {
           const keyCode = key.getAttribute('data-key');
           playSound(keyCode);
       });

       key.addEventListener('touchend', (e) => {
           key.classList.remove('playing');
       });
   });
});
