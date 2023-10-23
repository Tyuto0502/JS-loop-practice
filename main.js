//for
var countries = ["Japan","America","Germany","France","Spain","Canada"];
for (var i = 0; i < 6; i++) {
  console.log(countries[i]);
}


//for in
var scoures = {"国語": 75,"数学": 70,"英語": 80};
for (value in scoures) {
  console.log(scoures[value]);
}


//for of
var countries = [
  {"Region": "Asia","Coutry": "Japan",},
  {"Region": "North America","Coutry": "America",},
  {"Region": "Europe","Coutry": "Germany",},
];
for (country of countries) {
  console.log(country);
};
