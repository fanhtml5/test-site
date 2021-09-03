document.addEventListener('DOMContentLoaded', function() {
  function update() {
    txtTime.value = new Date().toLocaleString()
  }
  setInterval(update, 1000)
  update()
})