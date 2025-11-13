/**
 * Povoluje vstupní číselné soustavy, které jsou testovány v testovací složce.
 * @returns {number[]} Pole povolených vstupních radixů.
 */
export function permittedInputSystems() {
    return [2, 8, 10, 16];
}

/**
 * Povoluje výstupní číselné soustavy, které jsou testovány v testovací složce.
 * @returns {number[]} Pole povolených výstupních radixů.
 */
export function permittedOutputSystems() {
    return [2, 8, 10, 16];
}

// Mapa pro převod znaků větších než 9 na jejich desítkové hodnoty (pro input)
const CHAR_TO_DECIMAL = {
    '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
    'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15,
    'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15
};

// Mapa pro převod desítkových hodnot větších než 9 na jejich znakové reprezentace (pro output)
const DECIMAL_TO_CHAR = {
    10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F'
};

/**
 * Převádí číslo z libovolné vstupní soustavy (radix <= 16) do desítkové soustavy.
 * Využívá metodu součtu vážených řádů (Hornerovo schéma).
 * NESMÍ POUŽÍT vestavěnou konverzi typu parseInt(..., radix).
 *
 * @param {string} inputNumber - Číslo v řetězcové reprezentaci.
 * @param {number} inputSystem - Radix vstupní soustavy.
 * @returns {number} Převedené číslo v desítkové soustavě.
 */
function toDecimal(inputNumber, inputSystem) {
    const normalizedInput = inputNumber.toUpperCase();
    let decimalValue = 0;
    let power = 1; // Base^0

    // Procházíme řetězec zprava doleva
    for (let i = normalizedInput.length - 1; i >= 0; i--) {
        const digitChar = normalizedInput[i];
        const digitValue = CHAR_TO_DECIMAL[digitChar];

        // Ověření platnosti číslice pro daný radix
        if (digitValue === undefined || digitValue >= inputSystem) {
             throw new Error(`Neplatná číslice '${digitChar}' pro soustavu ${inputSystem}.`);
        }
        
        // Přidání vážené hodnoty
        decimalValue += digitValue * power;
        
        // Zvýšení mocniny základu pro další řád
        power *= inputSystem;
    }

    return decimalValue;
}

/**
 * Převádí číslo z desítkové soustavy do libovolné cílové soustavy (radix <= 16).
 * Využívá metodu opakovaného dělení se zbytkem.
 * NESMÍ POUŽÍT vestavěnou konverzi typu number.toString(radix).
 *
 * @param {number} decimalNumber - Číslo v desítkové soustavě.
 * @param {number} outputSystem - Radix cílové soustavy.
 * @returns {string} Převedené číslo v řetězcové reprezentaci.
 */
function fromDecimal(decimalNumber, outputSystem) {
    if (decimalNumber === 0) {
        return "0";
    }

    let num = decimalNumber;
    let result = '';

    while (num > 0) {
        // 1. Zbytek po dělení
        const remainder = num % outputSystem;

        // 2. Převod zbytku na znak (pro 10-15 použijeme A-F)
        let digitChar;
        if (remainder < 10) {
            digitChar = remainder.toString();
        } else {
            // Použijeme A-F z mapy
            digitChar = DECIMAL_TO_CHAR[remainder]; 
        }

        // 3. Přidáme znak na začátek výsledku
        result = digitChar + result;

        // 4. Připravíme číslo pro další iteraci
        num = Math.floor(num / outputSystem);
    }

    return result;
}

/**
 * Hlavní funkce pro převod čísla z jedné soustavy do druhé.
 *
 * @param {string} inputNumber - Číslo ve vstupní soustavě.
 * @param {number} inputSystem - Radix vstupní soustavy (2, 8, 10, 16).
 * @param {number} outputSystem - Radix cílové soustavy (2, 8, 10, 16).
 * @returns {string} Převedené číslo v cílové soustavě.
 */
export function main(inputNumber, inputSystem, outputSystem) {
    // 1. Převod ze vstupní soustavy do desítkové
    const decimalValue = toDecimal(inputNumber, inputSystem);

    // 2. Převod z desítkové soustavy do cílové soustavy
    const outputNumber = fromDecimal(decimalValue, outputSystem);

    return outputNumber;
}