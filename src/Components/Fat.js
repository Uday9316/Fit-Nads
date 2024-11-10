import React, { useState } from 'react';
import { FaWeight, FaUser, FaRuler, FaCalculator } from 'react-icons/fa'; // Importing icons
import { Chart, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import mikeImage from '../assets/mike.jpg'; // Import the image

Chart.register(CategoryScale, LinearScale, BarElement, Title);

const Services = () => {
  const [formData, setFormData] = useState({
    calculationType: 'bfp', // Default is BFP calculation
    gender: 'male',
    waist: '',
    neck: '',
    hips: '', // Hips field added for BFP
    height: '',
    weight: '',
    age: '', // Added age for BMR calculation
    activityLevel: '1.25', // Default to "Moderately active"
    exerciseFrequency: '1', // Default to "1-3 times a week"
    goal: 'maintain' // Default goal is "Maintain"
  });

  const [result, setResult] = useState(null);

  // Function to calculate BFP (Body Fat Percentage)
  const calculateBFP = (waist, neck, hips, height, gender) => {
    const log10 = Math.log10;
    let bfp;

    if (gender === 'female') {
      bfp = 495 / (1.29579 - (0.35004 * log10(waist + hips - neck)) + 0.22100 * log10(height)) - 450;
    } else {
      bfp = 495 / (1.0324 - (0.19077 * log10(waist - neck)) + 0.15456 * log10(height)) - 450;
    }

    return bfp.toFixed(2); // Returning BFP with two decimal points
  };

  // Function to calculate BMR (Basal Metabolic Rate)
  const calculateBMR = (weight, height, age, gender) => {
    if (gender === 'female') {
      return (10 * weight + 6.25 * height - 5 * age - 161).toFixed(2); // BMR for female
    } else {
      return (10 * weight + 6.25 * height - 5 * age + 5).toFixed(2); // BMR for male
    }
  };

  // Function to calculate TDEE (Total Daily Energy Expenditure)
  const calculateTDEE = (bmr, activityLevel, exerciseFrequency) => {
    const activityMultipliers = {
      '1.1': 1.1,  // Lightly active
      '1.25': 1.25, // Moderately active
      '1.5': 1.5,   // Very active
      '1.75': 1.75  // Extremely active
    };

    const exerciseMultipliers = {
      '0': 1,        // 0 times a week
      '1': 1.15,     // 1-3 times a week
      '2': 1.25,     // 4-5 times a week
      '3': 1.45      // 6+ times a week
    };

    const activityMultiplier = activityMultipliers[activityLevel];
    const exerciseMultiplier = exerciseMultipliers[exerciseFrequency];

    let tdee = bmr * activityMultiplier * exerciseMultiplier;

    if (formData.goal === 'gain') {
      tdee *= 1.1; // Gain muscle: multiply by 1.3
    } else if (formData.goal === 'lose') {
      tdee *= 0.83; // Lose weight: multiply by 0.8
    }

    return tdee.toFixed(2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { waist, neck, hips, height, gender, weight, calculationType, age, activityLevel, exerciseFrequency, goal } = formData;

    // Validation for weight, height, waist, neck, and age based on calculation type
    if (
      weight < 10 || weight > 300 ||
      height < 50 || height > 300 ||
      (calculationType === 'bfp' && (
        waist < 30 || waist > 150 ||
        neck < 25 || neck > 60 ||
        (gender === 'female' && (hips < 50 || hips > 150))
      )) ||
      (calculationType === 'bmr' && (age < 1 || age > 120))
    ) {
      alert("Please enter valid values for all fields.");
      return;
    }

    let resultData;

    if (calculationType === 'bfp') {
      const bfp = calculateBFP(waist, neck, hips, height, gender);
      resultData = { bfp };
    } else {
      const bmr = calculateBMR(weight, height, age, gender);
      const tdee = calculateTDEE(bmr, activityLevel, exerciseFrequency);
      resultData = { bmr, tdee };
    }

    setResult(resultData);
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <section id="Fat" className="w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/mike.jpg')" }}>
      <div className="max-container padding-hero-y padding-x bg-white bg-opacity-80 rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-end mb-28 max-lg:flex-col max-lg:items-start max-lg:gap-5 max-sm:mb-20">
          <div>
            <p className="text-[#f04e3c] relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%] max-sm:text-xl max-sm:before:w-14 max-sm:pl-20">
              CALCULATOR
            </p>
            <div className="text-6xl text-gray-800 mt-8 leading-[60px] max-w-[65%] font-semibold max-xl:text-4xl max-lg:text-5xl max-lg:leading-[60px] max-lg:max-w-[100%] max-sm:text-3xl">
              <h1>FOR THE NADS BY THE NADS!</h1>
            </div>
          </div>
        </div>

        {/* Form for Body Fat Calculator or BMR */}
        <div className="flex space-x-10">
          <form onSubmit={handleSubmit} className="space-y-4 w-1/2">
            {/* Select Calculation Type */}
            <div>
              <label className="text-gray-800 flex items-center text-lg font-semibold"><FaCalculator className="mr-2"/>Choose Calculation:</label>
              <select
                name="calculationType"
                value={formData.calculationType}
                onChange={handleInputChange}
                className="block border rounded p-2"
              >
                <option value="bfp">Body Fat Percentage (BFP)</option>
                <option value="bmr">Basal Metabolic Rate (BMR)</option>
              </select>
            </div>

            {/* Gender Input */}
            <div>
              <label className="text-gray-800 flex items-center text-lg font-semibold"><FaUser className="mr-2"/>Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                className="block border rounded p-2"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Weight Input */}
            <div>
              <label className="text-gray-800 flex items-center text-lg font-semibold"><FaWeight className="mr-2"/>Weight (kg):</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                required
                className="block border rounded p-2"
                min="10"
                max="300"
              />
            </div>

            {/* Waist Input - Only for BFP calculation */}
            {formData.calculationType === 'bfp' && (
              <div>
                <label className="text-gray-800 flex items-center text-lg font-semibold"><FaRuler className="mr-2"/>Waist (cm):</label>
                <input
                  type="number"
                  name="waist"
                  value={formData.waist}
                  onChange={handleInputChange}
                  required
                  className="block border rounded p-2"
                  min="30"
                  max="150"
                />
              </div>
            )}

            {/* Hips Input - Only for BFP calculation */}
            {formData.gender === 'female' && formData.calculationType === 'bfp' && (
              <div>
                <label className="text-gray-800 flex items-center text-lg font-semibold"><FaRuler className="mr-2"/>Hips (cm):</label>
                <input
                  type="number"
                  name="hips"
                  value={formData.hips}
                  onChange={handleInputChange}
                  required
                  className="block border rounded p-2"
                  min="50"
                  max="150"
                />
              </div>
            )}

            {/* Neck Input - Only for BFP calculation */}
            {formData.calculationType === 'bfp' && (
              <div>
                <label className="text-gray-800 flex items-center text-lg font-semibold"><FaRuler className="mr-2"/>Neck (cm):</label>
                <input
                  type="number"
                  name="neck"
                  value={formData.neck}
                  onChange={handleInputChange}
                  required
                  className="block border rounded p-2"
                  min="25"
                  max="60"
                />
              </div>
            )}

            {/* Height Input */}
            {(formData.calculationType === 'bfp' || formData.calculationType === 'bmr') && (
              <div>
                <label className="text-gray-800 flex items-center text-lg font-semibold"><FaRuler className="mr-2"/>Height (cm):</label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  required
                  className="block border rounded p-2"
                  min="50"
                  max="300"
                />
              </div>
            )}

            {/* Age Input - Show only for BMR calculation */}
            {formData.calculationType === 'bmr' && (
              <div>
                <label className="text-gray-800 flex items-center text-lg font-semibold">Age (years):</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  className="block border rounded p-2"
                  min="1"
                  max="120"
                />
              </div>
            )}

            {/* Activity Level Input */}
            {formData.calculationType === 'bmr' && (
              <div>
                <label className="text-gray-800 flex items-center text-lg font-semibold">Activity Level:</label>
                <select
                  name="activityLevel"
                  value={formData.activityLevel}
                  onChange={handleInputChange}
                  className="block border rounded p-2"
                >
                  <option value="1.1">Lightly Active</option>
                  <option value="1.25">Moderately Active</option>
                  <option value="1.5">Very Active</option>
                  <option value="1.75">Extremely Active</option>
                </select>
              </div>
            )}

            {/* Exercise Frequency Input */}
            {formData.calculationType === 'bmr' && (
              <div>
                <label className="text-gray-800 flex items-center text-lg font-semibold">Exercise Frequency:</label>
                <select
                  name="exerciseFrequency"
                  value={formData.exerciseFrequency}
                  onChange={handleInputChange}
                  className="block border rounded p-2"
                >
                  <option value="0">0 times a week</option>
                  <option value="1">1-3 times a week</option>
                  <option value="2">4-5 times a week</option>
                  <option value="3">6+ times a week</option>
                </select>
              </div>
            )}

            {/* Goal Input: Gain Muscle or Lose Weight */}
            {formData.calculationType === 'bmr' && (
              <div>
                <label className="text-gray-800 flex items-center text-lg font-semibold">Goal:</label>
                <select
                  name="goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  className="block border rounded p-2"
                >
                  <option value="maintain">Maintain Weight</option>
                  <option value="gain">Gain Muscle</option>
                  <option value="lose">Lose Weight</option>
                </select>
              </div>
            )}

            <div className="mt-4 text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded text-lg hover:bg-blue-700 transition duration-300"
              >
                Calculate
              </button>
            </div>
          </form>

          {/* Display Results on the Right */}
          {result && (
            <div className="w-1/2 text-white bg-gray-800 p-4 rounded-lg shadow-md">
              {formData.calculationType === 'bfp' ? (
                <>
                  <p className="text-2xl font-bold">Body Fat Percentage: {result.bfp}%</p>
                  <p className="mt-2 text-lg">
                    Your Body Fat Percentage (BFP) indicates the proportion of fat in your body compared to your total weight. 
                    A lower percentage generally means better fitness and health. For example, a BFP of 15% is considered healthy for men, while 25% is healthy for women.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-2xl font-bold">BMR: {result.bmr} kcal/day</p>
                  <p className="mt-2 text-lg">
                    Your Basal Metabolic Rate (BMR) is the number of calories your body needs to maintain basic physiological functions at rest, such as breathing and digestion. 
                    This is the minimum energy requirement for your body to function properly.
                  </p>
                  <p className="text-2xl font-bold">TDEE: {result.tdee} kcal/day</p>
                  <p className="mt-2 text-lg">
                    Your Total Daily Energy Expenditure (TDEE) is the total number of calories you burn in a day, including all activities. 
                    This number helps you understand how many calories you need to maintain, lose, or gain weight based on your activity level and goals.
                  </p>
                </>
              )}
              {/* Image Below Results */}
              <div className="w-3/4 mt-20">
                <img src={mikeImage} alt="Mike" className="w-full h-auto rounded-lg shadow-lg" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
