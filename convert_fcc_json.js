const FCC_JSON = document.getElementById("json").value;
const fccFilesObject = JSON.parse(FCC_JSON);
let entries = Object.entries(fccFilesObject);
document.getElementById("output").value = entries[0][1];
