// already there

// staat er al in: is aanpasbaar naar keuze

let spelerWapen = "";
let computerWapen = "";
let spelerLevenEl = document.getElementById("spelerLeven");
let computerLevenEl = document.getElementById("computerLeven");

const keuzes = ["papier", "steen", "schaar"];
const fire = document.getElementById('fire');

let spelerLeven = 5;
let computerLeven = 5;

const toonLeven = (levens) => {
  let output = '';
  for (let i = 1; i <= levens; i++) {
    output += `<div class="speler__leven"></div>`;
  }
  return output;
}

spelerLevenEl.innerHTML = toonLeven(spelerLeven);
computerLevenEl.innerHTML = toonLeven(computerLeven);

// Eerste stap: alle elementeren selecteren en aanspreken 

// let spelerNaam = prompt('Wat is jouw naam?');
// document.getElementById('spelerNaam').innerHTML = spelerNaam;

const keuzeSpeler = document.getElementById('keuzeSpeler');
const keuzeComputer = document.getElementById('keuzeComputer');
const btnBlad = document.getElementById('btnBlad');
const btnSteen = document.getElementById('btnSteen');
const btnSchaar = document.getElementById('btnSchaar');
const btnReset = document.getElementById('btnReset');
const spelerWin = document.getElementById('spelerWin');
const computerWin = document.getElementById('computerWin');
const fireWin = document.getElementById('fireWin');

btnBlad.addEventListener('click', () => progressGame(0));

btnSteen.addEventListener('click', () => progressGame(1));

btnSchaar.addEventListener('click', () => progressGame(2));

const progressGame = (spelerKeuze) => {
  spelerWapen = keuzes[spelerKeuze];
  computerWapen = keuzes[Math.floor(Math.random() * keuzes.length)];
  keuzeSpeler.innerHTML = `<img src="img/${spelerWapen}.png" alt="${spelerWapen}" class="speler__keuze__afbeelding">`;
  keuzeComputer.innerHTML = `<img src="img/${computerWapen}.png" alt="${computerWapen}" class="speler__keuze__afbeelding">`;
  bladSteenSchaar(spelerWapen, computerWapen);
  spelerLevenEl.innerHTML = toonLeven(spelerLeven);
  computerLevenEl.innerHTML = toonLeven(computerLeven);
  endGame(spelerLeven, computerLeven);
}

// Dit zelf laten toevoegen door speler 

const bladSteenSchaar = (speler, computer) => {
  if (speler === computer) {
    return;
  } else if (speler === 'papier' && computer === 'steen') {
    computerLeven--;
    computerLevenEl.innerHTML = computerLeven;
  } else if (speler === 'steen' && computer === 'schaar') {
    computerLeven--;
    computerLevenEl.innerHTML = computerLeven;
  } else if (speler === 'schaar' && computer === 'papier') {
    computerLeven--;
    computerLevenEl.innerHTML = computerLeven;
  } else {
    spelerLeven--;
    spelerLevenEl.innerHTML = spelerLeven;
  }
}

fire.addEventListener('click', () => {
  computerLeven = 0;
  computerLevenEl.innerHTML = toonLeven(computerLeven);
  hideKeuzes();
  fireWin.classList.remove('hidden');
})

const endGame = (checkSpeler, checkComputer) => {
  if (checkSpeler === 0) {
    hideKeuzes();
    computerWin.classList.remove('hidden');
  } else if (checkComputer === 0) {
    hideKeuzes();
    spelerWin.classList.remove('hidden');
  } else {
    return;
  }
}

const hideKeuzes = () => {
  btnBlad.classList.add('hidden');
  btnSteen.classList.add('hidden');
  btnSchaar.classList.add('hidden');
}

const resetGame = () => {
  spelerLeven = 5;
  computerLeven = 5;
  spelerLevenEl.innerHTML = toonLeven(spelerLeven);
  computerLevenEl.innerHTML = toonLeven(computerLeven);
  spelerWin.classList.add('hidden');
  computerWin.classList.add('hidden');
  fireWin.classList.add('hidden');
  btnBlad.classList.remove('hidden');
  btnSteen.classList.remove('hidden');
  btnSchaar.classList.remove('hidden');
}

btnReset.addEventListener("click", resetGame);

// const bladSteenSchaar = (speler, computer) => {
//   speler === computer ? console.log('draw') :
//   speler === 'papier' && computer === 'steen' || speler === 'steen' && computer === 'schaar' || speler === 'schaar' && computer === 'papier' ? (computerLeven--, computerLevenEl.innerHTML = computerLeven) :
//   (spelerLeven--, spelerLevenEl.innerHTML = spelerLeven);
// }

