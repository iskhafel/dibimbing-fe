class Animals {
  constructor(name) {
    this.name = name;
  }

  bersuara() {
    return `suara ${this.name} adalah guk guk`;
  }
}

class katak extends Animals {
  bersuara() {
    return `suara ${this.name} adalah tung kek tung`;
  }
}

const animal1 = new katak();

class Hitung {
  constructor(luas) {
    this.luas = luas;
  }

  hasil(area) {
    return `Hasil perhitungan luasnya adalah ${area}`;
  }

  pembagian(val1, val2) {
    return val1 / val2;
  }

  perkalian(val1, val2) {
    return val1 * val2;
  }
}

class Persegi extends Hitung {
  constructor(panjang, lebar) {
    //   super(luas);
    super();
    this.panjang = panjang;
    this.lebar = lebar;
  }

  hitungLuas() {
    const luas = super.perkalian(this.panjang, this.lebar);
    return super.hasil(luas);
  }
  // - hitung luas (p x l)
  // -- res = perkalian(p, l)
}

let persegi = new Persegi(15, 10);
console.log(persegi.hitungLuas());
