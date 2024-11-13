// 1️⃣ Užduotis: Kurjerio pristatymo patikrinimas

// Įsivaizduokite, kad kuriame kurjerio pristatymo sistemą, kuri patikrina, ar užsakymas bus pristatytas tą pačią dieną.
// Pristatymas tą pačią dieną galimas tik tuo atveju, jei užsakymas buvo pateiktas iki tam tikros valandos (pvz., iki 15h) ir jei prekė yra sandėlyje.

let uzsakymoLaikas = 13; // valanda
const pristatymoLaikas = 15; // valanda
let uzsakytuPrekiuKiekis = 10;
let prekiuKiekisSandelyje = 200;

if (
  uzsakymoLaikas < pristatymoLaikas &&
  uzsakytuPrekiuKiekis < prekiuKiekisSandelyje
) {
  console.log('Pristatysime ta pacia diena');
} else {
  console.log(' Pristatymas ta pacia diena neimanomas');
}

// 2️⃣ Užduotis: Amžiaus kategorijos nustatymas

// Parašykime programą, kuri pagal žmogaus amžių nustato jo amžiaus kategoriją: vaikas, paauglys, suaugęs ar senjoras.
// Taisyklės:

// Jei amžius mažesnis nei 13, žmogus yra vaikas.
// Jei amžius tarp 13 ir 17 (imtinai), žmogus yra paauglys.
// Jei amžius tarp 18 ir 64 (imtinai), žmogus yra suaugęs.
// Jei amžius 65 ar daugiau, žmogus yra senjoras.

let amzius = 25;

if (amzius < 13) {
  console.log('jus esate vaikas');
} else if (amzius >= 13 && amzius <= 17) {
  console.log(' jus esate pauglys');
} else if (amzius >= 18 && amzius <= 64) {
  console.log('jus esate suauges');
} else if (amzius >= 65) {
  console.log('jus esate senjoras');
}

// 3️⃣ Užduotis: Kavinės nuolaidų sistema

// Įsivaizduokite, kad kuriame nuolaidų sistemą kavinei. Priklausomai nuo kliento statuso (pvz., ar jis yra lojalumo programos narys) ir pirkinio sumos, gali būti pritaikoma skirtinga nuolaida.

// Taisyklės:
// Jei klientas yra lojalumo narys ir pirkinio suma yra daugiau nei 20 eurų, jis gauna 20% nuolaidą.
// Jei klientas nėra lojalumo narys, bet pirkinio suma viršija 50 eurų, jis gauna 10% nuolaidą.
// Jei nei viena iš sąlygų netenkinama, nuolaida nepritaikoma.

let pirkinioSuma = 25;
let klientasYraLojalumoProgramoje = true;

if (pirkinioSuma > 20 && klientasYraLojalumoProgramoje === true) {
  let sumaSu20Nuolaida = pirkinioSuma * 0.8;
  console.log(
    'Jums pritaikyta 20% nuolaida ir jums moketi : ',
    sumaSu20Nuolaida
  );
} else if (pirkinioSuma > 50 && klientasYraLojalumoProgramoje === false) {
  let sumaSu10Nuolaida = pirkinioSuma * 0.9;
  console.log('jums pritaikya 10% nuolaida ir jums moketi :', sumaSu10Nuolaida);
} else console.log('jums nepriklauso nuolaida ir jums moketi :', pirkinioSuma);

// 4️⃣ Užduotis: Sporto klubo abonemento kaina

// Sporto klubas siūlo nuolaidas abonementams, priklausomai nuo lankytojo amžiaus ir ar jis studentas.
// Taisyklės:

// Jei lankytojas yra jaunesnis nei 18 metų arba studentas, jis gauna 15% nuolaidą.
// Jei lankytojas vyresnis nei 60 metų, jam taip pat taikoma 15% nuolaida.
// Kitais atvejais nuolaida netaikoma.

let lankytojoAmzius = 23;
let lankytojasYraStundentas = true;
let abonimentokaina = 100;
let sumaSuNuolaida = abonimentokaina * 0.85;
if (lankytojoAmzius < 18 || lankytojasYraStundentas === true) {
  console.log(
    ' Jums pritaikyta jaunimo/Studento 15% nuolaida ir jums moketi:',
    sumaSuNuolaida
  );
} else if (lankytojoAmzius > 60) {
  console.log(
    'Jums pritaikya 15% senjoru nuolaida ir jums moketi',
    sumaSuNuolaida
  );
} else console.log('jums nepriklauso nuolaida ir jums moketi', abonimentokaina);

// 5️⃣ Užduotis: Egzamino įvertinimas pagal balą

// Parašykime programą, kuri pagal surinktą balą nustato, kokį įvertinimą gauna mokinys. Ši užduotis padės mokiniams suprasti, kaip veikia sąlygos ir diapazonai.
// Taisyklės:

let egzanimoBalas = 88;

if (egzanimoBalas >= 90 && egzanimoBalas <= 100) {
  console.log('Puikiai');
} else if (egzanimoBalas >= 75 && egzanimoBalas <= 89) {
  console.log('Gerai');
} else if (egzanimoBalas >= 50 && egzanimoBalas <= 74) {
  console.log('Patenkinamai');
} else if (egzanimoBalas < 50) {
  console.log('Nepatenkinami');
}

// Jei balas yra nuo 90 iki 100, mokinys gauna įvertinimą „Puikiai“.
// Jei balas yra nuo 75 iki 89, įvertinimas yra „Gerai“.
// Jei balas yra nuo 50 iki 74, įvertinimas yra „Patenkinamai“.
// Jei balas yra mažesnis nei 50, įvertinimas yra „Nepatenkinamai“.

// 6️⃣ Užduotis: Kino bilietų kainos nustatymas

// Parašykite programą, kuri apskaičiuoja kino bilieto kainą, atsižvelgiant į lankytojo amžių ir seanso laiką.

// Jei lankytojas yra vaikas (mažiau nei 12 metų), bilieto kaina yra 5 eurai.
// Jei lankytojas yra suaugęs ir eina į dienos seansą (iki 17 val.), bilieto kaina yra 7 eurai.
// Jei lankytojas yra suaugęs ir eina į vakarinį seansą (nuo 17 val.), bilieto kaina yra 10 eurų.
// Jei lankytojas yra senjoras (daugiau nei 65 metų), bilieto kaina yra 6 eurai.

const lankytojoAmziusSeansas = 25;
const seansoLaikas = 18;
let bilietoKaina = 0;

if (lankytojoAmziusSeansas < 12) {
  bilietoKaina = 5;
  console.log('Bilieto kaina yra : ', bilietoKaina, 'eurai');
} else if (lankytojoAmziusSeansas >= 18 && seansoLaikas < 17) {
  bilietoKaina = 7;
  console.log('Bilieto kaina yra : ', bilietoKaina, 'eurai');
} else if (lankytojoAmziusSeansas >= 18 && seansoLaikas >= 17) {
  bilietoKaina = 10;
  console.log('Bilieto kaina yra :', bilietoKaina, 'eurai');
} else if (lankytojoAmziusSeansas > 65) {
  bilietoKaina = 6;
  console.log('Bilieto kaina yra : ', bilietoKaina, 'eurai');
}

// 7️⃣ Užduotis: Atsiskaitymo su nuolaida sistema

// Sukurkite programą, kuri apskaičiuoja galutinę pirkimo sumą, pritaikant nuolaidas pagal savaitės dieną ir pirkinio sumą.

// Jei pirkimo suma viršija 100 eurų ir šiandien yra trečiadienis, taikoma 15% nuolaida.
// Jei pirkimo suma viršija 50 eurų ir šiandien yra penktadienis, taikoma 10% nuolaida.
// Kitais atvejais nuolaida netaikoma.

const savaitėsDiena = 'pirmadienis';
let apsipirkimoSuma = 120;
let nuolaida;

if (apsipirkimoSuma > 100 && savaitėsDiena === 'treciadienis') {
  nuolaida = 15;
  let galutineSuma = apsipirkimoSuma * ((100 - nuolaida) / 100);
  console.log('jums pritaikyta 15% nuolaida , jums moketi', galutineSuma);
} else if (apsipirkimoSuma > 50 && savaitėsDiena === 'penktadienis') {
  nuolaida = 10;
  let galutineSuma = apsipirkimoSuma * ((100 - nuolaida) / 100);
  console.log('jums pritaikyta 15% nuolaida , jums moketi', galutineSuma);
} else {
  console.log('jums nepriklauso nuolaida , moketi : ', apsipirkimoSuma);
}

// 8️⃣ Užduotis: Laikmatis darbo laiko patikrinimui

// Parašykite programą, kuri patikrina, ar įvestas laikas yra darbo laikas.

// Darbo laikas: nuo 9:00 iki 17:00.
// Jei laikas patenka į darbo laiką, programa turi grąžinti pranešimą „Dabar darbo laikas“.
// Jei laikas nepatenka į darbo laiką, programa turi grąžinti pranešimą „Dabar ne darbo laikas“.

const tikrinamasLaikas = 1800;
const darboLaikoPradzia = 900;
const darboLaikoPabaiga = 1700;

if (
  tikrinamasLaikas >= darboLaikoPradzia &&
  tikrinamasLaikas <= darboLaikoPabaiga
) {
  console.log('Dabar darbo laikas');
} else {
  console.log('Dabar ne darbo laikas');
}

// 9️⃣ Užduotis: Mokesčių apskaičiavimas pagal pajamas

// Sukurkite programą, kuri apskaičiuoja mokesčius pagal gyventojo pajamas.

// Jei pajamos yra mažesnės nei 10,000 eurų per metus, mokestis yra 5%.
// Jei pajamos yra tarp 10,000 ir 30,000 eurų, mokestis yra 10%.
// Jei pajamos yra tarp 30,000 ir 60,000 eurų, mokestis yra 15%.
// Jei pajamos yra daugiau nei 60,000 eurų, mokestis yra 20%.

let pajamos = 25000;
let mokestis;

if (pajamos < 10000) {
  mokestis = 5;
  let pajamosPoMokesciu = pajamos * ((100 - mokestis) / 100);
  console.log('jums pritaikyti 5% mokesciu , jums liko', pajamosPoMokesciu);
} else if (pajamos >= 10000 && pajamos < 30000) {
  mokestis = 10;
  let pajamosPoMokesciu = pajamos * ((100 - mokestis) / 100);
  console.log('jums pritaikyti 10% mokesciu , jums liko', pajamosPoMokesciu);
} else if (pajamos >= 30000 && pajamos < 60000) {
  mokestis = 15;
  let pajamosPoMokesciu = pajamos * ((100 - mokestis) / 100);
  console.log('jums pritaikyti 15% mokesciu , jums liko', pajamosPoMokesciu);
} else if (pajamos > 60000) {
  mokestis = 20;
  let pajamosPoMokesciu = pajamos * ((100 - mokestis) / 100);
  console.log('jums pritaikyti 20% mokesciu , jums liko', pajamosPoMokesciu);
}

// 🔟 Užduotis: Bibliotekos knygų skolinimo trukmės patikrinimas

// Parašykite programą, kuri nustato, ar knygos skolinimosi trukmė yra leistina, priklausomai nuo skaitytojo statuso.

// Jei skaitytojas yra studentas, jis gali skolintis knygą 30 dienų.
// Jei skaitytojas yra mokytojas, jis gali skolintis knygą 60 dienų.
// Jei skaitytojas yra bibliotekos narys, bet nei studentas, nei mokytojas, jis gali skolintis knygą 14 dienų.
// Jei skaitytojas nėra bibliotekos narys, jis negali skolintis knygos.

const skaitytojoStatusas = 'Studentas';
let skolinimoTerminas;

if (skaitytojoStatusas === 'Studentas') {
  skolinimoTerminas = 30;
  console.log('jums leidziama knyga skolintis ', skolinimoTerminas);
} else if (skaitytojoStatusas === 'Mokytojas') {
  skolinimoTerminas = 60;
  console.log('jums leidziama knyga skolintis ', skolinimoTerminas);
} else if (
  skaitytojoStatusas === 'Narys' &&
  skaitytojoStatusas !== 'Studentas' &&
  skaitytojoStatusas !== 'Mokytojas'
) {
  skolinimoTerminas = 14;
  console.log('jums leidziama knyga skolintis ', skolinimoTerminas);
} else {
  console.log('jus negalite skolintis knygos nes nesate bibliotekos narys');
}
