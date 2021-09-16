const readlineSync = require("readline-sync");

// Create a CLI app which would detect fake news. This app will take news as input and then source. If source is Facebook or whatsapp then it will output user saying, "Don't believe things on FB and Whatsapp". Can you extend this to include telegram as well.

const arr1 = [
  {
    news: "",
    source: ""
  }
];

const fakeSourcesAray = ["facebook", "fb", "whatsapp"]

arr1[0].news = readlineSync.question("What Was The News ?\n");
arr1[0].source = readlineSync.question("What Was The Source Of News ?\n");


for (i = 0; i < fakeSourcesAray.length; i++) {

  const newArray = fakeSourcesAray[i];

  const searchSource = arr1[0].source.toLowerCase().search(newArray);


  if (searchSource != -1) { 
    
  
   console.log("You just recieved a fake news from  dont believe news from such platforms");
  }
}



