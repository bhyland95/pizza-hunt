const router = require('express').Router();
const {
    addComment,
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller');


//Set up adding a comment at /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

//Set up removing a comment at /api/comments/<pizzaId>/<commentId>
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);


router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;