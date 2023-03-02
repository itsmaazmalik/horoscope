export const getDailyHoroscope = async (starName) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
      },
    };

    const response = await fetch(
      `https://horoscope-astrology.p.rapidapi.com/horoscope?day=today&sunsign=${starName}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getHoroscopeDetail = async (starName) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
      },
    };

    const response = await fetch(
      `https://horoscope-astrology.p.rapidapi.com/sign?s=${starName}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
