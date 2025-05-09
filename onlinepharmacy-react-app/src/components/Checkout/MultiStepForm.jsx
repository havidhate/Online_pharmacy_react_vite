// src/components/Checkout/MultiStepForm.jsx
import React, { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => s - 1);

  return (
    <div>
      {step === 1 && <div>{/* Address fields */}</div>}
      {step === 2 && <div>{/* Payment fields */}</div>}
      {step === 3 && <div>{/* Review & Submit */}</div>}
      <div className="mt-4 flex justify-between">
        {step > 1 && <button onClick={prev}>Back</button>}
        {step < 3 ? (
          <button onClick={next}>Next</button>
        ) : (
          <button
            onClick={() => {
              /* submit */
            }}
          >
            Place Order
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
