import React, { useEffect } from "react";
import { ResultCard } from "../ResultCard";

export const FourthStep = (props) => {
  useEffect(() => {
    props.stepTitle(
      "Finishing upPick add-ons",
      "Double-check everything looks OK before confirming.Add-ons help enhance your gaming experience."
    );
  }, []);

  return (
    <div>
      <ResultCard />
      <button type="submit">Confirm</button>
    </div>
  );
};
