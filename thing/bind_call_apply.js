let name = {
    firstName:"anurag",
    lastName : "sinha",
}
function program(city,state) {
    return `${this.firstName} ${this.lastName} in ${city} at ${state}`
}

//************ call / apply / bind **************
_call = program.call(name,"delhi","tilak nagar");
//this function is return data 
_apply = program.apply(name,["delhi","tilak nager"])
//apply same call() , in arguments get in array block
_bind = program.bind(name,"delhi","west delhi")
//not invoke directly they create clone 
console.log(_bind);


//************ for each / map / filter **************
var names = [1,2,3,4]
names.forEach(element => {
  console.log(element)
});
//forEach can't return any value, this is only views the values
var _map = names.map(element => element+1 )
//map() is return new array with assign the value
console.log(_map)
var _filter = names.filter(element => element>1)
//filter() is return new array with right condition
console.log(_filter)
