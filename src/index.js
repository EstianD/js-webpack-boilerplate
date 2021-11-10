import axios from "axios";
import someImage from "./images/earth.png";
import "./style.css";

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => console.log(response));

function component() {
  const image = new Image();
  image.src = someImage;

  const element = document.createElement("div");

  element.appendChild(image);

  return element;
}

document.body.appendChild(component());
