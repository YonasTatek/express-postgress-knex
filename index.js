var app =require('express')()
var port =process.env.PORT || 3000;
var add =require('./models/dbhelper');
app.get('/',(req,res)=>{
    var e="yonas is the best"
   add(e).then(()=>res.send("sucess")).catch(()=>res.send("bitch"))
})
app.listen(port)
