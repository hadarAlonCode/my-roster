const express = require( 'express' ) //install
const router = express.Router()
const request = require('request') //install

let dreamTeam = []


const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}




router.get('/teams/:teamName', function (req, res) {
    let teamName = req.params.teamName
    let teamId = teamToIDs[teamName]
    
    request('http://data.nba.net/10s/prod/v1/2018/players.json', function(err, response, body){
    let myData = JSON.parse(response.body || "{}") // all the api is in body object
    let standard = myData.league.standard
    // let newArray = []
    
    let activePlayers = standard.filter( p => p.teamId === teamId && p.isActive === true)
    // console.log(activePlayers)
    let newArray = activePlayers.map(p => {return {firstName: p.firstName , lastName: p.lastName, jersey: p.jersey, pos: p.pos}})
    // for( let i in activePlayers){
    // let firstName = activePlayers[i].firstName
    // let lastName = activePlayers[i].lastName
    // let jersey = activePlayers[i].jersey
    // let pos = activePlayers[i].pos
    // newArray.push({firstName: firstName , lastName: lastName, jersey: jersey, pos: pos })
  

    //  console.log(newArray)
     res.send(newArray) 
     })
})



//extension- player stats
// router.get('/playerStats/:player', function (req, res) {
//     let player = req.params.player
//     let splitName = player.split(" ");
//     let last= splitName[1]
//     let first = splitName[0]
    
//     request(`https://nba-players.herokuapp.com/players-stats/${last}/${first}`, function(err, response, body){
//         console.log(response.body);
        
//     let myData = JSON.parse( response.body || "{}") // all the api is in body object
//     // let gamesPlayed = myData[games_played]
//     // let minutesPerGame = myData[minutes_per_game]
//     // let pointsPerGame = myData[points_per_game]
//     res.send(response.body)    
// })
// })



//roster2 - put router for new team
router.put('/team', function (req, res) {
    console.log("Update is working")
    let Name = req.body.teamName
    let id = req.body.teamId
    teamToIDs[Name] = id 
    res.send( teamToIDs)

})



//======================

//roster 2


router.get('/dreamTeam', function (req, res) {
   res.send(dreamTeam)
})


router.post('/roster:player', function (req, res) {
    let player = req.params.player
    let data = req.body
    console.log(data);
    
    dreamTeam.push(data)
    // console.log(dreamTeam);
    
})








router.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for visiting")  
})

module.exports = router

