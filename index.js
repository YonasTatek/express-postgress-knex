var app =require('express')()
var port =process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.send("hello yi")
})
app.listen(port)
