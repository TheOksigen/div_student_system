import React, { createContext, useContext, useState } from "react";
import {
  useDeleteContactTypesMutation,
  useGetContactTypesQuery,
  usePostContactTypesMutation,
} from "./../../store/apis/contactTypes/contactTypes";
import { useDeleteCountriesMutation, useGetCountriesQuery, usePostCountryMutation } from "./../../store/apis/country/country";
import { useDeleteSexesMutation, useGetSexesQuery, usePostSexesMutation } from "./../../store/apis/sexes/sexes";
const AdminProvider = createContext();

function AdminContext({ children }) {
  const objPost = {
    getSexes: {
      short_name: "",
      name: "",
    },
    getContactTypes: {
      name: "",
      status: null,
    },
    getCountries: {
      iso: "",
      name: "",
      nickname: "nickname",
      iso3: "iso 3",
      num_code: 1111111,
      phone_code: 111111111,
    },
  };
  const slices = {
    Sexes: useGetSexesQuery(),
    ContactTypes: useGetContactTypesQuery(),
    Countries: useGetCountriesQuery(),
  };
  const postSlices = {
    Sexes: usePostSexesMutation(),
    ContactTypes: usePostContactTypesMutation(),
    Countries: usePostCountryMutation(),
  };
  const deleteSlices = {
    Sexes: useDeleteSexesMutation(),
    ContactTypes: useDeleteContactTypesMutation(),
    Countries: useDeleteCountriesMutation(),
  };
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedHooks, setSelectedHooks] = useState({
    SelectedQueryHook: slices.Sexes,
    postQueryHook: postSlices.Sexes,
    deleteHook: deleteSlices.Sexes,
  });
  function choose(props) {
    setSelectedItem(props);
    setArr()
  }
  function setArr(){
    setSelectedHooks({
      SelectedQueryHook: slices[selectedItem],
      postQueryHook: postSlices[selectedItem],
      deleteHook: deleteSlices[selectedItem],
    });
    // const SelectedQueryHook = slices[selectedItem];
    // const postQueryHook = postSlices[selectedItem];
    // const deleteHook = deleteSlices[selectedItem];
  }

  const obj = { selectedHooks, objPost };
  const adminObj = { choose, slices };
  return <AdminProvider.Provider value={{ obj, adminObj }}>{children}</AdminProvider.Provider>;
}

export default AdminContext;
export { AdminProvider };
