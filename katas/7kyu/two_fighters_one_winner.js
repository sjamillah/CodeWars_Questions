function declareWinner(fighter1, fighter2, firstAttacker) {
    /*
    Create a function that returns the name of the winner in a fight between two fighters.

    Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

    Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

    Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

    Your function also receives a third argument, a string, with the name of the fighter that attacks first.
    */
   let attacker = firstAttacker === fighter1.name ? fighter1 : fighter2;
   let defender = attacker === fighter1 ? fighter2 : fighter1;

   while(fighter1.health > 0 && fighter2.health > 0) {
    defender.health -= attacker.damagePerAttack;

    if(defender.health <= 0) {
        return attacker.name; // outputs the attacker's name as the winner
    }

    [attacker, defender] = [defender, attacker] // swap roles
   }
}
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"));
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"));
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"));