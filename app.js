var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res){
    var wowCharacters = [
    {
        server: 'Stormrage',
        name: 'Kryte',
        level: 110
    },
    {
        server: 'Bleeding Hollow',
        name: 'Rektumloose',
        level:110
    },
    {
        server: 'Stormrage', 
        name: 'Zymoz', 
        level:103
    }
    ];
    res.render('pages/home', {
        wowCharacters: wowCharacters
    });
});
app.get('/about', function(req, res){
    res.render('pages/about');
});

posts = [
    {
        id: 1,
        author: 'Josh',
        title: 'yay templates with EJS',
        body: 'Checkout this entire app for reference material on this project!'
    },
    {
        id: 2,
        author: 'Josh',
        title: 'extra templates with EJS',
        body: 'The templates just dont stop do they!!'
    },
    {
        id: 3,
        author: 'Josh',
        title: 'Did you know?!',
        body: 'This is my first time working with Express/EJS. How did I do?'
    }
];
//blog page that lists posts
app.get('/blog', function(req, res){
    res.render('pages/blog', {
        posts: posts
    });
});
//each blog post
app.get('/post/:id', function(req, res){
    //finding posts
    post = posts.filter(function(post) {
        return post.id == req.params.id;
    })[0];
    //render post page with post content
    res.render('pages/post', {
        author: post.author,
        title: post.title,
        body: post.body
    });
});

app.get('*', function(req, res){
    res.send('Page not found, you can do better nice time!');
});
//app.listen(8000, () => console.log('App listening on port 8000!'));
app.listen(8000, function(){
    console.log('Server is listening on localhost port 8000!');
});