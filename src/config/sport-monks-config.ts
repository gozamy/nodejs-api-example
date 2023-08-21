import dotenv from 'dotenv';

dotenv.config();

const monksBaseUrl = process.env.MONKS_BASE_URL || '';
const token = process.env.TOKEN || '';
const imagePath = process.env.IMAGE_PATH || '';

export const MonksConfig = {
  monksBaseUrl: monksBaseUrl,
  token: token
};

export const ImagePath = {
  imagePath: imagePath
}
