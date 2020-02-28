let colors = ['blue', 'green', 'yellow', 'red', 'purple'];

//adds an element to the end of the array.
colors.push('black');
console.log(colors);

//removes the third element
colors.splice(2,1);
console.log(colors);

//turns the separate strings into one full string with 
//a comma to separate them. 
const colorsList = colors.join(", ");
console.log(colorsList);
