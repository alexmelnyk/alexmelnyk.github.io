(function(){

	var app = angular.module('photoApp',[]);

	app.component('photo', {
		templateUrl : 'app/template.html',
		controller : function($scope){
			var self = this;

			this.imgUrls = [];
			this.defaults = {
				constLength: 12,
				defaultScrollNumber: 3,
				imgIndex: 0,
				enableScroll: true 
			}

			for (var i = 0; i < this.defaults.constLength; i++){
				this.defaults.imgIndex = i;
				this.imgUrls.push('https://unsplash.it/300/250?image=' + this.defaults.imgIndex );
			};

			this.deleteItem = function(index){
				self.imgUrls.splice(index, 1);
			};

			this.addItems = function(){
				if (self.enableScroll){
					for (i = 0; i < self.defaults.defaultScrollNumber; i++){
						self.defaults.imgIndex++;
						self.imgUrls.push('https://unsplash.it/300/250?image=' + self.defaults.imgIndex );		
					}
				}
			}

			window.addEventListener("scroll", function() {
	            var body = document.body,
    				html = document.documentElement,
    				windowHeight = window.innerHeight,
    				offset = window.pageYOffset;

				var documentHeight = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

				if(offset == documentHeight - windowHeight){
					$scope.$apply(self.addItems());
				}
	        });
		}
	});

})()