// NOTE: You can not use reduce methods to solve this exercise

function countAllPeople(arr) {
  arr = got.houses.map((ele) => ele.people.map((ele) => ele.name));
  return arr;
}
countAllPeople(got);

function peopleByHouses(arr) {
  let final = {}
  got.houses.forEach(house => {
    final[house.name] = house.people.length;
  })  
  return final;
}


function everyone(arr) {
  arr = got.houses.map((house)=> house.people.map((name) => name.name)).flat(Infinity);
  return arr;
}

function nameWithS() {
  let final = []
  let arr = []
   got.houses.filter(house => {
     arr.push(house)
   })
   let filterSatrtWithS = arr.filter(hName => hName.name.includes("s"))
   filterSatrtWithS.filter( house => {
        house.people.filter(people => {
          final.push(people.name)
        })
   } );
  return final;
  
};


function nameWithA() {
  let final = []
  let arr = []
   got.houses.filter(house => {
     arr.push(house)
   })
   let filterSatrtWithS = arr.filter(hName => hName.name.includes("a"))
   filterSatrtWithS.map( house => {
        house.people.map(people => {
          final.push(people.name)
        })
   } )
  return final;
  }


function surnameWithS() {
  function surnameWithS() {
    let final = []
    let arr = []
     got.houses.filter(house => {
       arr.push(house)
     })
     let filterSatrtWithS = arr.filter(hName => hName.name.startsWith("S"))
     filterSatrtWithS.map( house => {
          house.people.map(people => {
            final.push(people.name)
          })
     } )
    return final;
  }
}

function surnameWithA() {
  function surnameWithA() {
    // your code goes here
    let final = []
  let arr = []
   got.houses.filter(house => {
     arr.push(house)
   })
   let filterSatrtWithS = arr.filter(hName => hName.name.startsWith("A"))
   filterSatrtWithS.map( house => {
        house.people.map(people => {
          final.push(people.name)
        })
   } )
  return final;
  }
}

function peopleNameOfAllHouses() {
  // your code goes here
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
