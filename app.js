const express=require('express')
const app=new express();
const morgan=require('morgan');
app.use(morgan('dev'));
require('dotenv').config();
require('./db/connection')
app.set('view engine','ejs');

app.use(express.static('public')) 
const nav=[
    
    {name:'Home',link:'/basic'},
    {name:'Add Employee',link:'/basic/addform'}
 
]



const routes=require('./routes/employeeroutes')(nav);
app.use('/basic',routes);
app.set("views",__dirname+'/views');


app.listen(process.env.PORT,()=>{
console.log(`Server is running on PORT ${process.env.PORT}`);
})