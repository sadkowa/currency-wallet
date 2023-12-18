class ExchangeRatesApi {

    url = `https://openexchangerates.org/api/`

    getData(endpoint) {
        return fetch(`${this.url}${endpoint}.json?app_id=${process.env.REACT_APP_API_KEY}`)
            .then(this.handleErrors)
            .then(resp => {
                return resp.json()
            })
    }

    handleErrors(resp) {
        if (!resp.ok) {
            throw Error(resp.statusText);
        } return resp
    }
}

export default ExchangeRatesApi
