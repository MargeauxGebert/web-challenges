const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];
const words2 = ["x", "Hello"];
function findLongestWord(words) {
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    let current = words[i];
    console.log("longestWord so far: ", longestWord);
    console.log("current visited word: ", current);
    if (current.length > longestWord.length) {
      longestWord = current;
      console.log("is bigger update!");
    }
    console.log("-------------------------");
  }
  return longestWord;
}
console.log(findLongestWord(words));
// step 0: create a variable and name it longestWord and initialize it to an empty string longestWord = "Inception" => 9
// step 1: using an array method to visit all words in the words array
// step 2: use length property to find how long each word is Psycho => 6
// step 3: if the length of the current word is larger than the longestWord, then update the longestWord variable
// step 4: return longestWord
