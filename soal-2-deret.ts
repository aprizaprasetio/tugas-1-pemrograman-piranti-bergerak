function cetakDeret(NIM: string) {
  const awal = parseInt(NIM.slice(-2));
  const step = parseInt(NIM[NIM.length - 3]);
  const deret = [];

  let i = 0;
  for (let j = awal; i < 10; j += step) {
    deret.push(j);
    i++;
  }

  console.log(deret.join(", "));
}

cetakDeret("052026771");
