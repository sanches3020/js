const response = await fetch('/js/app/03_words.sql');
const text = await response.text();

var words  = text.split("\n")
var duplicates  = 0;
var unique = [];

for(var i = 0; i< words.length; i++) {
    var j = 0;

    for (var j = 0; j < unique.length; j++) {
        if (words[i] == unique[j]) {
            break;
        }
    }
    if (j == unique.length) {
        unique[unique.length] = words[i];
    } else {
        duplicates++;
    }
}
var result = unique.join("\n");
console.log("Кол-во удаленных дубликатов:", duplicates);
console.log("Кол-во уникальных строк:", unique.length);