const axios = require('axios');

class Sender {
    static async sendAd(target, message) {
        // Validasi input
        if (!target || typeof target !== 'string') {
            throw new Error("Parameter 'target' harus berupa string dan tidak boleh kosong.");
        }
        if (!message || typeof message !== 'string') {
            throw new Error("Parameter 'message' harus berupa string dan tidak boleh kosong.");
        }

        try {
            // Kirim permintaan ke endpoint API
            const response = await axios.post("https://api.boostifyhub.id/send", {
                api_key: '3572aefee6b464e9856eff72eb4d01f5', // Ganti dengan environment variable jika perlu
                target,
                delay: 5,
                content: message,
                messageType: 'text',
            });

            // Kembalikan data respons
            return response.data;
        } catch (error) {
            // Tangani kesalahan dan log jika perlu
            console.error("Gagal mengirim pesan:", error.message);
            if (error.response) {
                console.error("Respons error:", error.response.data);
            }
            throw new Error("Pesan tidak dapat dikirim. Periksa konfigurasi atau koneksi API.");
        }
    }

    static async send(target, message) {
        // Validasi input
        if (!target || typeof target !== 'string') {
            throw new Error("Parameter 'target' harus berupa string dan tidak boleh kosong.");
        }
        if (!message || typeof message !== 'string') {
            throw new Error("Parameter 'message' harus berupa string dan tidak boleh kosong.");
        }

        try {
            // Kirim permintaan ke endpoint API
            const response = await axios.post("https://api.boostifyhub.id/send", {
                api_key: '3572aefee6b464e9856eff72eb4d01f5', // Ganti dengan environment variable jika perlu
                target,
                content: message,
                messageType: 'text',
            });

            // Kembalikan data respons
            return response.data;
        } catch (error) {
            // Tangani kesalahan dan log jika perlu
            console.error("Gagal mengirim pesan:", error.message);
            if (error.response) {
                console.error("Respons error:", error.response.data);
            }
            throw new Error("Pesan tidak dapat dikirim. Periksa konfigurasi atau koneksi API.");
        }
    }

}

module.exports = Sender;
