
var form = document.getElementById("form")



form.addEventListener('submit', function(e){
 	e.preventDefault()
 	var user = document.getElementById("user").value
    var error = document.getElementById("error")

 	

    fetch("https://api.github.com/users/"+user)
    .then((result) => result.json())
    
    
    .then((data1) => {
    	
    	localStorage.setItem("data1", JSON.stringify(data1))
    	
    	
    	window.document.location = "API2.html"
    })	
    	
    
    
    
   
}) 
