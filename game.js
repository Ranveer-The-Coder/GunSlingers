class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }

            player1 = createSprite(200,displayWidth/2);
            player1.addImage(player1Shooting);
            player1.scale = 0.3

            player2 = createSprite(800,displayWidth/2);
            player2.addImage( player2Shooting);
             player2.scale = 0.45


            wall1 = createSprite(300,360,42,250)


players=[player1,player2];
      
        }
    
    play(){
        
                form.hide()
               
              

                Player.getPlayerInfo();
                 background(map1)
                 var x =100;
                 var y=200;
                 var index =0;


                 drawSprites(); 
                 
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = displayWidth-allPlayers[plr].distanceX;
                     y = displayHeight- allPlayers[plr].distanceY;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                        fill("black");
                        textSize(25);
                        text(allPlayers[plr].name ,x-25,y+25);
                         
                    }                       
                    fill("white")
                    text("Player1: "+allPlayers.player1.score, 50, 50);
                    text("Player2: "+allPlayers.player2.score, 50, 100)
                 }                
    

                 if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distanceX -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distanceX += 10
                    player.update();
                }
                if (keyIsDown(UP_ARROW)) {
                    player.distanceY  +=10
                    player.update();
                }
                if (keyIsDown(DOWN_ARROW) && player.index !== null) {
                    player.distanceY -= 10
                    player.update();
                }
            
                               
                   
      
    }

    end(){
       console.log("Game Ended");
    }
}
