module.exports = function(req, res, next) {
    'user strict';

    // Sockets
    if(req.isSocket)
    {
        if(req.session &&
        req.session.passport &&
        req.session.passport.user)
        {
            return next();
        }

        res.json(401);
    }
    // HTTP
    else
    {
        if(req.isAuthenticated())
        {
            return next();
        }
        
        // If you are using a traditional, server-generated UI then uncomment out this code:
        res.redirect('/explore');
    }


};