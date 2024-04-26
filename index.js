let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXZ"
let alphabet_reversed = ""


let alphabet_arr = []

for (let i = 0; i < alphabet.length; i++) {
    let item = {
        idx: i + 1,
        letter: alphabet[i]
    };
    alphabet_arr.push(item)
}


for (let i = alphabet.length - 1; i >= 0; i--) {
    alphabet_reversed += alphabet[i]
}


console.log(alphabet_arr)
console.log(alphabet_reversed)
