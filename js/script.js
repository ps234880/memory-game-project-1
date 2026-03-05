const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("numbers", numbers);

const duplicateNumbers = numbers.concat(numbers);

console.log("duplicate", duplicateNumbers);

// shuffle function from w3schools
for (let i = duplicateNumbers.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let k = duplicateNumbers[i];
  duplicateNumbers[i] = duplicateNumbers[j];
  duplicateNumbers[j] = k;
}
console.log("shuffeled", duplicateNumbers);

const list = document.getElementById("list");
list.innerHTML = duplicateNumbers;

let txt = "";
duplicateNumbers.forEach(myFunction);
document.getElementById("list").innerHTML = txt;

function myFunction(value) {
  txt += value + "<br>";
}

const images = ['assets/image1.jpg', 'assets/image2.jpg', 'assets/image3.jpg'];

const duplicateImages = images.concat(images);

// shuffle function from w3schools
for (let i = duplicateImages.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let k = duplicateImages[i];
  duplicateImages[i] = duplicateImages[j];
  duplicateImages[j] = k;
}

duplicateImages.forEach(function (image) { // for each link l in images
  var img = document.createElement('img'); // create an img element
  img.src = image;                         // set its src to the link l
  img.height = "200";
  img.width = "200";
  document.body.appendChild(img); // append it to the body 
});

console.log("shuffeled", duplicateImages);