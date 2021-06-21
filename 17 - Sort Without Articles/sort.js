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
}
function sortThem() {
  bands.sort();
  document.getElementById("bands").innerHTML =
    "<li>" + bands.join("</li><li>") + "</li>";
}

function replaceThem() {
  for (var i = 0, len = bands.length; i < len; i++) {
    bands[i] = bands[i].replace("Bled", "The Bled");
    bands[i] = bands[i].replace("Devil Wears Prada", "The Devil Wears Prada");
    bands[i] = bands[i].replace("Midway State", "The Midway State");
    bands[i] = bands[i].replace("Plot in You", "The Plot in You");
    bands[i] = bands[i].replace("Old Dog", "An Old Dog");
    bands[i] = bands[i].replace("Skylit Drive", "A Skylit Drive");
  }
  document.getElementById("bands").innerHTML =
    "<li>" + bands.join("</li><li>") + "</li>";
}
showArray();
sortThem();
replaceThem();
