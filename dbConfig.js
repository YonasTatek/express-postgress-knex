const dbEngine =process.env.DB.ENVIRONMENT || "development";
const config=require('./knexfile')[dbEngine]

var db =require('knex')(config)