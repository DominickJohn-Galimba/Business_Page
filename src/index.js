import {CreateContainer, ExecuteHomePage} from './initial_page.js';
import {ExecuteAbout} from './about.js';
import {ExecuteMenu} from './menu.js';

//initialize home page
ExecuteHomePage();

const contentContainer = document.getElementById('content');

const navButton = document.querySelectorAll('nav > *');
navButton.forEach((button, index)=>{
    button.addEventListener('click', function(){
        while (contentContainer.firstChild){
            contentContainer.removeChild(contentContainer.firstChild);
        }
        if (index + 1 === 1){
            ExecuteHomePage();
        }else if (index + 1 === 2){
            ExecuteMenu();
        }else{
            ExecuteAbout();
        }
    });
})
