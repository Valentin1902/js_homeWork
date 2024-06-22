const Language = ["Pyton", "C++", "C#", "PHP"];
const wrongLanguage = "Java Script";

for (let i of Language) {
  if (i === wrongLanguage) {
    console.log(`Значення ${wrongLanguage} в списку немає, додаємо в масив`);
  }
}

Language.push("Java Script");
console.log(Language);
