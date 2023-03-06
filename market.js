let c = Math.random() * 100
function open() {
  if (c < 1) {
    alert('Legendary (1%)')
    return
  }
  if (c < 5) {
    alert('Epic (5%)')
    return
  }
  if (c < 25) {
    alert('Rare (25%)')
    return
  }
  if (c < 99) {
    alert('Common (99%)')
    return
  }
}
open()
