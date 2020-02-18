let html = `<label for="input">Enter the value</label>
<input type="text" name="" id="put"> <input onclick="value_()" type="button" value="check"> <br>
<input type="radio" class="rad" name="group1" onclick="place(this.id)" id="indexOf"> indexOf <br>
<input type="radio" class="rad" name="group1" onclick="place(this.id)" id="lastIndexOf"> lastIndexOf <br>
<input type="radio" class="rad" name="group1" onclick="place(this.id)" id="charAt"> charAt <br>
<input type="radio" class="rad" name="group1" onclick="place(this.id)" id="endWith"> endWith <br>
<input type="radio" class="rad" name="group1" onclick="place(this.id)" id="include"> include <br>
<input type="radio" class="rad" name="group1" onclick="place(this.id)" id="subString"> subString <br>
<input type="radio" class="rad" name="group1" onclick="place(this.id)" id="split"> split <br>
<input type="radio" class="rad" name="group1" onclick="place(this.id)" id="replace"> replace <br>
`;
let Content = `This content for check with string function`;
document.getElementById("root").innerHTML = html;
document.getElementById("content").innerText = Content;

var _date;

function place(id) {
    document.getElementById("put").placeholder = id;
    _date = id;
}

function value_() {
    var Dates = document.getElementById("put").value;
    if (_date == "indexOf") {
        document.getElementById("result").innerText = "index number is " + Content.indexOf(Dates);
    } else if (_date == "lastIndexOf") {
        document.getElementById("result").innerText = "Last index number is " + Content.lastIndexOf(Dates);
    } else if (_date == "charAt") {
        document.getElementById("result").innerText = "find the character is  " + Content.charAt(Dates);
    } else if (_date == "endWith") {
        document.getElementById("result").innerText = "end with this character " + Content.endsWith(Dates);
    } else if (_date == "include") {
        document.getElementById("result").innerText = "index number is " + Content.include(Dates);
    } else if (_date == "subString") {
        document.getElementById("result").innerText = "index number is " + Content.subString(Dates);
    } else if (_date == "split") {
        document.getElementById("result").innerText = "index number is " + Content.split(Dates);
    }
    else if (_date == "replace") {
        document.getElementById("result").innerText = "index number is " + Content.replace(Dates);
    }

}




