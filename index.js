/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 19;

if (votingAge > 18) {
    console.log("You are old enough to vote");
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let example = 28;

if(example === 28) {
    example = 30;
    console.log(example);
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let str = "1999";
const num = parseInt("1999");


//Task d: Write a function to multiply a*b 


const multiply = (a, b) => {
    return a * b;
}



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 


const dogYears = myAge => myAge * 7;

dogYears(27);


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  

const dogFeeder = (age, weight) => {
    //Adult Dogs at least 1 year
    if(age >= 1 && weight <= 5) {
        console.log("5% of their body weight");
    } else if (age >= 1 && weight <= 10 && weight >= 6) {
        console.log("4% of their body weight");
    } else if (age >= 1 && weight <= 15 && weight >= 11){
        console.log("3% of their body weight");
    } else if (age >= 1 && weight > 15){
        console.log("2% of their body weight");
    }
    //Puppies less than 1 year
    else if (age <= 0.4 && age > 0.2 && weight) {
        console.log("10% of their body weight")
    } else if (age <= 0.7 && age > 0.4 && weight) {
        console.log("5% of their body weight")
    } else if (age < 1 && age > 0.7 && weight) {
        console.log("10% of their body weight")
    }
    
}

dogFeeder(0.3, 15)




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

  const game = userChoice => {
      let computerChoice = Math.round(Math.random() * 2);
      computerChoice = getChoice(computerChoice);

      if (userChoice === computerChoice) {
          return 'Draw';
      }

      if (userChoice === 'paper' && computerChoice === 'rock' ||
          userChoice === 'rock' && computerChoice === 'scizzors' ||
          userChoice === 'scizzors' && computerChoice === 'paper') {
          return 'Victory';
      }

      return 'Defeat';
  }

const getChoice = (choice) => {
    if (choice === 0) {
        return "paper";
    } 
    
    if (choice === 1) {
        return "rock";
    }
    
    if(choice === 2) {
        return "scizzors";
    }
}

console.log(game("paper"))
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

const metricConverter = measurementInKm => measurementInKm * 0.621;




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  

const otherMetricConverter = measurementInFeet => measurementInFeet * 30.48;



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSongo
// the function should take a starting number as an argument and count down - at each iteration it should lg (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  

const annoyingSong = num => {
    while (num >= 0) {
        let newNum = num - 1;
        if(num > 1){
            console.log(num + " bottles of soda on the wall, "+ num + " bottles of soda, take one down pass it around " + newNum + " bottles of soda on the wall")
        } else if (num === 1) {
            console.log(num + " bottle of soda on the wall, "+ num + " bottle of soda, take one down pass it around " + newNum + " bottles of soda on the wall")
        } else {
            console.log("ALL THE POP IS GONE!")
        }
        num--;
    }
}




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
const grader = studentGrade => {
    let letterGrade;
    if(studentGrade >= 90) {
        letterGrade = "A";
        return letterGrade;
    } else if (studentGrade >= 80 && studentGrade <= 90) {
        letterGrade = "B";
        return letterGrade;
    }else if (studentGrade >= 70 && studentGrade <= 80) {
        letterGrade = "C";
        return letterGrade;
    }else if (studentGrade >= 60 && studentGrade <= 70) {
        letterGrade = "D";
        return letterGrade;
    }else {
        letterGrade = "F";
        return letterGrade;
    }
}

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





