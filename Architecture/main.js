const panoramaImage = new PANOLENS.ImagePanorama("design.jpeg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.3,
})

viewer.add(panoramaImage);