// write a function to store the attributes of your shoes in an array of objects

const shoeCollection = (brand, size, color, price, collection) => {
  if (!collection) {
    const collection = [];
  }
  collection.push({});
  collection[collection.length - 1]['brand'] = `${brand}`;
  collection[collection.length - 1]['size'] = `${size}`;
  collection[collection.length - 1]['color'] = `${color}`;
  collection[collection.length - 1]['price'] = `${price}`;
  return collection;
}

const myCollection = [{brand:'Addidas', color: ['red', 'yellow'], price: '70', size: '10'}]
console.log(shoeCollection('Nike', 10, {blue: '35%', green: '50%', white: '15%'}, 60, myCollection));