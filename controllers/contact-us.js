const path=require('path');

exports.getContactUs=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','contact-us.html'))
}
exports.postContactUs=(req,res,next)=>{
    console.log(req.body);
    console.log(req.body.cust_name);
    console.log(req.body.emailId);

    // console.log(req.body.size);
    res.redirect('/success');
}