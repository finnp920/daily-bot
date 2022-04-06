import * as dotenv from 'dotenv';
// .env 파일의 위치를 직접 지정
dotenv.config({ path: `${__dirname}/../.env` });

export const BOT_TOKEN = process.env.BOT_TOKEN;
