const express=require('express');
const router=express.Router();

router.post('/monitoring',(req, res, next)=>{

        let j={
            msg:req.body.msg
        }
        //console.log(req.body)
        res.send(j)

});

router.get('/test',(req,res,next)=>{

        res.send("test successful")

})


module.exports=router;
