const startB = document.querySelector("#startB");
const NextB = document.querySelector("#NextB");
const main_div = document.querySelector(".main");
const game_div = document.querySelector(".game");
const subs_div = document.querySelector(".subs");
const sbul = document.querySelector("#sbul");
startB.addEventListener("click", function () {
  main_div.style.display = "none";
  game_div.style.display = "block";
  document.querySelector(".letter").style.display = "none";
  init();
});

let gameSubs = [];
let gameLetter = "";
function init() {
  let fake_nm = 10;
  for (let i = 0; i < fake_nm; i++) {
    let rnd = Math.floor(Math.random() * subjects.length);
    if (gameSubs.includes(subjects[rnd]) == false) gameSubs.push(subjects[rnd]);
    else fake_nm++;
  }
  gameLetter = letters[random(letters.length, 0)];
  for (let i = 0; i < gameSubs.length; i++) {
    sbul.innerHTML += "<li> " + gameSubs[i] + "</li>";
  }
}
NextB.addEventListener("click", function () {
  subs_div.style.display = "none";
  document.querySelector(".letter").style.display = "block";
  document.getElementById("gameLTR").innerHTML = gameLetter;
  document.querySelector("#reset").style.display = "block";
});
document.querySelector("#reset").addEventListener("click", function () {
  location.reload();
});
function random(max, min) {
  return Math.floor(Math.random() * max + min);
}
