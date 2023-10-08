// JavaScript If-else
let age = 10;

if (age < 15)
	console.log("Saya diatas 18 Tahun");
else
	console.log("Saya masih dibawah 18 Tahun");


// JavaScript Nested - if 
let angka = 7;

if (angka == 7) { 
	if (angka < 18) {
		console.log("angka lebih kecil dari 18");
		if (angka < 9)
			console.log("angka lebih kecil dari 12 juga");
		else
			console.log("angka lebih besar dari 18");
	}
}

//JavaScript Switch Case
let b = 5;
switch (b) {
    case 1:
        b = 'Satu';
        break;
    case 2:
        b = 'Dua';
        break;
    default:
        b = 'Tidak Ketemu';
        break;
}
console.log(`Hasil SwitchCase adalah ${b}`);

//JavaScript For 
let c = 3;
for (; c <= 6; c++) {
	console.log("Hasil For : " + c);
}


//JavaScript While
let i = 1;
while (i <= 3) {
  console.log("Hasil angka While : " + i);
  i++;
}

//JavaScript Do-While
let test = 1;
do {
	console.log("Angka :" + test);
	test++;
} while(test<=3)

//JavaScript Function
function coba(a1, a2) {
	return a1 / a2;
}
const value = coba(100, 2); 
console.log("Hasil dari Function : " + value);
