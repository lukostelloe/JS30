const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

function showArray() {
  for (var i = 0, len = bands.length; i < len; i++) {
    bands[i] = bands[i].replace("An ", "");
    bands[i] = bands[i].replace("A ", "");
    bands[i] = bands[i].replace("The ", "");
  }
  bands.sort();
  document.getElementById("bands").innerHTML =
    "<li>" + bands.join("</li><li>") + "</li>";
}

function replaceThem() {
  bands[1].unshift("The");
}
showArray();
replaceThem();
