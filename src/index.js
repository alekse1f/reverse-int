module.exports = function reverse (n) {
  const ns = String(n)
  return +ns.split("").reverse().join("")
}
