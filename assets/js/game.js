
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    //ask player if they'd like to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    //if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      //confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

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
      window.alert(enemyNames[i] + " has died");
      break;
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
    
    //check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      //leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(enemyNames[i]);
  }





//Game States
//"WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat Each enemy-robot
// "LOSE" - Player robot's health is zero or less



