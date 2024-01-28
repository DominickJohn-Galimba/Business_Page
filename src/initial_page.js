import image  from './Background_Image.jpg';
import './styles.css';

//container
function CreateContainer(element, id){
    const Container = document.createElement(element);
    Container.id = id;

    return Container;
}
// element
function CreateElement(type, setClassName = undefined){
    const element = document.createElement(type);
    if(setClassName){
        element.className = setClassName;
    }
    return element;
}
function selectElement(name){
    const theElement = document.querySelector(name);

    return theElement;
}


function ExecuteHomePage(){
    const getContent = document.querySelector('#content');
    const backgroundContainerElement = CreateContainer("div", "background");
    getContent.appendChild(backgroundContainerElement);

    //Company name and description
    const backgroundContainer = document.querySelector('#background');
    const CompanyNameElement = CreateElement("h1", "company_Name");
    CompanyNameElement.textContent = "Mega Tech. Solution Inc.";
    const CompanyDescriptionElement = CreateElement("h3", "description");
    CompanyDescriptionElement.textContent = "The Leading Technologies Provider and Maker";

    //Additional Feature
    const firstCard = CreateContainer('div', "first");
    const secondCard = CreateContainer('div', "second");
    const thirdCard = CreateContainer('div', "third");

    //first Card content
    const firstCardTextTop = CreateElement("h3");
    firstCardTextTop.textContent = "Magna tempus sed amet aliquam veroeros"; 

    const firstCardTextMiddle = CreateElement("p");
    firstCardTextMiddle.textContent = "Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu.";

    const firstCardButton = CreateElement("button");
    firstCardButton.textContent = "More";

    //second Card content
    const secondCardTextTop = CreateElement('h3');
    secondCardTextTop.textContent = "Interdum lorem pulvinar adipiscing vitae";

    const secondCardTextMiddle = CreateElement("p");
    secondCardTextMiddle.textContent = "Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu."

    const secondCardButton = CreateElement("button");
    secondCardButton.textContent = "More";

    //third Card content
    const thirdCardTextTop = CreateElement("h3");
    thirdCardTextTop.textContent = "Libero purus magna sapien sed ullamcorper";

    const thirdCardTextMiddle = CreateElement("p");
    thirdCardTextMiddle.textContent = "Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu.";

    const thirdCardButton = CreateElement("button");
    thirdCardButton.textContent = "More";

    backgroundContainer.appendChild(CreateContainer('div', 'WebTitle'));
    const CompanyNameContainer = selectElement('#WebTitle');
    CompanyNameContainer.appendChild(CompanyNameElement);
    CompanyNameContainer.appendChild(CompanyDescriptionElement);

    //bottom group of element
    getContent.appendChild(CreateContainer('div', 'Feature'));
    const cardContainer = selectElement('#Feature');
    cardContainer.appendChild(firstCard);
    cardContainer.appendChild(secondCard);
    cardContainer.appendChild(thirdCard);
    
    //append text to first card
    const getFirstCard = selectElement('#first');
    getFirstCard.appendChild(firstCardTextTop);
    getFirstCard.appendChild(firstCardTextMiddle);
    getFirstCard.appendChild(firstCardButton);

    //append text to second card
    const getSecondCard = selectElement('#second');
    getSecondCard.appendChild(secondCardTextTop);
    getSecondCard.appendChild(secondCardTextMiddle);
    getSecondCard.appendChild(secondCardButton);

    //append text to Third card
    const getThirdCard = selectElement('#third');
    getThirdCard.appendChild(thirdCardTextTop);
    getThirdCard.appendChild(thirdCardTextMiddle);
    getThirdCard.appendChild(thirdCardButton);

}
export {CreateContainer, ExecuteHomePage, CreateElement, selectElement};