var person = {
  firstName: 'Brandon',
  lastName: 'Chin',
  favoriteFood: 'food',
  age: 2
};
console.log(person);

var fullName = "The person's name is:" + person.firstName + ' ' + person.lastName;
console.log(fullName);

person.job = 'Accountant';
console.log("The person's current job is:" + person.job);

person.previousJob = 'Accounting Specialist';
console.log("The person's preivous job is:" + person.previousJob);

console.log(person);
