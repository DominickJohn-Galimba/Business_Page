import { CreateContainer, CreateElement, selectElement } from "./initial_page";
import working from './working.jpg';
import laptop from './laptop.jpg';

function ExecuteAbout(){
    const getContent = document.querySelector('#content');
    const parentContainer = CreateContainer('div', 'whole_container');
    getContent.appendChild(parentContainer);

    //make title and description element
    const titleElement = CreateElement('h2');
    titleElement.textContent = 'Nunc Dignissim';
    const descriptionElement = CreateElement('p');
    descriptionElement.textContent =  'Aliquam erat volutpat nam dui';

    parentContainer.appendChild(titleElement);
    parentContainer.appendChild(descriptionElement);

    // paragraph container
    const childContainerOne = CreateContainer('div', 'Container_One');
    const childContainerTwo = CreateContainer('div', 'Container_Two');
    const childContainerThree = CreateContainer('div', 'Container_Three');
    
    parentContainer.appendChild(childContainerOne);
    parentContainer.appendChild(childContainerTwo);
    parentContainer.appendChild(childContainerThree);

    //picture 1 container
    const pictureContainerOne = CreateContainer('div', 'container');
    childContainerOne.appendChild(pictureContainerOne);

    const picture = new Image();
    picture.src = working;
    picture.alt = 'Person Using Computer';
    pictureContainerOne.appendChild(picture);

    //element and text
    const paragraphElementOne = CreateElement('p');
    paragraphElementOne.textContent = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo nventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

    childContainerOne.appendChild(paragraphElementOne);

    //container for second picture element and content
    const pictureContainerTwo = CreateContainer('div', 'container_Picture_Two');
    childContainerTwo.appendChild(pictureContainerTwo);

    //element and text
    const pictureTwo = new Image()
    pictureTwo.src = laptop;
    picture.alt = "Black Laptop";
    pictureContainerTwo.appendChild(pictureTwo);

    const paragraphElementTwo = CreateElement('p');
    paragraphElementTwo.textContent = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.';

    childContainerTwo.appendChild(paragraphElementTwo);

    //element for last third container
    const paragraphElementThree = CreateElement('p');
    paragraphElementThree.textContent = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.';

    childContainerThree.appendChild(paragraphElementThree);
};
export{ExecuteAbout};