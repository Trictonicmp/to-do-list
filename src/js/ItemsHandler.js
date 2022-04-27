import Item from './Item.js';

export default class ItemsHandler {
  constructor() {
    this.items = [];
    this.itemsContainer = document.getElementById('items-container');
  }

  addItem(description) {
    const newItem = new Item(description, this.items.length);
    this.items.push(newItem);
    this.renderItems();
  }

  renderItems() {
    console.log(this.items);
    this.itemsContainer.innerHTML = '';
    for(let i = 0; i < this.items.length; i += 1) {
      this.itemsContainer.append(this.items[i].createHtml());
    }
  }
}