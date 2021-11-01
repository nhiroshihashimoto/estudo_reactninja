'use strict'

import reduce from '../reduce/reduce'
import reverse from '../reverse/reverse'

const reduceRight = (arr, ...params) => reduce(reverse(arr), ...params)

export default reduceRight
