const defaultState = {
  countries: [],
  country: null,
  error: null,
};

const countriesReducer = (state = defaultState, action) => {
  //action = {type: "action type",payload: {...}}
  //state = {cart: []}
  switch (action.type) {
    case "FETCH_COUNTRIES_LIST":
      const countriesPayload = action.payload;
      return {
        ...state,
        countries: countriesPayload,
      };

    case "FETCH_ONE_COUNTRY":
      const countryPayload = action.payload;
      return {
        ...state,
        country: countryPayload,
      };

    case "FETCH_ERROR":
      const errorFromPayload = action.payload;
      return {
        ...state,
        error: errorFromPayload,
      };

    default:
      return state;
  }
};

export default countriesReducer;
