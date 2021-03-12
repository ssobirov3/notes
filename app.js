const express=require('express');
const app=express();

const notes=[
	'Some notes',
	'Some notes-2',
	'Some notes-3'
];


app.use('/static',express.static('public'))

app.set('view engine', 'pug');

app.get('/',(req,res) =>{
	//to do -- Handler for Root URL 
	res.render('home');
})

app.get('/create',(req,res) =>{
	//to do -- Handler for Root URL 
	res.render('create');
})


app.get('/notes',(req,res) =>{
	//to do -- Handler for Root URL 
	res.render('notes', { n: notes });
})


app.get('/notes/1',(req,res) =>{
	//to do -- Handler for Root URL 
	res.render('detail');
})


app.listen(8000, (err) =>{
	if(err) throw err

	console.log('App is running...')
})




//  We wil start from Layout today 
