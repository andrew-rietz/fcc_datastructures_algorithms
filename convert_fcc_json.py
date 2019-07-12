var fs = require('fs');
var path = require('path');

// Buffer mydata
var BUFFER = bufferFile('../public/mydata.png');

function bufferFile(relPath) {
  return fs.readFileSync(path.join(__dirname, relPath)); // zzzz....
}



module.exports.convertJSONtoJS = function (filename){
  const FCC_JSON = filename.getElementById("json").value;
  const fccFilesObject = JSON.parse(FCC_JSON);
  let entries = Object.entries(fccFilesObject);
  filename.getElementById("output").value = entries[0][1];
}
