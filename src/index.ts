// convert(10, 'lb').to('kg')
import Units from './units'

const isPlural = (str: string): boolean => 
    str.substring(str.length-1).toLowerCase() === 's'
const removePlural = (str: string): string => 
    isPlural(str) ? str.substring(0, str.length-1) : str

const convert = (originalValue: number, originalUnit: string) => {
    const to = (newUnit: string): number => {
        const fromUnit = Units[removePlural(originalUnit)]
        const toUnit = Units[removePlural(newUnit)]

        if (!fromUnit)
            throw new TypeError(`Unknown unit: ${originalUnit}`)
        if (!toUnit)
            throw new TypeError(`Unknown unit: ${newUnit}`)

        if (fromUnit.type !== toUnit.type)
            throw new TypeError(`Units provided are not from the same type. Attempted to convert `+
            `${originalValue}${originalUnit} (${fromUnit.type}) to ${newUnit} (${toUnit.type})`)

        // first, convert to SI
        const SIvalue = originalValue * fromUnit.convert
        // then convert from SI to the desired unit
        const converted = SIvalue / toUnit.convert

        return converted
    }

    return { to }
}

export default convert