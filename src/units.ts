interface Unit {
    type: 'mass' | 'volume' | 'area' | 'length',
    convert: number
}

const Units: { [key: string]: Unit } = {
    'kg': { type: 'mass', convert: 1 },
    'lbs': { type: 'mass', convert: 0.45359237 }
}

export default Units