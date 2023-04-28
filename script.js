const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
  // {
  //   text: "Jonas",
  // },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

console.log(CATEGORIES.find((cat) => cat.name === "society"));

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list
factsList.innerHTML = "";

// Load data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://ihfbixlasyxinwhlkizu.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloZmJpeGxhc3l4aW53aGxraXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE2NjU1MzksImV4cCI6MTk5NzI0MTUzOX0.wj0mEOArlF0yYODSUETvxGi2vS43a7_49DZICZWhZHQ",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloZmJpeGxhc3l4aW53aGxraXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE2NjU1MzksImV4cCI6MTk5NzI0MTUzOX0.wj0mEOArlF0yYODSUETvxGi2vS43a7_49DZICZWhZHQ",
      },
    }
  );
  const data = await res.json();
  //  console.log(data);
  const filteredData = data.filter((fact) => fact.category === "society");

  //  createFactsList(filteredData);

  createFactsList(data);
}

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
      ${fact.text}
      React is being developed by Meta (formerly Facebook)
    <a
      class="source"
      href="https://opensource.fb.com/"
      target="_blank"
      >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span>    
    </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

// console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
// console.log([7, 64, 6, -23, 11].find((el) => el > 10));

/*let votesInteresting = 23;
let votesMindblowing = 5;
const text = "Lisbon is the capital of Portugal";

votesInteresting = votesInteresting + 1;
votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindblowing;
console.log("Upvotes:", totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);

console.log(parseInt("24.533ccc"));
*/

// function calcFactAge(year) {
//   const currentYear = new Date().getFullYear();
//   const age = currentYear - year;

//   if (age >= 0) return age;
//   else return `Improssible year. Year needs to be less or equal ${currentYear}`;

//   return age;
// }

// const age1 = calcFactAge(2015);
// console.log(age1);
// console.log(calcFactAge(2020));
// console.log(calcFactAge(2037));

// const calcFactAge2 = (year) => year <= new Date().getFullYear();

// console.log(calcFactAge2(2015));
// console.log(calcFactAge2(2037));

// let votesInteresting = 20;
// let votesMindlowing = 5;

// console.log(votesInteresting === votesMindlowing);
// if (votesInteresting === votesMindlowing) {
//   alert("This fact is equally interesting and mindblowing");
// } else if (votesInteresting > votesMindlowing) {
//   console.log("Interesting fact!");
// } else if (votesInteresting < votesMindlowing) {
//   console.log("Mindblowing fact!!");
// }

// // false values: 0, '', null, undefined
// // truhy value: everything else...
// if (votesMindlowing) {
//   console.log("MINDBLOWING FACT!!");
// } else {
//   console.log("Not so special...");
// }

// let votesFalse = 7;
// const totalUpvotes = votesInteresting + votesMindlowing;

// const message =
//   totalUpvotes > votesFalse
//     ? "The fact is true"
//     : "Might be false, check more sources...";

// //alert(message);

// const text = "Lisbon is the capital of Portugal";
// const uppertext = text.toUpperCase();
// alert(uppertext);

// const str = `The current fact is "${uppertext}". It is ${calcFactAge(
//   2015
// )} years old. It is probably ${
//   totalUpvotes > votesFalse ? "correct" : "not true"
// }.`;
// alert(str);

// const fact = ["Lisbon is the capital of Portugal", 2015, true];
// console.log(fact);
// console.log(fact.length);
// console.log(fact(fact.length - 1));

// const [text, createdIn] = fact;
// console.log(createdIn);

// const newFact = [...fact, "society"];
// console.log(newFact);

// const times10 = [2, 4, 6, 8].forEach(function (el) {
//   console.log(times10);
// });

// const factObj = {
//   text: "Lisbon is the capital of Portugal",
//   category: "society",
//   createdIn: 2015,
//   isCorrect: true,
//   createSummary: function () {
//     return `The face ${
//       this.text
//     } is from the category ${this.category.toUpperCase()}`;
//   },
// };

// console.log(factObj.text);
// console.log(factObj["text"]);
// console.log(factObj["createdIn"]);

// const { category, isCorrect } = factObj;
// console.log(category);
// console.log(factObj.createSummary());

/*
const times10 = [2, 4, 6, 8].map((el) => el * 10);

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);


function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else return `Improssible year. Year needs to be less or equal ${currentYear}`;

  return age;
}

const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factAges);
console.log(factAges.join("-"));
*/
