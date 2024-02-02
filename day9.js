function fetchUserData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ username: 'akshara', age: 30 });
        }, 1000);
    });
}

function fetchUserPhotos() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(['Photo 1', 'Photo 2']);
        }, 2000);
    });
}

Promise.all([fetchUserData(), fetchUserPhotos()])
    .then((data) => {
        console.log('UserData:', data);
        console.log('UserPhotos:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
