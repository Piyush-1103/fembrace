from flask import Flask, request, jsonify, render_template
import numpy as np
import joblib
from tensorflow.keras.models import load_model
from flask_cors import CORS
import pandas as pd
from sklearn.preprocessing import StandardScaler

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load models and scaler (if required)
# Load FNN model
fnn_model = load_model("fnn_pcos_model.h5")
# Load other models
lr_model = joblib.load('lr_model.pkl')
rf_model = joblib.load("rf_model.pkl")
gbm_model = joblib.load("gbm_model.pkl")
svm_model = joblib.load("svm_model.pkl")
scaler = joblib.load("scaler.pkl")

# Features for the prediction form
features = [
    "Age (yrs)", "Weight (Kg)", "Height(Cm)", "BMI","Blood Group", "Pulse rate(bpm)", "Cycle(R/I)",
    "Cycle length(days)", "Marraige Status (Yrs)", "Pregnant(Y/N)", "No. of aborptions",
    "Hip(inch)", "Waist(inch)", "Waist:Hip Ratio", "Weight gain(Y/N)", "hair growth(Y/N)",
    "Skin darkening (Y/N)", "Hair loss(Y/N)", "Pimples(Y/N)", "Fast food (Y/N)", "Reg.Exercise(Y/N)"
]

@app.route("/")
def index():
    return render_template("index.html")  # Assuming you have a form on the index.html page

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    try:
        # Handle categorical fields by mapping 'Y' -> 1 and 'N' -> 0
        categorical_map = {
            "Pregnant(Y/N)": {"Y": 1, "N": 0},
            "Weight gain(Y/N)": {"Y": 1, "N": 0},
            "hair growth(Y/N)": {"Y": 1, "N": 0},
            "Skin darkening (Y/N)": {"Y": 1, "N": 0},
            "Hair loss(Y/N)": {"Y": 1, "N": 0},
            "Pimples(Y/N)": {"Y": 1, "N": 0},
            "Fast food (Y/N)": {"Y": 1, "N": 0},
            "Reg.Exercise(Y/N)": {"Y": 1, "N": 0}
        }

        # Prepare the input data, converting categorical values to numeric
        input_data = {}
        for feature in features:
            value = data.get(feature, 0)
            if feature in categorical_map:
                input_data[feature] = [categorical_map[feature].get(value, 0)]  # Default to 0 if value is unexpected
            else:
                input_data[feature] = [float(value)]  # Convert numerical values to float

        input_df = pd.DataFrame(input_data)

        # Scale the input using the same scaler
        scaled_input = scaler.transform(input_df)

        # Make predictions from each model
        lr_pred = lr_model.predict_proba(scaled_input)[:, 1][0]
        rf_pred = rf_model.predict_proba(scaled_input)[:, 1][0]
        gbm_pred = gbm_model.predict_proba(scaled_input)[:, 1][0]
        svm_pred = svm_model.predict_proba(scaled_input)[:, 1][0]
        fnn_pred = fnn_model.predict(scaled_input)[0][0]

        # Calculate accuracy for each model (if you have ground truth available)
        accs = {
            "lr": 0.85,  # Example accuracy
            "rf": 0.87,  # Example accuracy
            "gbm": 0.89,  # Example accuracy
            "svm": 0.84,  # Example accuracy
            "fnn": 0.91   # Example accuracy
        }

        # Weighted ensemble prediction
        weighted_sum = (
            accs["lr"] * lr_pred +
            accs["rf"] * rf_pred +
            accs["gbm"] * gbm_pred +
            accs["svm"] * svm_pred +
            accs["fnn"] * fnn_pred
        )
        total_weight = sum(accs.values())
        final_prediction = weighted_sum / total_weight

        # Prepare the response
        result = {"probability": float(final_prediction), "prediction": "PCOS" if final_prediction > 0.5 else "No PCOS"}
        
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5002)
