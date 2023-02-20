import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../config/paths";
import { FourthStepStyle } from "../../styles/steps";

export const FourthStep = (props) => {
  useEffect(() => {
    props.stepTitle(
      "Finishing up",
      "Double-check everything looks OK before confirming."
    );
  }, []);

  return (
    <FourthStepStyle>
      <main>
        <section className="plan">
          <div>
            <h3>Arcade(Monthly)</h3>
            <Link to={paths.secound}>Change</Link>
          </div>
          <p>$9/mo</p>
        </section>
        <section className="add-ons">
          <div>
            <p>Online service</p>
            <p>+$1/mo</p>
          </div>
          <div>
            <p>Larger storage</p>
            <p>+$2/mo</p>
          </div>
        </section>
      </main>
      <div className="result">
        <h4>Total(per month)</h4>
        <p>+$12/mo</p>
      </div>
    </FourthStepStyle>
  );
};
