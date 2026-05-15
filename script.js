// MENAMPILKAN / MENYEMBUNYIKAN DIAL PAD
function showDialPad() {

    const dialpad = document.getElementById("dialpad");

    if (dialpad.style.display === "block") {
        dialpad.style.display = "none";
    } 
    
    else {
        dialpad.style.display = "block";
    }
}


// MENAMBAHKAN ANGKA KE INPUT
function addNumber(number) {

    const input = document.getElementById("phoneInput");

    input.value += number;
}


// MENGHAPUS SEMUA ANGKA
function clearNumber() {

    document.getElementById("phoneInput").value = "";
}


// MEMBUKA GOOGLE
function openBrowser() {

    window.open("https://www.google.com", "_blank");
}


// MEMBUKA HALAMAN ABOUT
function openAbout() {

    window.location.href = "about.html";
}