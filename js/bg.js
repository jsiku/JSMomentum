const bgs = ["0.jpg", "1.jpg", "2.jpg"];
const bgimgTag = document.createElement("img");
const todaysBg = Math.floor(Math.random() * bgs.length);
bgimgTag.src = `img/${todaysBg}.jpg`;
bgimgTag.id = "background";
document.body.appendChild(bgimgTag);