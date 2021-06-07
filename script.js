const canvas = document.querySelector("[data-solarSystem='solarSystem']");
const context  = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
const windowHeight = window.innerHeight / 2;
const windowWidth = window.innerWidth / 2;
class Planets {
    constructor(horizontalPosition, verticalPosition, width, height, imgPath, speed, radius, angle) {
        this.horizontalPosition = horizontalPosition;
        this.verticalPosition = verticalPosition;
        this.width = width;
        this.height = height;
        this.imgPath = imgPath;
        this.speed = speed;
        this.radius = radius;
        this.angle = angle;
    }
    drawPlanets = () => {
        const img = new Image();
        img.src = this.imgPath;
        context.shadowOffsetX = -Math.cos(this.angle * (Math.PI/180));
        context.shadowOffsetY = -Math.sin(this.angle * (Math.PI/180));
        context.shadowColor = "#fff";
        context.drawImage(img, this.horizontalPosition, this.verticalPosition, this.width, this.height);
    }
    update = () => {
        this.horizontalPosition = this.radius * Math.cos(this.angle * (Math.PI/180)) + windowWidth - this.width / 2;
        this.verticalPosition = this.radius * Math.sin(this.angle * (Math.PI/180)) + windowHeight - this.height / 2;
        this.angle += this.speed;
        this.drawPlanets();
        this.drawSun();
    }
}
const sun = new Planets(0,0, 150, 150,"img/Sun.png", 0, 0, 0 );
const mercury = new Planets(0,0, 10, 10,"img/Mercury.png", 2, 50, 0 );
const venus = new Planets(0,0, 30, 30,"img/Venus.png", 1.2, 100, 0 );
const earth = new Planets(0,0, 30, 30,"img/Earth.png", 0.75, 150,0 );
const mars = new Planets(0,0, 17, 17,"img/Mars.png", 0.65, 200,0 );
const jupiter = new Planets(0,0, 50, 50,"img/Jupiter.png", 0.60, 270,0 );
const saturn = new Planets(0,0, 80, 45,"img/saturn.png", 0.55, 340,0 );
const uranus = new Planets(0,0, 40, 40,"img/uranus.png", 0.30, 400,0 );
const neptune = new Planets(0,0, 40, 40,"img/neptune.png", 0.15, 440,0 );
const handlePlanetsUpdateFunctions = () => {
    mercury.update();
    sun.update();
    earth.update();
    venus.update();
    mars.update();
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