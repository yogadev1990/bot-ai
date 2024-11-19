const fs = require("fs");
const Caching = require("node-cache");
const cache = new Caching();
const pathcontact = `${__dirname}/../data/contacts.json`;
const pathDelayed = `${__dirname}/../data/delayed.json`;
const pathSubscription = `${__dirname}/../data/subscriptions.json`;

// Memuat data langganan
const loadSubscriptions = () => {
  if (!fs.existsSync(pathSubscription)) {
    fs.writeFileSync(pathSubscription, JSON.stringify([])); // Buat file jika belum ada
  }
  const fileBuffer = fs.readFileSync(pathSubscription, "utf-8");
  return JSON.parse(fileBuffer);
};

// Menyimpan data langganan baru atau memperbarui grup yang sudah ada
const saveSubscription = (from, durationInDays) => {
  const subscriptions = loadSubscriptions();
  const now = new Date();
  const existing = subscriptions.find((item) => item.from === from);

  if (existing) {
    existing.startDate = now;
    existing.expiryDate = new Date(now.getTime() + durationInDays * 24 * 60 * 60 * 1000);
  } else {
    subscriptions.push({
      from,
      startDate: now,
      expiryDate: new Date(now.getTime() + durationInDays * 24 * 60 * 60 * 1000),
    });
  }

  fs.writeFileSync(pathSubscription, JSON.stringify(subscriptions));
};

// Mengecek apakah grup masih berlangganan
const checkSubscription = (from) => {
  const subscriptions = loadSubscriptions();
  const existing = subscriptions.find((item) => item.from === from);

  if (!existing) return false;

  const now = new Date();
  return now <= new Date(existing.expiryDate); // Langganan masih berlaku jika waktu saat ini <= waktu kedaluwarsa
};

// Menghapus langganan setelah masa berlaku habis (opsional)
const removeExpiredSubscriptions = () => {
  const subscriptions = loadSubscriptions();
  const now = new Date();
  const updatedSubscriptions = subscriptions.filter(
    (item) => new Date(item.expiryDate) > now
  );

  fs.writeFileSync(pathSubscription, JSON.stringify(updatedSubscriptions));
};
// Memuat data delay dari file
const loadDelayed = () => {
  if (!fs.existsSync(pathDelayed)) {
    fs.writeFileSync(pathDelayed, JSON.stringify([])); // Buat file jika belum ada
  }
  const fileBuffer = fs.readFileSync(pathDelayed, "utf-8");
  return JSON.parse(fileBuffer);
};

// Simpan atau perbarui waktu delay untuk grup
const saveDelayed = (from) => {
  const delayedData = loadDelayed();
  const now = new Date();
  const existing = delayedData.find((item) => item.from === from);

  if (existing) {
    existing.lastSent = now;
  } else {
    delayedData.push({ from, lastSent: now });
  }

  fs.writeFileSync(pathDelayed, JSON.stringify(delayedData));
};

// Cek apakah pesan sudah bisa dikirim (4 jam delay)
const checkDelay = (from) => {
  const delayedData = loadDelayed();
  const existing = delayedData.find((item) => item.from === from);

  if (!existing) {
    return true; // Jika belum ada, boleh kirim
  }

  const lastSent = new Date(existing.lastSent);
  const now = new Date();
  const fourHours = 4 * 60 * 60 * 1000;

  return now - lastSent >= fourHours; // Jika sudah lebih dari 4 jam, boleh kirim
};

const loadContact = async () => {
  const fileBuffer = fs.readFileSync(pathcontact, "utf-8");
  const contacts = JSON.parse(fileBuffer);
  return contacts;
};

const saveContact = async (from) => {
  const contact = { from };
  const contacts = await loadContact();
  contacts.push(contact);
  fs.writeFileSync(pathcontact, JSON.stringify(contacts));
};

const checkContact = async (from) => {
  const contacts = await loadContact();
  const contact = contacts.find((contact) => contact.from === from);
  if (!contact) {
    return false;
  }
  return true;
};

const removeContact = async (from) => {
  const contacts = await loadContact();
  const contactsNew = contacts.filter((contact) => contact.from != from);
  console.log(contactsNew);
  fs.writeFileSync(pathcontact, JSON.stringify(contactsNew));
};

const manageMessagesCache = (number, role, content, isGemini = true) => {
  const newContent = isGemini
    ? { parts: [{ text: content }] }
    : { content: content };

  let msgs = cache.get("messages" + number) ?? [];

  const messages = [
    ...msgs,
    {
      role,
      ...newContent,
    },
  ];

  cache.set("messages" + number, messages, 1800);

  return messages;
};

module.exports = {
  loadContact,
  saveContact,
  checkContact,
  removeContact,
  manageMessagesCache,
  loadDelayed,
  saveDelayed,
  checkDelay,
  loadSubscriptions,
  saveSubscription,
  checkSubscription,
  removeExpiredSubscriptions,
};
