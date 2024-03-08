var player = {
            x: canvas.width / 2,
            y: canvas.height - 50,
            width: 50,
            height: 50,
            color: 'white',
            hp: 3,
            speed: 8, // Increased player speed
            movingLeft: false,
            movingRight: false,
            movingUp: false,
            movingDown: false,
            isShootingCD: false
        };
		
var enemies = {
			x: 0,
			y: 0,
			height: 30,
			width: 30,
			color: 'red'
			speed: 6,
			
}
var bullets = {
		    x: 0,
			y: 0,
			height: 30,
			width: 30,
			color: 'red'
			speed: 6,
}	

boss = {
            x: canvas.width / 2,
            y: 100,
            width: 100,
            height: 35,
            color: 'white',
            speed: 0,
            hp: 100
        }


bossShootingFreq
angle = Math.atan2(player.y / 2 - enemy.y, player.x / 2 - enemy.x)
enemy velo = x: math.cos(angle), y: math.sin(angle)