/**
 * an node app with typescript
 */
import * as express from 'express'


class App {
    public app: express.Application

    constructor() {
        this.app = express.default()
        this.mountRoutes()
    }

    private mountRoutes(): void {
        const router = express.Router()

        router.get('/', (request, response) => {
            response.json({ message: 'Hello World' });
        })

        this.app.use('/', router)

    }
}

export default new App().app