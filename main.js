/**
 * povolene vstupni systemy. testy musi mit 2, 8, 10, 16
 * @returns {number[]} radix list.
 */
export function permittedInputSystems() {
    return [2, 8, 10, 16];
}

/**
 * povolene vystupni systemy. Stejne jako input
 * @returns {number[]} radix list
 */
export function permittedOutputSystems() {
    return [2, 8, 10, 16];
}

// mapa pro prevod: znak > Cislo (10 = 'A')
const CHAR_TO_DECIMAL = {
    '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
    'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15,
    'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15
};

// Mapa pro prevod: cislo > Znak (10 = 'A')
const DECIMAL_TO_CHAR = {
    10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F'
};

/**
 * preved na decimalni (radix > 10)
 *
 * @param {string} inputNumber - cislo v stringu
 * @param {number} inputSystem - radix (2, 8, 10, 16)
 * @returns {number} decimalni cislo
 */
function toDecimal(inputNumber, inputSystem) {
    const normalizedInput = inputNumber.toUpperCase();
    let decimalValue = 0;
    let power = 1; // zacni s Base^0

    // jdi zprava doleva (nejmensi rad)
    for (let i = normalizedInput.length - 1; i >= 0; i--) {
        const digitChar = normalizedInput[i];
        const digitValue = CHAR_TO_DECIMAL[digitChar];

        // zkontroluj platnost
        if (digitValue === undefined || digitValue >= inputSystem) {
             throw new Error(`Spatne cislo '${digitChar}' pro system ${inputSystem}.`);
        }
        
        // hodnota + digitValue * power
        decimalValue += digitValue * power;
        
        // dalsi power
        power *= inputSystem;
    }

    return decimalValue;
}

/**
 * preved z decimalni do jine soustavy (radix <= 16).
 *
 * @param {number} decimalNumber - decimalni cislo
 * @param {number} outputSystem - cilevy radix
 * @returns {string} vysledne cislo ve stringu
 */
function fromDecimal(decimalNumber, outputSystem) {
    if (decimalNumber === 0) {
        return "0";
    }

    let num = decimalNumber;
    let result = '';

    while (num > 0) {
        // zbytek = nova cislice
        const remainder = num % outputSystem;

        // cislo > znak (napr. 10 -> 'A')
        let digitChar;
        if (remainder < 10) {
            digitChar = remainder.toString();
        } else {
            digitChar = DECIMAL_TO_CHAR[remainder]; 
        }

        // pridej dopredu
        result = digitChar + result;

        // dalsi deleni
        num = Math.floor(num / outputSystem);
    }

    return result;
}

/**
 * hlavni funkce. prevod A -> B pres 10
 *
 * @param {string} inputNumber - vstupni cislo
 * @param {number} inputSystem - vstupni radix
 * @param {number} outputSystem - cilevy radix
 * @returns {string} převedene cislo
 */
export function main(inputNumber, inputSystem, outputSystem) {
    // krok 1: A -> 10
    const decimalValue = toDecimal(inputNumber, inputSystem);

    // krok 2: 10 -> B
    const outputNumber = fromDecimal(decimalValue, outputSystem);

    return outputNumber;
}