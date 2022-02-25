'use script';


function myfruits(apple, mango) {


  console.log(apple, mango);
  const fruits = ' the ' + apple + ' kg of apple ' + mango + ' kg of mango ';

  return fruits;


}

const applejuice = myfruits(5, 23);
console.log(applejuice);



// function declaration


function myfunction(birthyear) {
  return 2037 - birthyear;

}
const age1 = myfunction(1991);
console.log(age1)
// function declaration


// function expression


const calage2 = function (birthyear2) {
  return 2037 - birthyear2;
}

const age2 = calage2(1965);
console.log(age2);


console.log(age1, age2);
// function expression

// arrow function

const calage3 = birthyear => 2037 - birthyear;

console.log(calage3(19));
// arrow function


const calAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphin = calAverage(44, 23, 71);
const scoreKolas = calAverage(65, 54, 49);
console.log(scoreDolphin, scoreKolas);

const checkWinner = function (a, b) {

  if (a >= 2 * b) {

    console.log("${scoreDolphin} wins");

  } else if (b >= 2 * a) {

    console.log(" $(scoreKolas) wins");
  } else {

    console.log("no teams win");
  }

}

console.log(checkWinner(scoreDolphin, scoreKolas));




const jonas = {

  firstName: "sidd",
  lastName: "km",
  location: "dvg",
  birthYear: 1997,


  claAge: function () {

    this.age = 2037 - this.birthYear;
    return this.age;

  }
};
console.log(jonas.claAge());




const bodyMassIndex1 = {

  fullName: "mark Miller",
  weight: 78,
  height: 1.69,


  bmi: function () {

    this.bmi = this.weight / this.height ** 2;
    return this.bmi;

  }

}

bodyMassIndex1.bmi();




const bodyMassIndex2 = {

  fullName: "mark Miller",
  weight: 92,
  height: 1.95,


  bmi: function () {

    this.bmi = this.weight / this.height ** 2;
    return this.bmi;



  }
}
bodyMassIndex2.bmi();

console.log(bodyMassIndex1.bmi, bodyMassIndex2.bmi);


// const higherBmi = bmi => bodyMassIndex1.bmi > bodyMassIndex2.bmi ?" bmi1 greter" :" bmi2 is greater" ;

// console.log(higherBmi);

const higherbmi = function (bmi) {


  if (bodyMassIndex1.bmi > bodyMassIndex2.bmi) {

    console.log("bmi1 is greater")
  }


  console.log(higherbmi);
};

