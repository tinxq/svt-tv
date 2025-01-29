function count(n, m) {
  var output = document.getElementById("output");
  output.innerHTML = ""; 

  for (var svt = 0 ; svt < m.length ; svt++) {
if (n == svt) {
 
  var img = document.createElement("img");
  img.src = m[svt];
  img.alt = "Seventeen member"; 
  img.style.width = "120px"; 
  img.style.height ="120px"
  img.style.borderRadius = "50%";
  img.style.objectFit ="cover";

  output.appendChild(img); 
  return;
}
  }

  output.innerText = "Not found";
}

function runcount() {
  var b = document.getElementById("num").value; 
  
  var seventeen = ["noni",
  "photos/sc.jpg"
  ,"photos/han.jpg"
  ,"photos/shu.jpg"
  ,"photos/jun.jpg"
  ,"photos/hosh.jpg"
  ,"photos/won.jpg"
  ,"photos/wozi.jpg"
  ,"photos/eisa.jpg"
  ,"photos/mingo.jpg"
  ,"photos/dk.jpg"
  ,"photos/kwani.jpg"
  ,"photos/vernon.jpg"
  ,"photos/leechan.jpg"
  ];
  count(b, seventeen); 
}
function hi(message) {

const outputDiv = document.querySelector('.output2');
outputDiv.textContent = message;
outputDiv.style.display = 'block';

setTimeout(() => {
  outputDiv.style.display = 'none';
}, 8000);
}

function songs() {
  var songs = [
    "Hug", "Fronting", "Mansae", "When I Grow Up", "OMG", "Rock", "Pretty U", "Still Lonely", 
    "Hit Song", "Say Yes", "Drift Away", "Adore U ", "Mansae", 
    "Shining Diamond ", "Love Letter", "Thanks", "Clap", "Don't Wanna Cry", 
    "Very Nice", "Home", "Fallin' Flower", "Snap Shoot", "Left & Right", "Fear", "Rock With You", 
    "Hot", "Darling", "Shadow", "March", "World"
  ];

  const randomIndex = Math.floor(Math.random() * songs.length);
  const randomName = songs[randomIndex];

  const songDisplay = document.getElementById("song");
  songDisplay.textContent = randomName;
}

function randomi() {
  songs();
}