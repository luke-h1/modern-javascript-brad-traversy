const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Event Handler
function runEvent(e) {
    e.preventDefault();
    console.log(`EVENT TYPE: ${e.type}`); 
    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;  

    // document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40`
}; 

// click Event Listener
clearBtn.addEventListener('click', runEvent);

// doubleClick
clearBtn.addEventListener('dblclick', runEvent);

// Mouse Down
clearBtn.addEventListener('mousedown', runEvent);

// Mouse Up
clearBtn.addEventListener('mouseup', runEvent);

// Mouse Enter  // Hover Mouse Over Area // only fires on parent element
card.addEventListener('mouseenter', runEvent);

// Mouse Leave // Mouse Leaves Area // only fires on leaving parent element
clearBtn.addEventListener('mouseleave', runEvent);

// Mouse over // when mouse enters area
card.addEventListener('mouseover', runEvent);

// Mouse out // when mouse leaves area
card.addEventListener('mouseout', runEvent);

// mouse move // any movement inside of the selected element 
card.addEventListener('mousemove', runEvent); 

