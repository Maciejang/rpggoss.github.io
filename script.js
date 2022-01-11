let dmg = 10;
let dead = 0;
let xp = document.querySelector("meter[id=exp]");
let enhelth = document.querySelector("progress[id=enhealth]");
let urhelth = document.querySelector("progress[id=urhelth]");
let weapon = document.querySelector("span[id=wep]");
let armour = document.querySelector("span[id=arm]");
let special = document.querySelector("span[id=spec]");
let enemyhead = document.querySelector("span[id=enemyhead]");
let enemybody = document.querySelector("span[id=enemybody]");
let enemylegs = document.querySelector("span[id=enemylegs]");
let enemyfeet = document.querySelector("span[id=enemyfeet]");
let bosssword = document.querySelector("span[id=bosssword]");
let bosssword2 = document.querySelector("span[id=bosssword2]");
let enlvl = document.querySelector("meter[id=enlvl]");
let plrlvl = document.querySelector("span[id=lvl]");
let golddis = document.querySelector("span[id=geld]");
let item = document.querySelector("span[id=item]");
let dmgpot = document.querySelector("span[id=dmgpot]");
let hppot = document.querySelector("span[id=hppot]");
let sword = document.querySelector("span[id=sword]");
let loot = document.querySelector("span[id=loot]");
let arm2 = document.querySelector("span[id=arm2]");
let loot2 = document.querySelector("span[id=loot2]");
let msg = document.querySelector(".msg");
let price = 500;
let hprice = 750;
let swordprice = 25;
let lvl = 0;
let endmg = 0;
let gold = 0;
let finalboss = 0
let realfinalboss = 0;
let iron_sword = 0;
let renis = 0;
let steels = 0;
let cool = 0;
let golematk = 0;
let tparm = 0;
let oarm = 0;
let hp = document.querySelectorAll("input")[0];
let demg = document.querySelectorAll("input")[1];
let full = 0;
let lootgh = 0;
let lootoa = 0;
let loottpa = 0;
let itemfull = 0;
let golemheart = 0;
let mhp = 1;
let healthp = 0;
let garm = 0;
let lootg = 0;

function msgcls() {
   setTimeout(() => {
      msg.innerHTML = "";
   }, 4000);
}

document.querySelectorAll("body")[0].addEventListener("keypress", (key)=> {
      if(key.key == ";") {
         if(enhelth.value <= 0) {
         msg.innerHTML = "Choose a enemy!";
         msgcls()
      }
      else {
         atk();
      }
   }
})

document.querySelector("input[value=attack]").addEventListener("click", function () {
   if(enhelth.value <= 0) {
      msg.innerHTML = "Choose a enemy";
      msgcls()
   }
   else {
      atk();
   }
} )
function atk () {

   enhelth.value -= dmg;

   if(enlvl.value == 200){

   }
   
   if(enlvl.value == 1 || enlvl.value == 2 || enlvl.value == 15 || enlvl.value == 45 || enlvl.value == 200) {
   let random = Math.trunc(Math.random() * 3);
   if(random == 1) {
      urhelth.value -= endmg
      }
   }
   if(enlvl.value == 100 || enlvl.value == 10 || enlvl.value == 300) {
      let random = Math.trunc(Math.random() * 2);
      if(random == 1) {
      urhelth.value -= endmg
      }
   }
   if(enhelth.value <= 0 && enlvl.value == 1) {
      enemyhead.innerHTML = "";
      enemybody.innerHTML = "X_X";
      enemylegs.innerHTML = "";
      gold += 2;
      golddis.innerHTML = gold;
      xp.value += 1;
      enlvl.value = 0;
      let rand = Math.trunc(Math.random() * 8);
      if(rand == 1) {
         if(full == 1){
            msg.innerHTML =  "loot is full!";
            msgcls()
         }
         else{
            full = 1;
            msg.innerHTML = "You got Terrorpod armour!";
            msgcls()
            loot.innerHTML = "|||----|||";
            loottpa = 1;
         }     
      }
      
   }
   if(enhelth.value <= 0 && enlvl.value == 2) {
      enemyhead.innerHTML = "";
      enemybody.innerHTML = "X_X";
      enemylegs.innerHTML = "";
      gold += 3;
      golddis.innerHTML = gold;
      xp.value += 3;
      enlvl.value = 0;
      
   }
   if(enhelth.value <= 0 && enlvl.value == 100) {
      enemyhead.innerHTML = "";
      enemybody.innerHTML = "X_X";
      enemylegs.innerHTML = "";
      enemyfeet.innerHTML = "";
      bosssword.innerHTML = "";
      bosssword2.innerHTML = "";
      gold += 10000;
      golddis.innerHTML = gold;
      xp.value += 650;
      enlvl.value = 0;
      if(finalboss == 0) {
         weapon.innerHTML = "O===------>";
         dmg += 400;
         finalboss = 1;
      }
      
   }
   if(enhelth.value <= 0 && enlvl.value == 300) {
      enemyhead.innerHTML = "";
      enemybody.innerHTML = "X_X";
      enemylegs.innerHTML = "";
      enemyfeet.innerHTML = "";
      bosssword.innerHTML = "";
      bosssword2.innerHTML = "";
      gold += 600000;
      golddis.innerHTML = gold;
      xp.value += 5000000;
      enlvl.value = 0;
      enlvl.max = 100;
      if(realfinalboss == 0) {
         dmg += 800;
         realfinalboss = 1;
         weapon.innerHTML = "O---||------>";
      }
      
   }
   if(enhelth.value <= 0 && enlvl.value == 200) {
      enemyhead.innerHTML = "";
      enemybody.innerHTML = "X_X";
      enemylegs.innerHTML = "";
      enemyfeet.innerHTML = "";
      bosssword.innerHTML = "";
      bosssword2.innerHTML = "";
      gold += 300000;
      golddis.innerHTML = gold;
      xp.value += 250000;
      enlvl.value = 0;
      enlvl.max = 100;
      let rand = Math.trunc(Math.random() * 2);
      if(rand == 0){
         if(full == 1){
            msg.innerHTML = "Your loot is full!";
            msgcls()
         }
         else{
            loot.innerHTML = "|:OOO:|";
            full = 1;
            loot2.innerHTML = "";
            lootg = 1;
         }    
      }      
   }
   if(enhelth.value <= 0 && enlvl.value == 15) {
      enemyhead.innerHTML = "";
      enemybody.innerHTML = "X_X";
      enemylegs.innerHTML = "";
      enemyfeet.innerHTML = "";
      bosssword.innerHTML = "";
      bosssword2.innerHTML = "";
      gold += 35;
      golddis.innerHTML = gold;
      xp.value += 80;
      enlvl.value = 0;
      let rand = Math.trunc(Math.random() * 10) 
      if(rand == 1){
         if(full == 1){
            msg.innerHTML = "your loot is full";
            msgcls()
         }
         else {
            full = 1;
            msg.innerHTML = "You got ogre's chest armour!";
            msgcls()
            loot.innerHTML = "ooo";
            loot2.innerHTML = "OOO";
            lootoa = 1;
         } 
      }
   }
   if(enhelth.value <= 0 && enlvl.value == 10) {
      enemyhead.innerHTML = "";
      enemybody.innerHTML = "X_X";
      enemylegs.innerHTML = "";
      enemyfeet.innerHTML = "";
      bosssword.innerHTML = "";
      bosssword2.innerHTML = "";
      gold += 20;
      golddis.innerHTML = gold;
      xp.value += 45;
      enlvl.value = 0;
   }
   if(enhelth.value <= 0 && enlvl.value == 45) {
      enemyhead.innerHTML = "";
      enemybody.innerHTML = "X_X";
      enemylegs.innerHTML = "";
      enemyfeet.innerHTML = "";
      bosssword.innerHTML = "";
      bosssword2.innerHTML = "";
      gold += 80;
      golddis.innerHTML = gold;
      xp.value += 75;
      enlvl.value = 0;
      let rand = Math.trunc(Math.random() * 15);
      if(rand == 0){
         if(full == 1){
            msg.innerHTML = "your loot is full!";
            msgcls()
         }
         else {
            msg.innerHTML = "you got golem heart";
            msgcls()
            loot.innerHTML = "-:O>";
            lootgh = 1;
            full = 1;
         }    
      }
   }
   
}

document.querySelector("input[value=keep]").addEventListener("click", function() {
   if(loot.innerHTML == "None") {
      msg.innerHTML = "There is nothing here";
      msgcls();
   }
   else if(tparm == 1 && loottpa == 1) {
      msg.innerHTML = "You already have that!";
      msgcls();
   }
   else if(oarm == 1 && lootoa == 1) {
      msg.innerHTML = "You already have that!";
      msgcls();
   }
   else if(lootoa == 1 && oarm == 0) {
      oarm = 1;
      lootoa = 0;
      full = 0;
      loot.innerHTML = "None";
      loot2.innerHTML = " ";
      msg.innerHTML = "+25 hp";
      msgcls();
      armour.innerHTML = "ooo";
      arm2.innerHTML = "OOO";
      urhelth.max += 25;
   }
   else if(loottpa == 1 && tparm == 0) {
      armour.innerHTML = "|||----|||";
      arm2.innerHTML = "";
      full = 0;
      loot.innerHTML = "None";
      urhelth.max += 10
      loottpa = 0;
      tparm = 1
      msg.innerHTML = "+10hp";
      msgcls();
   }
   else if(lootgh == 1 && itemfull == 0){
      itemfull = 1;
      item.innerHTML = "-:O>";
      full = 0;
      lootgh = 0;
      golemheart = 1;
      loot.innerHTML = "None";
   }
   else if(lootg == 1 && garm == 0){
      full = 0;
      armour.innerHTML = "|:OOO:|";
      arm2.innerHTML = "";
      urhelth.max += 200;
      msg.innerHTML = "+200 hp";
      msgcls();
   }
} )

document.querySelector("input[value=sell").addEventListener("click", function () {
   if(loot.innerHTML == "None") {
      msg.innerHTML = "you don't have any loot";
      msgcls();
   }
   else if(loottpa == 1) {
      full = 0;
      gold += 5;
      golddis.innerHTML = gold;
      loot.innerHTML = "None";
   }
   else if(lootoa == 1) {
      full = 0;
      gold += 30;
      golddis.innerHTML = gold;
      loot.innerHTML = "None";
      loot2.innerHTML = " ";
   }
   else if(lootgh == 1){
      full = 0;
      gold += 50;
      golddis.innerHTML = gold;
      loot.innerHTML = "None";
   }
   else if(lootg == 1){
      full = 0;
      gold += 1200;
      golddis.innerHTML = gold;
      loot.innerHTML = "None";
   }
} )

document.querySelector("input[value=Terrorpod]").addEventListener("click", function () {
   if(enhelth.value == 0) {
      enlvl.value = 1;
      enhelth.value += 100;
      enhelth.max = 100
      enemyhead.innerHTML = "|| o ||o ||";
      enemybody.innerHTML = "||||----||||";
      enemylegs.innerHTML = "_||.....||_";
      endmg = 5;
   }
   else {
      msg.innerHTML = "Defeat previous enemy first!";
      msgcls();
   }
} )
document.querySelector("input[value=Mini_golem]").addEventListener("click", function () {
   if(enhelth.value == 0 && lvl >= 80) {
      enlvl.value = 45;
      enhelth.value += 505;
      enhelth.max = 505;
      enemyhead.innerHTML = "....|o|o|";
      enemybody.innerHTML = "O||+++||O";
      enemylegs.innerHTML = ".._0...0_";
      endmg = 125;
   }
   else if(lvl < 80) {
      msg.innerHTML = "You need lvl 80 to fight this enemy!";
      msgcls();
   }
   else if(enhelth.value > 0){
      msg.innerHTML = "Defeat the prevoius enemy first";
      msgcls();
   }
} )
document.querySelector("input[value=Skeleton_Mage]").addEventListener("click", function () {
   if(enhelth.value == 0) {
      enlvl.value = 10;
      enhelth.value += 210;
      enhelth.max = 210;
      bosssword.innerHTML = ".AAA"
      enemyhead.innerHTML = "(X_X)";
      enemybody.innerHTML = ".{}{}";
      enemylegs.innerHTML = "._|..|_";
      endmg = 20;
   }
   else {
      msg.innerHTML = "Defeat previous enemy first!";
      msgcls();
   }
} )
document.querySelector("input[value=Terrorstone]").addEventListener("click", function () {
   if(enhelth.value == 0) {
      enlvl.value = 2;
      enhelth.value += 150;
      enhelth.max = 150
      enemyhead.innerHTML = "00o0o00";
      enemybody.innerHTML = "00----00";
      enemylegs.innerHTML = "_0.....0_";
      endmg = 8;
   }
   else {
      msg.innerHTML = "Defeat previous enemy first!";
      msgcls();
   }
} )
document.querySelector("input[value=Ogre]").addEventListener("click", function () {
   if(enhelth.value == 0 && lvl >= 40) {
      enlvl.value = 15;
      enhelth.value += 300;
      enhelth.max = 300;
      bosssword.innerHTML = "..|o|o|.."
      enemyhead.innerHTML = "..ooo...";
      enemybody.innerHTML = "..OOO";
      enemylegs.innerHTML = "_[]..[]_";
      endmg = 60;
   }
   else if(lvl < 80) {
      msg.innerHTML = "You need lvl 40 to fight this enemy!";
      msgcls();
   }
   else if(enhelth.value > 0){
      msg.innerHTML = "Defeat the prevoius enemy first";
      msgcls();
   }
} )
document.querySelector("input[value=DemonLord]").addEventListener("click", function () {
   if(enhelth.value == 0 && lvl >= 120) {
      enlvl.value = 100;
      enhelth.value += 3000;
      enhelth.max = 3000;
      bosssword2.innerHTML = ""
      bosssword.innerHTML = ""
      enemyhead.innerHTML = " ....|o{}o|";
      enemybody.innerHTML = "| .{|{O}|}.";
      enemylegs.innerHTML = "O{|{O}|}";
      enemyfeet.innerHTML = ".._{}..{}_";
      endmg = 300;
   }
   else if(lvl < 120) {
      msg.innerHTML = "You need lvl 120 to fight this enemy!";
      msgcls();
   }
   else if(enhelth.value > 0){
      msg.innerHTML = "Defeat the prevoius enemy first";
      msgcls();
   }
} )
document.querySelector("input[value=DemonKing]").addEventListener("click", function () {
   if(enhelth.value == 0 && lvl >= 250) {
      enlvl.max = 300;
      enlvl.value = 300;
      enhelth.value += 8000;
      enhelth.max = 8000;
      bosssword2.innerHTML = "| "
      bosssword.innerHTML = "| "
      enemyhead.innerHTML = "= .|o{}o|";
      enemybody.innerHTML = ".| .{{{}}}.";
      enemylegs.innerHTML = "O {{{}}}";
      enemyfeet.innerHTML = "..._{}..{}_";
      endmg = 1100;
   }
   else if(lvl < 250) {
      msg.innerHTML = "You need lvl 250 to fight this enemy!";
      msgcls();
   }
   else if(enhelth.value > 0){
      msg.innerHTML = "Defeat the prevoius enemy first";
      msgcls();
   }
} )
document.querySelector("input[value=use]").addEventListener("click", function () {
   if(mhp == 1 && urhelth.value < urhelth.max) {
      urhelth.value = urhelth.max;
      item.innerHTML = "None"
      itemfull = 0;
      mhp = 0;
   }
   if(healthp == 1 && urhelth.value < urhelth.max) {
      itemfull = 0;;
      healthp = 0;
      urhelth.value += urhelth.max * 0.2;
      item.innerHTML = "None"
   }
   if(golemheart == 1 && enlvl.value == 45){
      item.innerHTML = "None";
      itemfull = 0;
      golemheart = 0;
      enlvl.max = 200;
      enlvl.value = 200;
      enhelth.value += 5500;
      enhelth.max = 5500;
      bosssword2.innerHTML = "......|o|o|";
      bosssword.innerHTML = " {}|:OOO:|{}";
      enemyhead.innerHTML = "{}|:OoO:|{}";
      enemybody.innerHTML = "{}|:OOO:|{}";
      enemylegs.innerHTML = ".O..[]...[]..O";
      enemyfeet.innerHTML = "..._{}..{}_";
      endmg = 1250;
   }
} )
document.querySelector("input[value=show_stats]").addEventListener("click", function () {
   alert("dmg: " + dmg + ", max hp: " + urhelth.max + ", current xp: " + xp.value + ", needed xp: " + xp.max);
} )
document.querySelector("input[value=Enemy_info]").addEventListener("click", function () {
   alert("Enemy's Max hp: " + enhelth.max + ", Enemy's dmg: " + endmg);
} )
//shop
document.querySelector("input[value=Health_Potion]").addEventListener("click", function () {
   if(itemfull == 1) {
         msg.innerHTML = "use the previous item first!";
         msgcls();
      }
   else if(gold < 5) {
      msg.innerHTML = "Not enough gold!";
      }
   else if(enlvl.value >= 1) {
      msg.innerHTML = "Defeat your enemy first!";
      msgcls();
      }
   else if(gold >= 5 && itemfull == 0 && enlvl.value <= 0){
      item.innerHTML = "Health Potion";
      healthp = 1;
      gold -= 5;
      golddis.innerHTML = gold;
      }
   } )
   document.querySelector("input[value=Mega_Health_Potion]").addEventListener("click", function () {
      if(itemfull == 1) {
            msg.innerHTML = "use the previous item first!";
            msgcls();
         }
      else if(gold < 50) {
         msg.innerHTML = "Not enough gold!";
         msgcls();
         }
      else if(enlvl.value >= 1) {
         msg.innerHTML = "Defeat your enemy first!";
         msgcls();
         }
      else if(gold >= 50 && itemfull == 0 && enlvl.value <= 0){
         item.innerHTML = "Mega Health potion";
         mhp = 1;
         gold -= 50;
         golddis.innerHTML = gold;
         }
      } )
   document.querySelector("input[value=Sword]").addEventListener("click", function () {
   if(gold < swordprice) {
      msg.innerHTML = "Not enough gold!";
      msgcls();
      }
   else if(enlvl.value >= 1) {
      msg.innerHTML = "Defeat your enemy first!";
      msgcls();
      }
   else if(gold >= swordprice && cool == 1){
      gold -= swordprice;
      golddis.innerHTML = gold;
      cool = 2;
      sword.innerHTML = "Chill";
      document.querySelector("span[id=visualis]").innerHTML = "Maxed Out";
      weapon.innerHTML = "<=e=e=e=|[===B)";
      }
   else if(gold >= swordprice && steels == 1){
      gold -= swordprice;
      golddis.innerHTML = gold;
      steels = 2;
      cool = 1;
      swordprice = 10000;
      sword.innerHTML = swordprice;
      document.querySelector("span[id=visualis]").innerHTML = "Sword skin <=e=e=e=|[===B) +1 coolness";
      weapon.innerHTML = "<>---)======>";
      dmg += 35;
      }
   else if(gold >= swordprice && renis == 1){
      gold -= swordprice;
      golddis.innerHTML = gold;
      renis = 2;
      steels = 1;
      swordprice += Math.trunc(swordprice * 1.4);
      sword.innerHTML = swordprice;
      document.querySelector("span[id=visualis]").innerHTML = "Steel sword <>---)======> +35 damage";
      weapon.innerHTML = "<[]=={}=+==+=>";
      dmg += 25;
      }
   else if(gold >= swordprice && iron_sword == 0){
      gold -= swordprice;
      golddis.innerHTML = gold;
      iron_sword = 1;
      renis = 1;
      swordprice += Math.trunc(swordprice * 1.4);
      sword.innerHTML = swordprice;
      document.querySelector("span[id=visualis]").innerHTML = "reinforced iron sword <[]=={}=+==+=> +25 damage";
      weapon.innerHTML = "[]==])====>";
      dmg += 15;
      }

      
   })
   document.querySelector("input[value=damage_potion]").addEventListener("click", function () {
      if(gold < price) {
        msg.innerHTML = "Not enough gold!";
        }
      if(enlvl.value >= 1) {
         msg.innerHTML = "Defeat your enemy first!";
         msgcls();
        }
      if(dmg > 4000) {
         msg.innerHTML = "You can't use damage potion if you deal 4000 damage!";
         msgcls();
      }
      if(gold >= price && dmg <= 4000){
         gold -= price;
         price += Math.trunc(price * 0.2);
         dmgpot.innerHTML = price;
         golddis.innerHTML = gold;
         dmg += Math.trunc(dmg * 0.3);
         msg.innerHTML = "+ 3% damage";
         msgcls();
      }
      
   })
   document.querySelector("input[value=Higher_health_potion]").addEventListener("click", function () {
      if(gold < hprice) {
         msg.innerHTML = "Not enough gold!";
         msgcls();
      }
      if(enlvl.value >= 1) {
         msg.innerHTML = "Defeat your enemy first!";
         msgcls();
      }
      if(urhelth.max > 2000) {
         msg.innerHTML = "You can't use this potion if you have 2000 hp or above!";
         msgcls();
      }
      if(gold >= hprice && urhelth.max <= 2000){
         gold -= hprice;
         hprice += Math.trunc(hprice * 0.2);
         hppot.innerHTML = hprice;
         golddis.innerHTML = gold;
         urhelth.max += Math.trunc(urhelth.max * 0.1);
         msg.innerHTML = "+ 3% health";
         msgcls();
      }
   } )
   //shop end
document.querySelector("input[value=gamble]").addEventListener("click", function () {
   let gamb = Number(prompt("How much gold you want to bid?", ""))
   if(gamb > gold) {
      window.alert("You don't have enough gold! Your gold is: " + gold);
      gamn = 0;
   }
   if(gamb == -69420) {
      let code = prompt("Type", "");
      if(code == "givemegeldman") {
         alert("Code activated cheater");
         gold = 100000000000000000000000000000000000000000000000000000;
         golddis.innerHTML = "big gold";
      }
   }
   if(gamb == 0) {
      alert("you can't bid air!");
   }
   if(gamb <= gold && gamb != 0 && gamb != -69420) {
      let random = Math.trunc(Math.random() * 3);
      let gamble = Number(prompt("Write a number between 0 to 2", ""));
      if(gamble == random) {
         gold += gamb;
         golddis.innerHTML = gold;
         alert("You Won: " + gamb + "!");
      }
      if(gamble != random) {
         gold -= gamb;
         golddis.innerHTML = gold;
         alert("You lost: " + gamb + "!");
      }
   }
} )
document.querySelector("input[value=Escape]").addEventListener("click", function () {
   if(enlvl.value <= 0) {
      msg.innerHTML = "You can't escape from air!";
      msgcls();
   }
   else {
   let a = confirm("Are you sure you want to run away?");
      if(a == true) {
         endmg = 0;
         enlvl.value = 0;
         enemyfeet.innerHTML = "";
         enemybody.innerHTML = "";
         enemyhead.innerHTML = "";
         enemylegs.innerHTML = "";
         bosssword.innerHTML = "";
         bosssword2.innerHTML = "";
         enhelth.value = 0;
         enlvl.max = 100;
         gold = Math.trunc(gold - gold * 0.05);
         golddis.innerHTML = gold;
         urhelth.value = Math.trunc(urhelth.value - urhelth.max * 0.05);
         a = false;
      }
   }
} )   

document.querySelector("input[name=favcolor]").addEventListener("change", function () {
            let color = document.querySelector("input[name=favcolor]").value;
            document.querySelector("body").style.background = color;
            
            
});
document.querySelector("input[value=Show_hp]").addEventListener("click", function () {
            alert(`Your health: ${urhelth.value} enemy's health: ${enhelth.value}`);
});

document.querySelector("input[value=Save]").addEventListener("click", function () {
   localStorage.dmg = dmg;
   localStorage.gold = gold;
   localStorage.expval = exp.value;
   localStorage.expmax = exp.max;
   localStorage.swordprice = swordprice;
   localStorage.hppot = hppot.innerHTML;
   localStorage.hprice = hprice;
   localStorage.price = price;
   localStorage.dmgpot = dmgpot.innerHTML;
   localStorage.golddis = golddis.innerHTML;
   localStorage.weapon = weapon.innerHTML;
   localStorage.armour = armour.innerHTML;
   localStorage.arm2 = arm2.innerHTML;
   localStorage.special = special.innerHTML;
   localStorage.urhelth = urhelth.value;
   localStorage.urhelthmax = urhelth.max;
   localStorage.iron_sword = iron_sword;
   localStorage.oarm = oarm;
   localStorage.tparm = tparm;
   localStorage.plrlvl = plrlvl.innerHTML;
   localStorage.lvl = lvl;
   localStorage.realfinalboss = realfinalboss;
   localStorage.finalboss = finalboss;
   localStorage.steels = steels;
   localStorage.cool = cool;
   localStorage.renis = renis;
   localStorage.mhp = mhp;
   localStorage.healthp = healthp;
   localStorage.golemheart = golemheart;
   localStorage.lootgh = lootgh;
   localStorage.lootoa = lootoa;
   localStorage.loottpa = loottpa;
   localStorage.item = item.innerHTML;
   localStorage.itemfull = itemfull;
   localStorage.lootg = lootg;
   localStorage.garm = garm;
   alert("saved");
});

document.querySelector("input[value=Load]").addEventListener("click", function () {
   dmg = localStorage.dmg;
   garm = localStorage.garm;
   lootg = localStorage.lootg;
   mhp = localStorage.mhp;
   healthp = localStorage.healthp;
   golemheart = localStorage.golemheart;
   lootgh = localStorage.lootgh;
   lootoa = localStorage.lootoa;
   loottpa = localStorage.loottpa;
   itemfull = localStorage.itemfull;
   item.innerHTML = localStorage.item;
   gold = localStorage.gold;
   exp.value = localStorage.expval;
   exp.max = localStorage.expmax;
   swordprice = localStorage.swordprice;
   hppot.innerHTML = localStorage.hppot;
   hprice = localStorage.hprice;
   price = localStorage.price;
   dmgpot.innerHTML = localStorage.dmgpot;
   golddis.innerHTML = localStorage.golddis;
   weapon.innerHTML = localStorage.weapon;
   armour.innerHTML = localStorage.armour;
   arm2.innerHTML = localStorage.arm2;
   special.innerHTML = localStorage.special;
   urhelth.value = localStorage.urhelth;
   urhelth.max = localStorage.urhelthmax;
   iron_sword = localStorage.iron_sword;
   oarm = localStorage.oarm;
   tparm = localStorage.tparm;
   plrlvl.innerHTML = localStorage.plrlvl;
   lvl = localStorage.lvl;
   realfinalboss = localStorage.realfinalboss;
   finalboss = localStorage.finalboss;
   steels = localStorage.steels;
   cool = localStorage.cool;
   renis = localStorage.renis;
   gold = parseInt(gold);
   dmg = parseInt(dmg);
   swordprice = parseInt(swordprice);
   hprice = parseInt(hprice);
   price = parseInt(price);
   iron_sword = parseInt(iron_sword);
   oarm = parseInt(oarm);
   tparm = parseInt(tparm);
   lvl = parseInt(lvl);
   realfinalboss = parseInt(realfinalboss);
   finalboss = parseInt(finalboss);
   steels = parseInt(steels);
   cool = parseInt(cool);
   renis = parseInt(renis);
   itemfull = parseInt(itemfull);
   golemheart = parseInt(golemheart);
   mhp = parseInt(mhp);
   healthp = parseInt(healthp);
   lootgh = parseInt(lootgh);
   loottpa = parseInt(loottpa);
   lootoa = parseInt(lootoa);
   lootg = parseInt(lootg);
   garm = parseInt(garm);
   alert("loaded");
});

document.querySelector("input[value=clear]").addEventListener("click", _=> {
   localStorage.clear();
   alert("cleared");
})


setInterval(_=> {
   if(lvl >= 500) {
      plrlvl.innerHTML = "500 Max Level";
   }
   else {
      if(xp.value == xp.max) {
         xp.value -= xp.max;
         xp.max += 2;
         urhelth.max += 3;
         urhelth.value += Math.trunc(urhelth.max * 0.2);
         dmg += 3;
         lvl += 1;
         plrlvl.innerHTML = lvl;
      }
   }
}, 100);

setInterval(_=> {
   if(urhelth.value <= 0 && dead == 0){
      dead = 1;    
      document.querySelectorAll(".die")[0].style.fontSize = "500%";
      document.querySelectorAll(".die")[0].classList.add("dead");
      document.querySelectorAll(".joemama")[0].innerHTML = `Dmg: ${dmg}; max hp: ${urhelth.max}; gold: ${gold}; weapon: ${weapon.innerHTML}; armour: ${armour.innerHTML}; special: ${special.innerHTML}`;
      document.querySelectorAll(".joemama")[0].classList.add("op");
      document.querySelectorAll("body")[0].style.background = "black";
      document.querySelectorAll("main")[0].remove();
   }
}, 100);
