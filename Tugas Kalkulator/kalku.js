function input() {
    let a, b, c;

    let a = parseInt(prompt("angka ke-1:"));
    let b = parseInt(prompt("angka ke-2:"));
    let c = prompt("operator (+;-;*;/)");


    switch (c) {
        case "+":
            c = a + b;
            alert(`Hasil ${c}`);
            break;
        case "-":
            c = a - b;
            alert(`Hasil ${c}`);
            break;
        case "*":
            c = a * b;
            alert(`Hasil ${c}`);
            break;
        case "/":
            c = a / b;
            alert(`Hasil ${c}`);
            break;
        default:
            alert(`Hasil ${c}`);
    }
}