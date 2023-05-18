var keys = ['a','b','c','d','e','f','g',
'h','i','j','k','l','m','n','o','p','q',
'r','s','t','u','v','w','x','y','z','ç']

var words = ['desoxirribonucleico','beija flor','abacate',
'fliperama','emu','terracota','liquidificador','padaria',
'ficus','riboflavina','bigorna', 'planador','acelerador',
'cinema','clarevidencia','bico de busen', 'tartarugas ninjas']

//var words = ['tartarugas ninjas']

var letters = keys.length
var contwords = words.length
var drawnword
var wordtype
var wordcount
var word = []
var letter
var quantletras = 0

for (var i = 0; i < letters; i++) {
    var divb = document.createElement('div')
    var button = document.createElement('button')
    document.getElementById('keyboard').appendChild(divb)
    divb.setAttribute('id', i)
    document.getElementById(i).appendChild(button)
    button.setAttribute('val', keys[i])
    button.setAttribute('id',  keys[i])
    button.setAttribute('onclick','getLetter(this.id)')
    button.innerHTML = keys[i]
    //----------------------formatacao---------------
    divb.setAttribute('class', 'col')
    button.setAttribute('class', 'btn btn-outline-primary')
    button.setAttribute('type', 'button')
    button.style.width = '45px'
    button.style.marginLeft = '-10px'    
}

function prize(){
    
    var diff = contwords
    var rand = Math.random()
    rand = Math.floor(rand * diff)
    return rand

}

drawnword = words[prize()]

console.log(drawnword)

var wordspace = drawnword.split(' ')

wordcount = wordspace.length

if (wordcount > 1){
    wordtype = true
}
else {
    wordtype = false
}


if (wordtype == true){
    for(var i = 0; i < wordcount; i++){
        word[i] = wordspace[i].split('')
    }
} else {
    word[0] = wordspace[0].split('')
}

for(var i=0; i < word.length; i++){
    for (var j=0; j < word[i].length; j++){
        var input = document.createElement('input')
        input.setAttribute('type','text')
        input.setAttribute('class', 'form-control')
        input.setAttribute('value', word[i][j])
        input.setAttribute('id', quantletras)
        input.style.color = 'white'
        document.getElementById('word').appendChild(input)
        quantletras = quantletras + 1
   }
    var espaco = document.createElement('input')
    espaco.setAttribute('type','text')
    espaco.setAttribute('class', 'form-control')
    espaco.setAttribute('value', " ")
    espaco.style.border.color = 'white'
    document.getElementById('word').appendChild(espaco)
}

function getLetter(id){
    letter = id
    verifica()
}

function verifica(){
    var acertos = 0
    for(var i=0; i < quantletras; i++){
        if(letter == document.getElementById(i).value){
            document.getElementById(i).style.color = 'black'
            acertos = acertos + 1
        }
    }
    if(acertos == 0){
        document.getElementById("stem").style.visibility = 'visible'
    }
}
