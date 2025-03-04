import React, { useState } from "react";
import "./prediction.css";

const Prediction = () => {
  const [formData, setFormData] = useState({
    age: "", weight: "", height: "", bmi: "", pulseRate: "", cycleRegularity: "",
    cycleLength: "", marriageStatus: "", pregnant: "", abortions: "", hip: "",
    waist: "", waistHipRatio: "", weightGain: "", hairGrowth: "", skinDarkening: "",
    hairLoss: "", pimples: "", fastFood: "", regularExercise: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
        <h2>PCOS PREDICTION FORM</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            {[
              { label: "Age (yrs)", name: "age", type: "number" },
              { label: "Weight (kg)", name: "weight", type: "number" },
              { label: "Height (cm)", name: "height", type: "number" },
              { label: "BMI", name: "bmi", type: "number", step: "0.01" },
              { label: "Pulse Rate", name: "pulseRate", type: "number" },
              { label: "Hip (cm)", name: "hip", type: "number" },
              { label: "Waist (cm)", name: "waist", type: "number" },
              { label: "Waist-Hip Ratio", name: "waistHipRatio", type: "number", step: "0.01" },
              { label: "Cycle Length (days)", name: "cycleLength", type: "number" },
              { label: "Abortions", name: "abortions", type: "number" }
            ].map(({ label, name, type, step }) => (
              <div className="input-group" key={name}>
                <label htmlFor={name}>{label}</label>
                <input
                  id={name}
                  type={type}
                  name={name}
                  value={formData[name]}
                  step={step}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            {[
              { label: "Cycle Regularity", name: "cycleRegularity" },
              { label: "Marriage Status", name: "marriageStatus" },
              { label: "Pregnant", name: "pregnant" },
              { label: "Weight Gain", name: "weightGain" },
              { label: "Hair Growth", name: "hairGrowth" },
              { label: "Skin Darkening", name: "skinDarkening" },
              { label: "Hair Loss", name: "hairLoss" },
              { label: "Pimples", name: "pimples" },
              { label: "Fast Food Consumption", name: "fastFood" },
              { label: "Regular Exercise", name: "regularExercise" }
            ].map(({ label, name }) => (
              <div className="input-group" key={name}>
                <label htmlFor={name}>{label} (Y/N)</label>
                <select
                  id={name}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>
            ))}
          </div>
          <button type="submit">Predict PCOS</button>
        </form>
            <img src="/assets/remedies.png" alt="Remedies" onError={(e) => (e.target.style.display = "none")} />
    </div>
  );
};

export default Prediction;
