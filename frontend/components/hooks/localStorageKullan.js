import React, { useState } from "react";

function localStorageKullan(initialValue, key) {
  //const value = initialValue;

  const dataUpdateHandler = (newData) => {
    setValue(newData);
    localStorage.setItem(key, JSON.stringify(newData));
  };

  const [value, setValue] = useState(() => {
    const initialLocalStorageData = JSON.parse(localStorage.getItem(key));
    console.log(initialLocalStorageData);

    if (initialLocalStorageData === null) {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    } else {
      return initialLocalStorageData;
    }
  });

  const clearLocalStorage = () => {
    setValue(null);
    localStorage.removeItem(key);
  };

  return [value, dataUpdateHandler, clearLocalStorage];
}

export default localStorageKullan;
