// ====================== Promise introdction =====================

function promiseHandler(resolve, reject) {
    if (false) {
      resolve("success");
    } else {
      reject("error");
    }
  }
  
//   let promise = new Promise(promiseHandler);
  
  // promise
  //   .then((value) => {
  //     console.log(value);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  
  // ========================== Callback hell handling with promise =========================
  
  // cari alamat detail user. Provinsi -> kota -> jalan no
  
  const login = () => {
    console.log("user menginputkan nama");
    console.log("user menginputkan password");
    console.log("validasi login ...");
  
    const promise = new Promise((success, failed) => {
      setTimeout(() => {
        if (true) {
          success({ province: "Jawa Barat" });
        } else {
          failed("Login failed");
        }
      }, 3000);
    });
  
    return promise
  };
  
  const getUserCity = (province) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const city = province === "Jawa Timur" ? "Surabaya" : "Kota Lain";
        if (province === "Jawa Timur") {
          resolve(city);
        } else {
          reject("get user city failed");
        }
      }, 3000);
    });
  };
  
  const getDetailUserAddress = (city, province) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const detailAddress = `Jl Pahlawan No 2, ${city}, ${province}`;
        resolve(detailAddress);
      }, 3000);
    });
  };
  
  //   login((dataUser) => {
  //     console.log("get data province " + dataUser.province);
  //     getUserCity(dataUser.province, (city) => {
  //       console.log("get data city " + city);
  //       getDetailUserAddress(city, dataUser.province, (detailAddress) => {
  //         console.log(detailAddress);
  //       });
  //     });
  //   });
  
  login()
    .then((dataUser) => {
      console.log("get data province " + dataUser.province);
  
      return getUserCity(dataUser.province);
    })
    .then((city) => {
      console.log("get data city " + city);
  
      return getDetailUserAddress(city);
    })
    .then((detailAddress) => {
      console.log(detailAddress);
    })
    .catch((error) => {
      console.log(error);
    });