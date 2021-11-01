'use strict'

import reduceRecursive from '../reduce/reduce-recursive'
import reverseRecursive from '../reverse/reverse-recursive'

const reduceRightRecursive = (arr, ...params) => reduceRecursive(reverseRecursive(arr), ...params)

export default reduceRightRecursive
