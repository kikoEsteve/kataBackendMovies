export default (req,res,next) => {
    res.header('Access-Controll-Allow-Origin', '*');
    res.header('Access-Controll-Allow-Headers', '*');
    res.header('Access-Controll-Allow-Methods', '*');
    next();
}

// Cross-Origin Resorce Sharing
// HTTP-header based mechanism that allows a server 
// to indicate any other origins (domain, protocol, or port) 
// than its own from which a browser should permit loading of resources.