import axios from 'axios';
import fs from 'fs';
import IFootball from '../interfaces/ifootball';
import { ImagePath } from '../config/sport-monks-config';

class FootballApi implements IFootball {

  async get(url: string) {
    const response = await axios.get(url);
    return response.data;
  }

  async downloadImage(url: string) {

    const index = url.lastIndexOf('/') + 1;

    let path = '';

    if (index !== undefined) {

      const filename = url.substring(index);
      path = ImagePath.imagePath + filename;

      if (path !== undefined) {
        const writer = fs.createWriteStream(path);
        const response = await axios({
          url,
          method: 'GET',
          responseType: 'stream'
        });

        response.data.pipe(writer)

        return new Promise((resolve, reject) => {
          writer.on('finish', resolve);
          writer.on('error', reject);
        });

      }
    }
  }
}

export default FootballApi;
