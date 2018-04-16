var fs = require('fs');
var colors = require('colors');

fs.readdir('./katalog/', 'utf-8', function(err, files){
  var newFiles = files.join();
  console.log('Odczytuje pliki: '.yellow)
  console.log(newFiles);
  fs.writeFile('./text.txt', newFiles, function(err){
    if (err) throw err; 
    console.log('Zapisuje pliki do text.txt'.yellow);
    fs.readFile('./text.txt', 'utf-8', function(err, data) {
      console.log('Zawartość mojego nowego pliku: '.yellow);
      console.log(data);
    });
  });
});
