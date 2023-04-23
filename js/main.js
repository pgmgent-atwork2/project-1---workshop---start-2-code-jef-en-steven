// already there

// staat er al in: is aanpasbaar naar keuze

let spelerWapen = "";
let computerWapen = "";
let spelerLevenEl = document.getElementById("spelerLeven");
let computerLevenEl = document.getElementById("computerLeven");

const keuzes = ["papier", "steen", "schaar"];

let game = 1;
let spelerLeven = 5;
let computerLeven = 5;
computerLevenEl.innerHTML = computerLeven;

for (let i = 1; i <= spelerLeven; i++) {
  spelerLevenEl.innerHTML += `<div class="speler__leven"></div>`;
}

// Eerste stap: alle elementeren selecteren en aanspreken 

// let spelerNaam = prompt('Wat is jouw naam?');
// document.getElementById('spelerNaam').innerHTML = spelerNaam;

const keuzeSpeler = document.getElementById('keuzeSpeler');
const keuzeComputer = document.getElementById('keuzeComputer');
const btnBlad = document.getElementById('btnBlad');
const btnSteen = document.getElementById('btnSteen');
const btnSchaar = document.getElementById('btnSchaar');
const btnReset = document.getElementById('btnReset');

btnSteen.addEventListener('click', () => progressGame(1));

btnSchaar.addEventListener('click', () => progressGame(2));

const progressGame = (spelerKeuze) => {
  spelerWapen = keuzes[spelerKeuze];
  computerWapen = keuzes[Math.floor(Math.random() * keuzes.length)];
  keuzeSpeler.innerHTML = `<img src="img/${spelerWapen}.png" alt="${spelerWapen}" class="speler__keuze__afbeelding">`;
  keuzeComputer.innerHTML = `<img src="img/${computerWapen}.png" alt="${computerWapen}" class="speler__keuze__afbeelding">`;
  bladSteenSchaar(spelerWapen, computerWapen);
  game++;
}

const refreshGame = () => {
  game = 0;
  spelerLeven = 5;
  computerLeven = 5;
}

btnReset.addEventListener("click", refreshGame());

// Dit zelf laten toevoegen door speler 

// const bladSteenSchaar = (speler, computer) => {
//   console.log(speler, computer, game)
//   if (speler === computer) {
//     console.log('draw');
//   } else if (speler === 'papier' && computer === 'steen') {
//     computerLeven--;
//     computerLevenEl.innerHTML = computerLeven;
//   } else if (speler === 'steen' && computer === 'schaar') {
//     computerLeven--;
//     computerLevenEl.innerHTML = computerLeven;
//   } else if (speler === 'schaar' && computer === 'papier') {
//     computerLeven--;
//     computerLevenEl.innerHTML = computerLeven;
//   } else {
//     spelerLeven--;
//     spelerLevenEl.innerHTML = spelerLeven;
//   }
// }

const bladSteenSchaar = (speler, computer) => {
  speler === computer ? console.log('draw') :
  speler === 'papier' && computer === 'steen' || speler === 'steen' && computer === 'schaar' || speler === 'schaar' && computer === 'papier' ? (computerLeven--, computerLevenEl.innerHTML = computerLeven) :
  (spelerLeven--, spelerLevenEl.innerHTML = spelerLeven);
}

