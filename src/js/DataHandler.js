import ListHandler from './ListHandler.js';

export default class DataHandler {
  constructor() {
    this.listHandler = new ListHandler();
    this.form = document.getElementById('main-form');
    this.form.onsubmit = (event) => {
      event.preventDefault();
      this.addItem();
    };
    this.formInput = this.form[0];
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
    if(!this.checkFormValidation()) { return; }
    const inputValue = this.formInput.value;
    this.listHandler.addItem(inputValue);
    this.form.reset();
    this.form.focus();
    this.saveData();
  }

  checkFormValidation() {
    let validated = false;
    if(!this.formInput.checkValidity()) {
      this.formInput.setCustomValidity('Add a task!');
    }
    else {
      this.formInput.setCustomValidity('');
      validated = true;
    }

    return validated;
  }

  saveData() {
    localStorage.setItem('list-data', JSON.stringify(this.listHandler.items));
  }
}