
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
  while (enemyHealth > 0) {
    //Subtract the value of `playerAttack` from the value of `enemyHealth`and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

    //Log a resulting message to the console so we know that it worked.
    console.log(
      playerName +
        " attacked " +
        enemyNames[i] +
        ". " +
        enemyNames[i] +
        " now has " +
        enemyHealth +
        " health points remaining."
    );

    //Check enemy's health
    if (enemyHealth <= 0) {
      console.log(enemyNames[i] + " has died");
    } else {
      console.log(
        enemyNames[i] + " still has " + enemyHealth + " health points left."
      );
    }

    //Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    //Log a resulting message to the console so we know that it worked.
    console.log(
      "Ugh! I've been attacked by " +
        enemyNames[i] +
        ". " +
        "Player health is now " +
        playerHealth
    );
  }
  
};

for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  fight(enemyNames[i]);
}



//Game States
//"WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat Each enemy-robot
// "LOSE" - Player robot's health is zero or less

//Pick up at 3.2.5 Fight Enemy Robot Combatants Using for Loops 11/25/2021

