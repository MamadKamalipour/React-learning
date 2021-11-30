import { useState } from "react";
import Card from "./components/Card";
function App() {
  const [isChecked, setIsChecked] = useState(false);
  const cardsMonthly = [
    {
      title: "Basic",
      priceMonthly: 19.99,
      priceAnnualy: 199.99,
      feature1: "500GB Storage",
      feature2: "2 Users Alowed",
      feature3: "Send Up to 3Gb",
      isFeatured:false
    },
    {
      title: "Professional",
      priceMonthly: 24.99,
      priceAnnualy: 249.99,
      feature1: "1TB Storage",
      feature2: "5 Users Alowed",
      feature3: "Send Up to 10Gb",
      isFeatured:true
    },
    {
      title: "Master",
      priceMonthly: 39.99,
      priceAnnualy: 399.99,
      feature1: "2TB Storage",
      feature2: "10 Users Alowed",
      feature3: "Send Up to 20Gb",
      isFeatured:false
    },
  ];
  const toggleHandler = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <div className="container d-flex flex-column justify-content-center ">
      <div className="d-flex flex-column justify-content-around align-items-center w-100 p-5 mb-3">
        <h1 className="pt-3 text-center font-weight-bolder text-muted">
          Our Pricing
        </h1>
        <div className="d-flex justify-content-between align-items-center flex-row-reverse p-sliderWrapper">
          <h3 className="text-muted">Monthly</h3>
          <div className="slider-checkbox px-3">
            <input
              type="checkbox"
              id="slider_checkbox_1"
              name="slider_checkbox"
              value={isChecked}
              onClick={toggleHandler}
            />
            <label htmlFor="slider_checkbox_1"></label>
          </div>
          <h3 className="text-muted">Annually</h3>
        </div>
      </div>
      <div className="cards d-flex flex-column flex-md-row align-items-center justify-content-center">
        {cardsMonthly.map((item) => (
          <Card
            isFeatured={item.isFeatured}
            title={item.title}
            price={isChecked ? item.priceAnnualy : item.priceMonthly}
            feature1={item.feature1}
            feature2={item.feature2}
            feature3={item.feature3}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
