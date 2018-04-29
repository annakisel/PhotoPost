/*let photoPosts = [
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
];*/

let user = 'classisinternal';
let count = 0;
let necessaryPhotos;
let pp;

const fs = require('fs');

fs.readFile('./server/data/posts.json', 'utf8', function (err, data) {
    if (err) throw err;
    pp = JSON.parse(data);
});

function writePPToFile(){
    fs.writeFile('./server/data/posts.json', JSON.stringify(pp), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

function validatePhotoPost(post) {
    if (typeof post === 'object') {
        let a;
        return Object.keys(action.validate).every(function (item) {
            if (post.hasOwnProperty(item)) {
                a = action.validate[item](post[item]);
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


let action = {
    getPhotoPosts: function(skip, top, filterConfig) {
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
            if (isValidDate(filterConfig.dateFrom) && isValidDate(filterConfig.dateTo)) {
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
    },

     isValidDate: function(value) {
        let dateWrapper = new Date(value);
        return !Number.isNaN(dateWrapper.getDate());
    },

     getPhotoPost: function(id) {
        if (typeof id === 'string') {
            return pp.filter(function (post) {
                return post.id === id;
            });
        }
        console.log('incorrect input\nexample of correct input: action.getPhotoPost(\'1\');');
        return false;
    },


    validate: {
        id: function (id) {
            return pp.every(function (post) {
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
    },

     addPhotoPost: function(post) {
        if (validatePhotoPost(post)) {
            pp.push(post);
            pp.sort(function compareDates(a, b) {
                return b.createdAt - a.createdAt;
            });
            writePPToFile();
            return true;
        }
        return false;
    },

     editPhotoPost: function(id, post) {
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
                 return false;
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
                 return false;
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

         let postPP = null;

         pp.some(function (item) {
             if (item.id === id) {
                 postPP = item;
             }
         });

         if (postPP === null) {
             console.log('there\'s no posts with such id');
             return false;
         }

         if (post.hasOwnProperty('photoLink')) {
             postPP.photoLink = post.photoLink;
         }

         if (post.hasOwnProperty('description')) {
             postPP.description = post.description;
         }
         if (post.hasOwnProperty('hashTags')) {
             delete postPP.hashTags;
             postPP.hashTags = post.hashTags;
         }

         if (post.hasOwnProperty('likes')) {
             delete postPP.likes;
             postPP.likes = post.likes;
         }
        writePPToFile();
        return true;
    },

     removePhotoPost: function(id) {
        if (typeof id === 'string') {
            return pp.some(function (item, i) {
                if (item.id === id) {
                    pp.splice(i, 1);
                    writePPToFile();
                    return true;
                }
            });
        }
        console.log('incorrect input\nexample of correct input: action.removePhotoPost(\'1\');');
        return false;
    },

     cutNecessaryPhotos: function(top, skip) {
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
};
module.exports = action;
