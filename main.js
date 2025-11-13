
// vstup bude binární (základ 2)
export function permittedInputSystems() { 
    return 2; 
}

// výstup bude dekadický (základ 10)
export function permittedOutputSystems() { 
}


export function main(inputNumber, inputNumberSystem, outputNumberSystem) { // <-- OPRAVA: POUŽÍT EXPORT
    
    // (2 -> 10)
    if (inputNumberSystem !== 2 || outputNumberSystem !== 10) {
        return "Chyba: Nepodporovaná konverze"; 
    }

    let dekadickyVysledek = 0;
    let mocnina = 1; 

    // procházíme binární číslo odzadu
    for (let i = inputNumber.length - 1; i >= 0; i--) {
        const cislice = inputNumber[i];
        
        if (cislice === '1') {
            dekadickyVysledek = dekadickyVysledek + mocnina;
        } 
        
        mocnina = mocnina * 2; 
    }

    // vrátíme výsledek 
    return dekadickyVysledek.toString(); 
}
