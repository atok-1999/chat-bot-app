import {
  GET_DATASET,
  ADD_TOPIC_TO_CHATS,
  SET_CHOICES,
  ADD_CHOICE_TO_CHATS,
  SET_CURRENT_ID,
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
