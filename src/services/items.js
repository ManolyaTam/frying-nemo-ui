// const menuURL = `${process.env.REACT_APP_SERVER_URL}`; // TODO
const menuURL = `https://frying-nemo-api.onrender.com/menu`;

/**
 * Fake Fetching of single item
 * @param {number} id 
 */
const getItem = (id) => {
    return fetch(`${menuURL}/${id}`)
        .then(res => res.status === 200 ? res.json(): false )
        .catch(err => console.log(err.toString()));
};

/**
 * Fetch all items from api 
 */
const getAllItems = (searchTerms, categories) => {
    return fetch(`${menuURL}?searchTerms=${searchTerms}&categories=${categories}`)
        .then(res => res.json())
        .catch(err => console.log(err.toString()));
};

const createItem = (item) => {
    return fetch(menuURL, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            if (res.status === 201 || res.status === 200) {
                return true;
            } else {
                alert(res.status);
                return false;
            }
        })
        .catch((err) => {
            alert(err.toString());
            return false;
        });
};

const deleteItem = (id) => {
    return fetch(`${menuURL}/${id}`, { method: 'DELETE' })
        .then(res => res.status === 200 ? true : false)
        .catch(err => {
            console.error(err.toString());
            return false;
        });
};

const updateItem = (id, newItem) => {
    return fetch(`${menuURL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(newItem),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        res => res.status === 200 || res.status === 201 || res.status === 202 ? true : false
    ).catch(err => {
        console.error(err.toString());
        return false;
    });
};

export { getItem, getAllItems, createItem, deleteItem, updateItem };