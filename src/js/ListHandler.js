import Item from './Item.js';

export default class ListHandler {
  constructor(items = []) {
    this.items = [];
    if(items) {
      items.forEach(item => {
        this.items.push(new Item(item.description, this.items.length, item.completed));
      });
    }
    this.itemsContainer = document.getElementById('items-container');

    this.document = document.querySelector('html');
    this.document.onclick = (event) => {
      this.clickListener(event);
    }

    this.renderItems();
  }

  addItem(description) {
    const newItem = new Item(description, this.items.length);
    this.items.push(newItem);
    this.renderItems();
  }

  renderItems() {
    this.itemsContainer.innerHTML = '';
    this.items.forEach(item => {
      this.itemsContainer.append(item.getHtml());
    });
  }

  clickListener(event) {
    this.items.forEach((item) => {
      if(event.target === item.descriptionSpan) {
        console.log(event.target);
        item.makeEditable(true);
      }
      if(event.target !== item.descriptionSpan) {
        console.log(event.target);
        item.makeEditable(false);
      }
    });
  }
}