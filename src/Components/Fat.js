import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title);

const Services = () => {
  const [formData, setFormData] = useState({
    gender: 'male',
    waist: '',
    neck: '',
    hips: '', // Hips field added
    height: '',
    weight: ''
  });

  const [result, setResult] = useState(null);

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

  const determineHealthInfo = (bfp, weight, gender) => {
    const bodyFatMass = (bfp / 100) * weight; // Fat mass
    const leanBodyMass = weight - bodyFatMass; // Lean body mass
    const idealBodyFatPercentage = gender === 'female' ? 20 : 15; // Ideal BFP

    const fatToLose = bodyFatMass - (idealBodyFatPercentage / 100) * weight;

    return {
      bodyFatMass: bodyFatMass.toFixed(2),
      leanBodyMass: leanBodyMass.toFixed(2),
      idealBodyFatPercentage,
      fatToLose: fatToLose.toFixed(2),
      category: bfp < idealBodyFatPercentage ? 'Fitness' : 'Needs Improvement'
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { waist, neck, hips, height, gender, weight } = formData;

    // Calculate BFP
    const bfp = calculateBFP(waist, neck, hips, height, gender);

    // Determine health info
    const healthInfo = determineHealthInfo(bfp, weight, gender);

    // Set the result state
    setResult({ bfp, healthInfo });
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <section id="Fat" className="w-full min-h-screen bg-service-pattern bg-cover bg-fixed max-lg:bg-center max-sm:bg-center">
      <div className="max-container padding-hero-y padding-x">
        <div className="flex justify-between items-end mb-28 max-lg:flex-col max-lg:items-start max-lg:gap-5 max-sm:mb-20">
          <div>
            <p className="text-[#f04e3c] relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]">
              NAVY FAT CALCULATOR
            </p>
            <div className="text-6xl text-white mt-8 leading-[60px] max-w-[65%] font-semibold max-xl:text-4xl max-lg:text-5xl max-lg:leading-[60px] max-lg:max-w-[100%] max-sm:text-3xl">
              <h1>FOR THE NADS BY THE NADS!</h1>
            </div>
          </div>
        </div>

        {/* Form for Body Fat Calculator */}
        <div className="flex space-x-10">
          <form onSubmit={handleSubmit} className="space-y-4 w-1/2">
            <div>
              <label className="text-white">Gender:</label>
              <select name="gender" value={formData.gender} onChange={handleInputChange} className="block">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div>
              <label className="text-white">Weight (kg):</label>
              <input type="number" name="weight" value={formData.weight} onChange={handleInputChange} required className="block" />
            </div>

            <div>
              <label className="text-white">Waist (cm):</label>
              <input type="number" name="waist" value={formData.waist} onChange={handleInputChange} required className="block" />
            </div>

            {formData.gender === 'female' && (
              <div>
                <label className="text-white">Hips (cm):</label>
                <input type="number" name="hips" value={formData.hips} onChange={handleInputChange} required className="block" />
              </div>
            )}

            <div>
              <label className="text-white">Neck (cm):</label>
              <input type="number" name="neck" value={formData.neck} onChange={handleInputChange} required className="block" />
            </div>

            <div>
              <label className="text-white">Height (cm):</label>
              <input type="number" name="height" value={formData.height} onChange={handleInputChange} required className="block" />
            </div>

            <button type="submit" className="py-4 px-9 text-xl bg-[orangered] text-white rounded-sm">Calculate BFP</button>
          </form>

          {/* Display Results on the Right */}
          {result && (
            <div className="w-1/2 text-white">
              <p>Body Fat Percentage: {result.bfp}%</p>
              <p>Body Fat Category: {result.healthInfo.category}</p>
              <p>Body Fat Mass: {result.healthInfo.bodyFatMass} kg</p>
              <p>Lean Body Mass: {result.healthInfo.leanBodyMass} kg</p>
              <p>Ideal Body Fat Percentage: {result.healthInfo.idealBodyFatPercentage}%</p>
              <p>Fat to Lose: {result.healthInfo.fatToLose} kg</p>

              {/* Render Bar Chart */}
              <Bar
                data={{
                  labels: ['Body Fat', 'Lean Body', 'Total Weight'],
                  datasets: [
                    {
                      label: 'Body Composition',
                      data: [result.healthInfo.bodyFatMass, result.healthInfo.leanBodyMass, formData.weight],
                      backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)'],
                      borderWidth: 1,
                    }
                  ]
                }}
                options={{
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  }
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
