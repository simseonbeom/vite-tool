
import Home from "/src/pages/Home";
import About from "/src/pages/About";
import Contact from "/src/pages/Contact";
import NotFound from "/src/pages/NotFound";
import gsap from 'gsap';

const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
}


export async function router(){
  const path = location.pathname;
  const app = document.querySelector('#app');

  gsap.defaults({
    ease:'power3.inOut',
    duration:0.7
  })
  
  await gsap.to(app, {opacity:1,x:"-100%"})

  const render = routes[path] || NotFound
  app.innerHTML = ''
  app.insertAdjacentHTML('beforeend',render());

  gsap.fromTo(app, {opacity:0, x:"100%"},{opacity:1,x:0})

}


export function navigate(path){

  history.pushState({},'',path);
  router();

}


window.addEventListener('popstate',router);














