const dbEngine =process.env.DB.ENVIRONMENT || "development";
const config=require('./knexfile.js')[dbEngine]

var db =require('knex')(config)
module.exports=db;