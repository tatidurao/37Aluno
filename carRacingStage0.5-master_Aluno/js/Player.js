class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

//static porque é uma funcção usada pela classe e não pelo jogador assim tornamos ela estatica
//obtem os dados do jogo e armazena na variavel allPlayers em formato JSON
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
    allPlayers = data.val();
    })
  }
}
