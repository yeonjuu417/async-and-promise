const fs = require("fs"); // 파일시스템 모듈을 불러옵니다. 
//const _ = require('underscore');

const getDataFromFile = function (filePath, callback) {
  // TODO: fs.readFile을 이용해 작성합니다
  fs.readFile(filePath,'utf8',(err, data)=>{
    if(err){
      callback(err,null);
    }else{
      callback(err,data);
    }
  }) 
};
//getDataFromFile('README.md', (err, data) => console.log(data));

module.exports = {
  getDataFromFile
};
