import ListHandler from './ListHandler.js';

export default class DataHandler {
  constructor() {
    this.listHandler = new ListHandler();
    this.form = document.getElementById('main-form');
    this.form.onsubmit = (event) => {
      event.preventDefault();
      this.addItem();
    };
    this.listHandler.saveData = () => {
      this.saveData();
    };
  }

  init() {
    if (localStorage.getItem('list-data')) {
      const storedData = JSON.parse(localStorage.getItem('list-data'));
      storedData.forEach((item) => {
        this.listHandler.addItem(item.description, item.completed);
      });
    }
  }

  addItem() {
    const inputValue = this.form[0].value;
    this.listHandler.addItem(inputValue);
    this.form.reset();
    this.form.focus();
    this.saveData();
  }

  saveData() {
    localStorage.setItem('list-data', JSON.stringify(this.listHandler.items));
  }
}