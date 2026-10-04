function cetakDeret() {
  const NIM = "052026771";

  const awal = parseInt(NIM.slice(-2));
  const step = parseInt(NIM[NIM.length - 3]);

  let i = 0;
  for (let j = awal; i < 10; j += step) {
    console.log(j);
    i++;
  }
}

cetakDeret();
