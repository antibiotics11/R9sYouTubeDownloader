class Api {

    constructor(apiServerUrl) {
        this.apiServerUrl    = apiServerUrl;
        this.apiLastRequest  = null;
        this.apiLastResponse = null;
    }

    /**
     * @param {ApiRequest} request
     * @param handler
     * @return {void}
     */
    async sendRequest(request, handler) {

        this.apiLastRequest  = request;
        this.apiLastResponse = null;

        const requestBody = this.apiLastRequest.serialize();
        const response = await fetch(this.apiServerUrl, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Origin": "localhost"
            },
            body: requestBody
        }).then(async response => {
            const responseBody = await response.text();
            this.apiLastResponse = ApiResponse.deserialize(responseBody);

            handler(this.apiLastResponse);
        })

    }

    /**
     * @returns {ApiResponse|null}
     */
    retrieveResponse() {
        return this.apiLastResponse;
    }


}