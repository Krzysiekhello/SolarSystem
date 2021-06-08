const canvas = document.querySelector("[data-solarSystem='solarSystem']");
const context  = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
const windowHeight = window.innerHeight / 2;
const windowWidth = window.innerWidth / 2;
class Planets {
    constructor(horizontalPosition, verticalPosition, width, height, imgPath, speed, radius) {
        this.horizontalPosition = horizontalPosition;
        this.verticalPosition = verticalPosition;
        this.width = width;
        this.height = height;
        this.imgPath = imgPath;
        this.speed = speed;
        this.radius = radius;
        this.angle = 0;
    }
    drawPlanets = (earth) => {
        const img = new Image();
        img.src = this.imgPath;
        if (this.imgPath === "img/moon.png") {
            context.drawImage(img, this.radius * Math.cos(this.angle * (Math.PI/180)) + earth.horizontalPosition + this.width,
                this.radius * Math.sin(this.angle * (Math.PI/180)) + earth.verticalPosition + this.height, this.width, this.height);
        } else {
            context.shadowOffsetX = -Math.cos(this.angle * (Math.PI / 180));
            context.shadowOffsetY = -Math.sin(this.angle * (Math.PI / 180));
            context.shadowColor = "#fff";
            context.drawImage(img, this.horizontalPosition, this.verticalPosition, this.width, this.height);
        }
        }
    update = (earth) => {
        this.horizontalPosition = this.radius * Math.cos(this.angle * (Math.PI/180)) + windowWidth - this.width / 2;
        this.verticalPosition = this.radius * Math.sin(this.angle * (Math.PI/180)) + windowHeight - this.height / 2;
        this.angle += this.speed;
        this.drawPlanets(earth);
    }
}
const sun = new Planets(0,0, 150, 150,"img/Sun.png", 0, 0,);
const mercury = new Planets(0,0, 10, 10,"img/mercury.png", 2, 50);
const venus = new Planets(0,0, 24, 24,"img/venus.png", 1.5, 90);
const earth = new Planets(0,0, 25, 25,"img/earth.png", 1.3, 140);
const moon = new Planets(0,0, 10, 10,"img/moon.png", 4, 25);
const mars = new Planets(0,0, 14, 14,"img/mars.png", 1, 189);
const jupiter = new Planets(0,0, 70, 70,"img/jupiter.png", 0.50, 260);
const saturn = new Planets(0,0, 110, 70,"img/saturn.png", 0.42, 360);
const uranus = new Planets(0,0, 45, 45,"img/uranus.png", 0.30, 440);
const neptune = new Planets(0,0, 40, 40,"img/neptune.png", 0.20, 500);
const handlePlanetsUpdateFunctions = () => {
    mercury.update();
    sun.update();
    earth.update();
    moon.update(earth)
    mars.update()
    venus.update();
    jupiter.update();
    saturn.update();
    uranus.update();
    neptune.update();
}
const updatePlanets = () => {
    requestAnimationFrame(updatePlanets);
    context.clearRect(0, 0, canvas.width, canvas.height);
    handlePlanetsUpdateFunctions();
}
updatePlanets();