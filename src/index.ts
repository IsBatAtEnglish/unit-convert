// convert(10, 'lb').to('kg')
import Units from './units'

const isPlural = (str: string): boolean => 
    str.substring(str.length-1).toLowerCase() === 's'
const removePlural = (str: string): string => 
    isPlural(str) ? str.substring(0, str.length-1) : str

/**
 * Chainable syntax
 * @param value The numeric value to be converted
 */
function convert(value: number): { from(unit: string): { to(newUnit: string): number } }
/**
 * Default syntax
 * @param value The numeric value to be converted
 * @param unit The original unit
 */
function convert(value: number, unit: string): { to(newUnit: string): number }
/**
 * Quick syntax
 * @param value The numeric value to be converted
 * @param unit The original unit
 * @param toUnit The target unit
 */
function convert(value: number, unit: string, toUnit: string): number


function convert(value: number, unit?: string, toUnit?: string) {
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
    return { from }
}

export default convert
export { convert }