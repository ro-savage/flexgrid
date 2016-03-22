/* Helper scripts for generating percentage value names for css */

var fs = require('fs');

var total =  100;
var text = ""
var i = 0


for (; i <= total;) {
  text = text +   ".col-xs-"+i+"-offset, .col-"+i+"-offset {\r margin-left: "+i+"%;\r}\r\r"
  i = i + 5;
}

// for (; i <= total;) {
//   text = text +   ".col-xl-"+i+" {\r -webkit-flex-basis: "+i+"%;\r -ms-flex-preferred-size: "+i+"%;\r flex-basis: "+i+"%;\r max-width: "+i+"%;\r}\r\r"
//   i = i + 5;
// }


// for (; i <= total;) {
//   text = text + ".col-xl-" + i +",\r"
//   i = i + 5;
// }
//
// i = 0
// for (; i <= total;) {
//   text = text + ".col-xl-" + i +"-offset,\r"
//   i = i + 5;
// }

fs.writeFile("./output.txt", text, function(err) {
  if(err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});
