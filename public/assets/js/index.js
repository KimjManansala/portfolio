// FOR HOME SLICE
var siHomeSlice = 1;
sdHomeSlice(siHomeSlice);

function plusDivsHomeSlice(n) {
  sdHomeSlice((siHomeSlice += n));
}

function sdHomeSlice(n) {
  var i;
  var x = document.getElementsByClassName("home-slice");
  if (n > x.length) {
    siHomeSlice = 1;
  }
  if (n < 1) {
    siHomeSlice = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[siHomeSlice - 1].style.display = "block";
}


// FOR BIN ORGANIZER
var slBinOrganizer = 1;
sdBinOrganizer(slBinOrganizer);

function plusDivsBin(n) {
  sdBinOrganizer((slBinOrganizer += n));
}

function sdBinOrganizer(n) {
  var i;
  var x = document.getElementsByClassName("Bin-organizer");
  if (n > x.length) {
    slBinOrganizer = 1;
  }
  if (n < 1) {
    slBinOrganizer = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slBinOrganizer - 1].style.display = "block";
}


// FOR CHECKERS

var checkers = 1;
sdCheckers(checkers);

function plusDivsGame(n) {
  sdCheckers((checkers += n));
}

function sdCheckers(n) {
  var i;
  var x = document.getElementsByClassName("checkers-game");
  if (n > x.length) {
    checkers = 1;
  }
  if (n < 1) {
    checkers = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[checkers - 1].style.display = "block";
}


// FOR PICK UP HOOPS

let pickup = 1;
slidePickup(pickup)

function plusDivPickup(n){
  slidePickup((pickup += n))
}

function slidePickup(n){
  var i;
  var x = document.getElementsByClassName('pickup')
  if (n > x.length) {
    pickup = 1;
  }
  if (n < 1) {
    pickup = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[pickup - 1].style.display = "block";

}
document.addEventListener("DOMContentLoaded", function(event) {
  welcomeUser()
});

function welcomeUser() {
  // This is an easter egg for Developers that want to open the console!
  console.log(`
  ||||        ||||
  ||||       ||||
  ||||     ||||
  ||||    ||||      Welcome Developer
  ||||   ||||
  |||| ||||         This is my website
  ||||||||
  ||||||||          Contact me at
  |||| ||||
  ||||  ||||        kimjmanansala@gmail.com
  ||||   ||||
  ||||    ||||      Check out this Repository at
  ||||     ||||
  ||||      ||||    github.com/KimjManansala/portfolio
  ||||       ||||
  ||||        ||||`);
}
