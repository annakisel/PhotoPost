let photoPosts = [
    {
        id: '1',
        description: 'do u like this outfit?',
        createdAt: new Date('2018-02-15T12:04:46'),
        author: 'classisinternal',
        photoLink: 'photos/1.jpg',
        hashTags: ['outfit', 'ny'],
        likes: ['annakisel_', 'fisunka', 'juliagodunova', 'mariapoga_', 'buzova86']
    },
    {
        id: '2',
        description: 'oh, I love animals so much. happy Valentine\'s day!',
        createdAt: new Date('2018-02-14T12:04:46'),
        author: 'fisunka',
        photoLink: 'photos/2.jpg',
        hashTags: ['cutie'],
        likes: ['annakisel_', 'fisunka', 'id_nails_space', 'k.grebenko']
    },
    {
        id: '3',
        description: 'he is lying',
        createdAt: new Date('2018-02-13T12:04:46'),
        author: 'thebestcat',
        photoLink: 'photos/3.jpg',
        hashTags: ['downy', 'cat'],
        likes: ['angelaniklau', 'id_nails_space', 'k.grebenko']
    },
    {
        id: '4',
        description: 'I\'m showing to Adam my new music video. he like it!',
        createdAt: new Date('2018-02-13T10:23:46'),
        author: 'arianagrande',
        photoLink: 'photos/4.jpg',
        hashTags: ['new', 'music', 'video', 'soon'],
        likes: ['angelaniklau', 'id_nails_space', 'k.grebenko', 'annakisel_', 'mariapoga_']
    },
    {
        id: '5',
        description: 'sitting at the airport is very fun thing(NO)',
        createdAt: new Date('2018-02-12T12:04:46'),
        author: 'fisunka',
        photoLink: 'photos/5.jpg',
        hashTags: ['airport'],
        likes: ['id_nails_space', 'arianagrande', 'angelaniklau', 'classisinternal']
    },
    {
        id: '6',
        description: 'oooh kitty',
        createdAt: new Date('2018-02-11T12:04:46'),
        author: 'larry',
        photoLink: 'photos/6.jpg',
        hashTags: ['kitty', 'pretty'],
        likes: ['didenok', 'ruslanagee', 'buzova86', 'arianagrande']
    },
    {
        id: '7',
        description: 'guys, we flew to Paris 2 hours ago, I can\'t believe that I\'m here again:)',
        createdAt: new Date('2018-02-10T12:04:46'),
        author: 'di1ara',
        photoLink: 'photos/7.jpg',
        hashTags: ['Paris', 'imhappy'],
        likes: ['kreida', 'estonianna', 'didenok', 'gusenica_lo', 'kasparyants']
    },
    {
        id: '8',
        description: 'lmao',
        createdAt: new Date('2018-02-09T12:04:46'),
        author: 'garry',
        photoLink: 'photos/8.jpg',
        hashTags: ['cat'],
        likes: ['id_nails_space', 'gusenica_lo', 'k.grebenko', 'kasparyants', 'estonianna']
    },

    {
        id: '9',
        description: 'm00d',
        createdAt: new Date('2018-02-08T12:04:46'),
        author: 'arianagrande',
        photoLink: 'photos/9.jpg',
        hashTags: ['mood'],
        likes: ['estonianna', 'kasparyants', 'k.grebenko', 'classisinternal', 'annakisel_', 'evadidenok']
    },
    {
        id: '10',
        description: 'I like these running shoes',
        createdAt: new Date('2018-02-07T12:04:46'),
        author: 'fashionismyproffesion',
        photoLink: 'photos/10.jpg',
        hashTags: ['shoes'],
        likes: ['kasparyants', 'k.grebenko', 'jvmilya', 'mariapoga_']
    },
    {
        id: '11',
        description: 'my new nails',
        createdAt: new Date('2018-02-06T12:04:46'),
        author: 'lizzzz',
        photoLink: 'photos/11.jpg',
        hashTags: ['new', 'nails'],
        likes: ['bellahadid', 'gigihadid', 'jvmilya']
    },

    {
        id: '12',
        description: 'fasion me and my new coat',
        createdAt: new Date('2018-02-05T12:04:46'),
        author: 'fisunka',
        photoLink: 'photos/12.jpg',
        hashTags: ['coat', 'me'],
        likes: ['annakisel_', 'fisunka', 'id_nails_space', 'angelaniklau']
    },

    {
        id: '13',
        description: 'look at this surprize',
        createdAt: new Date('2018-02-04T12:04:46'),
        author: 'k.grebenko',
        photoLink: 'photos/13.jpg',
        hashTags: ['surprize', 'daughter'],
        likes: ['bellahadid', 'arianagrande', 'angelaniklau', 'classisinternal']
    },

    {
        id: '14',
        description: 'he is on the floor today :D',
        createdAt: new Date('2018-02-03T12:04:46'),
        author: 'larry',
        photoLink: 'photos/14.jpg',
        hashTags: ['floor', 'my', 'cat'],
        likes: ['k.grebenko', 'buzova86', 'arianagrande', 'ruslanagee']
    },

    {
        id: '15',
        description: 'sorry I was late for the breakfast and it turned into a lunch',
        createdAt: new Date('2018-02-02T19:04:46'),
        author: 'classisinternal',
        photoLink: 'photos/15.jpg',
        hashTags: ['breakfast', 'lunch'],
        likes: ['juliagodunova', 'mariapoga_', 'buzova86']
    },

    {
        id: '16',
        description: '<3',
        createdAt: new Date('2018-02-02T12:04:46'),
        author: 'beautifulcat',
        photoLink: 'photos/16.jpg',
        hashTags: ['kitty'],
        likes: ['dimaermuzevich', 'tim_masha', 'ciarabravo', 'kendalljenner', 'artcultureandstyle']
    },

    {
        id: '17',
        description: 'so amazing Barcelona. always in my heart',
        createdAt: new Date('2018-02-01T16:04:46'),
        author: 'ruslanagee',
        photoLink: 'photos/17.jpg',
        hashTags: ['coat', 'me'],
        likes: ['makeupkaty', 'ciarabravo', 'id_nails_space', 'angelaniklau']
    },

    {
        id: '18',
        description: 'NY LAUNCH DAY',
        createdAt: new Date('2018-02-01T12:04:46'),
        author: 'gigihadid',
        photoLink: 'photos/18.jpg',
        hashTags: ['GIGIxMAYBELLINE'],
        likes: ['bellahadid', 'karllagerfeld', 'arianagrande', 'angelaniklau', 'ciarabravo']
    },

    {
        id: '19',
        description: 'my fav foots',
        createdAt: new Date('2018-01-30T12:04:46'),
        author: 'thebestcat',
        photoLink: 'photos/19.jpg',
        hashTags: ['cat', 'foots'],
        likes: ['ciarabravo', 'kasparyants', 'bellahadid', 'makeupkaty']
    },

    {
        id: '20',
        description: 'Thank you Dangerous Woman Tour',
        createdAt: new Date('2018-01-29T12:04:46'),
        author: 'arianagrande',
        photoLink: 'photos/20.jpg',
        hashTags: ['DWT'],
        likes: ['kendalljenner', 'kasparyants', 'bellahadid', 'artcultureandstyle']
    }
];

let usersPasswords = [
    {
        user: 'annakisel_',
        password: 'annakisel_'
    },
    {
        user: 'classisinternal',
        password: 'classisinternal'
    },
    {
        user: 'estonianna',
        password: 'estonianna'
    },
    {
        user: 'arianagrande',
        password: 'arianagrande'
    },
    {
        user: 'a',
        password: 'a'
    }
];

let user = 'classisinternal';
let count = 0;
let necessaryPhotos;

//localStorage.setItem('photoPosts', photoPosts);
//localStorage.clear();

let action = (function () {
    function getPhotoPosts(skip, top, filterConfig) {
        //localStorage.setItem('photoPosts', JSON.stringify(photoPosts));
        let pp = JSON.parse(localStorage.getItem('photoPosts'));
        pp.sort(function compareDates(a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
        necessaryPhotos = pp.slice();
        skip = skip || 0;
        top = top || 10;
        filterConfig = filterConfig || {};
        if (typeof filterConfig !== 'object') {
            console.log('incorrect the third parameter');
            return false;
        }
        if (filterConfig.hasOwnProperty('dateFrom') && filterConfig.hasOwnProperty('dateTo')) {
            if (isValidDate(filterConfig.dateFrom) || isValidDate(filterConfig.dateTo)) {
                if (typeof filterConfig.dateFrom === 'string' || typeof filterConfig.dateTo === 'string') {
                    console.log('please, input the date correct\nsomething like this {dateFrom: new Date(\'2018-01-29T00:00:00\'), dateTo: new Date(\'2018-02-04T00:00:00\')}');
                    return false;
                }
                necessaryPhotos = necessaryPhotos.filter(function (post) {
                    return ((new Date(post.createdAt) > filterConfig.dateFrom && new Date(post.createdAt) < filterConfig.dateTo)
                        || new Date(post.createdAt) === filterConfig.dateFrom || new Date(post.createdAt) === filterConfig.dateTo);
                });
            }
        }
        if (filterConfig.hasOwnProperty('hashTags')) {
            if (filterConfig.hashTags.length !== 0) {
                if (typeof filterConfig.hashTags === 'object') {
                    console.log('please, input hashtags correct\nsomething like this {hashTags: \'cat\'}');
                    return false;
                }
                necessaryPhotos = necessaryPhotos.filter(function (post) {
                    return post.hashTags.some(function (item) {
                        return item.toLowerCase() === filterConfig.hashTags.toLowerCase()
                    });
                });
            }
        }
        if (filterConfig.hasOwnProperty('author')) {
            if (filterConfig.author.length !== 0) {
                necessaryPhotos = necessaryPhotos.filter(function (post) {
                    return post.author.toLowerCase() === filterConfig.author.toLowerCase();
                });
            }
        }
        if (skip > necessaryPhotos.length && necessaryPhotos.length !== 0) {
            console.log('I found something, but not too many posts as u want(less than ' + skip + ')');
        }
        let showPh = necessaryPhotos;
        if (skip >= 0 && necessaryPhotos.length > top + skip) {
            showPh = necessaryPhotos.slice(skip, skip + top);
        } else {
            if (skip >= 0) {
                showPh = necessaryPhotos.slice(skip, necessaryPhotos.length);
            }
        }
        count = top + skip;
        return showPh;
    }

    function isValidDate(value) {
        let dateWrapper = new Date(value);
        return !isNaN(dateWrapper.getDate());
    }

    function getPhotoPost(id) {
        if (typeof id === 'string') {
            return JSON.parse(localStorage.getItem('photoPosts')).filter(function (post) {
                return post.id === id;
            });
        }
        console.log('incorrect input\nexample of correct input: action.getPhotoPost(\'1\');');
        return false;
    }

    let validate = {
        id: function (id) {
            return JSON.parse(localStorage.getItem('photoPosts')).every(function (post) {
                return id !== post.id;
            });
        },

        description: function (description) {
            return !(description.length === 0 || description.length > 200);
        },

        createdAt: function (value) {
            let dateWrapper = new Date(value);
            return !isNaN(dateWrapper.getDate());
        },

        author: function (author) {
            return author.length;
        },

        photoLink: function (photoLink) {
            return photoLink.length;
        },

        hashTags: function (hashTags) {
            return hashTags.every(function (item) {
                return (item.length < 20 && item.length !== 0);
            });
        },

        likes: function (likes) {
            return likes.every(function (item) {
                return (item.length !== 0);
            });
        }
    };

    function validatePhotoPost(post) {
        if (typeof post === 'object') {
            let a;
            return Object.keys(validate).every(function (item) {
                if (post.hasOwnProperty(item)) {
                    a = validate[item](post[item]);
                    if (!a) {
                        console.log('wrong ' + item);
                    }
                    return a;
                }
                console.log('you haven\'t any key');
                return false;
            });
        }
        console.log('this post is\'t an object ');
        return false;
    }

    function addPhotoPost(post) {
        let pp = JSON.parse(localStorage.getItem('photoPosts'));
        if (validatePhotoPost(post)) {
            pp.push(post);
            pp.sort(function compareDates(a, b) {
                return b.createdAt - a.createdAt;
            });
            localStorage.setItem('photoPosts', JSON.stringify(pp));
            return true;
        }
        return false;
    }

    function editPhotoPost(id, post) {
        let pp = JSON.parse(localStorage.getItem('photoPosts'));
        let total = false;
        if (typeof post !== 'object') {
            console.log('your post is\'t an object ');
            return false;
        }
        if (typeof id !== 'string') {
            console.log('incorrect id');
            return false;
        }
        if (post.hasOwnProperty('photoLink')) {
            if (post.photoLink.length === 0) {
                console.log('your photoLink is wrong');
                return total;
            }
        }
        if (post.hasOwnProperty('likes')) {
            total = post.likes.every(function (item) {
                return item.length !== 0;
            });
            if (!total) {
                console.log('your likes are wrong');
                return total;
            }
        }
        if (post.hasOwnProperty('description')) {
            if (post.description.length > 200 || post.description.length === 0) {
                console.log('your description is wrong');
                return total;
            }
        }
        if (post.hasOwnProperty('hashTags')) {
            total = post.hashTags.every(function (item) {
                return (item.length < 20 && item.length !== 0);
            });
            if (!total) {
                console.log('your hashTags are wrong');
                return total;
            }
        }
        if (post.hasOwnProperty('photoLink')) {
            total = pp.some(function (item) {
                if (item.id === id) {
                    item.photoLink = post.photoLink;
                    return true;

                }
            });
            if (!total) {
                return total;
            }
        }
        if (post.hasOwnProperty('description')) {
            total = pp.some(function (item) {
                if (item.id === id) {
                    item.description = post.description;
                    return true;

                }
            });
            if (!total) {
                return total;
            }
        }
        if (post.hasOwnProperty('hashTags')) {
            total = pp.some(function (item) {
                if (item.id === id) {
                    delete item.hashTags;
                    item.hashTags = post.hashTags;
                    return true;

                }
            });
            if (!total) {
                return total;
            }
        }
        if (post.hasOwnProperty('likes')) {
            total = pp.some(function (item) {
                if (item.id === id) {
                    delete item.likes;
                    item.likes = post.likes;
                    return true;
                }
            });
            if (!total) {
                return total;
            }
        }
        localStorage.setItem('photoPosts', JSON.stringify(pp));
        return total;
    }

    function removePhotoPost(id) {
        pp = JSON.parse(localStorage.getItem('photoPosts'));
        if (typeof id === 'string') {
            return pp.some(function (item, i) {
                if (item.id === id) {
                    pp.splice(i, 1);
                    localStorage.setItem('photoPosts', JSON.stringify(pp));
                    return true;
                }
            });
        }
        console.log('incorrect input\nexample of correct input: action.removePhotoPost(\'1\');');
        return false;
    }

    function cutNecessaryPhotos(top, skip) {
        if (skip > necessaryPhotos.length && necessaryPhotos.length !== 0) {
            console.log('I found something, but not too many posts as u want(less than ' + skip + ')');
        }
        let photos;
        if (skip >= 0 && necessaryPhotos.length > top + skip) {
            photos = necessaryPhotos.slice(top, skip + top);
        } else {
            if (skip >= 0) {
                photos = necessaryPhotos.slice(top, necessaryPhotos.length);
            }
        }
        count = top + skip;
        return photos;
    }

    return {
        getPhotoPosts,
        getPhotoPost,
        validatePhotoPost,
        addPhotoPost,
        editPhotoPost,
        removePhotoPost,
        isValidDate,
        cutNecessaryPhotos
    }
})();

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
        array = array || action.getPhotoPosts();
        let photos = document.querySelector('.photos');
        if (deleteOldPosts === undefined) {
            photos.innerHTML = '';
        }
        for (let i = 0; i < array.length; i++) {
            addPostAtTheEnd(array[i]);
        }
        if (array.length >= 10 && array[array.length - 1] !== JSON.parse(localStorage.getItem('photoPosts'))[JSON.parse(localStorage.getItem('photoPosts')).length - 1]) {
            document.querySelector('.show-more').style.display = 'inline-block';
        } else {
            document.querySelector('.show-more').style.display = 'none';
        }
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
        if (JSON.parse(localStorage.getItem('user')) !== post.author) {
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
        if (post.likes.indexOf(JSON.parse(localStorage.getItem('user'))) !== -1) {
            clone.querySelectorAll('.material-icons')[2].style.color = 'red';
        } else {
            clone.querySelectorAll('.material-icons')[2].style.color = 'black';
        }
    }

    function generatePhoto(array, deleteOldPosts) {
        generatePhotoPosts(array, deleteOldPosts);
    }

    function removePhoto(id) {
        if (document.getElementById(id) !== null) {
            document.getElementById(id).parentNode.removeChild(document.getElementById(id));
            let array = action.getPhotoPosts(0, count);
            generatePhotoPosts(array);
        }
    }

    function editMyPhotoPost(id) {
        if (document.getElementById(id) !== null) {
            let array = action.getPhotoPosts(0, count);
            generatePhotoPosts(array);
        }
    }

    function showElementsOnHeader() {
        let name = document.querySelector('.name');
        name.innerHTML = JSON.parse(localStorage.getItem('user'));
        name.style.display = 'inline-block';
        if (JSON.parse(localStorage.getItem('user')) === null) {
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
        removePhoto,
        editMyPhotoPost,
        showElementsOnHeader
    }
})();

//localStorage.setItem('photoPosts', JSON.stringify(photoPosts));

function generatePhotoPosts(array, deleteOldPhotos) {
    dom.generatePhotoPosts(array, deleteOldPhotos);
}

function addPhotoPost(post) {
    let check = action.addPhotoPost(post);
    if (check) {
        let array = action.getPhotoPosts();
        dom.generatePhoto(array);
    }
    //localStorage.setItem('photoPosts', JSON.stringify(photoPosts));
    return check;
}

function removePhoto(id) {
    if (action.getPhotoPost(id)[0] !== undefined) {
        if (action.getPhotoPost(id)[0].author === JSON.parse(localStorage.getItem('user'))) {
            action.removePhotoPost(id);
            dom.removePhoto(id);
        } else {
            console.log('you can\'t delete post that is\'t yours')
        }
    }
    //localStorage.setItem('photoPosts', JSON.stringify(photoPosts));
}

function editPhoto(id, post) {
    if (action.getPhotoPost(id)[0] !== undefined) {
        if (action.getPhotoPost(id)[0].author === JSON.parse(localStorage.getItem('user'))) {
            let ans = action.editPhotoPost(id, post);
            dom.editMyPhotoPost(id);
            return ans;
        } else {
            console.log('you can\'t edit post thais is\'t yours');
            return false;
        }
    }
    //localStorage.setItem('photoPosts', JSON.stringify(photoPosts));
}

function likePhoto(id, post) {
    if (action.getPhotoPost(id)[0] !== undefined) {
        let ans = action.editPhotoPost(id, post);
        return ans;
    }
    //localStorage.setItem('photoPosts', JSON.stringify(photoPosts));
}

function showFullHeader() {
    dom.showElementsOnHeader();
}

generatePhotoPosts();
showFullHeader();

let logIn = document.querySelector('button');
logIn.addEventListener('click', onclickLogIn);
let forms = document.forms[0];
let searchUserNameInput = forms.elements.filterByName;
let searchDateFrom = forms.elements.filterByDateFrom;
let searchDateTill = forms.elements.filterByDateTill;
let searchHashTags = forms.elements.filterByHashtag;

let letsFilter = document.querySelectorAll('button')[1];
letsFilter.addEventListener('click', onclickLetsFilter);

let showMore = document.getElementsByName('showMore')[0];
showMore.addEventListener('click', onclickShowMore);

let addPhoto = document.getElementsByName('addPhoto')[0];
addPhoto.addEventListener('click', onclickAddPhoto);

let browse = document.querySelector('.browse');
browse.addEventListener('mouseup', onclickBrowse);

let toMainPage = document.getElementsByName('back-to-main-p')[0];
toMainPage.addEventListener('click', onclickToMainPage);

let goButton = document.getElementsByName('go')[0];
goButton.addEventListener('click', onclickGo);

function onclickLogIn() {
    document.querySelector('.input-user-name').value = '';
    document.querySelector('.password').value = '';
    if (JSON.parse(localStorage.getItem('user')) === null) {
        logIn.style.visibility = 'hidden';
        document.querySelector('.lenta').style.display = 'none';
        document.querySelector('.autorization-page').style.display = 'flex';
        document.body.style.backgroundImage = 'url(\'photos/background3.jpg\')';
        document.querySelector('.header').style.backgroundColor = 'transparent';
        document.querySelector('.footer').style.backgroundColor = 'transparent';

    } else {
        user = null;
        localStorage.setItem('user', JSON.stringify(user));
        showFullHeader();
        generatePhotoPosts();
    }
}

function onclickLetsFilter() {
    let name = searchUserNameInput.value;
    let dateFrom = searchDateFrom.value;
    let dateTill = searchDateTill.value;
    let ht = searchHashTags.value;
    let photos = action.getPhotoPosts(0, 10, {
        hashTags: ht,
        author: name,
        dateFrom: new Date(Date.parse(dateFrom)),
        dateTo: new Date(Date.parse(dateTill))
    });
    //console.log(photos);
    //console.log(action.isValidDate(new Date(Date.parse(dateFrom))));
    if (name.length !== 0 || action.isValidDate(new Date(Date.parse(dateFrom))) || action.isValidDate(new Date(Date.parse(dateFrom))) || ht.length !== 0) {
        generatePhotoPosts(photos);
    } else {
        generatePhotoPosts();
    }
}

function cleanTextAreas() {
    document.querySelector('.my-file').value = '';
    document.querySelector('.hashtags-textarea').value = '';
    document.querySelector('.description-textarea').value = '';
}

function onclickAddPhoto() {
    cleanTextAreas();
    document.querySelector('.lenta').style.display = 'none';
    document.querySelector('.add-new-photo').style.display = 'flex';
    logIn.style.visibility = 'hidden';
    //document.querySelector('.pp').style.marginRight = '40%';
    let d = new Date();
    document.querySelector('.fill-in-date').innerHTML = d.toLocaleString('en-US', dom.options);
    document.querySelector('.fill-in-name').innerHTML = JSON.parse(localStorage.getItem('user'));
    document.getElementsByName('editButton')[0].style.display = 'none';
    let add = document.getElementsByName('addButton')[0];
    add.style.display = 'inline';
    add.addEventListener('click', onclickAdd);
}

function onclickBrowse() {
    document.querySelector('.my-file').click();
    let photoLink = document.querySelector('.my-file').value;
    while (photoLink === null) {
        let n = photoLink.lastIndexOf('\\');
        photoLink = photoLink.substring(n);
        document.querySelector('.photo-name').innerHTML = photoLink;
    }
}

function onclickAdd() {
    let name = JSON.parse(localStorage.getItem('user'));
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
    let check = addPhotoPost({
        id: id.toString(),
        description: description,
        createdAt: created,
        author: name,
        photoLink: photoLink,
        hashTags: hashTags,
        likes: []
    });
    if (!check) {
        document.querySelector('.add-new-photo').style.display = 'none';
        error();
    } else {
        document.querySelector('.lenta').style.display = 'inline';
        document.querySelector('.add-new-photo').style.display = 'none';
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
    if (JSON.parse(localStorage.getItem('user')) !== null) {
        document.querySelector('.name').style.visibility = 'visible';
    }
    logIn.style.visibility = 'visible';
    document.querySelector('.header').style.backgroundColor = 'black';
    document.querySelector('.footer').style.backgroundColor = 'black';
}

function onclickDeletePh() {
    removePhoto(this.id.substring(0, this.id.indexOf('_')));
}

function onclickLike() {
    let post = action.getPhotoPost(this.id.substring(0, this.id.indexOf('_')));
    if (post[0].likes.indexOf(JSON.parse(localStorage.getItem('user'))) === -1 && JSON.parse(localStorage.getItem('user')) !== null) {
        document.getElementById(post[0].id + '_like').innerHTML = parseInt(document.getElementById(post[0].id + '_like').innerHTML) + 1;
        post[0].likes.push(JSON.parse(localStorage.getItem('user')));
        likePhoto(post[0].id, {likes: post[0].likes});
        document.getElementById(this.id).style.color = 'red';
    } else {
        if (JSON.parse(localStorage.getItem('user')) !== null) {
            post[0].likes.splice(post[0].likes.indexOf(JSON.parse(localStorage.getItem('user'))), 1);
            likePhoto(post[0].id, {likes: post[0].likes});
            document.getElementById(post[0].id + '_like').innerHTML = parseInt(document.getElementById(post[0].id + '_like').innerHTML) - 1;
            document.getElementById(this.id).style.color = 'black';
        }
    }
}

function onclickEdit() {
    cleanTextAreas();
    let post = action.getPhotoPost(this.id.substring(0, this.id.indexOf('_')));
    document.querySelector('.lenta').style.display = 'none';
    document.querySelector('.add-new-photo').style.display = 'flex';
    logIn.style.visibility = 'hidden';
    document.getElementsByName('addButton')[0].style.display = 'none';
    document.getElementsByName('editButton')[0].style.display = 'inline';
    let edit = document.getElementsByName('editButton')[0];
    edit.id = post[0].id + '_editButton';
    document.querySelector('.fill-in-name').innerHTML = JSON.parse(localStorage.getItem('user'));
    document.querySelector('.hashtags-textarea').value = post[0].hashTags;
    document.querySelector('.description-textarea').value = post[0].description;
    document.querySelector('.fill-in-date').innerHTML = post[0].createdAt.toLocaleString('en-US', dom.options);
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
    let check = photoLink.length === 0 ? editPhoto(id, {
        description: description,
        hashTags: hashTags,
    }) : editPhoto(id, {
        description: description,
        photoLink: photoLink,
        hashTags: hashTags,
    });
    logIn.style.visibility = 'visible';
    if (!check) {
        document.querySelector('.add-new-photo').style.display = 'none';
        error();
    } else {
        document.querySelector('.lenta').style.display = 'inline';
        document.querySelector('.add-new-photo').style.display = 'none';
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
        localStorage.setItem('user', JSON.stringify(user));
        document.querySelector('.autorization-page').style.display = 'none';
        document.querySelector('.lenta').style.display = 'inline';
        generatePhotoPosts();
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
    generatePhotoPosts(action.cutNecessaryPhotos(count, 10), false);
}


