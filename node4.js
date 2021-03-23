const fs = require('fs')

fs.readFile('sample.txt','utf8',(err,data) =>{ // even function(err, data) can be used instead of =>\\ // this is a lambda exression..\\
    if(err)
      throw err;
    else
       console.log(data);
})
