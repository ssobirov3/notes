const express=require('express');
const app=express();

app.use('/static',express.static('public'))

app.set('view engine', 'pug');

const notes=require('./data.js');

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


app.get('/notes/:id',(req,res) =>{
	//to do -- Handler for Root URL 
	const noteID = req.params.id;
	const note = notes.filter(note=> note.id == noteID)[0]
	res.render('detail',{note: note});
})


app.listen(8000, (err) =>{
	if(err) throw err

	console.log('App is running...')
})




//  We wil start from Layout today 
