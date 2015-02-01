var main = function() {
		
			var shItem1 = '#sub-header .col-md-4:first-child';
			var shItem2 = '#sub-header .col-md-4:nth-child(2)';
			var shItem3 = '#sub-header .col-md-4:nth-child(3)';
			var shItemLink = ' li>a';
			
			var about = '#profile-about';
			var courses = '#profile-courses';
			var projects = '#profile-projects';
		
			var green = $(shItem2).css('background-color');
			var pink =  $(shItem1).css('background-color');
			var blue =  $(shItem3).css('background-color');
			var grey = '#e3dfd7';
			
			
			$(courses).hide();
			$(projects).hide();
			
			bodyColor(pink);
			
			
			$(shItem1).hover(function() {
				$(shItem1).css('background-color', 'white');
				$(shItem1 + shItemLink).css('color', pink);
			}, function() {
				$(shItem1).css('background-color', pink);
				$(shItem1 + shItemLink).css('color', 'white');
			});
			
			$(shItem2).hover(function() {
				$(shItem2).css('background-color', 'white');
				$(shItem2 + shItemLink).css('color', green);
			}, function() {
				$(shItem2).css('background-color', green);
				$(shItem2 + shItemLink).css('color', 'white');
			});
			
			$(shItem3).hover(function() {
				$(shItem3).css('background-color', 'white');
				$(shItem3 + shItemLink).css('color', blue);
			}, function() {
				$(shItem3).css('background-color', blue);
				$(shItem3 + shItemLink).css('color', 'white');
			});
			
			$(shItem1).click(function() {
			
				$('.profiles').slideUp();
				$('#profile-about').slideDown();
				bodyColor(pink);
				
			});
			
			$(shItem2).click(function() {
			
				$('.profiles').slideUp();
				$('#profile-courses').slideDown();
				bodyColor(green);
			});
			
			$(shItem3).click(function() {
			
				$('.profiles').slideUp();
				$('#profile-projects').slideDown();
				bodyColor(blue);
			});
		};
		
		var bodyColor = function(color) {
			$('body').css('background-color', color);
		};
		
		var switchTo = function(firstSelector, secondSelector, color) {
			$(firstSelector).css('background-color', 'white');
			$(secondSelector).css('color', color);
		};

		$(document).ready(main);