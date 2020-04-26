let name = {
    name: "Anurag",
    lastName: "Thakur",

}

function printName(func,args1,args2) {
    console.log(`${this.name} ${this.lastName} method ${func} , ${args1} , ${args2}`);
}

//direct invoked the function and get args
printName.call(name, "call","1st args for {this} ,"," multiple args simple func")

//direct invoked the function and get args in []
printName.apply(name, ["apply","1st args for {this} ","multiple args pass in []"])

// bind will create copy of function
let newPrintName = printName.bind(name , "1st args for {this} ", " create new function")
newPrintName()

// popifill of bind
// function curnine
//