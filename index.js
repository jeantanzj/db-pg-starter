require('dotenv').config()
const { client } = require('./db')
const main = async () =>{
    const res = await client.query('SELECT $1::text as message', ['Hello world!'])
    console.log(res.rows[0].message) // Hello world!
}

;(async () => {
    await client.connect()
    await main()
    await client.end()
})()