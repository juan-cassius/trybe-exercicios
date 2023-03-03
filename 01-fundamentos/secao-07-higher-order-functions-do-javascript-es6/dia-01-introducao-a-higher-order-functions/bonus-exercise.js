const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};
const mageAttack = (mage) => {
  const min = mage.intelligence;
  const max = min * 2;
  const mageMana = mage.mana;
  const stats = {
    manaGasta: 0,
    danoCausado: 'Não possui mana suficiente',
  };
  if (mageMana > 15) {
    const mageDamage = min < max ? max : min;
    stats.manaGasta = 15;
    stats.danoCausado = mageDamage;
    return stats;
  }
  return stats;
};
const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};
const warriorAttack = (warrior) => {
  const min = warrior.strength;
  const max = Math.floor(
    Math.random() * (min * warrior.weaponDmg)
  );
  const warriorDamage = max > min ? max : min;
  return warriorDamage;
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};
const dragonAttack = (dragon) => {
  const min = 15;
  const max = Math.floor(Math.random() * dragon.strength);
  const dragonDamage = max > min ? max : min;
  return dragonDamage;
};
const battleMembers = { mage, warrior, dragon };
const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    dragon.healthPoints -= warriorDamage;
    warrior.damage = warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageStats = mageAttack(mage);
    const mageDamage = mageStats.danoCausado;
    mage.mana -= mageStats.manaGasta;
    dragon.healthPoints -= mageDamage;
    mage.damage = mageDamage;
  },

  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon);
    warrior.healthPoints -= dragonDamage;
    mage.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
    turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());