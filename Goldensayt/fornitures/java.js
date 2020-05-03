var set = document.getElementById('mobmenu1');

  
 var menuShow = set.onclick;
 

function myFunction(button) {

	menuShow = document.getElementById('Hide').style.left = 0;	
		set.style.left = "40px";		
		
		button.classList.toggle("chang");

		set.style.opacity = "0";
}


	function closes() {

 closemenu = document.getElementById('Hide').style.left = "-200px";
 		set.style.opacity = "1";
 		set.classList.remove("chang");
 		
}
///////////////////// Slider//////////////////////


var slideIndex = 0;

var opacity11 = document.getElementsByClassName("opacity1");

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    	slides[i].style.display = "none"; 

  };	
  	slideIndex++;
  	console.log(slideIndex);
  if (slideIndex > slides.length) {
  	slideIndex = 1;
  } 
  slides[slideIndex-1].style.display = "block"; 

   
   setTimeout(showSlides, 2000);
}
showSlides(); 

//////////////////////js content on html///////////////////////////////



window.onload = function(){
	var objmen = [
			{
				src: 'image/boots/boots1.png',
				header: 'Adidas Crazy Explosive',
				price: 'Price:<span>  320$  </span>',
			},{
				src: 'image/boots/boots2.png',
				header: 'Adidas Crazy Explosive',
				price: 'Price:<span>  340$  </span>',
			},{
				src: 'image/boots/boots3.png',
				header: 'Adidas Crazy Explosive',
				price: 'Price:<span>  320$  </span>',
			},{
				src: 'image/boots/boots4.png',
				header: 'Adidas Crazy Explosive',
				price: 'Price:<span> 451$   </span>',
			},{
				src: 'image/boots/boots5.png',
				header: 'Adidas Crazy Explosive',
				price: 'Price:<span>  231$  </span>',
			},{
				src: 'image/boots/boots6.png',
				header: 'Adidas Crazy Explosive',
				price: 'Price:<span>  331$  </span>',
			},{
				src: 'image/boots/boots7.png',
				header: 'Adidas Crazy Explosive',
				price: 'Price:<span>  341$  </span>',
			},{
				src: 'image/boots/boots8.png',
				header: 'Adidas Crazy Explosive',
				price: 'Price:<span>  457$  </span>',
			},
		];
		
		var divproduct = document.getElementById('Product');

		for (var i = 0; i < objmen.length; i++) {
			var html = '<div class="col-md-2 mpa" id = "mpaa" >'+
					 		'<a href=""><img id="bot" class="boots1" src="'+objmen[i].src+'"></a>'+
					 		/*'<h3 class="bootsname">'+objmen[i].header+'</h3>'+
					 		'<p class="price" >'+objmen[i].price+'</p>'*/+
						'</div>'
		  	divproduct.innerHTML += html; 
		}
}

 function womenbutton() {
var	wom1 = 	document.getElementById("Product");
	wom1.style.display = "none";
	

var objwoman = [
			{
				src: 'image/boots/boots1.png',
				header: 'asdasdosive',
				price: 'Price:<span>  320$  </span>',
			},{
				src: 'image/boots/boots2.png',
				header: 'Adasdasdasdaosive',
				price: 'Price:<span>  340$  </span>',
			},{
				src: 'image/boots/boots3.png',
				header: 'Adidasdasdsive',
				price: 'Price:<span>  320$  </span>',
			},
		];

	var divproduct = document.getElementById('Productwomen');
	
		for (var i = 0; i < objwoman.length; i++) {
			var html = '<div class="col-md-3 mpa" >'+
					 		'<a href=""><img id="bot" class="boots1" src="'+objwoman[i].src+'"></a>'+
					 		'<h3 class="bootsname">'+objwoman[i].header+'</h3>'+
					 		'<p class="price" >'+objwoman[i].price+'</p>'+
						'</div>'
		  
		  		
		  			divproduct.innerHTML = divproduct.innerHTML + html;
		  		
		  		 
		}

		
}	
