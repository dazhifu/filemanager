;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-anzhuo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M963.615476 347.084253q23.341923 0 39.579783 14.71556t16.23786 36.027751l0 299.38554q0 20.297325-16.23786 35.012885t-39.579783 14.71556l-18.267592 0q-23.341923 0-39.579783-14.71556t-16.23786-35.012885l0-299.38554q0-21.312191 16.23786-36.027751t39.579783-14.71556l18.267592 0zM140.558957 347.084253q23.341923 0 38.564917 14.71556t15.222994 36.027751l0 299.38554q0 20.297325-15.222994 35.012885t-38.564917 14.71556l-18.267592 0q-23.341923 0-39.579783-14.71556t-16.23786-35.012885l0-299.38554q0-21.312191 16.23786-36.027751t39.579783-14.71556l18.267592 0zM700.76512 111.635286q18.267592 8.11893 38.057484 22.327057t38.057484 33.490586 31.968286 42.116949 19.789892 48.206146l-576.444023 0q16.23786-53.787911 51.250745-88.293363t70.533204-54.802777l-51.758178-81.189299q-2.029732-2.029732-0.507433-7.611497t10.656095-11.670962q8.11893-7.104064 15.222994-6.596631t9.133796 2.537166l52.773044 83.219031q28.416255-13.193261 59.877108-20.297325t64.951439-7.104064q69.010904 0 128.888012 28.416255l53.787911-84.233898q2.029732-2.029732 7.611497-2.029732t16.745293 6.089197q10.148662 5.074331 11.670962 9.133796t-0.507433 6.089197zM417.61744 198.913783q13.193261 0 22.327057-9.133796t9.133796-22.327057-9.133796-22.327057-22.327057-9.133796-22.327057 9.133796-9.133796 22.327057 9.133796 22.327057 22.327057 9.133796zM667.274534 194.854318q13.193261 0 22.327057-9.133796t9.133796-22.327057-9.133796-22.327057-22.327057-9.133796-22.327057 9.133796-9.133796 22.327057 9.133796 22.327057 22.327057 9.133796zM828.638266 321.712597l1.014866 456.689807q0 22.327057-14.71556 37.550051t-36.027751 15.222994l-14.208127 0 0 142.081273q0 20.297325-14.71556 35.520318t-36.027751 15.222994l-29.431121 0q-20.297325 0-35.012885-15.222994t-14.71556-35.520318l0-142.081273-186.735388 0 0 142.081273q0 20.297325-14.71556 35.520318t-36.027751 15.222994l-29.431121 0q-20.297325 0-35.012885-15.222994t-14.71556-35.520318l0-142.081273-11.163529 0q-21.312191 0-36.027751-15.222994t-14.71556-37.550051l0-456.689807 572.384558 0z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
