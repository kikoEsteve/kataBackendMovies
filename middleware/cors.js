export default (req,res,next) => {
    res.header('Access-Controll-Allow-Origin', '*');
    res.header('Access-Controll-Allow-Headers', '*');
    res.header('Access-Controll-Allow-Methods', '*');
    next();
}