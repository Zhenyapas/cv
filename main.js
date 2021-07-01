let links = document.querySelectorAll('.link');

links[0].classList.add('link_active');




window.addEventListener('scroll', function() {
  

  if(pageYOffset<600){
  	links[0].classList.add('link_active');
  } else {links[0].classList.remove('link_active');
}

  
  if(pageYOffset>600 && pageYOffset<1400){
  	links[1].classList.add('link_active');
  } else {links[1].classList.remove('link_active');
}

 
  if(pageYOffset>1400 && pageYOffset<1800){
  	links[2].classList.add('link_active');
  } else {links[2].classList.remove('link_active');
}

 if(pageYOffset>1800){
  	links[3].classList.add('link_active');
  } else {links[3].classList.remove('link_active');
}




});







for(let i=0;i<links.length;i++){

   let linkOnClick =  links[i];



   	
   	linkOnClick.addEventListener('click', () => {

   		linkOnClick.classList.add('link_active');

   		for(let j=0; j<links.length;j++){

   		if(j!=i) links[j].classList.remove('link_active');

   		}

   	});



    };






