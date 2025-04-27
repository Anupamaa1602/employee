const mongoose=require('mongoose');
//create schemma
const employeeSchema=mongoose.Schema({
    employeeName:String,
    employeeDesignation:String,
    employeeLocation:String,
    salary:Number
})
const employeeData=mongoose.model('employeedb',employeeSchema);
module.exports=employeeData;