import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { paths } from "../../config/paths";
import { AppContext } from "../../store/AppContext";
import { FourthStepStyle } from "../../styles/steps";

export const FourthStep = (props) => {
  const ctx = useContext(AppContext);

  useEffect(() => {
    props.stepTitle(
      "Finishing up",
      "Double-check everything looks OK before confirming."
    );
  }, []);

  console.log(ctx);

  const addOnsCost = ctx.addOns.reduce((a, b) => a + b.cost, 0);

  const totalCost = Number(ctx.cost) + addOnsCost;

  console.log(addOnsCost, totalCost, ctx.addOns);

  return (
    <FourthStepStyle>
      <main>
        <section className="plan">
          <div>
            <h3>{ctx.plan}</h3>
            <Link to={paths.secound}>Change</Link>
          </div>
          <p>
            ${ctx.cost}
            {ctx.isMonthlyCtx ? "/mo" : "/yr"}
          </p>
        </section>
        {ctx.addOns.length !== 0 && (
          <section className="add-ons">
            {ctx.addOns.map((element) => (
              <div key={element.title}>
                <p>{element.title}</p>
                <p>
                  ${element.cost}
                  {ctx.isMonthlyCtx ? "/mo" : "/yr"}
                </p>
              </div>
            ))}
          </section>
        )}
      </main>
      <div className="result">
        <h4>Total{ctx.isMonthlyCtx ? "(per month)" : "(per year)"}</h4>
        <p>
          ${totalCost}
          {ctx.isMonthlyCtx ? "/mo" : "/yr"}
        </p>
      </div>
    </FourthStepStyle>
  );
};
