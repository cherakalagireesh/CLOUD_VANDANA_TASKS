// let sentence = "   This    is sunday    ";
let sentence ="This is a sunny day";

let result = "";
let word = "";
let index = 0;

while (index < sentence.length) {
  ch = sentence.charAt(index);
  while ( index< sentence.length && ch >= "a" || ch <= "z" && ch >= "A" && ch <= "Z") {
    word += ch;
    ch = sentence.charAt(++index);
  }

  if (word.length == 0) {
    result += ch;
    index++;
  } else {
    result += word.split("").reverse().join("");
    word = "";
  }
}

if(result.length > 0) {
  result+=word;
}

console.log(result);
