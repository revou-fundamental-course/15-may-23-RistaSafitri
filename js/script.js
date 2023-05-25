document.getElementById("luasForm").addEventListener("submit", hitungLuas);
document.getElementById("kelilingForm").addEventListener("submit", hitungKeliling);

function hitungLuas(event) {
  event.preventDefault();

  var rumusLuas = "L = S × S";
  var sisi = parseFloat(document.getElementById("sisi-luas").value);

  if (!isNaN(sisi) && sisi > 0) {
    var luas = sisi * sisi;
    document.getElementById("output_luas").innerHTML = "Penyelesaian: " + "<br>" + rumusLuas + "<br>" + "L = " + sisi + " × " + sisi +  "<br>" + "L = " + luas + "<br>";
  } else {
    document.getElementById("output_luas").textContent = "Masukkan nilai sisi yang valid!";
  }
}

function hitungKeliling(event) {
  event.preventDefault();

  var rumusKeliling = "K = 4 × S";
  var sisi = parseFloat(document.getElementById("sisi-keliling").value);

  if (!isNaN(sisi) && sisi > 0) {
    var keliling = 4 * sisi;
    document.getElementById("output_keliling").innerHTML = "Penyelesaian: " + "<br>" + rumusKeliling + "<br>" + "K = 4 × " + sisi + "<br>" + "K = " + keliling + "<br>";
  } else {
    document.getElementById("output_keliling").textContent = "Masukkan nilai sisi yang valid!";
  }
}

// fungsi untuk tombol reset perhitungan luas persegi
function resetPerhitunganLuas() {
  document.getElementById("luasForm").reset();
  document.getElementById("output_luas").textContent = "";
}

// fungsi untuk tombol reset perhitungan keliling persegi
function resetPerhitunganKeliling() {
  document.getElementById("kelilingForm").reset();
  document.getElementById("output_keliling").textContent = "";
}
