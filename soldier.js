const soldier = {
  name: "Халк",
  health: 10,

  weapon: {
    weaponName: "ПП",
    cartridges: 30,
  },
  purveyance: 3,

  shoot: function () {
    if (this.weapon.cartridges) {
      this.weapon.cartridges = this.weapon.cartridges - 1;

      console.log("бах-бах");
    } else {
      console.log("обойма пуста. Перезаредитесь");
    }
  },
  recharge: function () {
    if (this.purveyance) {
      this.weapon.cartridges = 30;
      this.purveyance--;
      console.log("перезарядка...");
    } else {
      console.log("не осталось припасов");
    }
  },

  hurt: function () {
    if (this.health) {
      this.health--;
    } else {
      console.log("Ты проиграл");
    }
  },
};
