const express = require('express')
require('dotenv').config()
// const dotenv = require('dotenv')
// const config = dotenv.config
// config()

const port = process.env.PORT

const app = express()

app.get('/', (req, res) => {
    res.json({
        nombre: "Sahid",
        edad: 21,
        pais: "México"
    })
})

app.post('/', (req, res) => {
    res.json([
        {
            title: "Hacking etico"
        }, 
        {
            title: "Musica"
        },
        {
            title: "Anime"
        }
    ])
})

// TODO: DELETE => 5 paises que quieran visitar PUT => 3 idiomas que les gustaria dominar

app.listen(port, () =>  {
    console.log(`Server started at port: ${port}`)
})
