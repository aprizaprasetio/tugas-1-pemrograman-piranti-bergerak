function cekPrima(angka: number) {
  if (angka <= 1) {
    return false;
  }

  for (let i = 2; i * i <= angka; i++) {
    if (angka % i === 0) {
      return false;
    }
  }
  return true;
}

function cetakPrima(NIM: string) {
  const digitTerakhir = parseInt(NIM.slice(-2));
  const maksimal = digitTerakhir + 10;
  const prima = [];

  for (let i = 0; i < maksimal; i++) {
    if (cekPrima(i)) {
      prima.push(i);
    }
  }

  console.log(prima.join(", "));
}

cetakPrima("052026771");
