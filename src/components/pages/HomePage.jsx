import React, { useEffect } from "react";
import NavBar from "../NavBar";
import DataTable from "../DataTable";
import { getCountries } from "../../redux/actions/countriesAction";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  const countries = useSelector((state) => {
    return state.countriesReducer.countries;
  });

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <DataTable countries={countries} />
    </div>
  );
};

export default HomePage;
