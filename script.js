// Array of images
const images = ["image/java1.jpg", "image/java2.jpeg", "image/java3.jpeg"];
let currentIndex = 0;

function switchImage() {
    const imgElement = document.getElementById("story-img");
    currentIndex = (currentIndex + 1) % images.length; // Loop through images
    imgElement.src = images[currentIndex];

	 imgElement.style.width = "500px";
    imgElement.style.height = "300px";
    imgElement.style.objectFit = "cover";
}

// Change the image every 3 seconds (3000ms)
setInterval(switchImage, 3000);
