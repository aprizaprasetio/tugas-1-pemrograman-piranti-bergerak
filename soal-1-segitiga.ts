function cetakSegitiga() {
  const NIM = "052026771";

  const tinggiSegitiga = parseInt(NIM[NIM.length - 1]);

  for (let i = 0; i < tinggiSegitiga; i++) {
    const isiSegitiga = [];
    for (let j = 0; j <= i; j++) {
      isiSegitiga.push(j + 1);
    }
    console.log(isiSegitiga.join(""));
  }
}

cetakSegitiga();
