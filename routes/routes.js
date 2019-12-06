const express=require('express');
const router=express.Router();
const backendBridge=require('../helpers/backendBridge');
const axios=require('axios')
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

router.post('/getBayDetails',(req,res,next)=>{
        let id=req.body.bayID

       backendBridge.getBayDetailsByID(id).then(response=>{
               console.log(response.data)
                res.send(response.data)
        }).catch(error=>{
                console.log(error)
                res.send(error)
        })
        
});


module.exports=router;
