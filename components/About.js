const AboutSection = () => {
    return (
      <section className="bg-white text-gray-700 p-6 rounded shadow-md mt-4">
        <h2 className="text-xl font-semibold mb-2">About This App</h2>
        <p className="text-sm">
          This Weather Dashboard allows users to fetch historical weather data for any
          location within the last 3 months. It leverages the Open-Meteo API to provide:
        </p>
        <ul className="list-disc ml-6 mt-2">
         
          <li>Maximum, Minimum, and Mean Apparent Temperatures</li>
        </ul>
        <p className="text-sm mt-2">
          Note: The free version of the API limits data availability to the last 3 months. For more
          extended data, consider upgrading to the paid API.
        </p>
      </section>
    );
  };
  
  export default AboutSection;
  