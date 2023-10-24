const fs = require('fs');
const path = require('path');
const replaceThis = "A"
const replaceWith = "B"
// const preview = false
const folder = path.join(__dirname, "data") //folder name to be provided
try {
  fs.readdir(folder, (err, data)=>{
    for(let i=0; i<data.length; i++){
        const item = data[i];
        let oldFile = path.join(folder, item)
        let newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith))
        // if(!preview){            
        fs.rename(oldFile, newFile, ()=>{
            console.log("Rename Success")
        });
        // }else{
            // if("data/" + item !== newFile) console.log("data/" + item + "will be renamed to" + newFile)
        // }
    }
  })
} catch (err) {
  console.error(err);
}
