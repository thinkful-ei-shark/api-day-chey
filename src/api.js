const baseUrl = 'https://thinkful-list-api.herokuapp.com/mashinke';

const getItems = function() {
  return fetch (`${baseUrl}/items`)
};

const createItem = function(name){
  let newItem = JSON.stringify({name:name})
  return fetch (`${baseUrl}/items`, {method: 'POST',
   headers: new Headers ({'Content-Type': 'application/json'}),
   body: newItem
  }) 


  
}



export default {
  getItems,
  createItem
};


