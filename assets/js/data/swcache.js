const resource = [

  /* --- CSS --- */
  '/https://nix-xin.github.io/assets/css/style.css',

  /* --- PWA --- */
  '/https://nix-xin.github.io/app.js',
  '/https://nix-xin.github.io/sw.js',

  /* --- HTML --- */
  '/https://nix-xin.github.io/index.html',
  '/https://nix-xin.github.io/404.html',
  
    '/https://nix-xin.github.io/categories/',
  
    '/https://nix-xin.github.io/tags/',
  
    '/https://nix-xin.github.io/archives/',
  
    '/https://nix-xin.github.io/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/https://nix-xin.github.io/assets/img/favicons/android-chrome-192x192.png',
    '/https://nix-xin.github.io/assets/img/favicons/android-chrome-512x512.png',
    '/https://nix-xin.github.io/assets/img/favicons/apple-touch-icon.png',
    '/https://nix-xin.github.io/assets/img/favicons/favicon-16x16.png',
    '/https://nix-xin.github.io/assets/img/favicons/favicon-32x32.png',
    '/https://nix-xin.github.io/assets/img/favicons/favicon.ico',
    '/https://nix-xin.github.io/assets/img/favicons/mstile-150x150.png',
    '/https://nix-xin.github.io/assets/js/dist/categories.min.js',
    '/https://nix-xin.github.io/assets/js/dist/commons.min.js',
    '/https://nix-xin.github.io/assets/js/dist/home.min.js',
    '/https://nix-xin.github.io/assets/js/dist/misc.min.js',
    '/https://nix-xin.github.io/assets/js/dist/page.min.js',
    '/https://nix-xin.github.io/assets/js/dist/post.min.js',
    '/https://nix-xin.github.io/assets/js/dist/pvreport.min.js'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];

