'use strict'

import { expect } from 'chai'
import reduceRight from './reduceRight'

it('reduceRight(["1", "2", "3"], (acc, item) => acc + item, "") should return "321"', () => {
    const before = reduceRight(["1", "2", "3"], (acc, item) => acc + item, "")
    const after = "321"
    expect(before).to.be.equal(after)
})