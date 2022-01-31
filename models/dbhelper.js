const db=require('../dbConfig')

module.exports={
    add
}
async function add(hi){
    await db('users').insert(insert({name: hi}))
    return "hi"
}