const fs = require("fs");
var file = 'input.txt';
fs.exists(file, function (exists) {
    setTimeout(() => { 
        //file exists 2s
        if (exists) {
            setTimeout(() => { 
                //file stat  2s
                fs.stat(file, function (err, stat) {
                    console.log("stat is done")
                    if (err) {
                        throw err;
                    }
                    setTimeout(() => {
                        //isfile timeout 2s

                        if (stat.isFile()) {
                            console.log("isfile() is done")
                            setTimeout(() => {
                                //readfile interval 2s
                                fs.readFile(file, "utf8", function (err, data) {
                                    if (err) throw err;
                                    console.log("file reading is done")
                                    console.log(data);
                                });

                            }, 2000);
                        }
                    }, 2000)
                });
            }, 2000);
        }
    }, 2000);
});