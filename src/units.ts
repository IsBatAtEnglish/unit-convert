interface Unit {
    type: 'mass' | 'volume' | 'area' | 'length',
    convert: number
}

const Units: { [key: string]: Unit } = {
    'kg': { type: 'mass', convert: 1 }, // kilogram
    'g': { type: 'mass', convert: 0.001 }, // gram
    'mg': { type: 'mass', convert: 0.000001 }, // milligram
    'lb': { type: 'mass', convert: 0.45359237 }, // pound, 1 kg ~ 0.45 lbs
    'gr': { type: 'mass', convert: 0.00006479891 }, // grain
    'oz': { type: 'mass', convert: 0.028349523125 }, // ounce
    'st': { type: 'mass', convert: 6.35029318 }, // stone
    'qr': { type: 'mass', convert: 12.70058636 }, // quarter
    'cwt': { type: 'mass', convert: 50.80234544 }, // hundredweight
    't': { type: 'mass', convert: 1016.0469088 }, // ton
}

export default Units