require("dotenv").config();

import { editFileName, imageFileFilter } from '../shared/file-upload.util';
import { diskStorage } from 'multer';

export const AdPhotosConfig = {
    storage: diskStorage({
        destination: `../${process.env.UPLOADS_DIRRECTORY}/ads`,
        filename: editFileName,
    }),
    fileFilter: imageFileFilter,
}