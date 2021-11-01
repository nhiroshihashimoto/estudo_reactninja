'use strict'

import { expect } from 'chai'
import reduceRightRecursive from './reduceRight-recursive'

it('reduceRightRecursive(["1", "2", "3"], (acc, item) => acc + item, "") should return "321"', () => {
    const before = reduceRightRecursive(["1", "2", "3"], (acc, item) => acc + item, "")
    const after = "321"
    expect(before).to.be.equal(after)
})