function countWords(sentence) {
  var index = {},
      words = sentence.toLowerCase().split(" ");

    words.forEach(function (word) {
        if (!(index.hasOwnProperty(word))) {
            index[word] = 0;
        }
        index[word]++;
    });

    return index;
}
var fs = require('fs');
var filedata = fs.readFileSync('data.txt', 'utf8');
let data = filedata.toString();
let wc = countWords(data);
console.log(wc);