//==============================================================================
// MAIN.JS - KONEČNÁ A SPRÁVNÁ VERZE PRO SUBMISSION
// Upraveno na vracení pole (Array) pro kompatibilitu s testy.
//==============================================================================

// Vstup bude binární (základ 2)
export function permittedInputSystems() { 
    return [2]; // OPRAVA: Vracíme pole s číslem 2
}

// Výstup bude dekadický (základ 10)
export function permittedOutputSystems() {
    return [10]; // OPRAVA: Vracíme pole s číslem 10
}


export function main(inputNumber, inputNumberSystem, outputNumberSystem) { 
        
    // Kontrolujeme, zda je konverze z 2 do 10 (jak je nastaveno výše)
    if (inputNumberSystem !== 2 || outputNumberSystem !== 10) {
        return "Chyba: Nepodporovaná konverze"; 
    }

    let dekadickyVysledek = 0;
    let mocnina = 1; 

    // Procházíme binární číslo odzadu (od LSB)
    for (let i = inputNumber.length - 1; i >= 0; i--) {
        const cislice = inputNumber[i];
        
        if (cislice === '1') {
            dekadickyVysledek = dekadickyVysledek + mocnina;
        } 
        
        mocnina = mocnina * 2; 
    }

    // Vrátíme výsledek jako řetězec
    return dekadickyVysledek.toString(); 
}