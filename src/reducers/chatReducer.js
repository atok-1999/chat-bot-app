import { v4 as uuidv4 } from 'uuid';

import {
  GET_DATASET,
  ADD_TOPIC_TO_CHATS,
  SET_CHOICES,
  ADD_CHOICE_TO_CHATS,
  SET_CURRENT_ID,
  GET_WEATHER_DATA,
} from '../actions/types';

const initialState = {
  choices: [],
  chats: [],
  currentId: 1,
  dataset: {},
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATASET:
      return {
        ...state,
        dataset: action.payload,
        loading: false,
      };

    case ADD_TOPIC_TO_CHATS:
      let currentSet = state.dataset.filter(
        (set) => set.id === state.currentId
      );
      return {
        ...state,
        chats: [
          ...state.chats,
          { content: currentSet[0].chat, type: 'topic', id: uuidv4() },
        ],
      };

    case SET_CHOICES:
      let tempSet = state.dataset.filter((set) => set.id === state.currentId);
      return {
        ...state,
        choices: [...tempSet[0].choices],
      };

    case ADD_CHOICE_TO_CHATS:
      return {
        ...state,
        chats: [
          ...state.chats,
          { content: action.payload, type: 'choice', id: uuidv4() },
        ],
      };

    case SET_CURRENT_ID:
      // nextIdにURLが設置されている場合には新規タブを開いてそのページに行く処理（currentIdはそのまま）
      if (/^https:*/.test(action.payload)) {
        const a = document.createElement('a');
        a.href = action.payload;
        a.target = '_blank';
        a.rel = 'noopener';
        a.click();
        return {
          ...state,
        };
      }
      // 通常(nextIdにURLが設置されていないとき)の処理
      return {
        ...state,
        currentId: action.payload,
      };

    case GET_WEATHER_DATA:
      return {
        ...state,
        chats: [
          ...state.chats,
          { content: action.payload, type: 'topic', id: uuidv4() },
        ],
      };

    default:
      return state;
  }
};
