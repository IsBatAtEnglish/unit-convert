// convert(10, 'lbs').to('kg')
import Units from './units'

const convert = (originalValue: number, originalUnit: string) => {
    const to = (newUnit: string): number => {
        const fromUnit = Units[originalUnit]
        const toUnit = Units[newUnit]
        
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