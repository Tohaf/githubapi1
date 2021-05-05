

function sum(){

    

    var retrieve1 = JSON.parse(localStorage.getItem("data1"))
    console.log(retrieve1)

    

    
    document.getElementById("bord").innerHTML = `
    	<img src="${retrieve1.avatar_url}"/>

    `
    document.getElementById("Username").innerHTML = ("username: "+ retrieve1.login)
        
    document.getElementById("follow").innerHTML = ("follower: "+ retrieve1.followers)
    document.getElementById("follo").innerHTML = ("folloiwing: "+ retrieve1.following)
    document.getElementById("pub").innerHTML = ("public repo: "+ retrieve1.public_repos)

    var retrieve = JSON.parse(localStorage.getItem("data"))
    console.log(retrieve)

       
    document.getElementById("bord1").innerHTML = `
        <img src="${retrieve.avatar_url}"/>

    `
    document.getElementById("User1").innerHTML = ("username: "+ retrieve.login)
    document.getElementById("follow1").innerHTML = ("follower: "+ retrieve.followers)
    document.getElementById("follo1").innerHTML = ("folloiwing: "+ retrieve.following)
    document.getElementById("pub1").innerHTML = ("public repo: "+ retrieve.public_repos)

    var fight = document.getElementById("g1")

    fight.onclick = function(){
        var reselect = document.getElementById("b1")
        var win = document.getElementById("co")
        var winner = document.getElementById("winner")
        var winner1 = document.getElementById("winner1")
        var score = document.getElementById("score")
        var score1 = document.getElementById("score1")
        var start = document.getElementById("start")
    
        let num = 1
        let rep = 0.5
        let value = num * retrieve1.followers
        let values = num * retrieve1.following
        let value1 = rep * retrieve1.public_repos
        let total = value+values+value1
        console.log(value)
        console.log(values)
        console.log(value1)
        console.log(total)

        let valu = num * retrieve.followers
        let valus = num * retrieve.following
        let valu1 = rep * retrieve.public_repos
        let tota = valu+valus+valu1
        console.log(valu)
        console.log(valus)
        console.log(valu1)
        console.log(tota)


        win.innerHTML = "Winner"
        score.innerHTML = "score: "+ total
        score1.innerHTML  = "score: "+ tota
        reselect.innerHTML = " "
        fight.style.backgroundcolor = "white"

        if(total > tota){
            winner.innerHTML = "Winner"
            winner1.innerHTML = "Losser"
        }
        else{
            winner1.innerHTML = "Winner"
            winner.innerHTML = "Losser"
        }
        if(total == tota){
            win.innerHTML = "it is a TIE"
            winner1.innerHTML = " "
            winner.innerHTML = " "
        }

        fight.textContent = " "
        fight.style.backgroundcolor = "transparent"

        start.innerHTML = "Startover"
        
    }



    
    
    
    
} 


