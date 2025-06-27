import '/src/style.css'
import { Header } from "./components/Header";
import { router } from "/src/router";







function defineElements(){
  customElements.define('c-header',Header);
}






defineElements();



function init(){
  router();
}

window.addEventListener('DOMContentLoaded',init);

