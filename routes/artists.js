const {
    index, show, create, update, destroy
  } = require('../controllers/artists');
  
  module.exports = router => {
    router.get('/artists', index);
    router.get('/artists/:id', show);
    router.post('/artists', create);
    router.put('/artists', update);
    router.delete('/artists', destroy);
  };