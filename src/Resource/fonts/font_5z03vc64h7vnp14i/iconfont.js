;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shezhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M848.2028 624.638c61.7667 0 111.9928-50.2538 111.9928-111.9928 0-61.7667-50.2262-111.9949-111.9928-111.9949h-19.414016c-3.9373-11.1831-8.448-22.1194-13.4779-32.7014l13.6704-13.698c21.0811-21.0801 32.7025-49.2165 32.7025-79.1828 0-29.995-11.6214-58.1028-32.7025-79.1839-21.0801-21.1098-49.2165-32.7035-79.1839-32.7035-29.9704 0-58.1048 11.5937-79.1818 32.7035l-13.6704 13.6714c-10.6107-5.033-21.5214-9.5437-32.7311-13.481v-19.412992c0-61.7656-50.2292-111.9939-111.9949-111.9939-61.7636 0-111.9928 50.2282-111.9928 111.9939v19.412992c-11.2118 3.9373-22.1225 8.448-32.7322 13.481l-13.6714-13.6714c-21.077-21.1098-49.2124-32.7035-79.1828-32.7035-29.9663 0-58.0987 11.5937-79.1839 32.7035-21.076 21.0801-32.7014 49.1889-32.7014 79.1839 0 29.9674 11.6255 58.1028 32.7014 79.1828l13.6714 13.6704c-5.0289 10.6097-9.5406 21.5194-13.4779 32.7291h-19.414016c-61.7636 0-111.9928 50.2282-111.9928 111.9949 0 61.739 50.2292 111.9928 111.9928 111.9928h19.414016c3.9373 11.2118 8.449 22.1215 13.4779 32.7291l-13.6714 13.6714c-21.076 21.0811-32.7014 49.1909-32.7014 79.1849 0 29.996 11.6255 58.1028 32.7014 79.1828 21.0852 21.078 49.2175 32.7035 79.1839 32.7035 29.9715 0 58.1059-11.6255 79.1828-32.7035l13.6714-13.6704c10.6097 5.0309 21.5204 9.5119 32.7322 13.4789v19.416064c0 61.7359 50.2292 111.9928 111.9928 111.9928 61.7656 0 111.9949-50.2569 111.9949-111.9928v-19.416064c11.2097-3.967 22.1204-8.448 32.7311-13.5045l13.6704 13.695c21.077 21.078 49.2124 32.7035 79.1818 32.7035 29.9674 0 58.1038-11.6255 79.1839-32.7035 21.0811-21.0801 32.7025-49.1868 32.7025-79.1828 0-29.994-11.6214-58.1038-32.7025-79.1849l-13.6704-13.698c5.0299-10.6076 9.5406-21.5194 13.4779-32.7025H848.202752zM789.3873 710.6294c10.5277 10.5001 16.297 24.5555 16.297 39.594 0 15.0108-5.7692 29.0673-16.297 39.5909-21.0504 21.0278-58.1294 21.0278-79.1808 0l-43.1186-43.1452-18.4842 10.3629c-18.647 10.4172-38.826 18.7556-60.0177 24.7695l-20.3694 5.7723v61.057024c0 30.8675-25.1279 55.9933-55.9985 55.9933s-55.9985-25.1259-55.9985-55.9933v-61.057024l-20.3674-5.7723c-21.2183-6.0416-41.4259-14.3534-60.0156-24.7695l-18.4852-10.3363-43.1206 43.1176c-21.0534 21.0278-58.1294 21.0278-79.1828 0-10.5267-10.5236-16.2939-24.5801-16.2939-39.5909 0-15.0385 5.7672-29.0939 16.2939-39.594l43.1176-43.1165-10.3588-18.4852c-10.3916-18.5907-18.7054-38.7697-24.746-60.0412l-5.7733-20.3448h-61.053951999999995c-30.8695 0-55.9954-25.1279-55.9954-55.9964 0-30.8705 25.1249-55.9985 55.9954-55.9985h61.053951999999995l5.7733-20.3704c6.0406-21.2449 14.3544-41.4505 24.746-60.0156l10.3588-18.4832-43.1176-43.1186c-10.5267-10.5277-16.2939-24.5811-16.2939-39.5919 0-15.0395 5.7672-29.0939 16.2939-39.5919 21.0545-21.0278 58.1304-21.0278 79.1828 0l43.1206 43.1176 18.4852-10.3608c18.5897-10.3905 38.7983-18.731 60.0156-24.746l20.3674-5.7702v-61.056000000000004c0-30.8951 25.1279-55.9964 55.9985-55.9964s55.9985 25.1013 55.9985 55.9964v61.056000000000004l20.3694 5.7702c21.1917 6.016 41.3706 14.3278 60.0177 24.7716l18.4842 10.3352 43.1186-43.1176c21.0524-21.0278 58.1315-21.0278 79.1808 0 10.5277 10.498 16.297 24.5524 16.297 39.5919 0 15.0108-5.7692 29.0642-16.297 39.5919l-43.0909 43.1186 10.3076 18.4832c10.4479 18.6737 18.7832 38.8813 24.7706 60.0156l5.7733 20.3704h61.053951999999995c30.8695 0 55.9974 25.1279 55.9974 55.9985 0 30.8685-25.1279 55.9964-55.9974 55.9964h-61.053951999999995l-5.7733 20.3448c-5.9884 21.161-14.3227 41.342-24.7706 60.0412l-10.3076 18.4852L789.3873 710.6294zM512.2181 344.6528c-92.6372 0-167.9913 75.3551-167.9913 167.9923 0 92.6351 75.3541 167.9913 167.9913 167.9913s167.9913-75.3562 167.9913-167.9913C680.2094 420.0079 604.8553 344.6528 512.2181 344.6528zM512.2181 624.638c-61.7636 0-111.9928-50.2538-111.9928-111.9928 0-61.7667 50.2292-111.9949 111.9928-111.9949 61.7656 0 111.9949 50.2282 111.9949 111.9949C624.213 574.3841 573.9848 624.638 512.2181 624.638z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shanchu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M344.4593 791.382c15.4235 0 27.902-12.4795 27.902-27.902V456.558592c0-15.4225-12.4795-27.902-27.902-27.902-15.4225 0-27.902 12.4805-27.902 27.902v306.92249599999997C316.5573 778.9036 329.0368 791.382 344.4593 791.382zM511.872 791.382c15.4235 0 27.902-12.4795 27.902-27.902V456.558592c0-15.4225-12.4795-27.902-27.902-27.902s-27.902 12.4805-27.902 27.902v306.92249599999997C483.969 778.9036 496.4485 791.382 511.872 791.382zM679.2837 791.382c15.4235 0 27.902-12.4795 27.902-27.902V456.558592c0-15.4225-12.4795-27.902-27.902-27.902s-27.902 12.4805-27.902 27.902v306.92249599999997C651.3818 778.9036 663.8602 791.382 679.2837 791.382zM818.7935 149.6361H703.2340479999999c-12.4795-48.0113-55.8039-83.7059-107.6572-83.7059H428.16512000000006c-51.8533 0-95.1777 35.6946-107.6572 83.7059H204.949504c-61.5526 0-111.6078 50.0828-111.6078 111.6078v27.902976h27.901952v27.901952h55.803904v530.138112c0 61.526 50.0552 111.6078 111.6078 111.6078h446.432256c61.5547 0 111.6078-50.0818 111.6078-111.6078V317.047808h55.803904v-27.901952h27.901952v-27.902976C930.4013 199.7179 880.3482 149.6361 818.7935 149.6361zM428.1651 121.7341h167.411712c20.5445 0 38.3652 11.308 48.0389 27.902H380.12723200000005C389.801 133.0422 407.6206 121.7341 428.1651 121.7341zM790.8915 847.1859c0 30.7896-25.0399 55.8039-55.8039 55.8039H288.65536000000003c-30.763 0-59.6726-25.0143-59.6726-55.8039l3.8687-530.1381h558.040064V847.1859199999999zM149.1446 261.2439c0-30.7896 25.0419-55.8039 55.8039-55.8039H818.793472c30.7651 0 55.8039 25.0143 55.8039 55.8039H149.144576z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon52" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 65.309448c-246.710938 0-446.709995 199.999057-446.709995 446.709995s199.999057 446.709995 446.709995 446.709995 446.709995-199.999057 446.709995-446.709995S758.710938 65.309448 512 65.309448zM685.721577 561.652863 338.279447 561.652863l0-99.267864 347.441107 0L685.720553 561.652863z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xialajiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M128 341.333333 512 725.333333 896 341.333333Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M474.197 576.049c21.544 21.034 56.478 21.034 78.026 0l393.466-383.229c21.546-21.036 21.546-55.142 0-76.179s-56.48-21.037-78.026 0l-354.454 345.23-354.454-345.23c-21.549-21.037-56.482-21.037-78.028 0-21.547 21.036-21.547 55.142 0 76.179l393.467 383.228zM867.663 448.949l-354.454 345.23-354.454-345.23c-21.549-21.037-56.482-21.037-78.028 0-21.547 21.036-21.547 55.142 0 76.179l393.468 383.228c21.544 21.034 56.478 21.034 78.026 0l393.466-383.229c21.546-21.036 21.546-55.142 0-76.179-21.547-21.036-56.482-21.037-78.026 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon-double-arrow-up" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M549.803 447.951c-21.544-21.034-56.478-21.034-78.026 0l-393.466 383.229c-21.546 21.036-21.546 55.142 0 76.179s56.48 21.037 78.026 0l354.454-345.23 354.454 345.23c21.549 21.037 56.482 21.037 78.028 0 21.547-21.036 21.547-55.142 0-76.179l-393.467-383.228zM156.337 575.051l354.454-345.23 354.454 345.23c21.549 21.037 56.482 21.037 78.028 0 21.547-21.036 21.547-55.142 0-76.179l-393.468-383.228c-21.544-21.034-56.478-21.034-78.026 0l-393.466 383.229c-21.546 21.036-21.546 55.142 0 76.179 21.547 21.036 56.482 21.037 78.026 0z"  ></path>' +
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