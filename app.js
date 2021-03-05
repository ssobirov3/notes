const express=require('express');
const app=express();

app.use('/static',express.static('public'))

app.set('view engine', 'pug');

app.get('/',(req,res) =>{
	//to do -- Handler for Root URL 
	res.render('home');
})

app.listen(8000, (err) =>{
	if(err) throw err

	console.log('App is running...')
})




//  We wil start from Layout today 
