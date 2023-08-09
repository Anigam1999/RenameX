const fs = require('fs');
const path = require('path');
const replaceThis = "A"
const replaceWith = "B"
const preview = false
const folder = __dirname
try {
  const data = fs.readdir(folder, (err, data)=>{
    // console.log(data)
    for(let i=0; i<data.length; i++){
        const item = data[i];
        let oldFile = path.join(folder, item)
        let newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith))
        if(!preview){            
            fs.rename(oldFile, newFile, ()=>{
                console.log("Rename Success")
            });
        }else{
            if("data/" + item !== newFile) console.log("data/" + item + "will be renamed to" + newFile)
        }
    }
  })
} catch (err) {
  console.error(err);
}
