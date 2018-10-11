const express = require('express') 
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const posts = require('./routes/posts')
const comments = require('./routes/comments')
let app = express()

let store = {
    posts: []
}

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())

app.get('/posts', (req, res) => {
    posts.getPosts(req, res, store);
})

app.post('/posts', (req, res) => {
    posts.addPost(req, res, store);
})

app.put('/posts/:postId', (req, res) => {
    posts.updatePost(req, res, store);
})

app.delete('/posts/:postId', (req, res) => {
    posts.removePost(req, res, store);
})

app.get('/posts/:postId/comments', (req, res) => {
    comments.getComments(req, res, store);
})

app.post('/posts/:postId/comments', (req, res) => {
    comments.addComment(req, res, store);
})

app.put('/posts/:postId/comments/:commentId', (req, res) => {
    comments.updateComment(req, res, store);
})

app.delete('/posts/:postId/comments/:commentId', (req, res) => {
    comments.removeComment(req, res, store);
})
  
app.listen(3000)
