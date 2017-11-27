;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-fangdajing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M850.453 800.653l0.105-0.223-197.89-193.493c38.961-45.944 61.363-103.043 63.198-161.203 3.664-70.834-24.038-144.003-74.073-195.682-42.739-45.105-102.838-75.421-164.821-83.209-12.031-1.639-24.352-2.458-36.625-2.458-61.344 0-121.126 19.942-168.322 56.113-54.705 40.781-92.468 101.996-103.616 167.925-11.054 61.446 0.911 127.372 32.811 180.82 21.819 37.152 52.888 69.073 89.828 92.298 33.909 21.453 72.924 35.474 112.775 40.485 11.958 1.62 24.219 2.439 36.445 2.439 56.586 0 112.572-17.3 158.132-48.773l197.642 193.343 3.655 3.368 0.105-0.091c6.515 5.235 14.768 8.14 23.319 8.14 20.202 0 36.637-16.127 36.637-35.947 0-8.787-3.358-17.279-9.308-23.853M649.856 536.743c-32.378 64.734-97.46 112.073-169.899 123.548-33.909 5.773-69.646 3.986-102.941-5.139-64.972-17.433-120.583-63.58-148.808-123.528-32.677-66.559-28.602-150.391 10.387-213.6 34.702-58.404 95.873-99.427 163.56-109.707l4.802-0.71c2.525-0.409 5.069-0.799 7.555-1.082 8.369-0.858 16.882-1.286 25.282-1.286 34.569 0 68.716 7.283 98.811 21.085 55.059 24.691 98.955 70.579 120.409 125.929 23.529 59.109 20.125 128.061-9.157 184.488z"  ></path>' +
    '' +
    '</symbol>' +
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