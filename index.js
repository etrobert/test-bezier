const createPathD = (src, dest) => {
  const offset = (dest.x - src.x) / 3;
  return `
    M ${src.x} ${src.y}
    C ${dest.x - offset} ${src.y},
    ${src.x + offset} ${dest.y},
    ${dest.x} ${dest.y}`;
};

const svg = document.querySelector("svg");

const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
svg.appendChild(path);

const origin = { x: 400, y: 400 };

const updatePath = (coords) => {
  path.setAttribute("d", createPathD(origin, coords));
};

document.onmousemove = ({ x, y }) => updatePath({ x, y });
