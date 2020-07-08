const express = require('express')
const nunjucks = require('nunjucks')
const videos = require('./data')

const server = express()

server.use(express.static('public'))
server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', function(req, res){
    const data = {
        avatarUrl: 'https://avatars3.githubusercontent.com/u/63811088?s=460&u=8abf71b40a48d3717210e4cf09780fdb0ff128ef&v=4',
        name: 'Cássio Cappellari',
        role: 'Fullstack Engineer',
        about: 'Hello! My name is Cássio, student at <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a> and fullstack engineer passionate about create great products throught the JavaScript ecosystem!',
        links: [
            {
                name: 'GitHub',
                url: 'https://github.com/cassiocappellari'
            },
            {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/cassiocappellari/'
            },
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/cassiocappellari/'
            }
        ]
    }

    return res.render('about', {data})
})

server.get('/portfolio', function(req, res){
    return res.render('portfolio', {items: videos})
})

server.get('/video', function(req, res) {
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })

    if (!video) {
        return res.send('Video not founded!')
    }

    return res.render('video', {item: video})
})

server.listen(5000, function() {
    console.log('server is running')
})