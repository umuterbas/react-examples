// JS Class - blueprint (template)

class Color {
  constructor(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }
  paint() {
    console.log('painting');
  }
}

const color1 = new Color(255, 0, 150);
const color2 = new Color(255, 0, 150);
const color3 = new Color(255, 0, 150);

console.log(color1.red); //255
color3.paint(); // painting

class Rectangle {
  constructor(height, len) {
    this.height = height;
    this.len = len;
  }
  area() {
    return this.height * this.len;
  }
}

class Cube extends Rectangle {
  constructor(height, len, width) {
    super(height, len);
    this.width = width;
  }
  volume() {
    return this.area() * this.width;
  }
}

const cube1 = new Cube(2, 3, 5);
console.log(cube1.volume());
