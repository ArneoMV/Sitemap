// demo 1
// // Scroll to given position
// const ele = document.getElementById('container');
// ele.scrollTop = 100;
// ele.scrollLeft = 150;

// // Drag to scroll
// let pos = { top: 0, left: 0, x: 0, y: 0 };

// const mouseDownHandler = function (e) {
//     pos = {
//         // The current scroll
//         left: ele.scrollLeft,
//         top: ele.scrollTop,
//         // Get the current mouse position
//         x: e.clientX,
//         y: e.clientY,
//     };

//     document.addEventListener('mousemove', mouseMoveHandler);
//     document.addEventListener('mouseup', mouseUpHandler);
// };


// const mouseMoveHandler = function (e) {
//     // How far the mouse has been moved
//     const dx = e.clientX - pos.x;
//     const dy = e.clientY - pos.y;

//     // Scroll the element
//     ele.scrollTop = pos.top - dy;
//     ele.scrollLeft = pos.left - dx;
// };

// const mouseDownHandler = function(e) {
//     // Change the cursor and prevent user from selecting the text
//     ele.style.cursor = 'grabbing';
//     ele.style.userSelect = 'none';
// };

// const mouseUpHandler = function () {
//     document.removeEventListener('mousemove', mouseMoveHandler);
//     document.removeEventListener('mouseup', mouseUpHandler);

//     ele.style.cursor = 'grab';
//     ele.style.removeProperty('user-select');
// };

// deno 2
const slider = document.querySelector('.items');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });

  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  });
