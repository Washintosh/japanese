const dataJson = require("./japaneseDictionary.json");
const data = Object.keys(dataJson.アクセント).map((i) => {
  let word = { id: +i + 1 };
  Object.keys(dataJson).forEach((column) => {
    let nameColumn;
    if (column === "スペイン語") {
      nameColumn = "spanish";
    } else if (column === "平仮名") {
      nameColumn = "hiragana";
    } else if (column === "漢字") {
      nameColumn = "japanese";
    } else {
      nameColumn = "stress";
    }
    word = { ...word, [nameColumn]: dataJson[column][i] };
  });
  return word;
});
console.log(data);
module.exports = data;
