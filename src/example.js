// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    "name": "Blank",
    "javascript": "",
    "html": "",
    "css": ""
  },
  {
    "name": "Example 1",
    "javascript": `// Designed by:  Mauricio Bucardo
        // Original image:
        // https://dribbble.com/shots/5619509-Animated-Tab-Bar
        
        "use strict";
        
        const body = document.body;
        const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
        const menu = body.querySelector(".menu");
        const menuItems = menu.querySelectorAll(".menu__item");
        const menuBorder = menu.querySelector(".menu__border");
        let activeItem = menu.querySelector(".active");
        
        function clickItem(item, index) {
          menu.style.removeProperty("--timeOut");
        
          if (activeItem == item) return;
        
          if (activeItem) {
            activeItem.classList.remove("active");
          }
        
          item.classList.add("active");
          body.style.backgroundColor = bgColorsBody[index];
          activeItem = item;
          offsetMenuBorder(activeItem, menuBorder);
        }
        
        function offsetMenuBorder(element, menuBorder) {
          const offsetActiveItem = element.getBoundingClientRect();
          const left =
            Math.floor(
              offsetActiveItem.left -
                menu.offsetLeft -
                (menuBorder.offsetWidth - offsetActiveItem.width) / 2
            ) + "px";
          menuBorder.style.transform = \`translate3d(\${ left }, 0 , 0)\`;
        }
        
        offsetMenuBorder(activeItem, menuBorder);
        
        menuItems.forEach((item, index) => {
          item.addEventListener("click", () => clickItem(item, index));
        });
        
        window.addEventListener("resize", () => {
          offsetMenuBorder(activeItem, menuBorder);
          menu.style.setProperty("--timeOut", "none");
        });
        `,
    "html": `<menu class="menu">

        <button class="menu__item active" style="--bgColorItem: #ff8c00;">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M3.8,6.6h16.4" />
            <path d="M20.2,12.1H3.8" />
            <path d="M3.8,17.5h16.4" />
          </svg>
        </button>
      
        <button class="menu__item" style="--bgColorItem: #f54888;">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M6.7,4.8h10.7c0.3,0,0.6,0.2,0.7,0.5l2.8,7.3c0,0.1,0,0.2,0,0.3v5.6c0,0.4-0.4,0.8-0.8,0.8H3.8
              C3.4,19.3,3,19,3,18.5v-5.6c0-0.1,0-0.2,0.1-0.3L6,5.3C6.1,5,6.4,4.8,6.7,4.8z" />
            <path d="M3.4,12.9H8l1.6,2.8h4.9l1.5-2.8h4.6" />
          </svg>
        </button>
      
        <button class="menu__item" style="--bgColorItem: #4343f5;">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M3.4,11.9l8.8,4.4l8.4-4.4" />
            <path d="M3.4,16.2l8.8,4.5l8.4-4.5" />
            <path d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z" />
        </button>
      
        <button class="menu__item" style="--bgColorItem: #e0b115;">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
                C3.9,4.4,4.4,3.9,5.1,3.9z" />
            <path d="M4.2,9.3h15.6" />
            <path d="M9.1,9.5v10.3" />
        </button>
      
        <button class="menu__item" style="--bgColorItem:#65ddb7;">
          <svg class="icon" viewBox="0 0 24 24">
            <path d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1
                C3.9,4.4,4.4,3.9,5.1,3.9z" />
            <path d="M5.5,20l9.9-9.9l4.7,4.7" />
            <path d="M10.4,8.8c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6C7.3,8,8,7.3,8.9,7.3C9.7,7.3,10.4,8,10.4,8.8z" />
          </svg>
        </button>
      
        <div class="menu__border"></div>
      
      </menu>
      
      <div class="svg-container">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
            <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
                c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
                c9.2,3.6,17.6,4.2,23.3,4H6.7z" />
          </clipPath>
        </svg>
      </div>`,
    "css": `html {
            box-sizing: border-box;
            --bgColorMenu: #1d1d27;
            --duration: 0.7s;
          }
          
          html *,
          html *::before,
          html *::after {
            box-sizing: inherit;
          }
          
          body {
            margin: 0;
            display: flex;
            height: 100vh;
            overflow: hidden;
            align-items: center;
            justify-content: center;
            background-color: #ffb457;
            -webkit-tap-highlight-color: transparent;
            transition: background-color var(--duration);
          }
          
          .menu {
            margin: 0;
            display: flex;
            /* Works well with 100% width  */
            width: 32.05em;
            font-size: 1.5em;
            padding: 0 2.85em;
            position: relative;
            align-items: center;
            justify-content: center;
            background-color: var(--bgColorMenu);
          }
          
          .menu__item {
            all: unset;
            flex-grow: 1;
            z-index: 100;
            display: flex;
            cursor: pointer;
            position: relative;
            border-radius: 50%;
            align-items: center;
            will-change: transform;
            justify-content: center;
            padding: 0.55em 0 0.85em;
            transition: transform var(--timeOut, var(--duration));
          }
          
          .menu__item::before {
            content: "";
            z-index: -1;
            width: 4.2em;
            height: 4.2em;
            border-radius: 50%;
            position: absolute;
            transform: scale(0);
            transition: background-color var(--duration), transform var(--duration);
          }
          
          .menu__item.active {
            transform: translate3d(0, -0.8em, 0);
          }
          
          .menu__item.active::before {
            transform: scale(1);
            background-color: var(--bgColorItem);
          }
          
          .icon {
            width: 2.6em;
            height: 2.6em;
            stroke: white;
            fill: transparent;
            stroke-width: 1pt;
            stroke-miterlimit: 10;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 400;
          }
          
          .menu__item.active .icon {
            animation: strok 1.5s reverse;
          }
          
          @keyframes strok {
            100% {
              stroke-dashoffset: 400;
            }
          }
          
          .menu__border {
            left: 0;
            bottom: 99%;
            width: 10.9em;
            height: 2.4em;
            position: absolute;
            clip-path: url(#menu);
            will-change: transform;
            background-color: var(--bgColorMenu);
            transition: transform var(--timeOut, var(--duration));
          }
          
          .svg-container {
            width: 0;
            height: 0;
          }
          
          @media screen and (max-width: 50em) {
            .menu {
              font-size: 0.8em;
            }
          }
          `
  },
  {
    "name": "404 Page",
    "javascript": `gsap.set("svg", { visibility: "visible" });
    gsap.to("#headStripe", {
      y: 0.5,
      rotation: 1,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      duration: 1 });
    
    gsap.to("#spaceman", {
      y: 0.5,
      rotation: 1,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      duration: 1 });
    
    gsap.to("#craterSmall", {
      x: -3,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "sine.inOut" });
    
    gsap.to("#craterBig", {
      x: 3,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "sine.inOut" });
    
    gsap.to("#planet", {
      rotation: -2,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "sine.inOut",
      transformOrigin: "50% 50%" });
    
    
    gsap.to("#starsBig g", {
      rotation: "random(-30,30)",
      transformOrigin: "50% 50%",
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut" });
    
    gsap.fromTo(
    "#starsSmall g",
    { scale: 0, transformOrigin: "50% 50%" },
    { scale: 1, transformOrigin: "50% 50%", yoyo: true, repeat: -1, stagger: 0.1 });
    
    gsap.to("#circlesSmall circle", {
      y: -4,
      yoyo: true,
      duration: 1,
      ease: "sine.inOut",
      repeat: -1 });
    
    gsap.to("#circlesBig circle", {
      y: -2,
      yoyo: true,
      duration: 1,
      ease: "sine.inOut",
      repeat: -1 });
    
    
    gsap.set("#glassShine", { x: -68 });
    
    gsap.to("#glassShine", {
      x: 80,
      duration: 2,
      rotation: -30,
      ease: "expo.inOut",
      transformOrigin: "50% 50%",
      repeat: -1,
      repeatDelay: 8,
      delay: 2 });
    
    
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');
    
    burger.addEventListener('click', e => {
      burger.dataset.state === 'closed' ? burger.dataset.state = "open" : burger.dataset.state = "closed";
      nav.dataset.state === "closed" ? nav.dataset.state = "open" : nav.dataset.state = "closed";
    });`,
    "css": `@import url("https://fonts.googleapis.com/css?family=Nunito+Sans");
    :root {
      --blue: #0e0620;
      --white: #fff;
      --green: #2ccf6d;
    }
    
    html,
    body {
      height: 100%;
    }
    
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Nunito Sans";
      color: var(--blue);
      font-size: 1em;
    }
    
    button {
      font-family: "Nunito Sans";
    }
    
    ul {
      list-style-type: none;
      padding-inline-start: 35px;
    }
    
    svg {
      width: 100%;
      visibility: hidden;
    }
    
    h1 {
      font-size: 7.5em;
      margin: 15px 0px;
      font-weight: bold;
    }
    
    h2 {
      font-weight: bold;
    }
    
    .hamburger-menu {
      position: absolute;
      top: 0;
      left: 0;
      padding: 35px;
      z-index: 2;
    }
    .hamburger-menu button {
      position: relative;
      width: 30px;
      height: 22px;
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
    .hamburger-menu button span {
      position: absolute;
      height: 3px;
      background: #000;
      width: 100%;
      left: 0px;
      top: 0px;
      transition: 0.1s ease-in;
    }
    .hamburger-menu button span:nth-child(2) {
      top: 9px;
    }
    .hamburger-menu button span:nth-child(3) {
      top: 18px;
    }
    .hamburger-menu [data-state=open] span:first-child {
      transform: rotate(45deg);
      top: 10px;
    }
    .hamburger-menu [data-state=open] span:nth-child(2) {
      width: 0%;
      opacity: 0;
    }
    .hamburger-menu [data-state=open] span:nth-child(3) {
      transform: rotate(-45deg);
      top: 10px;
    }
    
    nav {
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
      background: var(--green);
      color: var(--blue);
      width: 300px;
      z-index: 1;
      padding-top: 80px;
      transform: translateX(-100%);
      transition: 0.24s cubic-bezier(0.52, 0.01, 0.8, 1);
    }
    nav li {
      transform: translateX(-5px);
      transition: 0.16s cubic-bezier(0.44, 0.09, 0.46, 0.84);
      opacity: 0;
    }
    nav a {
      display: block;
      font-size: 1.75em;
      font-weight: bold;
      text-decoration: none;
      color: inherit;
      transition: 0.24s ease-in-out;
    }
    nav a:hover {
      text-decoration: none;
      color: var(--white);
    }
    nav[data-state=open] {
      transform: translateX(0%);
    }
    nav[data-state=open] ul li:nth-child(1) {
      transition-delay: 0.16s;
      transform: translateX(0px);
      opacity: 1;
    }
    nav[data-state=open] ul li:nth-child(2) {
      transition-delay: 0.32s;
      transform: translateX(0px);
      opacity: 1;
    }
    nav[data-state=open] ul li:nth-child(3) {
      transition-delay: 0.48s;
      transform: translateX(0px);
      opacity: 1;
    }
    nav[data-state=open] ul li:nth-child(4) {
      transition-delay: 0.64s;
      transform: translateX(0px);
      opacity: 1;
    }
    
    .btn {
      z-index: 1;
      overflow: hidden;
      background: transparent;
      position: relative;
      padding: 8px 50px;
      border-radius: 30px;
      cursor: pointer;
      font-size: 1em;
      letter-spacing: 2px;
      transition: 0.2s ease;
      font-weight: bold;
      margin: 5px 0px;
    }
    .btn.green {
      border: 4px solid var(--green);
      color: var(--blue);
    }
    .btn.green:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 0%;
      height: 100%;
      background: var(--green);
      z-index: -1;
      transition: 0.2s ease;
    }
    .btn.green:hover {
      color: var(--white);
      background: var(--green);
      transition: 0.2s ease;
    }
    .btn.green:hover:before {
      width: 100%;
    }
    
    @media screen and (max-width: 768px) {
      body {
        display: block;
      }
    
      .container {
        margin-top: 70px;
        margin-bottom: 70px;
      }
    }
    `,
    "html": `
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet"></link>
    </head>
    <div class="hamburger-menu">
      <button class="burger" data-state="closed">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <nav data-state="closed">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
    <main>
      <div class="container">
        <div class="row">
          <div class="col-md-6 align-self-center">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 600">
              <g>
                <defs>
                  <clipPath id="GlassClip">
                    <path d="M380.857,346.164c-1.247,4.651-4.668,8.421-9.196,10.06c-9.332,3.377-26.2,7.817-42.301,3.5
                    s-28.485-16.599-34.877-24.192c-3.101-3.684-4.177-8.66-2.93-13.311l7.453-27.798c0.756-2.82,3.181-4.868,6.088-5.13
                    c6.755-0.61,20.546-0.608,41.785,5.087s33.181,12.591,38.725,16.498c2.387,1.682,3.461,4.668,2.705,7.488L380.857,346.164z" />
                  </clipPath>
                  <clipPath id="cordClip">
                    <rect width="800" height="600" />
                  </clipPath>
                </defs>
    
                <g id="planet">
                  <circle fill="none" stroke="#0E0620" stroke-width="3" stroke-miterlimit="10" cx="572.859" cy="108.803" r="90.788" />
    
                  <circle id="craterBig" fill="none" stroke="#0E0620" stroke-width="3" stroke-miterlimit="10" cx="548.891" cy="62.319" r="13.074" />
    
                  <circle id="craterSmall" fill="none" stroke="#0E0620" stroke-width="3" stroke-miterlimit="10" cx="591.743" cy="158.918" r="7.989" />
                  <path id="ring" fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" d="
          M476.562,101.461c-30.404,2.164-49.691,4.221-49.691,8.007c0,6.853,63.166,12.408,141.085,12.408s141.085-5.555,141.085-12.408
          c0-3.378-15.347-4.988-40.243-7.225" />
    
                  <path id="ringShadow" opacity="0.5" fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" d="
          M483.985,127.43c23.462,1.531,52.515,2.436,83.972,2.436c36.069,0,68.978-1.19,93.922-3.149" />
                </g>
                <g id="stars">
                  <g id="starsBig">
                    <g>
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="518.07" y1="245.375" x2="518.07" y2="266.581" />
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="508.129" y1="255.978" x2="528.01" y2="255.978" />
                    </g>
                    <g>
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="154.55" y1="231.391" x2="154.55" y2="252.598" />
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="144.609" y1="241.995" x2="164.49" y2="241.995" />
                    </g>
                    <g>
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="320.135" y1="132.746" x2="320.135" y2="153.952" />
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="310.194" y1="143.349" x2="330.075" y2="143.349" />
                    </g>
                    <g>
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="200.67" y1="483.11" x2="200.67" y2="504.316" />
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="210.611" y1="493.713" x2="190.73" y2="493.713" />
                    </g>
                  </g>
                  <g id="starsSmall">
                    <g>
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="432.173" y1="380.52" x2="432.173" y2="391.83" />
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="426.871" y1="386.175" x2="437.474" y2="386.175" />
                    </g>
                    <g>
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="489.555" y1="299.765" x2="489.555" y2="308.124" />
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="485.636" y1="303.945" x2="493.473" y2="303.945" />
                    </g>
                    <g>
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="231.468" y1="291.009" x2="231.468" y2="299.369" />
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="227.55" y1="295.189" x2="235.387" y2="295.189" />
                    </g>
                    <g>
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="244.032" y1="547.539" x2="244.032" y2="555.898" />
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="247.95" y1="551.719" x2="240.113" y2="551.719" />
                    </g>
                    <g>
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="186.359" y1="406.967" x2="186.359" y2="415.326" />
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="190.277" y1="411.146" x2="182.44" y2="411.146" />
                    </g>
                    <g>
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="480.296" y1="406.967" x2="480.296" y2="415.326" />
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" x1="484.215" y1="411.146" x2="476.378" y2="411.146" />
                    </g>
                  </g>
                  <g id="circlesBig">
    
                    <circle fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" cx="588.977" cy="255.978" r="7.952" />
    
                    <circle fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" cx="450.066" cy="320.259" r="7.952" />
    
                    <circle fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" cx="168.303" cy="353.753" r="7.952" />
    
                    <circle fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" cx="429.522" cy="201.185" r="7.952" />
    
                    <circle fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" cx="200.67" cy="176.313" r="7.952" />
    
                    <circle fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" cx="133.343" cy="477.014" r="7.952" />
    
                    <circle fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" cx="283.521" cy="568.033" r="7.952" />
    
                    <circle fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-miterlimit="10" cx="413.618" cy="482.387" r="7.952" />
                  </g>
                  <g id="circlesSmall">
                    <circle fill="#0E0620" cx="549.879" cy="296.402" r="2.651" />
                    <circle fill="#0E0620" cx="253.29" cy="229.24" r="2.651" />
                    <circle fill="#0E0620" cx="434.824" cy="263.931" r="2.651" />
                    <circle fill="#0E0620" cx="183.708" cy="544.176" r="2.651" />
                    <circle fill="#0E0620" cx="382.515" cy="530.923" r="2.651" />
                    <circle fill="#0E0620" cx="130.693" cy="305.608" r="2.651" />
                    <circle fill="#0E0620" cx="480.296" cy="477.014" r="2.651" />
                  </g>
                </g>
                <g id="spaceman" clip-path="url(cordClip)">
                  <path id="cord" fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
          M273.813,410.969c0,0-54.527,39.501-115.34,38.218c-2.28-0.048-4.926-0.241-7.841-0.548
          c-68.038-7.178-134.288-43.963-167.33-103.87c-0.908-1.646-1.793-3.3-2.654-4.964c-18.395-35.511-37.259-83.385-32.075-118.817" />
    
                  <path id="backpack" fill="#FFFFFF" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
          M338.164,454.689l-64.726-17.353c-11.086-2.972-17.664-14.369-14.692-25.455l15.694-58.537
          c3.889-14.504,18.799-23.11,33.303-19.221l52.349,14.035c14.504,3.889,23.11,18.799,19.221,33.303l-15.694,58.537
          C360.647,451.083,349.251,457.661,338.164,454.689z" />
                  <g id="antenna">
                    <line fill="#FFFFFF" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="323.396" y1="236.625" x2="295.285" y2="353.753" />
                    <circle fill="#FFFFFF" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="323.666" cy="235.617" r="6.375" />
                  </g>
                  <g id="armR">
    
                    <path fill="#FFFFFF" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
            M360.633,363.039c1.352,1.061,4.91,5.056,5.824,6.634l27.874,47.634c3.855,6.649,1.59,15.164-5.059,19.02l0,0
            c-6.649,3.855-15.164,1.59-19.02-5.059l-5.603-9.663" />
    
                    <path fill="#FFFFFF" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
            M388.762,434.677c5.234-3.039,7.731-8.966,6.678-14.594c2.344,1.343,4.383,3.289,5.837,5.793
            c4.411,7.596,1.829,17.33-5.767,21.741c-7.596,4.411-17.33,1.829-21.741-5.767c-1.754-3.021-2.817-5.818-2.484-9.046
            C375.625,437.355,383.087,437.973,388.762,434.677z" />
                  </g>
                  <g id="armL">
    
                    <path fill="#FFFFFF" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
            M301.301,347.66c-1.702,0.242-5.91,1.627-7.492,2.536l-47.965,27.301c-6.664,3.829-8.963,12.335-5.134,18.999h0
            c3.829,6.664,12.335,8.963,18.999,5.134l9.685-5.564" />
    
                    <path fill="#FFFFFF" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
            M241.978,395.324c-3.012-5.25-2.209-11.631,1.518-15.977c-2.701-0.009-5.44,0.656-7.952,2.096
            c-7.619,4.371-10.253,14.09-5.883,21.71c4.371,7.619,14.09,10.253,21.709,5.883c3.03-1.738,5.35-3.628,6.676-6.59
            C252.013,404.214,245.243,401.017,241.978,395.324z" />
                  </g>
                  <g id="body">
    
                    <path fill="#FFFFFF" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
            M353.351,365.387c-7.948,1.263-16.249,0.929-24.48-1.278c-8.232-2.207-15.586-6.07-21.836-11.14
            c-17.004,4.207-31.269,17.289-36.128,35.411l-1.374,5.123c-7.112,26.525,8.617,53.791,35.13,60.899l0,0
            c26.513,7.108,53.771-8.632,60.883-35.158l1.374-5.123C371.778,395.999,365.971,377.536,353.351,365.387z" />
                    <path fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
            M269.678,394.912L269.678,394.912c26.3,20.643,59.654,29.585,93.106,25.724l2.419-0.114" />
                  </g>
                  <g id="legs">
                    <g id="legR">
    
                      <path fill="#FFFFFF" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
              M312.957,456.734l-14.315,53.395c-1.896,7.07,2.299,14.338,9.37,16.234l0,0c7.07,1.896,14.338-2.299,16.234-9.37l17.838-66.534
              C333.451,455.886,323.526,457.387,312.957,456.734z" />
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="304.883" y1="486.849" x2="330.487" y2="493.713" />
                    </g>
                    <g id="legL">
    
                      <path fill="#FFFFFF" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
              M296.315,452.273L282,505.667c-1.896,7.07-9.164,11.265-16.234,9.37l0,0c-7.07-1.896-11.265-9.164-9.37-16.234l17.838-66.534
              C278.993,441.286,286.836,447.55,296.315,452.273z" />
    
                      <line fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="262.638" y1="475.522" x2="288.241" y2="482.387" />
                    </g>
                  </g>
                  <g id="head">
    
                    <ellipse transform="matrix(0.259 -0.9659 0.9659 0.259 -51.5445 563.2371)" fill="#FFFFFF" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="341.295" cy="315.211" rx="61.961" ry="60.305" />
                    <path id="headStripe" fill="none" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
            M330.868,261.338c-7.929,1.72-15.381,5.246-21.799,10.246" />
    
                    <path fill="#FFFFFF" stroke="#0E0620" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
            M380.857,346.164c-1.247,4.651-4.668,8.421-9.196,10.06c-9.332,3.377-26.2,7.817-42.301,3.5s-28.485-16.599-34.877-24.192
            c-3.101-3.684-4.177-8.66-2.93-13.311l7.453-27.798c0.756-2.82,3.181-4.868,6.088-5.13c6.755-0.61,20.546-0.608,41.785,5.087
            s33.181,12.591,38.725,16.498c2.387,1.682,3.461,4.668,2.705,7.488L380.857,346.164z" />
                    <g clip-path="url(#GlassClip)">
                      <polygon id="glassShine" fill="none" stroke="#0E0620" stroke-width="3" stroke-miterlimit="10" points="
              278.436,375.599 383.003,264.076 364.393,251.618 264.807,364.928 				" />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div class="col-md-6 align-self-center">
            <h1>404</h1>
            <h2>UH OH! You're lost.</h2>
            <p>The page you are looking for does not exist.
              How you got here is a mystery. But you can click the button below
              to go back to the homepage.
            </p>
            <button class="btn green">HOME</button>
          </div>
        </div>
      </div>
    </main>`
  },
  {
    "name": "Example 2",
    "javascript": `gsap.registerPlugin(ScrollTrigger);

    const pageContainer = document.querySelector(".container");
    
    /* SMOOTH SCROLL */
    const scroller = new LocomotiveScroll({
      el: pageContainer,
      smooth: true
    });
    
    scroller.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy(pageContainer, {
      scrollTop(value) {
        return arguments.length
          ? scroller.scrollTo(value, 0, 0)
          : scroller.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          left: 0,
          top: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      pinType: pageContainer.style.transform ? "transform" : "fixed"
    });
    
    ////////////////////////////////////
    ////////////////////////////////////
    window.addEventListener("load", function () {
      let pinBoxes = document.querySelectorAll(".pin-wrap > *");
      let pinWrap = document.querySelector(".pin-wrap");
      let pinWrapWidth = pinWrap.offsetWidth;
      let horizontalScrollLength = pinWrapWidth - window.innerWidth;
    
      // Pinning and horizontal scrolling
    
      gsap.to(".pin-wrap", {
        scrollTrigger: {
          scroller: pageContainer, //locomotive-scroll
          scrub: true,
          trigger: "#sectionPin",
          pin: true,
          // anticipatePin: 1,
          start: "top top",
          end: pinWrapWidth
        },
        x: -horizontalScrollLength,
        ease: "none"
      });
    
      ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
    
      ScrollTrigger.refresh();
    });
    `,
    "css": `:root {
      --text-color: #111;
      --bg-color: #b9b3a9;
    }
    
    body {
      font-family: termina, sans-serif;
      color: var(--text-color);
      background: var(--bg-color);
      transition: 0.3s ease-out;
      overflow-x: hidden;
      max-width: 100%;
      width: 100%;
      overscroll-behavior: none;
    }
    
    section:not(#sectionPin) {
      min-height: 100vh;
      width: 100%;
      position: relative;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 2rem;
      padding: 50px 10vw;
      margin: auto;
      place-items: center;
    }
    
    img {
      height: 80vh;
      width: auto;
      object-fit: cover;
    }
    
    h1 {
      font-size: 5rem;
      line-height: 1;
      font-weight: 800;
      margin-bottom: 1rem;
      position: absolute;
      top: 10vw;
      left: 10vw;
      z-index: 4;
      overflow-wrap: break-word;
      hyphens: auto;
    }
    @media (max-width: 768px) {
      h1 {
        font-size: 16vw;
      }
    }
    h1 span {
      display: block;
    }
    
    h2 {
      font-size: 2rem;
      max-width: 400px;
    }
    
    .credit {
      font-family: Termina, sans-serif;
    }
    .credit a {
      color: var(--text-color);
    }
    
    * {
      box-sizing: border-box;
    }
    
    #sectionPin {
      height: 100vh;
      overflow: hidden;
      display: flex;
      left: 0;
      background: var(--text-color);
      color: var(--bg-color);
    }
    
    .pin-wrap {
      height: 100vh;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 50px 10vw;
    }
    .pin-wrap > * {
      min-width: 60vw;
      padding: 0 5vw;
    }
    
    p {
      position: absolute;
      bottom: 10vw;
      right: 10vw;
      width: 200px;
      line-height: 1.5;
    }`,
    "html": `
    <link href="https://use.typekit.net/skn8ash.css" rel="stylesheet"></link>
    <link href="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css" rel="stylesheet"></link>
    <div class="container">
    <section data-bgcolor="#bcb8ad" data-textcolor="#032f35">
      <div>
        <h1 data-scroll data-scroll-speed="1"><span>Horizontal</span> <span>scroll</span> <span>section</span></h1>
        <p data-scroll data-scroll-speed="2" data-scroll-delay="0.2">with GSAP ScrollTrigger & Locomotive Scroll</p>
      </div>
  
    </section>
  
    <section id="sectionPin">
      <div class="pin-wrap">
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        <img src="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="">
        <img src="https://images.pexels.com/photos/3371358/pexels-photo-3371358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="">
        <img src="https://images.pexels.com/photos/3618545/pexels-photo-3618545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=900" alt="">
  
      </div>
    </section>
    <section data-bgcolor="#e3857a" data-textcolor="#f1dba7"><img src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
      <h2 data-scroll data-scroll-speed="1" class="credit"><a href="https://thisisadvantage.com" target="_blank">Made by Advantage</a></h2>
    </section>
  </div>
  <script src="https://unpkg.com/gsap@3/dist/ScrollTrigger.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.min.js"></script>`
  },

  {
    "name": "Nuemorphism",
    "html": `<div class="container">
    <div class="app-container">
      <div class="app-top-bar">
        <button class="button button-small">
          <i class="fas fa-chevron-left"></i>
        </button>
        <h1 class="app-heading">Weather Stats</h1>
      </div>
      <div class="app-content">
        <button class="button button-block">
          <span class="subtle">Period</span> <span>Last 30 days</span>
          <div class="button button-small"><i class="fas fa-chevron-right"></i></div>
        </button>
        <div class="button button-dial">
  
          <span class="button-dial-spoke"></span>
          <span class="button-dial-spoke"></span>
          <span class="button-dial-spoke"></span>
          <span class="button-dial-spoke"></span>
          <span class="button-dial-spoke"></span>
          <span class="button-dial-spoke"></span>
  
          <div class="button-dial-top"></div>
          <div class="button-dial-label">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve">
              <g>
                <path d="M60.333,68.349V11.111C60.333,4.984,55.349,0,49.222,0c-6.126,0-11.111,4.984-11.111,11.111v57.237   c-4.15,3.323-6.667,8.397-6.667,13.874c0,9.802,7.975,17.777,17.777,17.777C59.024,100,67,92.024,67,82.223   C67,76.746,64.482,71.672,60.333,68.349z M44.778,48.363h4.444v-4.444h-4.444V35.03h4.444v-4.444h-4.444v-8.889h4.444v-4.444   h-4.444v-6.142c0-2.455,1.99-4.444,4.444-4.444c2.455,0,4.445,1.989,4.445,4.444v41.111h-8.889V48.363z" />
              </g>
            </svg>
            7&deg;F
          </div>
        </div>
        <div class="flex-button-container">
          <button class="button button-large">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="snowflake" class="color-cool" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M440.1 355.2l-39.2-23 34.1-9.3c8.4-2.3 13.4-11.1 11.1-19.6l-4.1-15.5c-2.2-8.5-10.9-13.6-19.3-11.3L343 298.2 271.2 256l71.9-42.2 79.7 21.7c8.4 2.3 17-2.8 19.3-11.3l4.1-15.5c2.2-8.5-2.7-17.3-11.1-19.6l-34.1-9.3 39.2-23c7.5-4.4 10.1-14.2 5.8-21.9l-7.9-13.9c-4.3-7.7-14-10.3-21.5-5.9l-39.2 23 9.1-34.7c2.2-8.5-2.7-17.3-11.1-19.6l-15.2-4.1c-8.4-2.3-17 2.8-19.3 11.3l-21.3 81-71.9 42.2v-84.5L306 70.4c6.1-6.2 6.1-16.4 0-22.6l-11.1-11.3c-6.1-6.2-16.1-6.2-22.2 0l-24.9 25.4V16c0-8.8-7-16-15.7-16h-15.7c-8.7 0-15.7 7.2-15.7 16v46.1l-24.9-25.4c-6.1-6.2-16.1-6.2-22.2 0L142.1 48c-6.1 6.2-6.1 16.4 0 22.6l58.3 59.3v84.5l-71.9-42.2-21.3-81c-2.2-8.5-10.9-13.6-19.3-11.3L72.7 84c-8.4 2.3-13.4 11.1-11.1 19.6l9.1 34.7-39.2-23c-7.5-4.4-17.1-1.8-21.5 5.9l-7.9 13.9c-4.3 7.7-1.8 17.4 5.8 21.9l39.2 23-34.1 9.1c-8.4 2.3-13.4 11.1-11.1 19.6L6 224.2c2.2 8.5 10.9 13.6 19.3 11.3l79.7-21.7 71.9 42.2-71.9 42.2-79.7-21.7c-8.4-2.3-17 2.8-19.3 11.3l-4.1 15.5c-2.2 8.5 2.7 17.3 11.1 19.6l34.1 9.3-39.2 23c-7.5 4.4-10.1 14.2-5.8 21.9L10 391c4.3 7.7 14 10.3 21.5 5.9l39.2-23-9.1 34.7c-2.2 8.5 2.7 17.3 11.1 19.6l15.2 4.1c8.4 2.3 17-2.8 19.3-11.3l21.3-81 71.9-42.2v84.5l-58.3 59.3c-6.1 6.2-6.1 16.4 0 22.6l11.1 11.3c6.1 6.2 16.1 6.2 22.2 0l24.9-25.4V496c0 8.8 7 16 15.7 16h15.7c8.7 0 15.7-7.2 15.7-16v-46.1l24.9 25.4c6.1 6.2 16.1 6.2 22.2 0l11.1-11.3c6.1-6.2 6.1-16.4 0-22.6l-58.3-59.3v-84.5l71.9 42.2 21.3 81c2.2 8.5 10.9 13.6 19.3 11.3L375 428c8.4-2.3 13.4-11.1 11.1-19.6l-9.1-34.7 39.2 23c7.5 4.4 17.1 1.8 21.5-5.9l7.9-13.9c4.6-7.5 2.1-17.3-5.5-21.7z"></path>
            </svg>
            Cool
          </button>
          <button class="button button-large">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="fire-alt" class="color-warm" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 209.96 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zm-19.47 340.65C282.43 407.01 255.72 416 226.86 416 154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97 27.35 52.19 15.81 118.97-33.43 153.42z"></path>
            </svg>
            Warm
          </button>
        </div>
        <button class="button button-link">
          Update Settings
        </button>
      </div>
    </div>
    <div class="app-container" data-theme="dark">
      <div class="app-top-bar">
        <button class="button button-small">
          <i class="fas fa-chevron-left"></i>
        </button>
        <h1 class="app-heading">Weather Stats</h1>
      </div>
      <div class="app-content">
        <button class="button button-block">
          <span class="subtle">Period</span> <span>Last 30 days</span>
          <div class="button button-small"><i class="fas fa-chevron-right"></i></div>
        </button>
        <div class="button button-dial">
  
          <span class="button-dial-spoke"></span>
          <span class="button-dial-spoke"></span>
          <span class="button-dial-spoke"></span>
          <span class="button-dial-spoke"></span>
          <span class="button-dial-spoke"></span>
          <span class="button-dial-spoke"></span>
  
          <div class="button-dial-top"></div>
          <div class="button-dial-label">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve">
              <g>
                <path d="M60.333,68.349V11.111C60.333,4.984,55.349,0,49.222,0c-6.126,0-11.111,4.984-11.111,11.111v57.237   c-4.15,3.323-6.667,8.397-6.667,13.874c0,9.802,7.975,17.777,17.777,17.777C59.024,100,67,92.024,67,82.223   C67,76.746,64.482,71.672,60.333,68.349z M44.778,48.363h4.444v-4.444h-4.444V35.03h4.444v-4.444h-4.444v-8.889h4.444v-4.444   h-4.444v-6.142c0-2.455,1.99-4.444,4.444-4.444c2.455,0,4.445,1.989,4.445,4.444v41.111h-8.889V48.363z" />
              </g>
            </svg>
            7&deg;F
          </div>
        </div>
        <div class="flex-button-container">
          <button class="button button-large">
            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="snowflake" class="color-cool" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M440.1 355.2l-39.2-23 34.1-9.3c8.4-2.3 13.4-11.1 11.1-19.6l-4.1-15.5c-2.2-8.5-10.9-13.6-19.3-11.3L343 298.2 271.2 256l71.9-42.2 79.7 21.7c8.4 2.3 17-2.8 19.3-11.3l4.1-15.5c2.2-8.5-2.7-17.3-11.1-19.6l-34.1-9.3 39.2-23c7.5-4.4 10.1-14.2 5.8-21.9l-7.9-13.9c-4.3-7.7-14-10.3-21.5-5.9l-39.2 23 9.1-34.7c2.2-8.5-2.7-17.3-11.1-19.6l-15.2-4.1c-8.4-2.3-17 2.8-19.3 11.3l-21.3 81-71.9 42.2v-84.5L306 70.4c6.1-6.2 6.1-16.4 0-22.6l-11.1-11.3c-6.1-6.2-16.1-6.2-22.2 0l-24.9 25.4V16c0-8.8-7-16-15.7-16h-15.7c-8.7 0-15.7 7.2-15.7 16v46.1l-24.9-25.4c-6.1-6.2-16.1-6.2-22.2 0L142.1 48c-6.1 6.2-6.1 16.4 0 22.6l58.3 59.3v84.5l-71.9-42.2-21.3-81c-2.2-8.5-10.9-13.6-19.3-11.3L72.7 84c-8.4 2.3-13.4 11.1-11.1 19.6l9.1 34.7-39.2-23c-7.5-4.4-17.1-1.8-21.5 5.9l-7.9 13.9c-4.3 7.7-1.8 17.4 5.8 21.9l39.2 23-34.1 9.1c-8.4 2.3-13.4 11.1-11.1 19.6L6 224.2c2.2 8.5 10.9 13.6 19.3 11.3l79.7-21.7 71.9 42.2-71.9 42.2-79.7-21.7c-8.4-2.3-17 2.8-19.3 11.3l-4.1 15.5c-2.2 8.5 2.7 17.3 11.1 19.6l34.1 9.3-39.2 23c-7.5 4.4-10.1 14.2-5.8 21.9L10 391c4.3 7.7 14 10.3 21.5 5.9l39.2-23-9.1 34.7c-2.2 8.5 2.7 17.3 11.1 19.6l15.2 4.1c8.4 2.3 17-2.8 19.3-11.3l21.3-81 71.9-42.2v84.5l-58.3 59.3c-6.1 6.2-6.1 16.4 0 22.6l11.1 11.3c6.1 6.2 16.1 6.2 22.2 0l24.9-25.4V496c0 8.8 7 16 15.7 16h15.7c8.7 0 15.7-7.2 15.7-16v-46.1l24.9 25.4c6.1 6.2 16.1 6.2 22.2 0l11.1-11.3c6.1-6.2 6.1-16.4 0-22.6l-58.3-59.3v-84.5l71.9 42.2 21.3 81c2.2 8.5 10.9 13.6 19.3 11.3L375 428c8.4-2.3 13.4-11.1 11.1-19.6l-9.1-34.7 39.2 23c7.5 4.4 17.1 1.8 21.5-5.9l7.9-13.9c4.6-7.5 2.1-17.3-5.5-21.7z"></path>
            </svg>
            Cool
          </button>
          <button class="button button-large">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="fire-alt" class="color-warm" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0 69.74 91.17 0 209.96 0 281.6 0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zm-19.47 340.65C282.43 407.01 255.72 416 226.86 416 154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75 6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97 27.35 52.19 15.81 118.97-33.43 153.42z"></path>
            </svg>
            Warm
          </button>
        </div>
        <button class="button button-link">
          Update Settings
        </button>
      </div>
    </div>
  </div>`,
    "css": `:root {
      --font-color: #222;
      --bg-color: #f2f3f7;
      --button-bg-color: #f2f3f7;
      --button-shadow: -6px -6px 8px rgba(255, 255, 255, 0.9),
        5px 5px 8px rgba(0, 0, 0, 0.07);
    }
    
    [data-theme=dark] {
      --font-color: #fff;
      --bg-color: #181818;
      --button-bg-color: #121212;
      --button-shadow: -2px -2px 4px rgba(255, 255, 255, 0.05),
        0 0 10px 10px rgba(255, 255, 255, 0.005), 2px 2px 8px rgba(60, 60, 60, 0.1);
    }
    
    html {
      box-sizing: border-box;
      font-size: 18px;
      font-family: "Roboto", sans-serif;
      color: var(--font-color);
    }
    
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    
    body {
      background-color: #f2f2f2;
    }
    
    .color-cool {
      color: #077dfe;
    }
    
    .color-warm {
      color: #ff7a00;
    }
    
    .container {
      display: flex;
      justify-content: space-evenly;
      padding-top: 25px;
      align-items: center;
      flex-direction: column;
    }
    
    @media screen and (min-width: 800px) {
      .container {
        flex-direction: row;
      }
    }
    .app-container {
      background-color: var(--bg-color);
      border-radius: 40px;
      box-shadow: -2px -2px 4px 0px #ffffff, 50px 50px 50px 0px rgba(0, 0, 0, 0.25);
      display: block;
      flex: 1;
      min-height: 500px;
      max-width: 350px;
      margin-bottom: 25px;
      overflow: hidden;
      padding: 30px;
    }
    
    .app-top-bar {
      display: flex;
      align-items: center;
      margin-bottom: 30px;
    }
    
    .app-heading {
      color: var(--font-color);
      display: block;
      flex: 1;
      font-size: 28px;
      font-weight: 800;
      margin: 0;
      text-align: center;
    }
    
    button {
      border: 0;
    }
    button:focus {
      border: none;
      outline: 0 !important;
      outline-style: none;
    }
    
    .button {
      color: var(--font-color);
      position: relative;
      border-radius: 15px;
      background: var(--button-bg-color);
      font-weight: 700;
      transition: all 100ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: var(--button-shadow);
      cursor: pointer;
    }
    .button.button-link {
      color: #067cf8;
      display: block;
      font-size: 17px;
      margin: 30px 0 0;
      padding: 20px 0;
      width: 100%;
    }
    .button.button-small {
      color: #6d6e74;
      font-size: 22px;
      line-height: 40px;
      width: 40px;
      height: 40px;
    }
    .button.button-large {
      display: flex;
      font-size: 20px;
      flex-direction: column;
      padding: 15px;
      text-align: left;
      width: 45%;
    }
    .button.button-large svg {
      margin-bottom: 40px;
      width: 30px;
    }
    
    .button-dial {
      border-radius: 50%;
      display: flex;
      height: 270px;
      margin: 35px auto;
      align-items: center;
      justify-content: center;
      width: 270px;
    }
    
    .button-dial-top {
      background: var(--button-bg-color);
      box-shadow: var(--button-shadow);
      border-radius: 50%;
      width: 70%;
      height: 70%;
      margin: 0 auto;
      position: absolute;
      top: 15%;
      left: 15%;
      text-align: center;
      z-index: 5;
    }
    
    .button-dial-label {
      color: #067cf8;
      font-size: 28px;
      fill: #067cf8;
      position: relative;
      z-index: 10;
    }
    
    .button-dial-spoke {
      background-color: rgba(96, 171, 254, 0.6);
      display: block;
      height: 2px;
      width: 83%;
      position: absolute;
      margin: 0 auto;
      z-index: 5;
      top: 50%;
    }
    .button-dial-spoke:nth-child(2) {
      transform: rotate(30deg);
    }
    .button-dial-spoke:nth-child(3) {
      transform: rotate(60deg);
    }
    .button-dial-spoke:nth-child(4) {
      transform: rotate(90deg);
    }
    .button-dial-spoke:nth-child(5) {
      transform: rotate(120deg);
    }
    .button-dial-spoke:nth-child(6) {
      transform: rotate(150deg);
    }
    
    .button-block {
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: 15px 24px;
      width: 100%;
    }
    .button-block span {
      font-size: 16px;
    }
    
    .subtle {
      color: #6d6e74;
    }
    
    .flex-button-container {
      display: flex;
      justify-content: space-between;
    }`,
    "javascript": ``
  }



]