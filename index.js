import { fifaData } from "./fifa.js";

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

// const finals2014 = fifaData.filter(function (item) {
//   return item.Year === 2014 && item.Stage === "Final";
// });
// console.log("Task 1", finals2014);

// //(a) Home Team name for 2014 world cup final
// console.log("task 1a", finals2014[0]["Home Team Name"]);

// //(b) Away Team name for 2014 world cup final
// console.log("task 1b", finals2014[0]["Away Team Name"]);

// //(c) Home Team goals for 2014 world cup final
// console.log("task 1c", finals2014[0]["Home Team Goals"]);

// //(d) Away Team goals for 2014 world cup final
// console.log("task 1d", finals2014[0]["Away Team Goals"]);

// //(e) Winner of 2014 world cup final */
// console.log("task 1e", finals2014[0]["Win conditions"]);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

const newArray = [];

function getFinals(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].Stage === "Final") {
      newArray.push(data[i]);
    }
  }
  return newArray;
}

getFinals(fifaData);

console.log(newArray);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

const years = [];

function getYears(array, cb) {
  cb(array);
  return years;
}

getYears(fifaData, function getFinals(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].Stage === "Final") {
      years.push(data[i].Year);
    }
  }
  return years;
});

console.log(years);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */

const winners = [];

function getWinners(array, cb) {
  cb(array);
  return winners;
}

getWinners(fifaData, function getFinals(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].Stage === "Final") {
      if (data[i]["Home Team Goals"] > data[i]["Away Team Goals"]) {
        winners.push(data[i]["Home Team Name"]);
      } else {
        winners.push(data[i]["Away Team Name"]);
      }
    }
  }
  return winners;
});

console.log(winners);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

const arrayStrings = [];

function getWinnersByYear(array, cb1, cb2) {
  cb1(array);
  cb2(array);
  for (let i = 0; i < years1.length; i++) {
    arrayStrings.push(`In ${years1[i]}, ${winners2[i]} won the world cup!`);
  }
  return arrayStrings;
}

let years1 = [];
let winners2 = [];

getWinnersByYear(
  fifaData,
  function getFinals(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].Stage === "Final") {
        years1.push(data[i].Year);
      }
    }
    return years1;
  },
  function getFinals(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].Stage === "Final") {
        if (data[i]["Home Team Goals"] > data[i]["Away Team Goals"]) {
          winners2.push(data[i]["Home Team Name"]);
        } else {
          winners2.push(data[i]["Away Team Name"]);
        }
      }
    }
    return winners2;
  }
);

console.log(arrayStrings);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(callBack) {
  const finals = callBack;
  const goals = finals.flatMap((cur) => [
    cur["Home Team Goals"],
    cur["Away Team Goals"],
  ]);
  const goalsAvg = (
    goals.reduce((acc, cur) => acc + cur, 0) / finals.length
  ).toFixed(2);
  console.log(goalsAvg);
  return goalsAvg;
}
getAverageGoals(getFinals(fifaData));

/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
  /* code here */
}

/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo() {
  console.log("its working");
  return "bar";
}
export default {
  foo,
  getFinals,
  getYears,
  getWinners,
  getWinnersByYear,
  getAverageGoals,
};
