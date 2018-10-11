module.exports = {
    getComments(req, res) {
        var comments = req.store.posts[req.params.postId].comments
        res.status(200).send(comments ? comments : [])
    }, 
    addComment(req, res) {
        let newComment = req.body
        let id = req.store.posts[req.params.postId].comments.length
        if(!req.store.posts[req.params.postId].comments){
            req.store.posts[req.params.postId].comments = []
        }
        req.store.posts[req.params.postId].comments.push(newComment)
        res.status(201).send({id: id})
    },
    updateComment(req, res) {
        req.store.posts[req.params.postId].comments[req.params.commentId] = req.body
        res.status(200).send(req.store.posts[req.params.postId].comments[req.params.commentId])
    },
    removeComment(req, res) {
        req.store.posts[req.params.postId].comments.splice(req.params.commentId, 1)
        res.status(204).send()
    }  
  }