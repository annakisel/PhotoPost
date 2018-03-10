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

let action = (function () {


    function getPhotoPosts(skip, top, filterConfig) {
        photoPosts.sort(function compareDates(a, b) {
            return b.createdAt - a.createdAt;
        });
        let necessaryPhotos = photoPosts.slice();
        skip = skip || 0;
        top = top || 10;
        filterConfig = filterConfig || {};
        if (typeof filterConfig !== 'object') {
            console.log('incorrect the third parameter');
            return false;
        }
        if (filterConfig.hasOwnProperty('dateFrom') && filterConfig.hasOwnProperty('dateTo')) {
            if (typeof filterConfig.dateFrom === 'string' || typeof filterConfig.dateTo === 'string') {
                console.log('please, input the date correct\nsomething like this {dateFrom: new Date(\'2018-01-29T00:00:00\'), dateTo: new Date(\'2018-02-04T00:00:00\')}');
                return false;
            }
            necessaryPhotos = necessaryPhotos.filter(function (post) {
                return ((post.createdAt > filterConfig.dateFrom && post.createdAt < filterConfig.dateTo)
                    || post.createdAt === filterConfig.dateFrom || post.createdAt === filterConfig.dateTo);
            });
        }
        if (filterConfig.hasOwnProperty('hashTags')) {
            if (typeof filterConfig.hashTags === 'object') {
                console.log('please, input hashtags correct\nsomething like this {hashTags: \'cat\'}');
                return false;
            }
            necessaryPhotos = necessaryPhotos.filter(function (post) {
                return post.hashTags.includes(filterConfig.hashTags);
            });
        }
        if (filterConfig.hasOwnProperty('author')) {
            necessaryPhotos = necessaryPhotos.filter(function (post) {
                return post.author === filterConfig.author;
            });
        }
        if (skip > necessaryPhotos.length && necessaryPhotos.length !== 0) {
            console.log('I found something, but not too many posts as u want(less than ' + skip + ')');
        }
        if (skip >= 0 && necessaryPhotos.length > top + skip) {
            necessaryPhotos = necessaryPhotos.slice(skip, skip + top);
        } else {
            if (skip >= 0) {
                necessaryPhotos = necessaryPhotos.slice(skip, necessaryPhotos.length);
            }
        }
        return necessaryPhotos;
    }

    function getPhotoPost(id) {
        if (typeof id === 'string') {
            return photoPosts.filter(function (post) {
                return post.id === id;
            });
        }
        console.log('incorrect input\nexample of correct input: action.getPhotoPost(\'1\');');
        return false;
    }

    let validate = {
        id: function (id) {
            return photoPosts.every(function (post) {
                return id !== post.id;
            });
        },

        description: function (description) {
            return !(description.length === 0 || description.length > 200);
        },

        createdAt: function (createdAt) {
            return (typeof createdAt === 'object');
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
                        console.log("wrong " + item);
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
        if (validatePhotoPost(post)) {
            photoPosts.push(post);
            photoPosts.sort(function compareDates(a, b) {
                return b.createdAt - a.createdAt;
            });
            return true;
        }
        return false;
    }

    function editPhotoPost(id, post) {
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
            total = photoPosts.some(function (item) {
                if (item.id === id) {
                    if (validatePhotoPost(item)) {
                        item.photoLink = post.photoLink;
                        return true;
                    }
                }
            });
            if (!total) {
                return total;
            }
        }
        if (post.hasOwnProperty('description')) {
            total = photoPosts.some(function (item) {
                if (item.id === id) {
                    if (validatePhotoPost(item)) {
                        item.description = post.description;
                        return true;
                    }
                }
            });
            if (!total) {
                return total;
            }
        }
        if (post.hasOwnProperty('hashTags')) {
            total = photoPosts.some(function (item) {
                if (item.id === id) {
                    if (validatePhotoPost(item)) {
                        delete item.hashTags;
                        item.hashTags = post.hashTags;
                        return true;
                    }
                }
            });
            if (!total) {
                return total;
            }
        }
        return total;
    }

    function removePhotoPost(id) {
        if (typeof id === 'string') {
            return photoPosts.some(function (item, i) {
                if (item.id === id) {
                    photoPosts.splice(i, 1);
                    return true;
                }
            });
        }
        console.log('incorrect input\nexample of correct input: action.removePhotoPost(\'1\');');
        return false;
    }

    return {
        getPhotoPosts,
        getPhotoPost,
        validatePhotoPost,
        addPhotoPost,
        editPhotoPost,
        removePhotoPost
    }
})();
