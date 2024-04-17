class ApiRequest {

    /**
     * @param {string} videoUrl
     * @param {string} downloadOption
     */
    constructor(videoUrl, downloadOption = "all") {
        this.videoId        = null;
        this.videoUrl       = videoUrl;
        this.downloadOption = downloadOption;
    }

    /**
     * @return {string}
     */
    serialize() {
        return JSON.stringify({
            video_id:        this.videoId,
            video_url:       this.videoUrl,
            download_option: this.downloadOption
        });
    }

}