const taco = {id:1, name:'chicken', price:20, about:'Yummy'}
const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}
const taco2 = {id:3, name:'fish', price:30, about:'So good'}

const tacos = [taco, taco1, taco2]


// write a function that takes a tacoOBJ and an id
// and returns a new object with name changed to "changed"
const updateTacoName = (name, id)=>{
  let newArray = tacos.map(taco=>{
    if(taco.id !== id){
      return ''
    }
    return {...taco, name:name};
  });
  return newArray
};
console.log(updateTacoName("Changed", 1));



// write a function that takes an tacoOBJ and return some
// formatted html (will be a string technically)
const tacoNameAbout = (taco)=>{
  return (`The ${taco.name} taco is ${taco.about}`)
  };

console.log(tacoNameAbout(taco1));

// write a function that takes an tacoOBJ and return formatted price with
// .00 
const tacoPriceFormat = (taco) => {
  let tacoPrice = taco.price
  const newTacoPrice = tacoPrice.toFixed(2)
  return {...taco, price: newTacoPrice};
};
console.log(tacoPriceFormat(taco1));

// create a new array where all of the prices is formatted with .00
const tacoPricesFormatted = (tacos) => {
  const newTacoPrices = tacos.map(taco=>{
    let tacoPrice = taco.price
    const newTacoPrice = tacoPrice.toFixed(2)
    return {...taco, price: newTacoPrice};   
  });
return newTacoPrices;
};
console.log(tacoPricesFormatted(tacos));


// write a function that takes an array and logs each item in the array
// hint forEach
const printTacoInfo = (tacos) => {
  let tacoInfo = tacos.forEach((taco) => {
    return console.log(`Taco ID: ${taco.id} \nTaco: ${taco.name} \nPrice: ${taco.price} \nAbout: ${taco.about}` )
  });
  return tacoInfo;
};

printTacoInfo(tacos);

// use the find method to return the object with id:1
const tacoById = (tacos, id) => {
  return tacos.find((taco) => taco.id === id);
};
console.log(tacoById(tacos, 1));

// return a new array with all prices greater than 19
const expensiveTacoPrices = (tacos) => {
  pricesArray = [];
  tacos.forEach((taco)=>{
    if(taco.price > 19) {
      pricesArray.push(taco.price);
    };
    
  });
  return pricesArray;
};
console.log(expensiveTacoPrices(tacos));

// return a new array with an 'about' key where it is a combo of
// name price and about

// const comboTacoInfo = (tacos) => {
//   newTacoArray = [];
//   tacos.forEach((taco)=> {
//     newTacoArray.push([taco.name, taco.price, taco.about]);  
//   });
//   return newTacoArray;
// };

// console.log(comboTacoInfo(tacos));

// create new taco array
// create new about that is an array
// map each taco to replace about with new about

const comboTacoInfo = (tacos) => {
    return tacos.map((taco)=> {
      return {...taco, about: `${taco.name}, ${taco.price}, ${taco.about}`};  
    });
  };
  console.log('NEWARRAY');
 console.log(comboTacoInfo(tacos));

// const newAboutTacos = (tacos) => {
//   tacos.forEach((taco) => {
//   let tacoClone = [...taco, about: newAbout]
//   })
  
//   let newAbout = 
// }


///CRUD

// don't change tacos array or change objects


// READ (array of obj to array of html) 
const tacoMenu = (tacos)=>{
  tacosList = []
  tacos.forEach((taco) => {
    tacosList.push([`Taco: ${taco.name}`, `Price: ${taco.price}`, `About: ${taco.about}`, `ID: ${taco.id}`]);
  });
return tacosList;
};

console.log(tacoMenu(tacos));

// Update (update a taco) 
const updateTaco = (newName, id)=>{
  let newTacoArray = tacos.map(taco=>{
    if(taco.id === id){
      return {...taco, name:newName};
    }
    if(taco.id !== id){
      return taco
    };
  });
  return newTacoArray;
};
const updateTacos = updateTaco("Baja Blast", 1);
console.log("New List of Tacos:", updateTacos);

// Remove (delete a taco) 
const deleteTaco = (tacos, id) => {
  newTacosList = []
  tacos.forEach((taco) => {
    if(taco.id !== id) {
      newTacosList.push(taco)
    }
  });
  return newTacosList;
};

console.log(deleteTaco(tacos, 1));

// Create (add a taco) 
const addTaco = (taco) => {
  return [...tacos, taco]
};
let addedTacoList = addTaco({
  id: 4,
  name: 'black bean',
  price:10,
  about: 'Veggie delight'
});

console.log(addedTacoList);


// bonus use reduce to return the sum of prices in tacos array

const tacoSum = (tacos) => {
  tacos.map(taco)=> {
    tacoSum = taco.price +  
  })
}

// bonus do in rails

// bonus create you own