const { WebClient } = require('@slack/web-api');
import { BOT_TOKEN } from './env';
import * as schedule from 'node-schedule';
import * as moment from 'moment';

// 봇 접근
const web = new WebClient(BOT_TOKEN);
// 봇이 메세지를 보낼 채널 ID
const conversationId = 'daily';

// 월요일부터 금요일까지 0시에 오늘 날짜 보내는 스케줄러 작성
// const scheduler = schedule.scheduleJob('0 0 ? * MON-FRI *', async () => {
//   const res = await web.chat.postMessage({
//     channel: conversationId,
//     text: moment().format('MM-DD'),
//   });

//   console.log('Message sent: ', res.ts);
// });

// 1분마다 작동하도록 cron 표현식 수정
const scheduler = schedule.scheduleJob('0 */1 * * * *', async () => {
  const res = await web.chat.postMessage({
    channel: conversationId,
    text: moment().format('**MM-DD HH:mm'),
  });

  console.log('Message sent: ', res.ts);
});
