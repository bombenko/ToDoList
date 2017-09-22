import { Card } from './components/smart/Card';
import './css/style.less';

const monday = new Card('Monday');
monday.createTask('Prif', 'Che del');
monday.createTask('Vilkoi', 'V glaz');
monday.createTask('V popu', 'Raz');

const tuesday = new Card('Tuesday');
tuesday.createTask('Prif', 'Che del');
tuesday.createTask('Vilkoi', 'V glaz');
tuesday.createTask('V popu', 'Raz');

const wednesday = new Card('Wednesday');
wednesday.createTask('Prif', 'Che del');

const thursday = new Card('Thursday');
thursday.createTask('Da ya prost', 'Pokurit\' vishel');

const friday = new Card('Friday');
friday.createTask('V popu', 'Raz');

const saturday = new Card('Saturday');
saturday.createTask('Vilkoi', 'V glaz');

const sunday = new Card('Sunday');
sunday.createTask('Vilkoi', 'V glaz');
sunday.createTask('V popu', 'Raz');

const days = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];

/**
 *
 * @param {Task} task
 * @param {number} index
 * @param {string} cardName
 * @returns {string}
 */
function getTaskTemplate(task, index, cardName) {
  return `
    <div class="task">
      <input class="checkbox" id="${cardName + index + '-checkbox'}" type="checkbox">
      <label for="${cardName + index + '-checkbox'}" class="checkbox-label task__completed"></label>
      <div class="task__content">
        <h3 class="title task__title">${task.title}</h3>
        <p class="task__description">${task.description}</p>
      </div>
    </div>
  `;
}

/**
 *
 * @param {Card} card
 */
function getTaskListTemplate(card) {
  return (card.taskList.map((task, index) => getTaskTemplate(task, index, card.name))).join('');
}

/**
 *
 * @param {Card} card
 * @returns {string}
 */
function getCardTemplate(card) {
  return `
    <div class="card">
      <h2 class="title card__title">${card.name}</h2>
      <div class="card__content">
        ${getTaskListTemplate(card)}
      </div>
      <div class="button-wrapper">
        <button type="button" class="add-button">Add element...</button>
      </div>   
    </div>
  `;
}

/**
 *
 * @param {Array} cardList
 */
function getCardListTemplate(cardList) {
  return (cardList.map((card) => getCardTemplate(card))).join('');
}

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>ToDoList</title>
    <meta name="viewport" content="width=device-width,init-scale=1">
</head>
<body>
    <div class="header">
        <div class="main-container">
            <h1 class="header__title">Get it done</h1>
        </div>
    </div>
    <main class="content">
        <div class="main-container">    
          ${getCardListTemplate(days)}
        </div> 
    </main>
</body>
</html>
`;

document.body.innerHTML = html;
