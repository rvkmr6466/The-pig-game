/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var dice, players, totalScore, activePlayer, gamePlaying;
//call this funciton initally
init();
//call function on new game button
document.querySelector('.btn-new').addEventListener('click', init);
//call function when click 
document.querySelector('.btn-roll').addEventListener('click', function() {
	if(gamePlaying) {
		dice = Math.floor(Math.random()*6 + 1);
		document.querySelector('.dice').src = "dice-" + dice + ".png";

		document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
		document.getElementById('current-' + activePlayer).textContent = dice;	
		document.querySelector('.dice').style.display = 'block';
		if(dice !== 1) {
			totalScore += dice;
		}
		else {
			nextPlayer();
		}
	}
});
//add the total score and set to score-0/1
document.querySelector('.btn-hold').addEventListener('click', function() {
	if(gamePlaying) {
		players[activePlayer] = totalScore;
		document.getElementById('score-'+activePlayer).textContent = players[activePlayer];
		if(players[activePlayer] >= 20) {
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('#name-'+activePlayer).textContent = 'WINNER!';
		document.querySelector('player-'+activePlayer+'-panel').classList.add('winner');
		document.querySelector('player-'+activePlayer+'-panel').classList.remove('active');
		gamePlaying = false;
	}
	}
});

function nextPlayer() {
	totalScore = 0;
	document.getElementById('current-' + activePlayer).textContent = totalScore;
	document.getElementById('score-' + activePlayer).textContent = totalScore;
	document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');

}

function init() {
	//at starting both players have 0 totalScore
	//initially score will be 0
	//0 denotes player 1 and 1 denotes palyer 2
	players = [0, 0];
	totalScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	document.getElementById('score-0').textContent = 0;
	document.getElementById('score-1').textContent = 0;
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;
	 document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	 document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.dice').style.display = 'none';

}