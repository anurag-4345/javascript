let actBtn = document.getElementById("actBtn")
let meinBtn = document.getElementById("meinBtn")
url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";

let openFun = getData(url);
openFun.then(res => res);
$(() => {
    let val;
    // country 
    $("#inBtn,#chBtn,#brBtn,#auBtn,#itBtn").click((e) => {
        val = e.currentTarget.innerText;
        e.currentTarget.innerText = actBtn.innerText;
        actBtn.innerText = val;
        url = `https://newsapi.org/v2/top-headlines?country=${val[0]}${val[1]}&category=${meinBtn.innerText}&apiKey=4742584d5ae742ecadec29a90191ab9f`;
        console.log(url);
        const resVal = getData(url);
        resVal.then(ree =>console.log(ree));
    });
    // type of news
    $("#sciBtn,#entBtn,#busBtn,#gamBtn,#tecBtn").click((e) => {
        val = e.currentTarget.innerText;
        e.currentTarget.innerText = meinBtn.innerText;
        meinBtn.innerText = val;
        url = `https://newsapi.org/v2/top-headlines?country=${val[0]}${val[1]}&category=${actBtn.innerText}&apiKey=4742584d5ae742ecadec29a90191ab9f`;
       console.log(url);
        const resVal = getData(url);
        resVal.then(ree =>console.log(ree));
    })
})
async function getData(url) {
    let html = ""
    let user = await fetch(url);
    let object = await user.json();

    for (const key in object) {
        html = `
        <div class="card-columns">
            <div class="card">
              <img class="card-img-top" src="${object["articles"][0]["urlToImage"]}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${object["articles"][0]["title"]}</h5>
                <p class="card-text">${object["articles"][0]["content"]} <a href="${object["articles"][0]["url"]}" target="_blank" class="badge badge-secondary" >for more Details</a></p>
                <p class="card-text"> Author by -${object["articles"][0]["author"]}</p>
              </div>
            </div>
            <div class="card p-3">
              <blockquote class="blockquote mb-0 card-body">
              <img class="img-thumbnail p-2" src="${object["articles"][2]["urlToImage"]}">
              <p>${object["articles"][2]["title"]}</p>
                <footer class="blockquote-footer">
                  <small class="text-muted">
                    ${object["articles"][2]["content"]} <a href="${object["articles"][2]["url"]}" target="_blank" class="badge badge-secondary" >for more Details</a> <cite title="Source Title">${object["articles"][1]["title"]}</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div class="card">
              <img class="card-img-top" src="${object["articles"][3]["urlToImage"]}" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">${object["articles"][3]["title"]}</h5>
                <p class="card-text">${object["articles"][3]["content"]} <a href="${object["articles"][3]["url"]}" target="_blank" class="badge badge-secondary" >for more Details</a></p>
                <p class="card-text"><small class="text-muted">${object["articles"][3]["publishedAt"]}</small></p>
                </div>
            </div>
            <div class="card bg-primary text-white text-center p-3">
              <blockquote class="blockquote mb-0">
                <p>${object["articles"][1]["title"]}</p>
                <footer class="blockquote-footer">
                  <small class="text-warning">
                  ${object["articles"][1]["content"]} <cite title="Source Title">${object["articles"][1]["author"]}</cite>
                  <a href="${object["articles"][1]["url"]}" target="_blank" class="badge badge-secondary" >for more Details</a>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">${object["articles"][4]["title"]}</h5>
                <p class="card-text"> ${object["articles"][4]["content"]} <a href="${object["articles"][4]["url"]}" target="_blank" class="badge badge-secondary" >for more Details</a></p>
                <p class="card-text"><small class="text-muted">${object["articles"][4]["publishedAt"]}</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img" src="${object["articles"][5]["urlToImage"]}" alt="Card image">
            </div>
            <div class="card p-3 text-right">
              <blockquote class="blockquote mb-0">
                <p>${object["articles"][5]["title"]}</p>
                <footer class="blockquote-footer">
                  <small class="text-muted">
                  ${object["articles"][5]["content"]}<a href="${object["articles"][5]["url"]}" target="_blank" class="badge badge-secondary" >for more Details</a><cite title="Source Title">${object["articles"][0]["author"]}</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${object["articles"][6]["title"]}</h5>
                <p class="card-text">${object["articles"][6]["content"]}
                <a href="${object["articles"][6]["url"]}" target="_blank" class="badge badge-secondary" >for more Details</a></p>
                <p class="card-text"><small class="text-muted">${object["articles"][6]["publishedAt"]}</small></p>
              </div>
            </div>
          </div>`
    }
    let box = document.getElementById("newsDiv")
    box.innerHTML = html
    console.log(object);
}

