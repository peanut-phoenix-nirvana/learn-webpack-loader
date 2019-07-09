module.exports = function (src) {
  if (src) {
    console.log('--- uppercase-loader input:', src)
    src = src.charAt(0).toUpperCase() + src.slice(1)
    console.log('--- uppercase-loader output:', src)
  }
  return `module.exports = '${src}'`
}