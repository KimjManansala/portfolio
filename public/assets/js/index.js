

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

// var slSimpleGame = 1;
// sdSimpleGame(slSimpleGame);

// function plusDivsGame(n) {
//   sdSimpleGame((slSimpleGame += n));
// }

// function sdSimpleGame(n) {
//   var i;
//   var x = document.getElementsByClassName("simple-game");
//   if (n > x.length) {
//     slSimpleGame = 1;
//   }
//   if (n < 1) {
//     slSimpleGame = x.length;
//   }
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slSimpleGame - 1].style.display = "block";
// }


document.addEventListener("DOMContentLoaded", function(event) {
  console.log(event)
  // window.open('mailto:test@example.com?subject=subject&body=body')
})


document.getElementById('contact-form').addEventListener('submit', e=>{
  e.preventDefault()
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let subject = document.getElementById('subject').value
  let message = document.getElementById('message').value
  console.log(`kimjmanansala@gmail.com?subject=${subject}t&body=${message}`)
  window.open(`mailto:kimjmanansala@gmail.com?subject=${subject}&body=${message}`)
})