import React, { useState } from "react";

function localStorageKullan(initialValue, key) {
  //const value = initialValue;
  const dataUpdateHandler = (newData) => {
    setValue(newData);
    localStorage.setItem(key, JSON.stringify(newData));
  };

  const readFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem(key));
  };

  const [value, setValue] = useState(() => {
    return readFromLocalStorage() || initialValue;
  });

  const clearLocalStorage = () => {
    setValue(null);
    localStorage.removeItem(key);
  };

  return [value, dataUpdateHandler, clearLocalStorage];
}

export default localStorageKullan;
