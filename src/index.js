module.exports = function reverse (n) {
  const ns = (n > 0) ? String(n) : String(n).slice(1)
  return +ns.split("").reverse().join("")
}
