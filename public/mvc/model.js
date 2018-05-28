let model = (function () {

    function getPhotoPosts(skip, top, filterConfig) {
        let inquiry = '/getPhotoPosts?skip=' + skip +'&top='+top;
        console.log("inquiry="+inquiry);
        return fetch(inquiry, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(filterConfig),
        }).then((res) => {
            //console.log('BODY '+JSON.stringify(res));
            return res.json();
        });
    }

    function getNumberOfPosts() {
        return fetch('/getNumOfPosts', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            return res.json();
        });
    }

    function getAllPosts() {
        return fetch('/getAllPosts', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            return res.json();
        });
    }

    function addPhotoPost(myBody) {
        return fetch('/addPhotoPost', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(myBody),
        }).then((res) => {
            return res.json();
        });
    }

    function getPhotoPost(id) {
        let inquiry = '/getPhotoPost?id=' + id;
        return fetch(inquiry, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            //console.log('hello from get pp in model.js ' + res);
            return res.json();
        });
    }

    function editPhotoPost(id, myBody) {
        let inquiry = '/editPhotoPost?id=' + id;
        return fetch(inquiry, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(myBody),
        }).then((res) => {
            //console.log('editPhotoPost in model.js ' + JSON.stringify(res));
            return res.json();
        });
    }

    function removePhotoPost(id) {
        let inquiry = '/removePhotoPost?id=' + id;
        return fetch(inquiry, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            return res.json();
        });
    }

    return {
        getPhotoPosts,
        getNumberOfPosts,
        getAllPosts,
        addPhotoPost,
        getPhotoPost,
        editPhotoPost,
        removePhotoPost
    };
})();
