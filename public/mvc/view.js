let dom = (function () {
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    function generatePhotoPosts(array, deleteOldPosts) {
        //deleteOldPosts = deleteOldPosts && true;
        console.log(array);
        let photos = document.querySelector('.photos');
        if (deleteOldPosts === undefined) {
            photos.innerHTML = '';
        }
        for (let i = 0; i < array.length; i++) {
            addPostAtTheEnd(array[i]);
        }
        model.getNumberOfPosts()
            .then(res => {
                console.log('from then', res);
                count += array.length;
                if (count === necessaryPhotos.length) {
                    document.querySelector('.show-more').style.display = 'none';
                } else {
                    if (array.length >= 10) {
                        document.querySelector('.show-more').style.display = 'inline-block';
                    }
                }
            });
    }

    function addPostAtTheEnd(post) {
        let photo = document.querySelector('.photo');
        let clone = photo.cloneNode(true);
        clone.id = post.id;
        clone.style.display = 'inline-block';
        clone.querySelector('.description').innerHTML = post.description;
        clone.querySelector('.date').innerHTML = new Date(post.createdAt).toLocaleString('en-US', options);
        clone.querySelector('.user-name').innerHTML = post.author;
        clone.querySelector('.photojpg').src = post.photoLink;
        clone.querySelector('.likes').innerHTML = post.likes.length;
        let tags = clone.querySelector('.hashtag');
        let string = '';
        post.hashTags.forEach(function (item) {
            string = `${string} #${item}`;
        });
        tags.innerHTML = string;
        let photos = document.querySelector('.photos');
        photos.appendChild(clone);
        clone.querySelector('.likes').id = post.id + '_like';
        clone.querySelectorAll('.material-icons')[2].id = post.id + '_heart';
        clone.querySelectorAll('.material-icons')[2].addEventListener('click', onclickLike);
        if (user !== post.author) {
            clone.querySelectorAll('.material-icons')[0].style.display = 'none'; //'23' => '23_like'
            clone.querySelectorAll('.material-icons')[1].style.display = 'none';
        } else {
            clone.querySelectorAll('.material-icons')[1].id = post.id + '_delete';
            clone.querySelectorAll('.material-icons')[1].addEventListener('click', onclickDeletePh);
            clone.querySelectorAll('.material-icons')[0].id = post.id + '_edit';
            clone.querySelectorAll('.material-icons')[0].addEventListener('click', onclickEdit);
            clone.querySelectorAll('.material-icons')[0].style.display = 'inline';
            clone.querySelectorAll('.material-icons')[1].style.display = 'inline';
        }
        if (post.likes.indexOf(user) !== -1) {
            clone.querySelectorAll('.material-icons')[2].style.color = 'red';
        } else {
            clone.querySelectorAll('.material-icons')[2].style.color = 'black';
        }
    }

    function generatePhoto(array, deleteOldPosts) {
        generatePhotoPosts(array, deleteOldPosts);
    }

    function showElementsOnHeader() {
        let name = document.querySelector('.name');
        name.innerHTML = user;
        name.style.display = 'inline-block';
        if (user === null) {
            document.querySelector('.button').innerHTML = 'Log in';
            document.querySelector('.button-add-photo').style.display = 'none';
        } else {
            document.querySelector('.button').innerHTML = 'Log out';
            document.querySelector('.button-add-photo').style.display = 'inline';
        }
    }

    return {
        generatePhoto,
        generatePhotoPosts,
        showElementsOnHeader
    }
})();

onclickLogIn = function () {
    document.querySelector('.input-user-name').value = '';
    document.querySelector('.password').value = '';
    if (user === null) {
        logIn.style.visibility = 'hidden';
        document.querySelector('.lenta').style.display = 'none';
        document.querySelector('.autorization-page').style.display = 'flex';
        document.body.style.backgroundImage = 'url(\'photos/background3.jpg\')';
        document.querySelector('.header').style.backgroundColor = 'transparent';
        document.querySelector('.footer').style.backgroundColor = 'transparent';

    } else {
        user = null;
        //localStorage.setItem('user', JSON.stringify(user));
        showFullHeader();
        model.getPhotoPosts()
            .then(res => {
                //console.log('look at getPhposts from controller', res);
                dom.generatePhotoPosts(res);
            });
    }
};

function showFullHeader() {
    dom.showElementsOnHeader();
}

onclickLetsFilter = function () {
    let name = searchUserNameInput.value;
    let dateFrom = searchDateFrom.value;
    let dateTill = searchDateTill.value;
    let ht = searchHashTags.value;
    let photos;
    model.getPhotoPosts(0, 10, {
        hashTags: ht,
        author: name,
        dateFrom: new Date(Date.parse(dateFrom)),
        dateTo: new Date(Date.parse(dateTill))
    }).then(res => {
        photos = res;
        if (name.length !== 0 || isValidDate(new Date(Date.parse(dateFrom))) || isValidDate(new Date(Date.parse(dateFrom))) || ht.length !== 0) {
            photos = (photos === false) ? [] : photos;
            necessaryPhotos = photos;
            count = 0;
            dom.generatePhotoPosts(photos);
        } else {
            model.getAllPosts()
                .then(res => {
                    let a = JSON.stringify(res);
                    //console.log('look at necess photos(res): ' + a);
                    necessaryPhotos = JSON.parse(a);
                });
            model.getPhotoPosts()
                .then(res => {
                    dom.generatePhotoPosts(res);
                });
            //count = 10;
        }
    });
    /* photos = action.getPhotoPosts(0, 10, {
        hashTags: ht,
        author: name,
        dateFrom: new Date(Date.parse(dateFrom)),
        dateTo: new Date(Date.parse(dateTill))
    });*/
    /*if (name.length !== 0 || action.isValidDate(new Date(Date.parse(dateFrom))) || action.isValidDate(new Date(Date.parse(dateFrom))) || ht.length !== 0) {
        dom.generatePhotoPosts(photos);
    } else {
        dom.generatePhotoPosts();
    }*/
};

function isValidDate(value) {
    let dateWrapper = new Date(value);
    return !Number.isNaN(dateWrapper.getDate());
}

function cleanTextAreas() {
    document.querySelector('.my-file').value = '';
    document.querySelector('.hashtags-textarea').value = '';
    document.querySelector('.description-textarea').value = '';
}

onclickAddPhoto = function () {
    cleanTextAreas();
    document.querySelector('.lenta').style.display = 'none';
    document.querySelector('.add-new-photo').style.display = 'flex';
    logIn.style.visibility = 'hidden';
    let d = new Date();
    document.querySelector('.fill-in-date').innerHTML = d.toLocaleString('en-US', dom.options);
    document.querySelector('.fill-in-name').innerHTML = user;
    document.getElementsByName('editButton')[0].style.display = 'none';
    let add = document.getElementsByName('addButton')[0];
    add.style.display = 'inline';
    add.addEventListener('click', onclickAdd);
};

onclickBrowse = function () {
    document.querySelector('.my-file').click();
    let photoLink = document.querySelector('.my-file').value;
};

onclickAdd = function () {
    let name = user;
    let id = Math.random();
    let hashTags = document.querySelector('.hashtags-textarea').value;
    hashTags = hashTags.trim();
    hashTags = hashTags.split(/[ ,]+/);
    let description = document.querySelector('.description-textarea').value;
    let photoLink = document.querySelector('.my-file').value;
    logIn.style.visibility = 'visible';
    let n = photoLink.lastIndexOf('\\');
    photoLink = photoLink.substring(n).length !== 0 ? 'photos\\' + photoLink.substring(n) : photoLink.substring(n);
    let created = new Date();
    let check;
    model.addPhotoPost({
        id: id.toString(),
        description: description,
        createdAt: created,
        author: name,
        photoLink: photoLink,
        hashTags: hashTags,
        likes: []
    })
        .then(res => {
            //check = res;
            checkingAdd(res);
        });

};

function checkingAdd(check) {
    if (!check) {
        document.querySelector('.add-new-photo').style.display = 'none';
        error();
    } else {
        document.querySelector('.lenta').style.display = 'inline';
        document.querySelector('.add-new-photo').style.display = 'none';
        model.getPhotoPosts()
            .then(res => {
                console.log('look at getPhposts from controller', res);
                dom.generatePhotoPosts(res);
            });
    }
}

function error() {
    document.querySelector('.error-page').style.display = 'flex';
    document.body.style.backgroundImage = 'url(\'photos/background22.jpg\')';
    document.querySelector('.header').style.backgroundColor = 'transparent';
    document.querySelector('.footer').style.backgroundColor = 'transparent';
    logIn.style.visibility = 'hidden';
    document.querySelector('.name').style.visibility = 'hidden';
}

function onclickToMainPage() {
    document.querySelector('.error-page').style.display = 'none';
    displayLenta();
}

function displayLenta() {
    document.querySelector('.lenta').style.display = 'inline';
    showFullHeader();
    if (user !== null) {
        document.querySelector('.name').style.visibility = 'visible';
    }
    logIn.style.visibility = 'visible';
    document.querySelector('.header').style.backgroundColor = 'black';
    document.querySelector('.footer').style.backgroundColor = 'black';
}

function onclickDeletePh() {
    model.removePhotoPost(this.id.substring(0, this.id.indexOf('_')))
        .then(res => {
            checkngDel(res);
        });

    //removePhoto(this.id.substring(0, this.id.indexOf('_')));
}

function checkngDel(check) {
    model.getPhotoPosts(0, count)
        .then(res => {
            dom.generatePhotoPosts(res);
        });
}

function onclickLike() {
    //let post;
    model.getPhotoPost(this.id.substring(0, this.id.indexOf('_')))
        .then(res => {
            let a = JSON.stringify(res);
            a = a.substring(1, a.length - 1);
            //console.log('get photo post: ' + a);
            //post = JSON.parse(a);
            checkingLike(JSON.parse(a));
        });
    //let post = action.getPhotoPost(this.id.substring(0, this.id.indexOf('_')));
}

function checkingLike(post) {
    if (post.likes.indexOf(user) === -1 && user !== null) {
        document.getElementById(post.id + '_like').innerHTML = parseInt(document.getElementById(post.id + '_like').innerHTML) + 1;
        post.likes.push(user);
        document.getElementById(post.id + "_heart").style.color = 'red';
    } else {
        if (user !== null) {
            post.likes.splice(post.likes.indexOf(user), 1);
            document.getElementById(post.id + '_like').innerHTML = parseInt(document.getElementById(post.id + '_like').innerHTML) - 1;
            document.getElementById(post.id + "_heart").style.color = 'black';
        }
    }
    model.editPhotoPost(post.id, {likes: post.likes});
}

function onclickEdit() {
    cleanTextAreas();
    let post;
    let edit = document.getElementsByName('editButton')[0];
    model.getPhotoPost(this.id.substring(0, this.id.indexOf('_')))
        .then(res => {
            let a = JSON.stringify(res);
            a = a.substring(1, a.length - 1);
            //console.log('get photo post: ' + a);
            post = JSON.parse(a);
            edit.id = post.id + '_editButton';
            document.querySelector('.fill-in-name').innerHTML = user;
            document.querySelector('.hashtags-textarea').value = post.hashTags;
            document.querySelector('.description-textarea').value = post.description;
            let date = new Date(Date.parse(post.createdAt));
            document.querySelector('.fill-in-date').innerHTML = date.toLocaleString('en-US', dom.options);
        });
    console.log('post2 = ' + post);
    //let post = action.getPhotoPost(this.id.substring(0, this.id.indexOf('_')));
    document.querySelector('.lenta').style.display = 'none';
    document.querySelector('.add-new-photo').style.display = 'flex';
    logIn.style.visibility = 'hidden';
    document.getElementsByName('addButton')[0].style.display = 'none';
    document.getElementsByName('editButton')[0].style.display = 'inline';
    edit.addEventListener('click', onclickEditPost);
}

function onclickEditPost() {
    let id = this.id.substring(0, this.id.indexOf('_'));
    let hashTags = document.querySelector('.hashtags-textarea').value;
    hashTags = hashTags.trim();
    hashTags = hashTags.split(/[ ,]+/);
    let description = document.querySelector('.description-textarea').value;
    let photoLink = document.querySelector('.my-file').value;
    let n = photoLink.lastIndexOf('\\');
    photoLink = photoLink.length !== 0 ? 'photos\\' + photoLink.substring(n) : '';
    let check;
    if (photoLink.length === 0) {
        model.editPhotoPost(id, {
            description: description,
            hashTags: hashTags,
        })
            .then(res => {
                console.log("res " + res);
                checkingEdit(res);
            })
    } else {
        model.editPhotoPost(id, {
            description: description,
            photoLink: photoLink,
            hashTags: hashTags,
        })
            .then(res => {
                console.log("res " + res);
                checkingEdit(res);
                //return a;
            });
    }
}

function checkingEdit(check) {
    logIn.style.visibility = 'visible';
    //console.log('check=' + JSON.stringify(check));
    if (check) {
        document.querySelector('.lenta').style.display = 'inline';
        document.querySelector('.add-new-photo').style.display = 'none';
        model.getPhotoPosts()
            .then(res => {
                console.log('look at getPhposts from controller', res);
                dom.generatePhotoPosts(res);
            });
    } else {
        document.querySelector('.add-new-photo').style.display = 'none';
        error();
    }
}

function onclickGo() {
    let userName = document.querySelector('.input-user-name').value;
    let passw = document.querySelector('.password').value;
    let check = usersPasswords.some(function (item) {
        return item.user === userName && item.password === passw;
    });
    if (check) {
        user = userName;
        document.querySelector('.autorization-page').style.display = 'none';
        document.querySelector('.lenta').style.display = 'inline';
        model.getPhotoPosts()
            .then(res => {
                //console.log('look at getPhposts from controller', res);
                dom.generatePhotoPosts(res);
            });
        logIn.style.visibility = 'visible';
        document.querySelector('.header').style.backgroundColor = 'black';
        document.querySelector('.footer').style.backgroundColor = 'black';
        showFullHeader();
        document.querySelector('.name').style.visibility = 'visible';

    } else {
        document.querySelector('.autorization-page').style.display = 'none';
        document.querySelector('.autorization-page');
        error();
    }
}

function onclickShowMore() {
    dom.generatePhotoPosts(cutNecessaryPhotos(count, 10), false);
}