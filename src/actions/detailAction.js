import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({ type: "LOADING_DETAIL" });
  const detailData = await axios.get(gameDetailsURL(id));
  const screenShot = await axios.get(gameScreenshotURL(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      detail: detailData.data,
      screen: screenShot.data,
    },
  });
};
