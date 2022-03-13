import fs from 'fs';
// import fs =require('fs') pakage.json   "type": "module", 을 이용해 ES6 파일시스템 사용 가능
import { resolve } from 'path';

// 서버의 라우트에서 read/write를 결정해서 해주면 된다.
const basePath = resolve(); // 현재 경로가 basePath

const filenames = {
  messages: resolve(basePath, 'src/db/messages.json'),
  users: resolve(basePath, 'src/db/users.json'),
};

export const readDB = target => {
  try {
    return JSON.parse(fs.readFileSync(filenames[target], 'utf-8'));
  } catch (err) {
    console.error(err);
  }
};

export const writeDB = (target, data) => {
  try {
    return fs.writeFileSync(filenames[target], JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};
