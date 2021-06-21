/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navBar = document.querySelector('#navbar__list');
const sectionsList = document.querySelectorAll('section');
//using fragment to optimize performance
const fragment = document.createDocumentFragment();



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// const liMaker = function creatLiElement(){};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for (const sect of sectionsList) { 
    //Using for of loop to iterate on every section and link it to the nav bar elements
    const li = document.createElement('li');
    li.innerText = sect.getAttribute('data-nav')
    //appendung the new li elements to the fragment
    fragment.appendChild(li);
    li.addEventListener('click', ()=> {
        sect.scrollIntoView({behavior:'smooth'});
    })

}

//appending the content of the fragment to the navigattion bar to make things work
navBar.appendChild(fragment);

const wholelist = document.querySelectorAll('li');



// Add class 'active' to section when near top of viewport
onscroll = function() {
    var viewPosition = document.documentElement.scrollTop

    sectionsList.forEach(section => {
        if (viewPosition >= section.offsetTop-200 && viewPosition < (section.offsetTop-300 + section.offsetHeight)) {
            section.classList.add('active');
            console.log(section.className)
        } else {
            section.classList.remove('active');
        }
    })
}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
