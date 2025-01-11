function count(n, m) {
    var output = document.getElementById("output");
    output.innerHTML = ""; 
  
    for (var svt = 0; svt < m.length; svt++) {
      if (n == svt) {
   
        var img = document.createElement("img");
        img.src = m[svt];
        img.alt = "Seventeen member"; 
        img.style.width = "80px"; 
        img.style.height = "auto"; 
        img.style.borderRadius = "100px";
        output.appendChild(img); 
        return;
      }
    }

    output.innerText = "Not found";
  }
  
  function runcount() {
    var b = document.getElementById("num").value; 
    
    var seventeen = ["non",
        "/photos/sc.jpg"
        ,"/photos/han.jpg"
        ,"/photos/shu.jpg"
        ,"/photos/jun.jpg"
        ,"/photos/hosh.jpg"
        ,"/photos/won.jpg"
        ,"/photos/wozi.jpg"
      
    ];
    count(b, seventeen); 
  }