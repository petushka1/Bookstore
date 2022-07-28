const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

const getAppId = (URL) => {

fetch(URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
})
.then((response) => response.text())
.then((data) => console.log(data));
}

export default getAppId;

// app id: ewYk4YjZVq8pYtMAfktj