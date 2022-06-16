const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (param1) => {
  let bioskop1 = await promiseTheaterIXX();
  let bioskop2 = await promiseTheaterVGC();

  let cinemas = bioskop1.concat(bioskop2);
  let results = 0;

  cinemas.map((bioskop1) => bioskop1.hasil === param1 && (results += 1));

  return results;
};

module.exports = {
  promiseOutput,
};
