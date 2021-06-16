// When the user presses the ASDFGHJKL keys on the keyboard, the buttons corresponding to the
// letters on the page become bigger and brighter, and the corresponding drum sound
// sounded.

// Key points to remember
// 1. Keyboard events
// 2. Play the sound
// 3. Change your style

// Staged decomposition
// 1. Add a .keydown keyboard event listener
// 2. Create a function that triggers the audio for the corresponding data-key.
// 3. Add the .playing class to the activated .key div.
// 4. Add an event handler to remove the style at the end of the transition

// (cf: in
// the css, the .key class contains a transition property of .0.07s.
// How do I map keyboard keys to page buttons?
// How to make sure that when the button is held down, a continuous drum sound may
// be played immediately?
// How to restore the page buttons?

// const a = document.getElementById("clap");
// const aSound = document.getElementById("clapsound");

// a.addEventListener("keydown", function playIt() {
//   aSound.play();
// });

//////WORKING WITH CLICK

// document.querySelectorAll(".key").forEach(function (ele) {
//   ele.addEventListener("click", function (e) {
//     var dataKey = this.dataset.key;
//     document.querySelector("audio[data-key='" + dataKey + "']").play();
//   });
// });
