import ListHandler from './ListHandler';

export default class DataHandler {
  constructor() {
    this.listHandler = null;
    if(localStorage.getItem('list-data')) {
      console.log('import');
      const storedData = JSON.parse(localStorage.getItem('list-data'));
      this.listHandler = new ListHandler(storedData);  
    }
    else {
      console.log('make');
      this.listHandler = new ListHandler();
    }
    this.form = document.forms[0];
    this.form.onsubmit = (event) => {
      event.preventDefault();
      this.addItem();
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