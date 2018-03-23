const fn = () => null
// eslint-disable-next-line no-restricted-syntax
exports.fn = fn.bind(null, 1)

const obj = {
  method() {
    return null
  },
}
exports.method = obj.method.bind(obj)
