// plentyOfDevs Dating Age Calculator

/*
    - should take 3 parameters 
        - name
        - yearOfBirth
        - currentYear
    - return string: name + " is " + age "years old"
    - ageCalculator("Frodo", yearOfBirth, currentYear);:
*/

function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;

  return name + ' is ' + age + ' years old.';
}
console.log(ageCalculator('Miranda', 1983, 2015));
console.log(ageCalculator('Ferdinand', 1988, 2015));
