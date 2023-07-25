import inquirer from 'inquirer';
import qr from "qr-image"
import fs from "fs"
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message:"Type in Url",
        name:"URL",
    },
  ])
  .then((answers) => {
    const url=answers.URL;
    fs.writeFile("new.txt",url,(err)=>{
        if(err)
        return err;
        else
        {
            console.log("File stored .......");
        }
        });
   var qr_svg = qr.image(url);
   qr_svg.pipe(fs.createWriteStream('qrcode.png'));
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });