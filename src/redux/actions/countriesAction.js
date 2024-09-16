import axios from "axios";

//redux-thunk to fetch data using async
export const getCountries = () => {
  return async (dispatch, getState) => {
    const getData = await axios("https://restcountries.com/v3.1/all");
    const countriesList = getData.data;

    // const data = await fetch("https://restcountries-v2.herokuapp.com/all");
    // const countriesList = (await data.json()) as Country[];

    dispatch(fetchCountriesList(countriesList));
  };
};

//delivering thunk to the reducer
export const fetchCountriesList = (data) => {
  return {
    type: "FETCH_COUNTRIES_LIST",
    payload: data,
  };
};

//redux-thunk to fetch data using async
export const getOneCountry = (countryName) => {
  return async (dispatch, getState) => {
    try {
      const getData = await axios(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const country = getData.data;
      dispatch(fetchOneCountry(country));
    } catch (error) {
      dispatch(fetchError(error));
    }
  };
};

//delivering thunk to the reducer
export const fetchOneCountry = (data) => {
  return {
    type: "FETCH_ONE_COUNTRY",
    payload: data,
  };
};

export const fetchError = (error) => {
  return {
    type: "FETCH_ERROR",
    payload: error,
  };
};
