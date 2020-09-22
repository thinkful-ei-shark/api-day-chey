const items = [];
let hideCheckeditems = false;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
  this.items.push(item);
};

const findAndUpdate = function (id, newData) {
  const item = this.items.find(currentItem => currentItem.id === id);
  Object.assign(item, newData);

}

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  findById,
  hideCheckeditems,
  addItem,
  findAndUpdate,
  findAndDelete,
  toggleCheckedFilter
};