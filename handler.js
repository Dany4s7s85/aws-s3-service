'use strict';
const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
  region:'us-west-2',
  accessKeyId: "AKIAVIN5FK2BMABTSXNT",
  secretAccessKey: "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"
});


module.exports.hello = async (event) => {

  fs.readFile('myImage.jpg', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const params = {Bucket: "shipcash", Key: "myImage.jpg", Body: data };

    s3.upload(params, function(err, data) {
      if (err) {
          console.log(err);
      }else{
        console.log(`File uploaded successfully ${data}`);
      }
      
    });
  });


  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
