function a() {
  console.log("a");
}
function b() {
  setTimeout(() => {
    console.log("b");
  }, 2000);
}
function c() {
  console.log("c");
}

// a();
// b();
// c();

// login((dataUser) => {
//     console.log(dataUser);
// });

const login = (callback) => {
  console.log("user menginputkan nama");
  console.log("user menginputkan password");

  setTimeout(() => {
    callback({ provinsi: "jawa timur" });
  }, 3000);
};

const getUserCity = (provinsi, callback) => {
  setTimeout(() => {
    const city = provinsi === "jawa timur" ? "surabaya" : "kota lain";
    callback(city);
  }, 3000);
};

const getDetailUserAddress = (city, provinsi) => {
  setTimeout(() => {
    const detailAddress = `jl pahlawan no 2, ${city}, ${provinsi}`;
    callback(detailAddress);
  }, 3000);
};

