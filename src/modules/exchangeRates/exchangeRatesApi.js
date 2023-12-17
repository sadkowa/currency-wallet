class ExchangeRatesApi {
    
    url = `https://openexchangerates.org/api/`

    getData(endpoint) {
        console.log(process.env.REACT_APP_API_KEY)
        return fetch(`${this.url}${endpoint}.json?app_id=d1625d57d6de48b6be8461f339bbc23c`)
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
