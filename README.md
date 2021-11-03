# _Places You've Been_

#### _Movie Tickets_

#### By _**Kim Brannian and Matt Luker**_

## Technologies Used

* _HTML_
* _Markdown_
* _Git Repositories_
* _Javascript_
* _Bootstrap_
* _jQuery_

## Description

# Specs/Tests


/*
Describe: Movie {}
* _Test: It will create a Movie constructor 
  Code: function Movie(name, cost) {
    this.name = name;
    this.cost = cost;
  }
  Expected Output: undefined

* _Test: It will create a new Movie object with key value pairs assigned
  Code: let shrek = new Movie("Shrek3D", 10);
  Expected Output: Movie {name: 'Shrek3D", cost: 10}

* _Test: It will create 3 new Movie objects with key value pairs assigned.
  Code: let shrek = new Movie("Shrek3D", 10);
        let blackWidow = new Movie("Black Widow", 12);
        let harryPotter12 = new Movie("Harry Potter 12", 12);
  Expected Output: Movie {name: 'Shrek3D', cost: 10}
                   Movie {name: 'Black Widow', cost: 12}
                   Movie {name: 'Harry Potter 12', cost: 12}

Describe: movieTimeVal();
* _Test: It will declare a variable equal to a input.
  Code: movieTimeVal("1");
  Expected Output: '1'
  
  _Test: It will declare a variable equal to a input and turn that input into a number value.
  Code: movieTimeVal("1");
  Expected Output: 1

Describe: ageVal();
* _Test: It will declare a variable equal to a input.
  Code: ageVal(".9");
  Expected Output: '.9'

  _Test: It will declare a variable equal to a input and turn that input into a number value.
  Code: movieTimeVal("1");
  Expected Output: 1

Describe: costCalculate();
* _Test: It will multiply a input value by 2
  Code: costCalculate(10);
  Expected Output: 20

_Second Test:

Describe: It will create a movie ticket constructor
Code: function Ticket(movie, cost, time, age) {
      this.movie = movie;
      this.cost = cost;
      this.time = time;
      this.age = age;
}
Expected Output: undefined

Describe: It will create a movie object.
Code: let testMovie = new Ticket("Shrek", "10", "matinee", "child");
Expected Output: Expected Output: Movie {'Shrek3D", cost: 10, time: matinee, }





## Setup/Installation Requirements

* _Navigate to https://github.com/kpundt93/places
* _Click on the green "Code" button and copy the repository URL or click on the copy button_
* _Open the terminal on your desktop_
* _Once in the terminal, use it to navigate to your desktop folder_
* _Once inside your desktop folder, use the command "git clone https://github.com/kpundt93/places"_
* _After cloning the project, navigate into it using the command "cd places"_
* _Use the command "git remote" to confirm the creation of the new local repository_
* _Open the project with the code editor of your choice_

_Note: when using the commands listed above, do not include the quotation marks. They are used here for readability._

## Known Bugs

_No known issues_

## License
_MIT License: https://opensource.org/licenses/MIT_
_Copyright (c) 2021 Katie Pundt, Kim Brannian_

## Contact Information
_Matt Luker, 
_Kim Brannian, brannian@gmail.com_


/*
Describe: Movie {}
* _Test: It will create a Movie constructor 
  Code: function Movie(name, cost) {
    this.name = name;
    this.cost = cost;
  }
  Expected Output: undefined

* _Test: It will create a new Movie object with key value pairs assigned
  Code: let shrek = new Movie("Shrek3D", 10);
  Expected Output: Movie {name: 'Shrek3D", cost: 10}

* _Test: It will create 3 new Movie objects with key value pairs assigned.
  Code: let shrek = new Movie("Shrek3D", 10);
        let blackWidow = new Movie("Black Widow", 12);
        let harryPotter12 = new Movie("Harry Potter 12", 12);
  Expected Output: Movie {name: 'Shrek3D', cost: 10}
                   Movie {name: 'Black Widow', cost: 12}
                   Movie {name: 'Harry Potter 12', cost: 12}

Describe: movieTimeVal();
* _Test: It will declare a variable equal to a input.
  Code: movieTimeVal("1");
  Expected Output: '1'
  
  _Test: It will declare a variable equal to a input and turn that input into a number value.
  Code: movieTimeVal("1");
  Expected Output: 1

Describe: ageVal();
* _Test: It will declare a variable equal to a input.
  Code: ageVal(".9");
  Expected Output: '.9'

  _Test: It will declare a variable equal to a input and turn that input into a number value.
  Code: movieTimeVal("1");
  Expected Output: 1

Describe: costCalculate();
* _Test: It will multiply a input value by 2
  Code: costCalculate(10);
  Expected Output: 20





