
// Říká testům, že vstup bude binární (základ 2).
function permittedInputSystems() {
    return 2; 
}

// Říká testům, že výstup bude dekadický (základ 10).
function permittedOutputSystems() {
    return 10; 
}

/**
 * Hlavní funkce pro převod čísel (volají ji testy).
 */
function main(inputNumber, inputNumberSystem, outputNumberSystem) {
    
    // Kontrola, zda provádíme správnou konverzi (2 -> 10).
    if (inputNumberSystem !== 2 || outputNumberSystem !== 10) {
        return "Chyba: Nepodporovaná konverze"; 
    }

    let dekadickyVysledek = 0;
    let mocnina = 1; 

    // Procházíme binární číslo odzadu
    for (let i = inputNumber.length - 1; i >= 0; i--) {
        const cislice = inputNumber[i];
        
        if (cislice === '1') {
            dekadickyVysledek = dekadickyVysledek + mocnina;
        } 
        
        mocnina = mocnina * 2; 
    }

    return dekadickyVysledek.toString(); 
}

// *** EXPORT pro testovací systém (Zásadní řádek) ***
// Exportujeme funkce, aby je testovací systém mohl použít.
module.exports = {
    main,
    permittedInputSystems,
    permittedOutputSystems
};