var express= require('express');//busca en nodulos express

var app = express();

app.set('view engine', 'pug');

//decirle en que carpeta
app.use(express.static('public'));

// cuando acceda a la ruta get
app.get('/', function(req, res){
	res.render('index', { title: 'Platzigram'}); 
});

app.get('/signup', function(req, res){
	res.render('index', { title: 'Platzigram - Sign Up'}); 
});

app.get('/signin', function(req, res){
	res.render('index', { title: 'Platzigram - Signin'}); 
});

app.get('/api/pictures', function(req, res, next){

		var pictures = [
			{
				user: {
					username: 'tatis',
					avatar: 'avatar-tati.jpg'
				},  
				url: 'http://materializecss.com/images/office.jpg',
				likes: 0,
				liked: false,
				createdAt: new Date().getTime()
			},{
				user: {
					username: 'slifszyc',
					avatar: 'avatar-tati.jpg'
				},
				url: 'http://materializecss.com/images/office.jpg',
				likes: 1,
				liked: true,
				createdAt: new Date().setDate(new Date().getDate()-10)
			}
		];

		setTimeout(function (){
			res.send(pictures);
		}, 2000);
		
});

app.listen(3000, "192.168.1.8", function(err){
	if(err) return console.log('Hubo un error'), process.exit(1);

	console.log('Platzigram escuchando en la ip 192.168.1.8 puerto 3000');
});