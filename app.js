'use strict';

const main = () => {
  const ENTRY_POINT = '/';
  let layoutsInstance = null;
  let navbarInstance = null;
  let footerInstance = null;
  const links = [
    {name: 'Home', 
    url: '/'},
    {name: 'Trivial',
    url:'/trivial'}
  ];

  const rootElement = document.querySelector('#root');
  
  const generateLayout = () => {
    layoutsInstance = new Layout(rootElement);
    layoutsInstance.generate();
    
  }
  
  const generateNavbar = () => {
    navbarInstance = new Navbar(layoutsInstance.header, links);
    navbarInstance.generate();
  }
  
  const generateFooter = () => {
    footerInstance = new Footer(layoutsInstance.footer);
    footerInstance.generate();
  }
  
  const activateRouter = () => {
    routerInstance.buildDOM(ENTRY_POINT, layoutsInstance.main);
  }
  
  const addListenersToNavbar = () => {
    const anchors = document.querySelectorAll('nav a');
    anchors.forEach((anchor) => {
      anchor.addEventListener('click',changePage);
    })
    const logo = document.querySelector('nav img.logo');
    const logoText = document.querySelector('nav p.logo-text');
    logo.addEventListener('click',changePage);
    logoText.addEventListener('click',changePage);
  }
  
  const changePage = (event) => {
    const url = event.target.attributes.url.value;
    routerInstance.buildDOM(url, layoutsInstance.main);
  }

  generateLayout();
  generateNavbar();
  generateFooter();
  addListenersToNavbar();
  activateRouter();
}

window.addEventListener('load', main);