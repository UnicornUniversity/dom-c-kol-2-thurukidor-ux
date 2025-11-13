//==============================================================================
// MAIN.JS - POSLEDNÍ POKUS O EXPORT PRO TESTY
// Exportujeme POUZE funkci main() s očekáváním, že testy najdou podpůrné funkce.
//==============================================================================

// Tyto podpůrné funkce NEexportujeme, necháme je jen uvnitř souboru.
function permittedInputSystems() {
    return 2; 
}

function permittedOutputSystems() {
    return 10; 
}

/**
 * Hlavní konverzní funkce, kterou volají automatické testy.
 */
// Zde zkusíme exportovat pouze hlavní funkci main
module.exports = function main(inputNumber, inputNumberSystem, outputNumberSystem) {
    
    // Použijeme podpůrné funkce pro kontrolu (testy by je měly najít lokálně)
    if (inputNumberSystem !== permittedInputSystems() || outputNumberSystem !== permittedOutputSystems()) {
        return "Chyba: Konverze není podporována touto implementací"; 
    }

    let dekadickyVysledek = 0;
    let mocnina = 1; 

    // Implementace převodu Binární -> Dekadická
    for (let i = inputNumber.length - 1; i >= 0; i--) {
        const cislice = inputNumber[i];
        
        if (cislice === '1') {
            dekadickyVysledek = dekadickyVysledek + mocnina;
        } 
        
        mocnina = mocnina * 2; 
    }

    // Vrátíme výsledek jako řetězec.
    return dekadickyVysledek.toString(); 
};