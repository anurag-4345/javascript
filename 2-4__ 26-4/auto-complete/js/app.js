let search = document.getElementById("input")
let matchList = document.getElementById("matchList")

let Fresh;

let getData = async text => {
    url = "js/data.json";
    let res = await fetch(url);
    let value = await res.json();

    //get match the context 
    let matches = value.filter(value => {
        let reg = new RegExp(`^${text}`, `gi`)
        return value.name.match(reg) || value.lastName.match(reg);
    })
    if (text.length === 0) {
        matches = [];
        matchList.innerHTML = "";
    }
    BoxOutput(matches)
}

BoxOutput = matches => {
    if (matches.length > 0) {
        const html = matches.map(
            matches => `<li class="list-group-item">${matches.name} ${matches.lastName}</li>`
        ).join();
        matchList.innerHTML = html;
    }
}

// search.addEventListener("input", () => getData(search.value))
let Started = deboucing(getData(search.value), 300);
// search.addEventListener("input", )


function deboucing(func, limit) {
    let timer;
    return function () {
        let context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args)
        }, limit);
    }
}


