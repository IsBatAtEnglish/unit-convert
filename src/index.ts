// convert(10, 'lb').to('kg')
import Units from './units'

const isPlural = (str: string): boolean => 
    str.substring(str.length-1).toLowerCase() === 's'
const removePlural = (str: string): string => 
    isPlural(str) ? str.substring(0, str.length-1) : str

/**
 * convert(10)
 *  .from('lbs')
 *  .to('kg')
 * 
 * convert(10, 'lbs', 'kg')
 * 
 * convert(10, 'lbs').to('kg')
 */

const convert = (value: number|string, unit?: string, toUnit?: string) => {
    let operand: number = parseFloat(value.toString())
    let originalUnit: string = unit
    
    const to = (newUnit: string): number => {
        const fromUnit = Units[removePlural(originalUnit)]
        const toUnit = Units[removePlural(newUnit)]

        if (!fromUnit)
            throw new TypeError(`Unknown unit: ${unit}`)
        if (!toUnit)
            throw new TypeError(`Unknown unit: ${newUnit}`)

        if (fromUnit.type !== toUnit.type)
            throw new TypeError(`Units provided are not of the same type. Attempted to convert `+
            `${value}${unit} (${fromUnit.type}) to ${newUnit} (${toUnit.type})`)

        // first, convert to SI
        const SIvalue = operand * fromUnit.convert
        // then convert from SI to the desired unit
        const converted = SIvalue / toUnit.convert

        return converted
    }

    const from = (unit: string) => {
        if (!Units[removePlural(unit)])
            throw new TypeError(`Unknown unit: ${unit}`)

        originalUnit = removePlural(unit)

        return { to }
    }

    // Quick syntax: convert(10, 'lbs', 'kg')
    if(unit && toUnit)
        return to(toUnit)

    // Default syntax: convert(10, 'lbs').to('kg')
    if(unit && !toUnit)
        return { to }

    // Chainable syntax: convert(10).from('lbs').to('kg')
    return { from, to }
}

export default convert
export { convert }