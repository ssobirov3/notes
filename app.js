const express=require('express');
const app=express();

app.set('view engine', 'pug');

app.get('/',(req,res) =>{
	//to do -- Handler for Root URL 

})

app.listen(8000, (err) =>{
	if(err) throw err

	console.log('App is running...')
})


//  We wil start from Layout today 
