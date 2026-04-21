const {Imagekit} = require('@imagekit/nodejs');

const ImageKitClient = new Imagekit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
})