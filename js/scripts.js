function Ticket(movie, cost, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
  this.cost = cost;
} 

Ticket.prototype.costAssign = function() {
  if (this.movie = "shrek" || "black widow") {
    this.cost = 12
  } else {
    this.cost = 10
  }
}



/*
time === matinee $8
time ==== regular cost of movie
 
if regular cost then

age === child - $4
age === reg adult $0
age === senior -$5


if time === matinee;
  cost = $8
  else cost = this.cost

if age === senior;
  cost = this.cost - $5
  else if age === child
    cost = this.cost - $4
    else 
      return this.cost
































/* function Movie(name, cost) {
  this.name = name;
  this.cost = cost;
}

let shrek = new Movie("Shrek3D", 10);
let blackWidow = new Movie("Black Widow", 12);
let harryPotter12 = new Movie("Harry Potter 12", 12);

function movieTimeVal(userInput) {
  const valueFromUser = parseInt(userInput)
  return valueFromUser;
}

function ageVal(userInput) {
  const valueFromUser = parseInt(userInput)
  return valueFromUser;
}

function costCalculate(movieCostKeyValue) {
  
  this.cost * movieTimeVal();
  return 
} */




