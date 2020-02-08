
const express =require("express");
const app = express();
const pass = [1,2,3];
app.get(`/id/:${pass}`,(req,res)=>{
    var box = req.params.pass;
    box--;
    res.send(data[box])
})
data = [
        {m:"thing",ag:1},
        {m:"go",ag:2},
        {m:"social",ag:3}
        ];
app.listen(1234,()=>console.log("server on 1234"));
