import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'


cloudinary.config({ 
  cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME', 
  api_key: 'process.env.my_key', 
  api_secret: 'process.env.my_secret',
 
});

const  uploadOnClodinary = async (localFilePath) => {

    try{

        if(!localFilePath) {
            console.log("Could not find the path");
            return null
        }
        // upload the file on cloudinary : 
    const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type:'auto'
        })
        // file has been uploded successfully : 
        console.log("File is uploded on cloudinary ",response.url)

        return response


    }catch(error){

        fs.unlinkSync(localFilePath) // remove the locally saves temporary file as the upload operation got failed
        return null;

    }
}

export {uploadOnClodinary}



