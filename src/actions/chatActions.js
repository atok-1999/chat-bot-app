import {
  GET_DATASET,
  ADD_TOPIC_TO_CHATS,
  SET_CHOICES,
  ADD_CHOICE_TO_CHATS,
  SET_CURRENT_ID,
  GET_WEATHER_DATA,
} from './types';
import { db } from '../firebase/index';

// 質問・回答データのセットをFirestoreから持ってくる
export const getDataset = () => async (dispatch) => {
  const snapshot = await db.collection('dataset').get();
  const dataset = await snapshot.docs.map((doc) => doc.data());

  dispatch({
    type: GET_DATASET,
    payload: dataset,
  });

  dispatch({
    type: ADD_TOPIC_TO_CHATS,
  });

  dispatch({
    type: SET_CHOICES,
  });
};

// 現在のidに応じたトピック(datasetではchat)をchatsに追加する
export const addTopicToChats = () => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: ADD_TOPIC_TO_CHATS,
    });
  }, 1000);
};

// 現在のidに応じた選択肢(datasetではchoices)をchoicesに追加する
export const setChoices = () => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: SET_CHOICES,
    });
  }, 1000);
};

// クリックされた選択肢(choicesのどれか)をchatsに追加する
export const addChoiceToChats = (content) => (dispatch) => {
  dispatch({
    type: ADD_CHOICE_TO_CHATS,
    payload: content,
  });
};

// クリックされた選択肢のnextIdをcurrentIdにセットする
// & nextIdにURLが設置されていたらそのページを新規タブで表示する
export const setCurrentId = (nextId) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_ID,
    payload: nextId,
  });
};

// 天気予報の情報を外部APIから持ってきてchatsにそれを追加する
export const getWeatherData = (content) => async (dispatch) => {
  let location;

  if (content === '東京') {
    location = 'Tokyo';
  } else if (content === '大阪') {
    location = 'Osaka';
  } else if (content === 'バンクーバー') {
    location = 'Vancouver';
  } else if (content === 'コペンハーゲン') {
    location = 'Copenhagen';
  }

  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.REACT_APP_API_KEY}`
  );
  let data = await res.json();

  let temp = data.list[8].main.temp - 273.15;
  let humidity = data.list[8].main.humidity;
  let weather_description = data.list[8].weather[0].description;
  let weather_emoji;

  if (weather_description === 'clear sky') {
    weather_emoji = `☀️`;
    weather_description = '晴天';
  } else if (weather_description === 'few clouds') {
    weather_emoji = `🌤`;
    weather_description = '晴れ時々曇り';
  } else if (weather_description === 'scattered clouds') {
    weather_emoji = `☁️`;
    weather_description = '曇り';
  } else if (weather_description === 'broken clouds') {
    weather_emoji = `⛅️`;
    weather_description = '曇り時々晴れ';
  } else if (weather_description === 'shower rain') {
    weather_emoji = `🌂`;
    weather_description = '小雨';
  } else if (weather_description === 'rain') {
    weather_emoji = '☔️';
    weather_description = '雨';
  } else if (weather_description === 'thunderstorm') {
    weather_emoji = '⚡️';
    weather_description = '嵐';
  } else if (weather_description === 'snow') {
    weather_emoji = '❄️';
    weather_description = '雪';
  } else if (weather_description === 'mist') {
    weather_emoji = '🌫';
    weather_description = '霧';
  }

  let weatherData = `
  明日の天気は 
  気温: ${Math.round(temp)}度
  湿度: ${humidity}%
  天気: ${weather_description} ${weather_emoji}
  となっております！良い一日をお過ごしください！
  `;

  setTimeout(() => {
    dispatch({
      type: GET_WEATHER_DATA,
      payload: weatherData,
    });
  }, 1200);
};
