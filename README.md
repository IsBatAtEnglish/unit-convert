# Unit-Convert
## Installation
```bash
    * not published yet *
```
## Usage
```ts
    const { convert } = require('unit-convert')

    convert(10)
        .from('kg')
        .to('g') // 10000

    convert(512, 'lbs')
        .to('oz') // 8192

    convert(32, 'oz', 'lbs') // 2
```
## Supported Units
#### Mass
* kg (kilogram)
* g (gram)
* mg (milligram)
* lb (pound)
* gr (grain)
* oz (ounce)
* st (stone)
* qr (quarter)
* cwt (long hundredweight)
* t (tonne)