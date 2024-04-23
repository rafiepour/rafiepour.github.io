var ignoreScrollEvents = false
function syncScroll(element1, element2) {
element1.scroll(function (e) {
  var ignore = ignoreScrollEvents
  ignoreScrollEvents = false
  if (ignore) return

  ignoreScrollEvents = true
  element2.scrollTop(element1.scrollTop())
})
}
syncScroll($("#panel"), $("#content"))
syncScroll($("#content"), $("#panel"))