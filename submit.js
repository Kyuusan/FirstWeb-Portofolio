<<<<<<< HEAD
let contactform = [];

function simpanproduk() {
    var nama = document.getElementById('Nama').value;
    var gmail  = document.getElementById('email').value;
    var pesan = document.getElementById('message').value;
   
    if (!nama || gmail || !pesan) {
        alert("Semua input harus diisi!");
        return;
    }

    contactform.push({
        nama,
        gmail,
        pesan
    });  

    document.getElementById('Nama').value = '';
    document.getElementById('gmail').value = '';
    document.getElementById('pesan').value = '';
=======
let contactform = [];

function simpanproduk() {
    var nama = document.getElementById('Nama').value;
    var gmail  = document.getElementById('email').value;
    var pesan = document.getElementById('message').value;
   
    if (!nama || gmail || !pesan) {
        alert("Semua input harus diisi!");
        return;
    }

    contactform.push({
        nama,
        gmail,
        pesan
    });  

    document.getElementById('Nama').value = '';
    document.getElementById('gmail').value = '';
    document.getElementById('pesan').value = '';
>>>>>>> 69e48408670e1dbe241e6ac386c9874342fc6dad
}