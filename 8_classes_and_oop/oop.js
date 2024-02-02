//procedural prog
// let baseSalary = 30_000
// let overtime = 10
// let rate= 20

// function getWage(baseSalary, overtime, rate){
//     return baseSalary + (overtime* rate)
// }

//           ENCAPSULATION
// Reduce complexity + incerease reusability

let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
  
    getWage: function() {
      return this.baseSalary + (this.overtime * this.rate);
    }
  };
  
//           ABSTRACTION- simpler interface, 
//Reduce the Impact of change-  if we chng inner or pvt methods, none of these changes
//will leadk to the outside bcoz we dont have any code that touches these methods outside of their content object

//we delete a mthd or chng in parameters but none of these changes will impact the rest of the applications code



//      INHERITANCE
// mechanisam that allows u to eliminate the redundant code


//     POLYMORPHISM
// refactor ugly switch/case statements
//eg- elmemets.render( instead of textbox, select, checkbox - rendering multiple elm in procedural way)
//  allows u to get ride of long if - else statements


