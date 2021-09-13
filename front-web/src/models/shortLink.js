class Url {
    constructor(id, originalUrl, shortLink, expirationDate) {
        this.id = id;
        this.originalUrl = originalUrl;
        this.shortLink = shortLink;
        this.expirationDate = expirationDate;
    }
};

export default Url;