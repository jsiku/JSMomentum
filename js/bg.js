const bgs = ["0.jpg", "1.jpg", "2.jpg"];
const bgimgTag = document.createElement("img");
const todaysBg = Math.floor(Math.random() * bgs.length);
bgimgTag.src = `img/${todaysBg}.jpg`;
document.body.appendChild(bgimgTag);