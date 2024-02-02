//  CALL


var emp1 = { name: 'akshara', surname: 'sharma'}
var emp2 = { name: ' aniket', surname: 'patni'}

function invite( greeting1, greeting2){
    console.log( greeting1 + " " + this.name + " " + this.surname + " " + greeting2)
}

invite.call(emp1, "helo","how r u")   //greet1 - helo, greet2 - how r u
invite.call(emp2, "helo", "how r u")

// APPLY


var emp1 = { name: 'akshara', surname: 'sharma'}
var emp2 = { name: ' aniket', surname: 'patni'}

function invite( greeting1, greeting2){
    console.log( greeting1 + " " + this.name + " " + this.surname + " " + greeting2)

}
invite.apply(emp1, ["helo","how r u"])
invite.apply(emp2, ["helo", "how r u"])

//BIND


var emp1 = { name: 'akshara', surname: 'sharma'}
var emp2 = { name: ' aniket', surname: 'patni'}

function invite( greeting1, greeting2){
    console.log( greeting1 + " " + this.name + " " + this.surname + " " + greeting2)

}

var inviteEmp1= invite.bind(emp1)
var inviteEmp2= invite.bind(emp2)

inviteEmp1("helo","how r u")
inviteEmp2('helo', "how r u")



