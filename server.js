const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('App is running'))

const PORT = process.env.PORT || 6999

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`))