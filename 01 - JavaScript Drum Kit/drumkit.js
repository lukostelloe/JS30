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

let myDivs = document.querySelectorAll(".key");

document.onkeydown = function (e) {
  e = e || window.event;
  var key = e.which || e.keyCode;
  if (key === 65) {
    document.getElementById("A").play();
    myDivs[0].classList.add("playing");
  } else if (key === 83) {
    document.getElementById("B").play();
    myDivs[1].classList.add("playing");
  } else if (key === 68) {
    document.getElementById("C").play();
    myDivs[2].classList.add("playing");
  } else if (key === 70) {
    document.getElementById("D").play();
    myDivs[3].classList.add("playing");
  } else if (key === 71) {
    document.getElementById("E").play();
    myDivs[4].classList.add("playing");
  } else if (key === 72) {
    document.getElementById("F").play();
    myDivs[5].classList.add("playing");
  } else if (key === 74) {
    document.getElementById("G").play();
    myDivs[6].classList.add("playing");
  } else if (key === 75) {
    document.getElementById("H").play();
    myDivs[7].classList.add("playing");
  } else if (key === 76) {
    document.getElementById("I").play();
    myDivs[8].classList.add("playing");
  }
};

document.addEventListener("transitionend", () => {
  for (var i = 0; i < myDivs.length; i++) {
    myDivs[i].classList.remove("playing");
  }
});
