document.body.innerText = document.location.search

var params = new URLSearchParams(location.search)
document.body.innerText = params.get("text")

var text = params.get("text")
var word = params.get("word")
var replace = params.get("replace")

var words = text.split(" ")
document.body.innerText = words[0]
var count = 0
for(var i =0; i<words.length; i++) {
    console.log(words[i])

    if (words[i] === word) {
        count++
    }

}
console.log(count)

for(var i = 0; i <words.length; i++){
    if(words[i] === word){
        words[i] = replace
    }
}

for(var i =0; i<words.length; i++){
    console.log(words[i])
}
var result = ""
for(var i =0; i<words.length; i++){
result = result+ words[i] + " "
}
console.log(result)