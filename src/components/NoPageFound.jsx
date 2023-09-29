import React, { Component } from "react";
import { useLocation } from "react-router-dom";

export default function NoPageFound() {
  let location = useLocation();

  return <p>The Page {location.pathname} is not Found!!!</p>;
}
