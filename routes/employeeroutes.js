const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const employeeModel=require('../model/employeeData');

function employeeroute(nav){
router.get('/',async(req,res)=>{
try {
    const data=await employeeModel.find();
    res.status(200).render("home",{data,nav})
} catch (error) {
    res.status(404).send('No data');
}
})
router.get('/addform',(req,res)=>{
    res.render("employeeform",
       {nav}
    )
})
router.post('/addemployee',async(req,res)=>{
    try {
        var item=req.body;
        const data=new employeeModel(item);
        await data.save();
        res.redirect('/basic');
        // res.status(200).send('post successful')
    } catch (error) {
        res.status(404).send('post unsuccessful')
 
    }
})
router.get('/update/:id',async(req,res)=>{
    const data=await employeeModel.findOne({"_id":req.params.id})
    res.render("updateform",{
        id:req.params.id,data,nav
    })
})
router.post('/edit/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        await employeeModel.findByIdAndUpdate(id,req.body)
        res.redirect('/basic')
        // res.status(200).send('update success')
    } catch (error) {
        res.status(404).send('update unsuccess')
   
    }
})
router.get('/delete/:id',async(req,res)=>{
    try {
        const id=req.params.id;
        await employeeModel.findByIdAndDelete(id)
        res.redirect('/basic')
    } catch (error) {
        res.status(404).send('delete not success')
    }
})


return router
}




module.exports=employeeroute