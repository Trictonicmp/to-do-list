import Item from './Item.js';

export default class ListHandler {
  constructor() {
    this.items = [];
    this.itemsContainer = document.getElementById('items-container');
    this.document = document.querySelector('html');
    this.document.onclick = (event) => {
      this.clickListener(event);
    };

    this.renderItems();
  }

  /* Overriden by arrow function in DataHandler */
  saveData = () => {}

  addItem(description, completed = false) {
    const newItem = new Item(description, this.items.length, completed);

    newItem.deleteElement = () => {
      this.deleteElement(newItem.index);
    };
   
    this.items.push(newItem);
    this.renderItems();
  }

  deleteElement(elementIndex) {
    this.items[elementIndex].delete();

    this.items[elementIndex].htmlElement.getAnimations()[0].onfinish = (event) => {
      this.items.splice(elementIndex, 1);
      this.updateItemsIndex();
      this.saveData();
      this.renderItems();
    };
  }

  clearCompleted() {
    this.items = this.items.filter((item) => {
      return !item.completed;
    });
    this.renderItems();
  }

  updateItemsIndex() {
    this.items.forEach((item, index) => {
      item.setIndex(index);
    });
  }

  renderItems() {
    this.itemsContainer.innerHTML = '';
    this.items.forEach((item) => {
      this.itemsContainer.append(item.getHtml());
    });
    this.saveData();
  }

  clickListener(event) {
    this.items.forEach((item) => {
      if (event.target === item.descriptionSpan
        || event.target === item.descriptionInput) {
        item.makeEditable(true);
      } else {
        item.makeEditable(false);
        this.saveData();
      }
    });
  }
}