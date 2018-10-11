module.exports = {
    getPosts(req, res, store) {
        res.status(200).send(store.posts)
    },
    addPost(req, res, store) {
        let newPost = req.body
        let id = store.posts.length
        store.posts.push(newPost)
        res.status(201).send({id: id})
    },
    updatePost(req, res, store) {
        var comments = store.posts[req.params.postId].comments
        store.posts[req.params.postId] = req.body
        store.posts[req.params.postId].comments = comments
        res.status(200).send(store.posts[req.params.postId])
    },
    removePost(req, res, store) {
        store.posts.splice(req.params.postId, 1)
        res.status(204).send()
    }
  }