const team = {
    _players: [
        {
            firstName: 'Rajat',
            lastName: 'Chandra',
            age: 20
        },
        {
            firstName: 'Marshall',
            lastName: 'Mathers',
            age: 49
        },
        {
            firstName: 'Lionel',
            lastName: 'Messi',
            age: 35
        }
    ],
    _games: [
        {
            opponent: 'Real Madrid',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Juventus',
            teamPoints: 50,
            opponentPoints: 10
        },
        {
            opponent: 'Barcelona',
            teamPoints: 40,
            opponentPoints: 46
        }
    ],
    get players(){
        return this._players
    },
    get games(){
        return this._games
    },

    addPlayer(firstName,lastName,age){
        if(typeof firstName!=='string' || typeof lastName!=='string' || typeof age!=='number' || age<18){
            console.log('1 or more parameters are invalid!Try Again.')
            return
        }
        
        this._players.push({firstName,lastName,age})
    },
    addGame(opponent,teamPoints,opponentPoints){
        if(typeof opponent!=='string' || typeof teamPoints!=='number' || typeof opponentPoints!=='number' || teamPoints<0 || opponentPoints<0){
            console.log('1 or more parameters are invalid!Try Again.')
            return
        }
        
        this._games.push({opponent,teamPoints,opponentPoints})
    }
}
team.addPlayer('Cristiano','Ronaldo',36)
team.addPlayer('Erling','Haaland',36)
team.addGame('Ajax',100,90)
console.log(team.players)
console.log(team.games)