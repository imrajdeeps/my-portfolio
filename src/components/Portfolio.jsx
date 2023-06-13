import weatherToday from "../assets/portfolio/weatherToday.png";
import rietWebApp from "../assets/portfolio/rietWebApp.png";
import fruitCart from "../assets/portfolio/fruitCart.png";

const Portfolio = () => {
  const portfolios = [
    {
      title: "RIET College Web App",
      src: rietWebApp,
      demo: "https://riet-c312f.web.app/",
      code: "https://github.com/imrajdeeps/rietFrontend",
    },
    {
      title: "WeatherToday",
      src: weatherToday,
      demo: "https://weathertoday-n20g.onrender.com/",
      code: "https://github.com/imrajdeeps/weather-today",
    },
    {
      title: "FruitCart E-commerce website",
      src: fruitCart,
      demo: "/",
      code: "https://github.com/imrajdeeps/fruitCart-php",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-20 md:pt-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ src, demo, code, title }, id) => (
            <div
              key={id + "project"}
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              <p className="text-gray-500 text-center py-2">{title}</p>

              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  <button className="text-center w-full">Demo</button>
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  <button className="text-center w-full">Code</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
