function Bis(sopir, [], trayek, kas) {
  this.sopir = sopir;
  this.penumpang = [];
  this.trayek = trayek;
  this.kas = kas;
  this.penumpangNaik = function penumpangNaik(namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };
  this.penumpangTurun = function penumpangTurun(namaPenumpang, bayar) {
    for (i = 0; i < this.penumpang.length; i++) {
      if (namaPenumpang == this.penumpang[i]) {
        this.penumpang.splice(i, 1, null);
        this.kas += bayar;
        return this.penumpang;
      }
    }
    // console.log(this.penumpang.length);
  };
}

const bis = new Bis("testFirstName", "", "jakarta-bandung", 0);
