;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M890.12699 532.818141c-6.493901 21.311375-21.656229 77.531817-73.265654 77.531817l-445.667246 31.527041 10.994402 37.654598 391.397225 0 0 0c46.695508 0 84.549651 37.854143 84.549651 84.549651s-37.854143 84.549651-84.549651 84.549651-84.549651-37.854143-84.549651-84.549651c0-12.043291 2.599198-23.451108 7.137561-33.82027L462.069821 730.260979c4.538363 10.369162 7.137561 21.776979 7.137561 33.82027 0 46.695508-37.854143 84.549651-84.549651 84.549651s-84.549651-37.854143-84.549651-84.549651c0-27.375487 13.247722-51.434439 33.42425-66.883293L318.467215 645.60695l-1.449002 0.101307 0-5.066389L206.54924 255.324106c-6.334265-21.697161-19.48682-30.084179-36.58115-30.506804l-51.330062 0-19.730367 0c0 0-31.81766-0.774643-32.501228-17.32969-0.99056-23.981181 1.101077-33.209356 34.419927-34.655288l51.930743 0c21.718651 0.323365 83.34522-0.603751 97.771791 48.800449l105.45989 368.169197 440.99483-32.488948c22.666232 0 32.452109-17.931395 41.041742-41.280172L890.12699 327.493799c0-22.801309 7.583722-19.984147-15.081487-19.984147L359.306342 307.509652c-0.005117 0-0.008186 0.00307-0.013303 0.00307-0.005117 0-0.008186-0.00307-0.013303-0.00307l-8.441253 0c0 0-16.910135-0.597611-16.910135-25.361621 0-23.203468 16.910135-25.369807 16.910135-25.369807l570.941414 0c20.88568 0 37.815257 16.832364 37.815257 37.594223L890.12699 532.818141zM773.585717 797.902542c18.678408 0 33.82027-15.142885 33.82027-33.821293 0-18.678408-15.140839-33.821293-33.82027-33.821293s-33.82027 15.142885-33.82027 33.821293C739.765447 782.759657 754.907309 797.902542 773.585717 797.902542zM350.838484 764.081249c0 18.678408 15.140839 33.821293 33.82027 33.821293s33.82027-15.142885 33.82027-33.821293c0-18.678408-15.140839-33.821293-33.82027-33.821293S350.838484 745.402841 350.838484 764.081249z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
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

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)