// already there 

// staat er al in: is aanpasbaar naar keuze 

let spelerWapen = '';
let computerWapen = '';
let spelerLevenEl = document.getElementById('spelerLeven');
let computerLevenEl = document.getElementById('computerLeven');

const keuzes = ['papier', 'steen', 'schaar'];

let game = 1;
let spelerLeven = 5;
spelerLevenEl.innerHTML = spelerLeven;
let computerLeven = 5;
computerLevenEl.innerHTML = computerLeven;

// Eerste stap: alle elementeren selecteren en aanspreken 

const keuzeSpeler = document.getElementById('keuzeSpeler');
const keuzeComputer = document.getElementById('keuzeComputer');
const btnBlad = document.getElementById('btnBlad');
const btnSteen = document.getElementById('btnSteen');
const btnSchaar = document.getElementById('btnSchaar');
const btnReset = document.getElementById('btnReset');

btnBlad.addEventListener('click', () => {
  spelerWapen = keuzes[0];
  computerWapen = keuzes[Math.floor(Math.random() * keuzes.length)];
  keuzeSpeler.innerHTML = `<img src="img/${spelerWapen}.png" alt="${spelerWapen}" class="speler__keuze__afbeelding">`;
  keuzeComputer.innerHTML = `<img src="img/${computerWapen}.png" alt="${computerWapen}" class="speler__keuze__afbeelding">`;
  bladSteenSchaar(spelerWapen, computerWapen);
  game++;
});

btnSteen.addEventListener('click', () => {
  spelerWapen = keuzes[1];
  computerWapen = keuzes[Math.floor(Math.random() * keuzes.length)];
  keuzeSpeler.innerHTML = `<img src="img/${spelerWapen}.png" alt="${spelerWapen}" class="speler__keuze__afbeelding">`;
  keuzeComputer.innerHTML = `<img src="img/${computerWapen}.png" alt="${computerWapen}" class="speler__keuze__afbeelding">`;
  bladSteenSchaar(spelerWapen, computerWapen);
  game++;
});

btnSchaar.addEventListener('click', () => {
  spelerWapen = keuzes[2];
  computerWapen = keuzes[Math.floor(Math.random() * keuzes.length)];
  keuzeSpeler.innerHTML = `<img src="img/${spelerWapen}.png" alt="${spelerWapen}" class="speler__keuze__afbeelding">`;
  keuzeComputer.innerHTML = `<img src="img/${computerWapen}.png" alt="${computerWapen}" class="speler__keuze__afbeelding">`;
  bladSteenSchaar(spelerWapen, computerWapen);
  game++;
});


const refreshGame = () => {
  game = 0;
  spelerLeven = 3;
  computerLeven = 3;
}

btnReset.addEventListener('click', refreshGame())

// Dit zelf laten toevoegen door speler 

const bladSteenSchaar = (speler, computer) => {
  console.log(speler, computer, game)
  if (speler === computer) {
    console.log('draw');
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