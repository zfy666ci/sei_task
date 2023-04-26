const axios = require("axios");
const fs = require("fs");

const headers = {
  Host: "edge.blocked.cc",
  "Content-Type": "application/json",
  "User-Agent":
    " Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
};

const task1 = [
  "e2c6dcef-cc3c-4738-a4dd-9bc967823609",
  "1faada33-8ba2-488f-94bf-4ab6388c0de5",
  "7714d1d8-b892-488a-84a2-04c208ec7108",
  "ae5bfe4a-d014-4174-9fd2-a9d2df61f048",
];
const task2 = [
  "63879ac3-f0f0-4647-9968-4deaacdcd10c",
  "36b66b3d-2819-40d7-ba1e-33e9e2c42c96",
  "f6a10f4b-134b-45b5-b718-0176fe2b2f95",
  "7c5c6bbc-4f9c-4daa-ad17-e48d8c4d8007",
  "cda662d6-4e48-4a7a-9cc2-f9d48d1b5ec7",
];

const task3 = [
  "baad5634-3059-4e11-8b6d-b65c602ba61f",
  "3ddb42d1-29d2-4db3-bb6c-fdf2db8f0865",
  "fb9aa953-7bda-4fbd-b9e9-d5d5ee4e4806",
  "8a3a764f-9ea0-4677-a426-18ff32ae5acf",
  "f25aa103-ea59-40a4-8866-406798713a7c",
  "e2c6dcef-cc3c-4738-a4dd-9bc967823609",
];
const task4 = [
  "44189c32-2fba-4d79-b4c6-406406dec18b",
  "32241a9f-53ba-494f-ad58-00b2165489fb",
  "f8b44576-4d49-4d66-a1f3-9d414254bc9a",
  "66cc194f-b5dc-402c-9f8e-d2a719d16154",
  "cde69d45-dd97-4638-85ca-6fd089fdd9d1",
  "baf3cabf-e5bf-4e26-ba93-1a3c92c83766",
  "5ba1d690-eb86-4a69-b049-69ab4e18aa27",
];
const task6 = [
    "ac948d90-5fda-49b0-9978-d871991ed3fb",
    "a860b281-c71e-4366-8109-dc57b1403415",
    "35b23b51-dfc5-4480-bc05-6d9f53e73d43",
    "7c5c6bbc-4f9c-4daa-ad17-e48d8c4d8007",

  ];
async function posttask(task, taskdata, cookies) {
  const headers = {
    Host: "edge.blocked.cc",
    "Content-Type": "application/json",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
    Cookie: "ssession=" + cookies,
  };

  const url = "https://edge.blocked.cc/api/trails/blocks/" + task;

  let result = await axios
    .post(url, taskdata, { headers: headers })
    .catch((err) => {
      console.log("post content：" + err);
    });
  try {
    return result.status;
  } catch (error) {
    console.log(error.message);
    return "";
  }
}

async function login(address) {
  const data = { wallet: "leap", address: address };
  const url = "https://edge.blocked.cc/api/auth/web3";
  let result = await axios
    .post(url, data, { headers: headers })
    .catch((err) => {
      console.log("post content：" + err);
    });
  try {
    console.log(result)
    return result.data.accessToken;
  } catch (error) {
    console.log(error.message);
    return "";
  }
}

function RandomIndex(min, max, i) {
  const _charStr =
    "abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789";
  let index = Math.floor(Math.random() * (max - min + 1) + min),
    numStart = _charStr.length - 10;
  //如果字符串第一位是数字，则递归重新获取
  if (i == 0 && index >= numStart) {
    index = RandomIndex(min, max, i);
  }
  //返回最终索引值
  return index;
}

/**
 * 随机生成字符串
 * @param len 指定生成字符串长度
 */
function getRandomString(len) {
  const _charStr =
    "abacdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ0123456789";

  let min = 0,
    max = _charStr.length - 1,
    _str = "";
  //判断是否指定长度，否则默认长度为15
  len = len || 15;
  //循环生成字符串
  for (var i = 0, index; i < len; i++) {
    index = RandomIndex(min, max, i);
    _str += _charStr[index];
  }
  return _str;
}
function generateRandomNumberString(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += Math.floor(Math.random() * 10);
  }
  return result;
}

async function main() {
  const fsData = fs.readFileSync(__dirname + "/sei.txt");
  const _data = fsData
    .toString()
    .split(/[(\r\n)\r\n]+/)
    .filter((d) => d);
  const accounts = _data.map((data) => {
    const info = data.split("----");
    return { address: info[0], dis: info[1], tw: info[2] };
  });
  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];
    const { address, dis, tw } = account;
    const discordId = dis ? dis : generateRandomNumberString(19);
    console.log(discordId);
    const twname = tw ? tw : getRandomString(10);
    console.log(address);
    access_token = await login(address);

    if (!access_token) {
      console.log(`${address} 登录失败`);
      return;
    }
    console.log(`${address} 登录成功`);
    console.log(`${address} 开始提交任务1`);
    for (let j = 0; j < task1.length; j++) {
      let data = "";
      switch (j) {
        case 0:
          data = { data: { address: address } };
          break;
        case 1:
          data = { data: { address: address } };
          break;
        case 2:
          data = { data: { status: "waiting", values: "@" + twname } };
          break;
        case 3:
          data = {
            data: { discordUrl: "https://discord.com/users/" + discordId },
          };
          break;
      }
      const res = await posttask(task1[j], data, access_token);
      console.log(`${address} 任务1 ${res}`);
    }
    console.log(`${address} 开始提交任务2`);
    for (let j = 0; j < task2.length; j++) {
      let data = "";
      switch (j) {
        case 0:
          data = { data: { address: address } };
          break;
        case 1:
          data = { data: { address: address, token: "sei" } };
          break;
        case 2:
          data = { data: { address: address, token: "usdc" } };
          break;
        case 3:
          data = { data: { status: "waiting", values: "@" + twname } };
          break;
        case 4:
            data = {
                data: { discordUrl: "https://discord.com/users/" + discordId }};
          break;
      }

      const res = await posttask(task2[j], data, access_token);
      console.log(`${address} 任务2 ${res}`);
    }
    console.log(`${address} 开始提交任务3`);
    for (let j = 0; j < task3.length; j++) {
      let data = "";
      switch (j) {
        case 0:
          data = { data: { address: address } };
          break;
        case 1:
          data = { data: { address: address, token: "sei" } };
          break;
        case 2:
          data = { data: { address: address, token: "rum" } };
          break;
        case 3:
          data = { data: { status: "waiting", values: "@" + twname } };
          break;
        case 4:
          data = {
            data: { discordUrl: "https://discord.com/users/" + discordId },
          };
          break;
        case 5:
          data = { data: { address: address } };
          break;
      }

      const res = await posttask(task3[j], data, access_token);
      console.log(`${address} 任务3 ${res}`);
    }
    console.log(`${address} 开始提交任务4`);
    for (let j = 0; j < task4.length; j++) {
      let data = "";
      switch (j) {
        case 0:
          data = { data: { address: address } };
          break;
        case 1:
          data = { data: { address: address, token: "sei" } };
          break;
        case 2:
          data = { data: { address: address, token: "usdc" } };
          break;
        case 3:
          data = { data: { address: address, token: "seirum-lp" } };
          break;
        case 4:
          data = { data: { address: address, token: "seiusdc-lp" } };
          break;
        case 5:
          data = { data: { status: "waiting", values: "@" + twname } };
          break;
        case 6:
          data = {
            data: { discordUrl: "https://discord.com/users/" + discordId },
          };
          break;
        case 5:
          data = { data: { address: address } };
          break;
      }

      const res = await posttask(task4[j], data, access_token);
      console.log(`${address} 任务3 ${res}`);
    }
    console.log(`${address} 开始提交任务6`);
    for (let j = 0; j < task6.length; j++) {
      let data = "";
      switch (j) {
        case 0:
          data = { data: { address: address } };
          break;
        case 1:
          data = { data: { address: address, token: "duel" } };
          break;
       
        case 2:
          data = { data: { status: "waiting", values: "@" + twname } };
          break;
        case 3:
          data = {
            data: { discordUrl: "https://discord.com/users/" + discordId },
          };
          break;
     
      }
 
      const res = await posttask(task6[j], data, access_token);
      console.log(`${address} 任务3 ${res}`);
    }
  }
}

main();
