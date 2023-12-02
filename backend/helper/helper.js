const multer = require('multer')
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        const productId = req.body.upload_id;
        const dir = `D:/uploads/${productId}`
        fs.exists(dir, exist => {
            if (!exist) {
                return fs.mkdir(dir, error => callBack(error, dir))
            }
            return callBack(null, dir)
        })
    },
    filename: (req, file, callBack) => {
        callBack(null, file.originalname)
    }
})

const upload = multer({ storage: storage })
module.exports = upload;