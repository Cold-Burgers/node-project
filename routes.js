module.exports = router =>{
    require('./routes/artists')(router);
    require('./routes/albums')(router);
    return router;
};