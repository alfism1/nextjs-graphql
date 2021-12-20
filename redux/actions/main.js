import * as t from "../types";
// import axios from "axios";
// import { request } from "../../util/request";

export const setInfo = (name) => (dispatch) => {
  dispatch({
    type: t.SET_NAME,
    payload: name,
  });
};

export const setColor = (color) => (dispatch) => {
  dispatch({
    type: t.SET_COLOR,
    payload: color,
  });
};
