/* ------------------ CSS ------------------ */
import '../css/main.css';

/* ------------- Custom modules ------------ */
import DataHandler from './DataHandler.js';

const dataHandler = new DataHandler();

/* const listHandler = new ListHandler();
const inputForm = document.forms[0];

inputForm.onsubmit = (event) => {
  event.preventDefault();
  let itemDescription = inputForm[0].value;
  listHandler.addItem(itemDescription);
  inputForm.reset();
  inputForm[0].focus();
}
 */