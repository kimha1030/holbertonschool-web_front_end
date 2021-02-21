#!/usr/bin/node

let roomDimensions = {
  width: 50,
  length: 100,
};

function getArea() {
  let surface = this.width * this.length;
  return surface;
}

let boundGetArea = getArea.bind(roomDimensions);
boundGetArea();
