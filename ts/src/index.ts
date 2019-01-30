/**
 * Index für an Webapp
 * @since 2019/01/29  
 * @author Michael
 * @version 1.0.0
 */
import app from './App'

const port = process.env.PORT || 3000

app.listen(port, (err) => {
    if (err) {
        return console.log(err)
    }

    return console.log(`server is now listening on ${port}`)
})
