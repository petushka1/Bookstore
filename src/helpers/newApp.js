const getAppId = (URL) => {

fetch(URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
})
.then((response) => response.json())
.then((data) => console.log(data));
}

export default getAppId;