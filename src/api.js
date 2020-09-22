const baseUrl = 'https://thinkful-list-api.herokuapp.com/mashinke';

const listApiFetch = function(...args){
  let error = '';
  return fetch(...args)
    .then(res => {
      if(!res.ok){
        error = {code: res.status};
      }

      return res.json();
    }).then(data => {
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }

      return data;
    });
};

const getItems = function () {
  return listApiFetch(`${baseUrl}/items`);
};

const createItem = function (itemName) {
  return listApiFetch(
    `${baseUrl}/items`,
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({'name': itemName})
    });
};

const updateItem = function(id, updateData) {
  listApiFetch(
    `${baseUrl}/items/${id}`,
    {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(updateData)
    }
  );
};

const deleteItem = function(id) {
  listApiFetch(
    `${baseUrl}/items/${id}`,
    {
      method: 'DELETE'
    }
  );
};

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};


