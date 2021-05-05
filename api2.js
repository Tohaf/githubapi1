
var form1 = document.getElementById("form1")
  

form1.addEventListener('submit', function(e){
    e.preventDefault()
    var user1 = document.getElementById("user1").value
    var error = document.getElementById("error")

    

    fetch("https://api.github.com/users/"+user1)
    .then((result) => result.json())

    .then((data) => {
        console.log(data)
        localStorage.setItem("data",JSON.stringify(data))
       
        
        window.document.location = "API3.html"
       
    })
    
    
})           