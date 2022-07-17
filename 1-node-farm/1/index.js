const fs = require('fs')
//blocking
// const textIn = fs.readFileSync('./input.txt', 'utf-8');

// console.log(textIn);

// const textOut = `THis is what we know about the avocado; ${textIn} \n created on ${Date.now()}`;

// fs.writeFileSync('./output.txt', textOut);

// console.log('file written');


//non-blocking


fs.readFile('./start.txt', 'utf-8', (err, data1) => {
  if(err) return console.log('ERROR 💣');
  fs.readFile(`./${data1}.txt`, 'utf-8', (err, data2) => {
    console.log(data2);
    fs.readFile(`./append.txt`, 'utf-8', (err, data3) => {
      console.log(data3);
      fs.writeFile('./final.txt', `${data2} \n${data3}`, 'utf-8', err => {
        console.log('Your file has been written');
      });
    });
  });
});