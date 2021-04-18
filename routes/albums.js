const {
    index, show, create, update, destroy
  } = require('../controllers/albums');
  
  module.exports = router => {
    router.get('/albums', index);
    router.get('/albums/:id', show);
    router.post('/albums', create);
    router.put('/albums', update);
    router.delete('/albums', destroy);
  };