const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Access the device camera and stream to video element
function openCam() {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
    })
    .catch((error) => {
      console.error("Error accessing the camera: ", error);
    });
}

// Capture a photo
function capturePhoto() {
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
}

document.querySelector("#open-cam-btn").addEventListener("click", openCam);
