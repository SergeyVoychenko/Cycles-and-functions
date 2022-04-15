for (let num = 0 /*i = 1*/; ; num++) {
    // данная провека не нужна если aler опустить вниз блока
    // if (i) alert(`Привет! счетчик итераций:(${num})`);
    let words = prompt();
    if (words === 'break') {
        break;
    } else if (words === 'continue') {
        // i = 0;
        continue;
    }
    // i++;
    alert(`Привет! счетчик итераций:(${num})`);
}
