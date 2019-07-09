'use strict';

function main(){
  var ENTRY_POINT = '/';
  var layoutsInstance = null;
  var navbarInstance = null;
  var footerInstance = null;
  var links = [
    {name: 'Home', 
    url: '/'},
    {name: 'Trivial',
    url:'/trivial'}
  ];
  var rootElement = document.querySelector('#root');
  
  generateLayout();
  generateNavbar();
  generateFooter();
  addListenersToNavbar();
  activateRouter();

  function generateLayout() {
    layoutsInstance = new Layout(rootElement);
    layoutsInstance.generate();

  }

  function generateNavbar() {
    navbarInstance = new Navbar(layoutsInstance.header, links);
    navbarInstance.generate();
  }

  function generateFooter() {
    footerInstance = new Footer(layoutsInstance.footer);
    footerInstance.generate();
  }

  function activateRouter() {
    routerInstance.buildDOM(ENTRY_POINT, layoutsInstance.main);
  }

  function addListenersToNavbar() {
    var anchors = document.querySelectorAll('nav a');
    anchors.forEach((anchor) => {
      anchor.addEventListener('click',changePage);
    })

  }

  function changePage(event) {
    debugger;
    var url = event.target.attributes.url.value;
    routerInstance.buildDOM(url, layoutsInstance.main);
  }

};



window.addEventListener('load', main);