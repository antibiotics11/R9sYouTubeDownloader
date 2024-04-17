class ApiResponse {

    /**
     * @param {string}      status
     * @param {string|null} data
     * @param {string|null} message
     */
    constructor(status, data, message) {
        this.status  = status;
        this.data    = data;
        this.message = message;
    }

    /**
     * @param {string} response
     * @return {ApiResponse}
     */
    static deserialize(response) {
        const jsonObject = JSON.parse(response);
        return new ApiResponse(
            jsonObject.status,
            jsonObject.data,
            jsonObject.message
        );
    }

}