function fewOperations(num1, num2) {
    if (num1 + num2 >= 0) {
        console.log("Wynik dodawania wynosi" + (num1 + num2));
    }
    else {
        console.log("Wynik działania jest nieprawidłowy");
    }
    if (num1 - num2 >= 0) {
        console.log("Wynik odejmowania wynosi" + (num1 - num2));
    }
    else {
        console.log("Wynik działania jest nieprawidłowy");
    }
    if (num1 * num2 >= 0) {
        console.log("Wynik mnożenia wynosi" + (num1 * num2));
    }
    else {
        console.log("Wynik działania jest nieprawidłowy");
    }



}

    fewOperations(20, 14);
    fewOperations(-30, 24);
    fewOperations(45, 55);
    fewOperations(-76, 14);