function splitAndMerge(string, separator) {
  let words = string.split("");
  words = words.replace(" ", "");
  return words.join(separator);
}


console.log(splitAndMerge("My name is John"," "));