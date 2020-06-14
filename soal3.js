let age = prompt("Masukkan usia kucing yang akan dihitung");

const catAgeConverted = (age) => {
    if (age == 1) {
        return `umur kucing anda 15 tahun`;
    } else if (age == 2) {
        return `umur kucing anda 24 tahun`;
    } else if (age >= 3) {
        let catAge = 24 + (age - 2) * 4;
        return `umur kucing anda ${catAge} tahun`;
    }
};

document.write(catAgeConverted(age));
console.log(catAgeConverted(age));