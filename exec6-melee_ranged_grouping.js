function meleeRangedGrouping (str) {
    var potongKoma = str.split(',');   
    var hero = [];
  
    for(var i = 0; i < potongKoma.length; i++) {
      hero.push(potongKoma[i].split('-'));
    }

    
    var hasil = [[],[]]
  
    for (var j = 0; j < hero.length; j++) {
      if(hero[j][1] === 'Ranged') {
        hasil[0].push(hero[j][0])
      } 
      else if (hero[j][1] === 'Melee') {
        hasil[1].push(hero[j][0])
      }
      else {
          return []
      }
    }
    
    return hasil;
  }

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []