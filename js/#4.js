const languages = ["1-Pyton", "2-C++", "3-C#", "4-PHP"];
const cleanLanguages = [];

for (const language of languages) {
  cleanLanguages.push(language.split("-")[1]);
}

console.log(cleanLanguages);
