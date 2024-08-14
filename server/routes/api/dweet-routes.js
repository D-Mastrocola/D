const router = require("express").Router();
const { Dweet, User, Like } = require("../../models");
const withAuth = require('../../utils/auth');


router.get('/', (req, res) => {
  console.log('======================');
  Dweet.findAll()
    .then(dbDweetData => res.json(dbDweetData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Dweet.findOne({
    where: {
      id: req.params.id
    },
  })
    .then(dbDweetData => {
      if (!dbDweetData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbDweetData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  Dweet.create({
    title: req.body.title,
    desc: req.body.desc,
    user_id: req.session.user_id
  })
    .then(dbDweetData => res.json(dbDweetData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

/*router.put('/like', withAuth, (req, res) => {
  // custom static method created in models/Post.js
  Post.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
    .then(updatedVoteData => res.json(updatedVoteData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
*/
router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Dweet.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbDweetData => {
      if (!dbDweetData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbDweetData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
