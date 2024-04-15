import { S3Client } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';
import multer from 'multer';
import multerS3 from 'multer-s3';

const s3 = new S3Client({
    region: process.env.AWS_BUCKET_REGION,
    credentials: {
      secretAccessKey: process.env.Secret_access_key,
      accessKeyId: process.env.Access_key_ID
    }
  });



  const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'amazon-clone-yanis',
      acl: 'public-read',
      metadata: (req, file, cb) => {
        cb(null, { fieldName: file.fieldname });
      },
      key: (req, file, cb) => {
        cb(null, Date.now().toString());
      },
    }),
  });

export default upload;
