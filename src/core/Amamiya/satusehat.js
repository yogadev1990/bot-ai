const itemsearch = async (query) => {
    const token = "bkwAaLO5bMKLnmUeNsDwHRDUuQAA";
    const auth = { headers: { Authorization: `Bearer ${token}` } };

    try {
        const response = await axios.get(`https://api-satusehat-stg.dto.kemkes.go.id/kfa-v2/products/all?page=1&size=10&product_type=farmasi&keyword=${query}`, auth);
        const items = response.data.items.data;

        let itemDetails = `*Amamiya-San*\n`;

        items.forEach(item => {
            const itemName = item.name; // Accessing the name correctly
            const itemLink = item.kfa_code;
            const itemStat = item.dosage_form.name; // Corrected from dosageform to dosage_form
            const namadagang = item.nama_dagang;
            const dosisperunit = item.dose_per_unit; // Fixed typo: 'dosisperunit' should be 'dosis_per_unit'
            const volume = item.volume;
            const satuan = item.volume_uom_name; // Fixed typo: 'satuan' should be 'volume_uom_name'

            itemDetails += `\n*Nama Obat:* ${itemName}\n`;
            itemDetails += `*Kode Obat:* ${itemLink}\n`;
            itemDetails += `*Bentuk Sediaan:* ${itemStat}\n`;
            itemDetails += `*Banyaknya:* ${volume} ${satuan}\n`;
            itemDetails += `*Dosis per Unit:* ${dosisperunit}\n`; // Ensure to use the correct variable
            itemDetails += `*Nama dagang:* ${namadagang}\n`;
        });

        return itemDetails;
    } catch (error) {
        console.error('Error fetching item data:', error.message);
        console.error('Error stack trace:', error.stack); // Show the error stack for debugging
        return 'Terjadi kesalahan dalam pencarian item.';
    }
}