const fs = require("fs");
const Caching = require("node-cache");
const cache = new Caching();
const pathcontact = `${__dirname}/../data/contacts.json`;
const gruplangganan = `${__dirname}/../data/subscribed.json`;

// Fungsi untuk memuat data grup berlangganan
const loadSubscribedGroups = async () => {
  const fileBuffer = fs.readFileSync(gruplangganan, "utf-8");
  const subscribedGroups = JSON.parse(fileBuffer);
  return subscribedGroups;
};

// Fungsi untuk memeriksa apakah grup sudah berlangganan
const isGroupSubscribed = async (from) => {
  const subscribedGroups = await loadSubscribedGroups();
  return subscribedGroups.includes(from);
};

// Fungsi untuk menambahkan grup ke daftar berlangganan
const addGroupSubscription = async (from) => {
  const subscribedGroups = await loadSubscribedGroups();
  if (!subscribedGroups.includes(from)) {
    subscribedGroups.push(from);
    fs.writeFileSync(gruplangganan, JSON.stringify(subscribedGroups));
  }
};

// Fungsi untuk menghapus grup dari daftar berlangganan
const removeGroupSubscription = async (from) => {
  const subscribedGroups = await loadSubscribedGroups();
  const updatedGroups = subscribedGroups.filter((group) => group !== from);
  fs.writeFileSync(gruplangganan, JSON.stringify(updatedGroups));
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
  return !!contact; // Mengembalikan true jika kontak ditemukan
};

const removeContact = async (from) => {
  const contacts = await loadContact();
  const contactsNew = contacts.filter((contact) => contact.from != from);
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
  isGroupSubscribed,
  addGroupSubscription,
  removeGroupSubscription,
};

