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
    this.renderItems();
  }

  addItem(description) {
    const newItem = new Item(description, this.items.length);
    this.items.push(newItem);
    this.renderItems();
  }

  renderItems() {
    this.itemsContainer.innerHTML = '';
    for (let i = 0; i < this.items.length; i += 1) {
      this.itemsContainer.append(this.items[i].createHtml());
    }
  }
}