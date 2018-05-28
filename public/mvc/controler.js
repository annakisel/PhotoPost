let necessaryPhotos;

window.onload = function () {
    model.getPhotoPosts()
        .then(res => {
            //console.log('look at getPhposts from controller', res);
            dom.generatePhotoPosts(res);
        });
    model.getAllPosts()
        .then(res => {
            let a =JSON.stringify(res);
            //console.log('look at necess photos(res): ' + a);
            necessaryPhotos = JSON.parse(a);
        });
    dom.showElementsOnHeader();
};

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
   // count = top + skip;
    return photos;
}

let logIn = document.querySelector('button');
logIn.addEventListener('click', () => {
    onclickLogIn();
});
let forms = document.forms[0];
let searchUserNameInput = forms.elements.filterByName;
let searchDateFrom = forms.elements.filterByDateFrom;
let searchDateTill = forms.elements.filterByDateTill;
let searchHashTags = forms.elements.filterByHashtag;

let letsFilter = document.querySelectorAll('button')[1];
letsFilter.addEventListener('click', () => {
    onclickLetsFilter();
});

let showMore = document.getElementsByName('showMore')[0];
showMore.addEventListener('click', () => {
    onclickShowMore();
});

let addPhoto = document.getElementsByName('addPhoto')[0];
addPhoto.addEventListener('click', () => {
    onclickAddPhoto();
});

let browse = document.querySelector('.browse');
browse.addEventListener('mouseup', () => {
    onclickBrowse();
});

let toMainPage = document.getElementsByName('back-to-main-p')[0];
toMainPage.addEventListener('click', () => {
    onclickToMainPage();
});

let goButton = document.getElementsByName('go')[0];
goButton.addEventListener('click', () => {
    onclickGo();
});