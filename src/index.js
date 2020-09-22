import $ from 'jquery';

import 'normalize.css';
import './index.css';

import api from './api';

import shoppingList from './shopping-list';

const main = function () {
  

  
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
