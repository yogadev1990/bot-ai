const fs = require("fs");
const Caching = require("node-cache");
const cache = new Caching();
const pathDelayed = `${__dirname}/../data/delayed.json`;
const pathSubscription = `${__dirname}/../data/subscriptions.json`;
const pathEnv = `${__dirname}/../../../.env`;

// Fungsi untuk membaca file .env
const loadEnv = () => {
  if (!fs.existsSync(pathEnv)) {
    fs.writeFileSync(pathEnv, "");
  }
  const envContent = fs.readFileSync(pathEnv, "utf-8");
  return envContent.split("\n").reduce((acc, line) => {
    const [key, value] = line.split("=");
    if (key) acc[key.trim()] = value ? value.trim() : "";
    return acc;
  }, {});
};

// Fungsi untuk menyimpan ke file .env
const saveEnv = (key, value) => {
  const envVars = loadEnv();
  envVars[key] = value;

  const newEnvContent = Object.entries(envVars)
    .map(([k, v]) => `${k}=${v}`)
    .join("\n");

  fs.writeFileSync(pathEnv, newEnvContent, "utf-8");
};

// Fungsi untuk mengatur bot aktif
const setBotStatus = (status, reason = "") => {
  if (status !== "on" && status !== "off") {
    throw new Error("Status harus 'on' atau 'off'");
  }
  saveEnv("BOT_ACTIVE", status);
  saveEnv("BOT_REASON", reason);
};

const setON = async (reason) => {
  setBotStatus("on", reason); // Menggunakan fungsi setBotStatus
};

const setOFF = async () => {
  setBotStatus("off", "Bot dimatikan oleh OWNER"); // Alasan default
};

const loadSubscriptions = async () => {
  if (!fs.existsSync(pathSubscription)) {
    fs.writeFileSync(pathSubscription, JSON.stringify([]));
  }
  const fileBuffer = fs.readFileSync(pathSubscription, "utf-8");
  return JSON.parse(fileBuffer);
};

const saveSubscription = async (from, durationInDays) => {
  const subscriptions = await loadSubscriptions();
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

const checkSubscription = async (from) => {
  const subscriptions = await loadSubscriptions();
  const existing = subscriptions.find((item) => item.from === from);
  if (!existing) {
    return { isActive: false, remainingTime: "Tidak ada langganan" };
  }
  const now = new Date();
  const expiryDate = new Date(existing.expiryDate);
  const isActive = now <= expiryDate;
  const remainingTimeInMs = expiryDate - now;
  if (!isActive) {
    return { isActive: false, remainingTime: "Tidak ada waktu tersisa" };
  }
  const seconds = Math.floor((remainingTimeInMs / 1000) % 60);
  const minutes = Math.floor((remainingTimeInMs / (1000 * 60)) % 60);
  const hours = Math.floor((remainingTimeInMs / (1000 * 60 * 60)) % 24);
  const days = Math.floor(remainingTimeInMs / (1000 * 60 * 60 * 24));
  const remainingTime = `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;
  return { isActive, remainingTime };
};

const loadDelayed = async () => {
  if (!fs.existsSync(pathDelayed)) {
    fs.writeFileSync(pathDelayed, JSON.stringify([]));
  }
  const fileBuffer = fs.readFileSync(pathDelayed, "utf-8");
  return JSON.parse(fileBuffer);
};

const saveDelayed = async (from) => {
  const delayedData = await loadDelayed();
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
const checkDelay = async (from) => {
  const delayedData = await loadDelayed();
  const existing = delayedData.find((item) => item.from === from);

  if (!existing) {
    return true; // Jika belum ada, boleh kirim
  }

  const lastSent = new Date(existing.lastSent);
  const now = new Date();
  const fourHours = 4 * 60 * 60 * 1000;

  return now - lastSent >= fourHours; // Jika sudah lebih dari 4 jam, boleh kirim
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
  manageMessagesCache,
  loadDelayed,
  saveDelayed,
  checkDelay,
  loadSubscriptions,
  saveSubscription,
  checkSubscription,
  setBotStatus,
  setON, // Tambahkan ini ke ekspor
  setOFF, // Tambahkan ini ke ekspor
};
