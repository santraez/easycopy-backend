import seeds from "./seeds";

const randomSeed = () => {
  const numbers = new Set();
  while (numbers.size < 3) {
    const index = Math.floor(Math.random() * seeds.length);
    numbers.add(index);
  };
  const result = [];
  numbers.forEach((number) => {
    const text = seeds[number][0];
    const icon = seeds[number][1];
    result.push([text, icon]);
  });
  return result;
};

export default randomSeed;