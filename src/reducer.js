export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQAlTGCWhvgS5O52fvlM2H52-QBf_YKSHOB92G13wtmCOFr0TLKpJ-Zf9HsFRhEsBWHhhVLLBWLATAuTERh29JcdcNTrIKXAw4z_yoT5ENZJlNqXwFa8_hMYkP7VOlf75kaTCF_EWqWEOcQKNuqti4Bn7JpwE3-Cn92jypVCgdYmqeDz",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
