// Mendapatkan referensi elemen button
const abc = document.getElementById("myButton");

// Menambahkan event listener pada button
// abc.addEventListener("click", function () {
//   alert("Tombol diklik!");
// });
abc.addEventListener("click", function () {
  const result = 4
  alert(`hasilnya ${result}`);
})

// Mendapatkan referensi elemen input
const input = document.getElementById("myInput");

// Menambahkan event listener pada input
input.addEventListener("change", function () {
  console.log("Nilai input berubah: ", this.value);
});

// Mendapatkan referensi elemen form
var form = document.getElementById("myForm");

// Menambahkan event listener pada form
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form dikirim");
});