// function Bis(sopir, [], trayek, kas) {
//   this.sopir = sopir;
//   this.penumpang = [];
//   this.trayek = trayek;
//   this.kas = kas;
//   this.penumpangNaik = function penumpangNaik(namaPenumpang) {
//     this.penumpang.push(namaPenumpang);
//     return this.penumpang;
//   };
//   this.penumpangTurun = function penumpangTurun(namaPenumpang, bayar) {
//     for (i = 0; i < this.penumpang.length; i++) {
//       if (namaPenumpang == this.penumpang[i]) {
//         this.penumpang.splice(i, 1, null);
//         this.kas += bayar;
//         return this.penumpang;
//       }
//     }
//     // console.log(this.penumpang.length);
//   };
// }

// const bis = new Bis("testFirstName", "", "jakarta-bandung", 0);

class Bis {
  constructor(sopir, penumpang, trayek, kas) {
    this.sopir = sopir;
    this.penumpang = penumpang;
    this.trayek = trayek;
    this.kas = kas;
  }
  penumpangNaik(namaPenumpang) {
    if (this.penumpang.length >= 3) {
      console.log("bus sudah penuh");
    } else {
      this.penumpang.push(namaPenumpang);
    }

    return this.penumpang;
  }
  penumpangTurun(namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("bus masih kosong");
      return this.penumpang;
    }
    for (let i = 0; i < this.penumpang.length; i++) {
      if (namaPenumpang == this.penumpang[i]) {
        this.penumpang.splice(i, 1, null);
        this.kas += bayar;
        return this.penumpang;
      }
    }
  }
}

const bus = new Bis("budi", [], ["bandung", "jakarta"], 0);
