let getSomething = () => {
  return new Promise((resolve, reject) => {
    // resolve("nesto resolve...");
    reject("nesto rejected");
  });
};
// console.log(getSomething());

// getSomething vraca resolve ili reject
// ako vrati resolve onda se izvrsava then grana
getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
