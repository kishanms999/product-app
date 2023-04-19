const path=require('path')
const express=require('express');
const successController=require('../controllers/success');

const router=express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
});
router.get('/success',successController.getSuccess);

module.exports=router;