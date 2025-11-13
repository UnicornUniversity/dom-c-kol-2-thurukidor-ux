// Říká testům, že vstup bude binární (základ 2)
function permittedInputSystems() {
    return 2; 
}

// Říká testům, že výstup bude dekadický (základ 10)
function permittedOutputSystems() {
    return 10; 
}

/**
 * převod čísel 
 * @param {string} inputNumber binární číslo 
 * @returns {string} číslo v desítkové soustavě 
 */
function main(inputNumber, inputNumberSystem, outputNumberSystem) {
    
    // (2 -> 10).
    if (inputNumberSystem !== 2 || outputNumberSystem !== 10) {
        return "Chyba: Nepodporovaná konverze"; 
    }

    let dekadickyVysledek = 0;
    let mocnina = 1; //

    // procházíme binární číslo 
    for (let i = inputNumber.length - 1; i >= 0; i--) {
        const cislice = inputNumber[i];
        
        // Pokud je bit '1', přičteme aktuální mocninu dvojky k výsledku
        if (cislice === '1') {
            dekadickyVysledek = dekadickyVysledek + mocnina;
        } 
        
        // zdvojnásobíme mocninu pro další pozici vlevo
        mocnina = mocnina * 2; 
    }

    // vrátíme výsledek převedený na řetězec
    return dekadickyVysledek.toString(); 
}