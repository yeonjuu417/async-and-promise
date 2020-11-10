const fs = require("fs");
const { resolve } = require("path");
const { reject } = require("underscore");

const getDataFromFilePromise = filePath => {
  // return new Promise()
  // TODO: Promise 및 fs.readFile을 이용해 작성합니다.
  let options = {
    encoding: 'utf8', // UTF-8이라는 인코딩 방식으로 엽니다
    flag: 'r' // 읽기 위해 엽니다
  }
  return new Promise((resolve,reject) =>{
    fs.readFile(filePath, options,(err, data)=>{
      if(err){
        reject(err);
      }else{
        resolve(data);
      }
  })
  }) 
};

// getDataFromFilePromise('README.md').then(data => console.log(data));

module.exports = {
  getDataFromFilePromise
};
