
import {
  CLEAR_SEARCH_SUCCESS,
  FIND_USER_BY_ID_SUCCESS,
  FOLLOW_USER_FAILURE,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GOOGLE_LOGIN_FAILURE,
  GOOGLE_LOGIN_REQUEST,
  GOOGLE_LOGIN_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  SEARCH_USER_FAILURE,
  SEARCH_USER_REQUEST,
  SEARCH_USER_SUCCESS,
  UNFOLLOW_USER_FAILURE,
  UNFOLLOW_USER_REQUEST,
  UNFOLLOW_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
} from "./ActionType";

const initialState = {
  user: null,
  loading: false,
  error: null,
  jwt: null,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
    case REGISTER_USER_REQUEST:
    case GET_USER_PROFILE_REQUEST:
    case SEARCH_USER_REQUEST:
    case GOOGLE_LOGIN_REQUEST:
    case FOLLOW_USER_REQUEST:
    case UNFOLLOW_USER_REQUEST:
      return { ...state, loading: true, error: null };

    case LOGIN_USER_SUCCESS:
    case REGISTER_USER_SUCCESS:
    case GOOGLE_LOGIN_SUCCESS:
      return { ...state, loading: false, eror: null, jwt: action.payload };

    case GET_USER_PROFILE_SUCCESS:
      return { ...state, loading: false, error: null, user: action.payload };

    case LOGOUT:
      return initialState;

    case LOGIN_USER_FAILURE:
    case REGISTER_USER_FAILURE:
    case GET_USER_PROFILE_FAILURE:
    case SEARCH_USER_FAILURE:
    case GOOGLE_LOGIN_FAILURE:
    case FOLLOW_USER_FAILURE:
    case UNFOLLOW_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case FIND_USER_BY_ID_SUCCESS:
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        findUser: action.payload,
      };

      case SEARCH_USER_SUCCESS:
        return {
        ...state,
        loading: false,
        error: null,
        searchedUser: action.payload,
      };

      case FOLLOW_USER_SUCCESS:
        return {
          ...state,
          error: null,
          findUser: action.payload,
          user: {...state.user, following: [...state.user.following, action.payload]}

        };

        case UNFOLLOW_USER_SUCCESS:
          let newUnfollowedArray= state.user.following.filter((user)=> user.id!== action.payload)
          return {
          ...state,
          user: {...state.user, following: newUnfollowedArray }
          }

          case CLEAR_SEARCH_SUCCESS:
            return {
            ...state,
            searchedUser: [],
          };

    default:
      return state;
  }
};
