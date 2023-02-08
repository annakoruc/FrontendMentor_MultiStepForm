import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../../config/paths";

export const FirstStep = () => {
  return (
    <>
      <h1>Personal info</h1>
      <h2>Please proide your name, email address, and phone number.</h2>
      <form>
        <label for="name">Name</label>
        <input id="name" placeholder="e.g. Stephen King" />
        <label for="email">Name</label>
        <input id="email" placeholder="e.g. stephenking@lorem.com" />
        <label for="phone">Name</label>
        <input id="phone" placeholder="e.g. +1 234 567 890" />
      </form>
      <Link to={paths.secound}>Next Step</Link>
    </>
  );
};
