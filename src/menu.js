import { CreateContainer, CreateElement, selectElement } from "./initial_page";

function ExecuteMenu(){
    const getContent = document.querySelector('#content');
    const parentContainerElement = CreateContainer('div', 'parent_container');
    getContent.appendChild(parentContainerElement);
    
    //top text
    const paragraphElement = CreateElement('p');
    paragraphElement.textContent = 'YOUR CHOICE';
    const offerElement = CreateElement('h2');
    offerElement.textContent = 'We have the right package for you';

    parentContainerElement.appendChild(paragraphElement);
    parentContainerElement.appendChild(offerElement);

    //container for the 3 offer
    const pricingContainer = CreateContainer('div', 'pricing_container');
    parentContainerElement.appendChild(pricingContainer);

    // first offer content
    const firstOfferContainer = CreateContainer('div', 'first_Container');

    pricingContainer.appendChild(firstOfferContainer);

    const labelText = CreateElement('h3');
    labelText.textContent = 'PERSONAL';
    const description = CreateElement('p');
    description.textContent = 'The standard version';

    firstOfferContainer.appendChild(labelText);
    firstOfferContainer.appendChild(description);

    const firstPriceContainer = CreateContainer('div', 'first_Price_Container');
    firstOfferContainer.appendChild(firstPriceContainer);

    const price = CreateElement('h3');
    price.textContent = '$19';
    const priceDescription = CreateElement('p');
    priceDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

    firstPriceContainer.appendChild(price);
    firstPriceContainer.appendChild(priceDescription);
    
    const limitation = CreateElement('p');
    limitation.textContent = '5 Downloads';

    firstOfferContainer.appendChild(limitation);

    //second offer content
    const secondOfferContainer = CreateContainer('div', 'second_Offer_Container');
    pricingContainer.appendChild(secondOfferContainer);

    const studentOffer = CreateElement('h3');
    const studentOfferDescription = CreateElement('p');
    
    studentOffer.textContent = 'STUDENT';
    studentOfferDescription.textContent = 'Most popular choice';

    secondOfferContainer.appendChild(studentOffer);
    secondOfferContainer.appendChild(studentOfferDescription);

    const secondPricingContainer = CreateContainer('div', 'second_Pricing_Container');
    const studentPrice = CreateElement('h3');
    const studentPriceDescription = CreateElement('p');

    studentPrice.textContent = '$29';
    studentPriceDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

    secondOfferContainer.appendChild(secondPricingContainer);
    secondPricingContainer.appendChild(studentPrice);
    secondPricingContainer.appendChild(studentPriceDescription);

    const studentOfferLimitation = CreateElement('p');
    studentOfferLimitation.textContent = '15 Downloads';

    secondOfferContainer.appendChild(studentOfferLimitation);

    //third offer content 
    const thirdOfferContainer = CreateContainer('div', 'third_Offer_Container');

    pricingContainer.appendChild(thirdOfferContainer);

    const businessOffer = CreateElement('h3');
    const businessOfferDescription = CreateElement('p')

    businessOffer.textContent = 'BUSINESS';
    businessOfferDescription.textContent = 'For the whole team';

    thirdOfferContainer.appendChild(businessOffer)
    thirdOfferContainer.appendChild(businessOfferDescription);

    const thirdPricingContainer = CreateContainer('div', 'third_Pricing_Container');

    thirdOfferContainer.appendChild(thirdPricingContainer);

    const businessPrice = CreateElement('h3');
    const businessPriceDescription = CreateElement('p');

    businessPrice.textContent = '$49';
    businessPriceDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';

    thirdPricingContainer.appendChild(businessPrice);
    thirdPricingContainer.appendChild(businessPriceDescription);

    const businessOfferLimitation = CreateElement('p');
    
    businessOfferLimitation.textContent = 'Unlimited Downloads';

    thirdOfferContainer.appendChild(businessOfferLimitation);

}
export {ExecuteMenu};