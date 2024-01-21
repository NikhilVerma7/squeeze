const {urll} =  require("../models/usermodel");

async function handelRedirect(req,res){

    const redirect = req.params.shortId;

   const entry =  await urll.findOneAndUpdate(
    {
        redirect
    },{
        $push:{
            visitHistory :{
                timestamp:Date.now()
            }
        }
    }
   ); 
    if(entry)
    res.redirect(entry.actualURL);
} 

module.exports = {handelRedirect};