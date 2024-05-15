const getUser = (id, cb) => {
  const time = id === 1 ? 1000 : 2000;
  setTimeout(() => {
    const nama = id === 1 ? "ahmad" : "ali";
    cb({ id, nama });
  }, time);
};

const user1 = getUser(1, (hasil) => {
  console.log(hasil);
});
const user2 = getUser(2, (hasil) => {
  console.log(hasil);
});

const halo = console.log("hello world");
