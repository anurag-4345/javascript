console.log('welcome anurag sir');
let password;
const btn = document.getElementById("btn");
let box1 = document.getElementById("box");
const inputZip = document.getElementById("inputZip");
const inputCity = document.getElementById("inputCity");
const inputState = document.getElementById("inputState");
const inputName4 = document.getElementById("inputName4");
const inputEmail4 = document.getElementById("inputEmail4");
const inputPassword = document.getElementById("inputPassword");
const inputPassword4 = document.getElementById("inputPassword4");
const inputAddress4 = document.getElementById("inputAddress");
let html = "";
let box = [];

inputName4.addEventListener("blur", () => {
    let regex = /^[a-zA-z]([a-zA-z0-9]){1,10}$/
    let str = this.inputName4.value
    if (regex.test(str)) {
        inputName4.classList.remove("is-invalid")
        box.push(1);
    } else {
        inputName4.classList.add("is-invalid")
        box.pop(1);
    }
})
inputEmail4.addEventListener("blur", () => {
    let regex = /^([a-zA-z0-9\-\.\_]+)@([a-zA-z0-9\-\.\_]+).([a-zA-z]){2,7}$/
    let str = this.inputEmail4.value
    if (regex.test(str)) {
        inputEmail4.classList.remove("is-invalid")
        box.push(2)
    } else {
        inputEmail4.classList.add("is-invalid")
        box.pop(2);
    }
})
inputPassword4.addEventListener("blur", () => {
    let regex = /^[a-zA-z]([a-zA-z0-9]){1,15}$/
    str = this.inputPassword4.value
    password = str
    if (regex.test(str)) {
        inputPassword4.classList.remove("is-invalid")
        box.push(3)
    } else {
        inputPassword4.classList.add("is-invalid")
        box.pop(3);
    }
})
inputPassword.addEventListener("blur", () => {
    let regex = /^[a-zA-z]([a-zA-z0-9]){1,15}$/
    let str = this.inputPassword.value
    if (regex.test(str)) {
        if (password == str) {
            inputPassword.classList.remove("is-invalid")
            box.push(4)
        }
    }
    else {
        inputPassword.classList.add("is-invalid")
        box.pop(4);
    }
})
inputZip.addEventListener("blur", () => {
    let regex = /^[0-9]([0-9]){3,6}$/
    let str = this.inputZip.value
    if (regex.test(str)) {
        inputZip.classList.remove("is-invalid")
        box.push(0)
    } else {
        inputZip.classList.add("is-invalid");
        box.pop(0);
    }
})
btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (box.length == 5) {
        html = `<div class="alert alert-success alert-dismissible fade show"                role="alert">
           <strong>Registration:</strong> welcome our website
           <button type="button" class="close" data-dismiss="alert" aria-label="Close">
           <span aria-hidden="true">&times;</span>
           </button>
           </div>`
        box1.innerHTML = html
           setTimeout(() => {
            box1.innerHTML = ""
        }, 3000);
    } else {
        html = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
               <strong>Error:</strong> please fill all flied & check password 
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
                </button>
              </div>`
            box1.innerHTML =html
        setTimeout(() => {
            box1.innerHTML = ""
        }, 3000);
    }
})
async function fetchData() {
    let user = await fetch("js/data.json")
    let value = await user.json()
    return value;
}
let a = fetchData();

// for (const key in data) {
// }
inputCity.innerHTML = html
function ChangeState() {
    a.then(res => {
        html = ""
        i = inputCity.selectedIndex
        res.countries[i].states.forEach((element) => {
            html += `<option>${element}</option>`
        });
        inputState.innerHTML = html
    })
}
a.then(res => {
    res.countries.forEach(element => {
        html += `<option>${element.country}</option>`
    });
    inputCity.innerHTML = html;
})
