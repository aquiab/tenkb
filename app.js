const express = require('express')
const aws = require('aws-sdk')
const uniqueFilename = require('unique-filename')

const app = express()
app.set('views', './views')
app.use(express.static('./public'))
app.use(express.json({extended: true}))
app.engine('html', require('ejs').renderFile)
app.listen(process.env.PORT || 3000)

const S3_BUCKET = process.env.S3_BUCKET
aws.config.region = 'sa-east-1'

app.get('/', (req, res) => res.render('index.html'))

app.get('/get-urls', function (req, res) {
  const s3 = new aws.S3({signatureVersion: 'v4'})
  const bucketParams = {
    Bucket: S3_BUCKET
  }
  s3.listObjectsV2(bucketParams, (err, data) => {
    if (err){
      console.log(err, err.stack)
    } else {
      /* get urls */
      let urlArray = []
      for(let i = 0; i < data.Contents.length; i++){
        urlArray.push(data.Contents[i].Key)
      }
      res.send(urlArray)
    }
  })
})

app.get('/sign-s3', (req, res) => {
  const s3 = new aws.S3()
  const fileName = uniqueFilename('')
  const fileType = req.query['file-type']
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  }
  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err)
      return res.end()
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    }
    res.write(JSON.stringify(returnData))
    res.end()
  })
})