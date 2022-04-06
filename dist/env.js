"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOT_TOKEN = void 0;
const dotenv = require("dotenv");
// .env 파일의 위치를 직접 지정
dotenv.config({ path: `${__dirname}/../.env` });
exports.BOT_TOKEN = process.env.BOT_TOKEN;
