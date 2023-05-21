// Check if the browser supports localStorage
if (typeof(Storage) !== "undefined") {
    // Check if the user has enabled dark mode
    if (localStorage.getItem("darkModeEnabled") === "true") {
      enableDarkMode();
      document.getElementById("darkModeToggle").checked = true;
    }
  }
  
  // Function to enable dark mode
  function enableDarkMode() {
    // Add a class to the <body> element to apply dark mode styles
    document.body.classList.add("dark-mode");
  
    // Store the dark mode state in localStorage
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("darkModeEnabled", "true");
    }
  }
  
  // Function to disable dark mode
  function disableDarkMode() {
    // Remove the dark mode class from the <body> element
    document.body.classList.remove("dark-mode");
  
    // Store the dark mode state in localStorage
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("darkModeEnabled", "false");
    }
  }
  
  // Toggle dark mode
  function toggleDarkMode() {
    if (document.getElementById("darkModeToggle").checked) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }
  
  // Add event listener to the checkbox
  var darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.addEventListener("change", toggleDarkMode);














noseX = 0;

noseY = 0;

difference = 0;

rightWristX = 0; 

leftWristX = 0;

  function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }

  function draw() {
    background('#969A97');
    fill('#F900093');
    stroke('#F900100');
    square(noseX, noseY, 100);
  }

  function modelLoaded() {
    console.log('Model Loaded');
  }

  function goPoses(results) {
    if(results.lenght > 0) {
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("noseX = " + noseX + " noseY = " + noseY);
      
      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference = floor(leftWristX - rightWristX);

      console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
  }