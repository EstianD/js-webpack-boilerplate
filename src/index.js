import axios from "axios";
import "./style.css";

axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => console.log(response));
