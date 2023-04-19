const path=require('path');
const express=require('express');
// const rootDir=require('../util/path');
const contactController=require('../controllers/contact-us');

const router=express.Router();
router.use(express.static(path.join(__dirname,'../','public')));
router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
});
    
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    console.log(req.body.title);
    // console.log(req.body.size);
    res.redirect('/');
})
router.get('/contact-us',contactController.getContactUs);
router.post('/contact-us',contactController.postContactUs);
module.exports=router;