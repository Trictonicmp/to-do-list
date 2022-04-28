import Item from './Item.js';

export default class ListHandler {
  constructor(items = []) {
    this.items = [];
    if(items) {
      items.forEach(item => {
        const newItem = new Item(item.description, this.items.length, item.completed);
        this.items.push(newItem);
        newItem.deleteElement = (index) => {
          this.deleteElement(index);
          this.renderItems();
        }
      });
    }
    this.itemsContainer = document.getElementById('items-container');

    this.document = document.querySelector('html');
    this.document.onclick = (event) => {
      this.clickListener(event);
    }

    this.renderItems();
  }

  /* Overriden by arrow function in DataHandler */
  saveData() {}

  addItem(description) {
    const newItem = new Item(description, this.items.length);
    newItem.deleteElement = (index) => {
      this.deleteElement(index);
      this.renderItems();
    }
    this.items.push(newItem);
    this.renderItems();
  }

  deleteElement(elementIndex) {
    this.items.splice(elementIndex, 1);
    this.updateItemsIndex();
    this.saveData();
  }

  updateItemsIndex() {
    this.items.forEach((item, index) => {
      item.index = index;
    });
  }

  renderItems() {
    this.itemsContainer.innerHTML = '';
    this.items.forEach(item => {
      this.itemsContainer.append(item.getHtml());
    });
    this.saveData();
  }

  clickListener(event) {
    this.items.forEach((item) => {
      if(event.target === item.descriptionSpan || event.target === item.descriptionInput) {
        item.makeEditable(true);
      }
      else {
        item.makeEditable(false);
        this.saveData();
      }
    });
  }
}