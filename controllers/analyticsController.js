const {urll} = require("../models/usermodel");


async function handelanalytics(req,res){
   const shortId = req.params.shortId; 

   const result = await urll.findOne({shortId}); 
   const ok = result.visitHistory; 

   const sum = ok.reduce(function (accumulator, currentValue) {
    return accumulator + 1;
  }, 0);
   

   return res.json({clicks : sum});
} 

module.exports = {handelanalytics};