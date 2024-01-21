const ShortUniqueId = require("short-unique-id");
const {urll} = require("../models/usermodel");

async function handelGenerateNewUrl(req,res){
    const body = req.body; 
    if(!body.url) return res.status(400).json({error : 'url is required'})


    const ok = new ShortUniqueId({length : 7}); 
    const shortId = ok.rnd();

    await urll.create({
        shortURL : shortId,
        actualURL : body.url,
        visitHistory : [],
    }) 

    return res.render('home',{id:shortId});
    // res.json({id : shortId});
}

module.exports = {handelGenerateNewUrl};
