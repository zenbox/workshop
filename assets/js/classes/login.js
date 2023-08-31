export default class Login {
    /**
     * @desc    Constructor
     *
     * @param   {string} selector to identify the form
     * @returns {void}
     */
    constructor(formSelector) {
        this.loginForm = document.querySelector(formSelector)
        this.loginForm.addEventListener("submit", this.login.bind(this))
    }

    /**
     * @desc    Login process (event handler)
     *
     * @param   {event object} form, submitted the login
     * @returns {void}
     */
    login(event) {
        event.preventDefault()

        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        this._sendFormData(data)
    }

    /**
     * @desc    Set fetch options
     *
     * @param   {object} json data
     * @returns {void}
     */
    _setSendOptions(data) {
        if (!data) {
            throw new Error("No data")
        }

        const options = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(data),
        }
        return options
    }

    /**
     * @desc    Set fetch url
     *
     * @returns {void}
     * @todo    set url dynamically
     */
    _setSendUrl() {
        const url = "http://localhost:3000/login"
        return url
    }

    /**
     * @desc    Send form data to server
     *
     * @param   {object} json data
     * @returns {void}
     */
    async _sendFormData(data) {
        const url = this._setSendUrl()
        const options = this._setSendOptions(data)

        try {
            await fetch(url, options)
                .then(async (response) => {
                    console.log(response)
                    await response.json()
                })
                .then((data) => {
                    // todo: set header content dynamically
                    console.dir(data)
                    const header = document.querySelector("#header")
                    header.innerHTML = `Hallo ${data.firstname} ${data.lastname}`
                    this.loginForm.classList.add("hidden")
                })
        } catch (error) {
            // console.error(error)
            // console.dir(error)
            console.log(
                `%c- - - -,
FETCH ERROR:,
${error.name}
${error.message}
${error.at}

STACK:
${error.stack}
- - - -`,
                "color: red;  background: hsl(0,70%,85%); font-size: 0.75rem;"
            )
        }
    }
}

const clientData = { key: "value" }
await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(clientData),
})
    .then(async (response) => {
        console.dir(response)
        await response.json()
    })
    .then((serverData) => console.dir(serverData))
