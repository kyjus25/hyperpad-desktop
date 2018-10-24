// IIFE keeps our variables private
// and gets executed immediately!
(function () {
  // make doc editable and focus

  // var doc = document.getElementById('doc')
  // doc.contentEditable = true
  // doc.focus()

  var editor = CodeMirror.fromTextArea(doc, {
    lineNumbers: true,
    mode: 'javascript'
  })

  // console.log(CodeMirror.modes);

  // if this is a new doc, generate a unique identifier
  // append it as a query param
  var id = getUrlParameter('id')

  return new Promise(function (resolve, reject) {
    // subscribe to the changes via Pusher
    // Pusher.logToConsole = true

    var pusher = new Pusher('30fe8545ec1b5867e4b6', {
      cluster: 'us2',
      authEndpoint: 'http://localhost:5000/pusher/auth'
    })

    var channel = pusher.subscribe(id)
    channel.trigger('client-text-edit')
    channel.bind('client-text-edit', function (html) {
      // save the current position
      var currentCursorPosition = editor.getCursor()
      // doc.innerHTML = html
      editor.setValue(html);
      // set the previous cursor position
      editor.setCursor(currentCursorPosition)
    })
    channel.bind('pusher:subscription_succeeded', function () {
      resolve(channel)
    })
  }).then(function (channel) {
    function triggerChange (e) {
      channel.trigger('client-text-edit', editor.getValue())
    }
    editor.on('change', function(CodeMirror, change) {
      triggerChange();
    })
    // doc.addEventListener('input', triggerChange)

  })

  // function to get a query param's value
  function getUrlParameter (name) {
    var param = window.location.href.split(/[/ ]+/).pop()
    return param
  }
})()
