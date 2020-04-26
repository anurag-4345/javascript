let name = {
    name: "Anurag",
    last: "Thakur"
}
function printName(hometown, local, args1, args2) {
    console.log(`${this.name} ${this.last} form ${hometown} in local ${local} 1 ${args1} , 2 ${args2}`);
}


Function.prototype.myBind = function (...args) {
    let obj = this;
    let param = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...param, ...args2])
    }
}

let newPrint = printName.bind(name, "delhi", "perm nagar")
newPrint("args1", "args2")

let newPrint2 = printName.myBind(name, "delhi", "perm nagar");
newPrint2("args1", "args2")
console.log(newPrint2);
