import React, { useState } from "react";
import localStorageKullan from "./localStorageKullan";

function geceModuAc(initialValue) {
  const [geceModu, setGeceModu] = localStorageKullan(initialValue, "gm");

  const toggleMode = (e) => {
    e.preventDefault();
    setGeceModu(!geceModu);
  };

  return [geceModu, toggleMode];
}

export default geceModuAc;
