import { Card } from './components/smart/Card';
import './css/style.css';

const mn = new Card('Monday');
mn.createTask('Prif', 'Che del');
mn.createTask('Vilkoi', 'V glaz');
mn.createTask('V popu', 'Raz');

const tu = new Card('Tuesday');
tu.createTask('Prif', 'Che del');
tu.createTask('Vilkoi', 'V glaz');
tu.createTask('V popu', 'Raz');

const we = new Card('Wednesday');
we.createTask('Prif', 'Che del');

const th = new Card('Thursday');
th.createTask('Da ya prost', 'Pokurit\' vishel');

const fr = new Card('Friday');
fr.createTask('V popu', 'Raz');

const sa = new Card('Saturday');
sa.createTask('Vilkoi', 'V glaz');

const su = new Card('Sunday');
su.createTask('Vilkoi', 'V glaz');
su.createTask('V popu', 'Raz');

const days = [mn, tu, we, th, fr, sa, su];

/**
 *
 * @param {Task} task
 * @param {num} index
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
  return (card.taskArr.map((task, index) => getTaskTemplate(task, index, card.name))).join('');
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
