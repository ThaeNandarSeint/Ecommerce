import * as actionTypes from "../constants/infoConstants";
import axios from "axios";

export const getInfos = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_INFOS_REQUEST });

    const { data } = await axios.get(`http://127.0.0.1:5000/api/infos/`);

    dispatch({
      type: actionTypes.GET_INFOS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_INFOS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getInfoDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_INFO_DETAILS_REQUEST });

    const { data } = await axios.get(`http://127.0.0.1:5000/api/infos/${id}`);

    dispatch({
      type: actionTypes.GET_INFO_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_INFO_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeInfoDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_INFO_DETAILS_RESET });
};