import * as actionTypes from "../constants/infoConstants";

export const getInfosReducer = (state = { infos: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_INFOS_REQUEST:
      return {
        loading: true,
        infos: [],
      };
    case actionTypes.GET_INFOS_SUCCESS:
      return {
        infos: action.payload,
        loading: false,
      };
    case actionTypes.GET_INFOS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getInfoDetailsReducer = (state = { info: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_INFO_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_INFO_DETAILS_SUCCESS:
      return {
        loading: false,
        info: action.payload,
      };
    case actionTypes.GET_INFO_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_INFO_DETAILS_RESET:
      return {
        info: {},
      };
    default:
      return state;
  }
};
