/**
 * a node application
 */

import app from './App';  // let app = require('./App')

const port = process.env.PORT || 3001

app.listen(port, (error: object) => {
    if (error) return console.log(error)

    return console.log(`Server is running on port ${port}`)
})