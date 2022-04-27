import dotsSvg from '../images/dots.svg';
import trashSvg from '../images/delete.svg';

export default class Item {
  constructor(description, index, completed = false) {
    this.description = description;
    this.index = index;
    this.completed = completed;
  }

  createHtml() {
    const li = document.createElement('li');

    const checkLabel = document.createElement('label');
    checkLabel.classList.add('checkbox');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkLabel.append(checkbox);
    li.append(checkLabel);

    const labelDesc = document.createElement('label');
    labelDesc.classList.add('description');
    const description = document.createElement('span');
    description.innerText = this.description;
    labelDesc.append(description);
    const inputDesc = document.createElement('input');
    inputDesc.type = 'text';
    inputDesc.value = this.description;
    labelDesc.append(inputDesc);
    li.append(labelDesc);

    const move = document.createElement('button');
    move.type = 'button';
    move.classList.add('list-button');
    move.classList.add('move');
    const dotsImg = new Image();
    dotsImg.src = dotsSvg;
    dotsImg.alt = ':';
    move.append(dotsImg);
    li.append(move);

    const trash = document.createElement('button');
    trash.type = 'button';
    trash.classList.add('list-button');
    trash.classList.add('trash');
    const trashImg = new Image();
    trashImg.src = trashSvg;
    trashImg.alt = 'delete';
    trash.append(trashImg);
    li.append(trash);

    return li;
  }
}