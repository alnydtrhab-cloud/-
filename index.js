const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// تقديم ملفات الاستايل (CSS)
app.use(express.static(path.join(__dirname, "public")));

// الصفحات
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "contact.html"));
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`🚀 السيرفر شغال على http://localhost:${PORT}`);
})
