// Definuje, že vstup bude binární soustava (základ 2).
function permittedInputSystems() {
    return 2; 
}

// Definuje, že výstup bude dekadická soustava (základ 10).
function permittedOutputSystems() {
    return 10; 
}

/**
 * Hlavní konverzní funkce, kterou volají automatické testy.
 */
function main(inputNumber, inputNumberSystem, outputNumberSystem) {
    
    // Kontrola, zda provádíme očekávanou konverzi.
    if (inputNumberSystem !== 2 || outputNumberSystem !== 10) {
        return "Chyba: Konverze není podporována touto implementací"; 
    }

    let dekadickyVysledek = 0;
    let mocnina = 1; // 2^0 = 1

    // Implementace převodu Binární -> Dekadická
    // Procházíme řetězec od konce (od LSB)
    for (let i = inputNumber.length - 1; i >= 0; i--) {
        const cislice = inputNumber[i];
        
        // Pokud je bit '1', přičteme aktuální mocninu dvojky.
        if (cislice === '1') {
            dekadickyVysledek = dekadickyVysledek + mocnina;
        } 
        
        // Zdvojnásobíme mocninu pro další bit.
        mocnina = mocnina * 2; 
    }

    // Vrátíme výsledek jako řetězec.
    return dekadickyVysledek.toString(); 
}

// *** EXPORT funkcí pro testovací systém ***
// Zajišťuje, že testy najdou a spustí potřebné funkce.
module.exports = {
    main,
    permittedInputSystems,
    permittedOutputSystems
};