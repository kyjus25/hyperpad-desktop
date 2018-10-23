// IIFE keeps our variables private
// and gets executed immediately!
(function () {
  // make doc editable and focus
  var doc = document.getElementById('doc')
  doc.contentEditable = true
  doc.focus()

  // if this is a new doc, generate a unique identifier
  // append it as a query param
  var id = getUrlParameter('id')

  return new Promise(function (resolve, reject) {
    // subscribe to the changes via Pusher
    Pusher.logToConsole = true

    var pusher = new Pusher('30fe8545ec1b5867e4b6', {
      cluster: 'us2',
      authEndpoint: "http://localhost:5000/pusher/auth"
    })

    var channel = pusher.subscribe(id)
    channel.bind('client-text-edit', function (html) {
      // save the current position
      var currentCursorPosition = getCaretCharacterOffsetWithin(doc)
      doc.innerHTML = html
      // set the previous cursor position
      setCaretPosition(doc, currentCursorPosition)
    })
    channel.bind('pusher:subscription_succeeded', function () {
      resolve(channel)
    })
  }).then(function (channel) {
    function triggerChange (e) {
      channel.trigger('client-text-edit', e.target.innerHTML)
    }

    doc.addEventListener('input', triggerChange)
  })

  // function to get a query param's value
  function getUrlParameter (name) {
    var param = window.location.href.split(/[/ ]+/).pop()
    return param
  }

  function getCaretCharacterOffsetWithin (element) {
    var caretOffset = 0
    var doc = element.ownerDocument || element.document
    var win = doc.defaultView || doc.parentWindow
    var sel
    if (typeof win.getSelection !== 'undefined') {
      sel = win.getSelection()
      if (sel.rangeCount > 0) {
        var range = win.getSelection().getRangeAt(0)
        var preCaretRange = range.cloneRange()
        preCaretRange.selectNodeContents(element)
        preCaretRange.setEnd(range.endContainer, range.endOffset)
        caretOffset = preCaretRange.toString().length
      }
    } else if ((sel = doc.selection) && sel.type != 'Control') {
      var textRange = sel.createRange()
      var preCaretTextRange = doc.body.createTextRange()
      preCaretTextRange.moveToElementText(element)
      preCaretTextRange.setEndPoint('EndToEnd', textRange)
      caretOffset = preCaretTextRange.text.length
    }
    return caretOffset
  }

  function setCaretPosition (el, pos) {
    // Loop through all child nodes
    for (var node of el.childNodes) {
      if (node.nodeType == 3) { // we have a text node
        if (node.length >= pos) {
          // finally add our range
          var range = document.createRange(),
            sel = window.getSelection()
          range.setStart(node, pos)
          range.collapse(true)
          sel.removeAllRanges()
          sel.addRange(range)
          return -1 // we are done
        } else {
          pos -= node.length
        }
      } else {
        pos = setCaretPosition(node, pos)
        if (pos == -1) {
          return -1 // no need to finish the for loop
        }
      }
    }
    return pos // needed because of recursion stuff
  }
})()
