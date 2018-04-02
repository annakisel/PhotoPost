console.log('action.getPhotoPosts(0, 20)');
console.log(action.getPhotoPosts(0, 20));

console.log('action.getPhotoPosts(2, 5)');
console.log(action.getPhotoPosts(2, 5));

console.log('action.getPhotoPosts(null, null, {author: \'fisunka\'})');
console.log(action.getPhotoPosts(null, null, {author: 'fisunka'}));

console.log('action.getPhotoPosts(0, 10, {dateFrom: new Date(\'2018-01-29T00:00:00\'), dateTo: new Date(\'2018-02-04T00:00:00\')});');
console.log(action.getPhotoPosts(0, 10, {
    dateFrom: new Date('2018-01-29T00:00:00'),
    dateTo: new Date('2018-02-04T00:00:00')
}));

console.log('action.getPhotoPosts(0,10, {hashTags: \'cat\'})');
console.log(action.getPhotoPosts(0, 10, {hashTags: 'cat'}));

console.log('action.getPhotoPosts(\'0\',\'10\', {hashTags: \'cat\'})');
console.log(action.getPhotoPosts('0', '10', {hashTags: 'cat'}));

console.log('action.getPhotoPosts(0,10, {hashTags: \'cat\', dateFrom: new Date(\'2018-01-29T00:00:00\'), dateTo: new Date(\'2018-02-04T00:00:00\')})');
console.log(action.getPhotoPosts(0, 10, {
    hashTags: 'cat',
    dateFrom: new Date('2018-01-29T00:00:00'),
    dateTo: new Date('2018-02-04T00:00:00')
}));

console.log('action.getPhotoPosts(0,10, {hashTags: \'cat\', dateFrom: \'2018-01-29T00:00:00\', dateTo: \'2018-02-04T00:00:00\'})');
console.log(action.getPhotoPosts(0, 10, {
    hashTags: 'cat',
    dateFrom: '2018-01-29T00:00:00',
    dateTo: '2018-02-04T00:00:00'
}));

console.log('action.getPhotoPosts(0, 10, {hashTags: \'cat\',author: \'thebestcat\', dateFrom: new Date(\'2018-02-12T00:00:00\'),dateTo: new Date(\'2018-02-14T00:00:00\')})');
console.log(action.getPhotoPosts(0, 10, {
    hashTags: 'cat',
    author: 'thebestcat',
    dateFrom: new Date('2018-02-12T00:00:00'),
    dateTo: new Date('2018-02-14T00:00:00')
}));

console.log('action.getPhotoPosts(10,10, \'hi\')');
console.log(action.getPhotoPosts(10, 10, 'hi'));

console.log('action.getPhotoPost(\'1\')');
console.log(action.getPhotoPost('1'));

console.log('action.getPhotoPost(2)');
console.log(action.getPhotoPost(2));

console.log('action.getPhotoPost(\'29\')');
console.log(action.getPhotoPost('29'));


console.log('action.validatePhotoPost(2)');
console.log(action.validatePhotoPost(2));

console.log('action.validatePhotoPost({id: \'4\',description: \'another post\',createdAt: new Date(\'2018-02-13T10:23:46\'),author: \'user\',\nphotoLink: \'photos/4.jpg\',hashTags: [\'new\', \'music\', \'video\', \'soon\'],likes: [\'angelaniklau\', \'id_nails_space\']');
console.log(action.validatePhotoPost({
    id: '4',
    description: 'another post',
    createdAt: new Date('2018-02-13T10:23:46'),
    author: 'user',
    photoLink: 'photos/4.jpg',
    hashTags: ['new', 'music', 'video', 'soon'],
    likes: ['angelaniklau', 'id_nails_space']
}));

console.log('action.validatePhotoPost({id: \'233\',description: \'another post\',createdAt: new Date(\'2018-02-13T10:23:46\'),author: \'\',\nphotoLink: \'photos/4.jpg\',hashTags: [\'new\', \'music\', \'video\', \'soon\'],likes: [\'angelaniklau\', \'id_nails_space\']');
console.log(action.validatePhotoPost({
    id: '233',
    description: 'another post',
    createdAt: new Date('2018-02-13T10:23:46'),
    author: '',
    photoLink: 'photos/4.jpg',
    hashTags: ['new', 'music', 'video', 'soon'],
    likes: ['angelaniklau', 'id_nails_space']
}));

console.log('action.validatePhotoPost({id: \'233\',description: \'another post\',createdAt: new Date(\'2018-02-13T10:23:46\'),author: \'user\',\nphotoLink: \'photos/4.jpg\',hashTags: [\'new\', \'music\', \'video\', \'soon\'],likes: [\'angelaniklau\', \'id_nails_space\']');
console.log(action.validatePhotoPost({
    id: '233',
    description: 'another post',
    createdAt: new Date('2018-02-13T10:23:46'),
    author: 'user',
    photoLink: 'photos/4.jpg',
    hashTags: ['new', 'music', 'video', 'soon'],
    likes: ['angelaniklau', 'id_nails_space']
}));

console.log('incorrect parameters was checked in method validate before it');
console.log('action.addPhotoPost({id: \'233\',description: \'another post\',createdAt: new Date(\'2018-02-13T10:23:46\'),author: \'user\',\nphotoLink: \'photos/4.jpg\',hashTags: [\'new\', \'music\', \'video\', \'soon\'],likes: [\'angelaniklau\', \'id_nails_space\'])');
console.log(action.addPhotoPost({
    id: '233',
    description: 'another post',
    createdAt: new Date('2018-02-13T10:23:46'),
    author: 'user',
    photoLink: 'photos/4.jpg',
    hashTags: ['new', 'music', 'video', 'soon'],
    likes: ['angelaniklau', 'id_nails_space']
}));

console.log('action.getPhotoPosts(0, 30)');
console.log(action.getPhotoPosts(0, 30));

console.log('action.removePhotoPost(233)');
console.log(action.removePhotoPost(233));

console.log('action.removePhotoPost(\'233\')');
console.log(action.removePhotoPost('233'));

console.log('action.getPhotoPosts(0, 30)');
console.log(action.getPhotoPosts(0, 30));

console.log('action.editPhotoPost(\'2\', {photoLink:\'link\', author:\'user\', hashTags:[\'hi\', \'toEveryOne\'], description: \'new text\'}');
console.log(action.editPhotoPost('2', {author:'user', photoLink:'link', hashTags:['hi', 'toEveryOne'], description: 'new text'}));

console.log('action.getPhotoPost(\'2\')');
console.log(action.getPhotoPost('2'));

console.log('action.editPhotoPost(\'2\', {photoLink:\'\' hashTags:[\'hi\', \'toEveryOne\'], description: \'new text\'}');
console.log(action.editPhotoPost('2', {author:'user', photoLink:'', hashTags:['hi', 'toEveryOne'], description: 'new text'}));

console.log('action.editPhotoPost(\'2\', {photoLink:\'link\' hashTags:[\'hi\', \'\'], description: \'new text\'}');
console.log(action.editPhotoPost('2', {author:'user', photoLink:'link', hashTags:['hi', ''], description: 'new text'}));

console.log('action.getPhotoPost(\'2\')');
console.log(action.getPhotoPost('2'));
