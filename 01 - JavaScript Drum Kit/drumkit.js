
window.addEventListener('keydown', playSound )
 function playSound(e) {
     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
     if (!audio) {
         return;
     }
     audio.currentTime = 0; //resets the audio so you can click the keys as fast as you want
     audio.play();
     key.classList.add('playing');
 }

 function removeTransition(e) {
     if (e.propertyName !== 'transform') {
         return;
     }
     this.classList.remove('playing');
 }

    const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

