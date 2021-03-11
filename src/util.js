const getRandomNumber = (floor, ceil) => {
  const min = Math.ceil(floor);
  const max = Math.ceil(ceil);
  return Math.floor(Math.random() * (max - min)) + min;
};

export default getRandomNumber;
