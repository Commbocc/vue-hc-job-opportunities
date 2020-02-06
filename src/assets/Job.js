export default class Job {

    constructor(x) {
        for (let [key, value] of Object.entries(x)) {
            this[key] = value
        }
        this.expDate = new Date(this.expiration)
    }

    get expired() {
        if (this.expDate instanceof Date && !isNaN(this.expDate)) {
            return (this.expDate < new Date()) ? true : false
        } else {
            return false
        }
    }
}