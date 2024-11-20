const axios = require('axios');
class Sender {
    static async send(target, message) {
    const response = await axios.post("https://api.boostifyhub.id/send", {
        api_key: '3572aefee6b464e9856eff72eb4d01f5',
        target,
        content: message,
        messageType: 'text'
    });
    return response.data;
}}
module.exports = Sender;