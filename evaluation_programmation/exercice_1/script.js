let fishList = [
   ["Ordre", "Famille", "Nom vernaculaire", "Nom binomial"],
["Aulopiformes", "Synodontidae",	"Poisson lézard",	"Synodus saurus"],
["Aulopiformes",	"Anguilliformes",	"Anguille",	"Anguilla anguilla"],
["Aulopiformes",	"Congridae",	"Congre",	"Conger conger"],
["Atheriniformes",	"Atherinidae",	"Joël",	"Atherina boyeri"	]
];

function fish(array) {
  let i = 1;
  let currentElement;
  let maintable = document.createElement("table");
  document.body.appendChild(maintable);
  let table_head = document.createElement("thead");
  maintable.appendChild(table_head)
  let tablebody = document.createElement("tbody");
  maintable.appendChild(tablebody);
  let tablerow = document.createElement("tr");
  tablebody.appendChild(tablerow);
  // let tablerow = document.createElement("tr");
  // tablebody.appendChild(tablerow);
  while (i < array.length) {
    currentElement = array[i];
    let tablerow1 = document.createElement("tr");
    tablebody.appendChild(tablerow1);
    let j = 0;
    let currentElement1;
    while (j < currentElement.length) {
      currentElement1 = currentElement[j];

      let tabledata = document.createElement("td");
      tabledata.textContent = currentElement1;
      tablerow.appendChild(tabledata);


      j++;
    }
    i++;
  }
}
fish(fishList);
