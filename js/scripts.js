// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";

console.log('Hello, World!');

  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  const items = JSON.parse(localStorage.getItem('items')) || [];
  const clearAll = document.querySelector('.clearAll');

function addItem(e) {
e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    }
    
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) =>{
        return `
                <li>
                    <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
                    <label for="item${i}">${plate.text}</label>
                </li>
               `;
    }).join('');
    
}

function toggleDone(e){
    if(!e.target.matches('input')) return; //skip this unless its an input
    
    const el = e.targetconsole.log(el.dataset.index); // tells you corresponding number in array
    items[index].done = !items[index.done];
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);


}

function clear () {
    window.localStorage.clear();
    window.location.reload(false);

}

function checkAll(){
    
}

function uncheckAll(){
    
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
clearAll.addEventListener('click', clear);

populateList(items, itemsList);

