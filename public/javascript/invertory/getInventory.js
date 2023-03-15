const getUser = () => {
    fetch(`http://localhost:3040/api/pc/${userName}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
}

export { getUser }