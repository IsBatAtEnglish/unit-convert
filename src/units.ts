interface Unit {
    type: 'mass' | 'volume' | 'area' | 'length',
    convert: number
}

const Units: { [key: string]: Unit } = {
    'kg': { type: 'mass', convert: 1 },
    'lb': { type: 'mass', convert: 0.45359237 }, // 1 kg ~ 0.45 lbs
    'gr': { type: 'mass', convert: 0.00006479891 },
    'oz': { type: 'mass', convert: 0.028349523125 },
    'st': { type: 'mass', convert: 6.35029318 },
    'qr': { type: 'mass', convert: 12.70058636 },
    'cwt': { type: 'mass', convert: 50.80234544 }
}

export default Units