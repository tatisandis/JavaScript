  var page = require('page');
  var empty = require('empty-element');
  var template = require('./template');
  var title = require('title');
  
  page('/', function(ctx, next){
  		title('Platzigram ');
		var main = document.getElementById('main-container');

		var pictures = [
			{
				user: {
					username: 'tatis',
					avatar: 'avatar-tati.jpg'
				},
				url: 'http://materializecss.com/images/office.jpg',
				likes: 10,
				liked: true
			},{
				user: {
					username: 'slifszyc',
					avatar: 'avatar-tati.jpg'
				},
				url: 'http://materializecss.com/images/office.jpg',
				likes: 2,
				liked: false
			}
		];

   		empty(main).appendChild(template(pictures));
  });
