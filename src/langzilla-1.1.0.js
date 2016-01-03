//$(document).ready(function(){
(function( $ ){
  $.fn.createLang = function( options ) {
    var settings = $.extend( {
      'position'         : 'absolute',
      'top' : 0,
      'right' : 80,
      'locals':{},
      'callBack': function(langCode){},
      'locPath':"langzilla/loc/"
    }, options);
    //------------
    var getFirstBrowserLanguage = function () {
      var nav = window.navigator,
      browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
      i,
      language;

      // support for HTML 5.1 "navigator.languages"
      if (Array.isArray(nav.languages)) {
        for (i = 0; i < nav.languages.length; i++) {
          language = nav.languages[i];
          if (language && language.length) {
            return language;
          }
        }
      }

      // support for other well known properties in browsers
      for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
        language = nav[browserLanguagePropertyKeys[i]];
        if (language && language.length) {
          return language;
        }
      }

      return null;
    };
  
    //
    var langCode = getFirstBrowserLanguage();
    //
    function deleteLastAppPrepText(lastLang, selector){
        $.getJSON( settings.locPath + lastLang + ".json", function( data ) {
                $.each(data, function(index, value){
                    if(index===selector)
                    {
                        var str = $("."+index).html();
                        value = value.split("[:]")[0];
                        var re = new RegExp(""+value+"", 'g');
                        $("."+index).html(str.replace(re, ''));
                    }
                });
            });
    }
    function setLang(langCode, checked){
        var lastLang = "";
        if(checked)
        {
            lastLang = getCookie("langVal");
            createCookie("langVal", langCode, 1);
        }
        if(getCookie("langVal")!=="") langCode = getCookie("langVal");
        $.getJSON( settings.locPath + langCode + ".json", function( data ) {
                $.each(data, function(index, value){
                    if(value.indexOf('[:]') + 1) {
                        var action = value.split("[:]")[1];
                        if(action==="prepend"||action==="append"||action==="html"){
                            switch(action){
                                case "prepend":
                                    if(lastLang!=="")deleteLastAppPrepText(lastLang, index);
                                    $("."+index).prepend(value.split("[:]")[0]);
                                    break;
                                case "append":
                                    if(lastLang!=="")deleteLastAppPrepText(lastLang, index);
                                    $("."+index).append(value.split("[:]")[0]);
                                    break;
                                case "html":$("."+index).pepend(value.split("[:]")[0]);
                                    break;
                            }
                        }else if(action.split("=")[0]==="attr"){
                            $("."+index).attr(action.split("=")[1], value.split("[:]")[0]);
                        }
                    }else
                    {
                        $("."+index).html(value);
                    }
                });
            });
    }
    setLang(langCode, false);
    //
    var langButtons = "";
    $.each(settings.locals, function(index, value){
        langButtons += "<div class='"+index+"'></div>";
    });
    //
    $(this).prepend("<div class='langBar'>"+langButtons+"</div>");
    $(".langBar").css({
        "position":settings.position,
        "top":settings.top +"px",
        "right":settings.right +"px",
        "z-index":"2000"
    });
    //
    $.each(settings.locals, function(index, value){
        $("."+index).css({
            "background-image":"url("+value+")"
        });
    });
    //
    $(".langBar div").css({
        "width":"25px",
        "height":"25px",
        "background-size": "cover",
        "float":"left",
        "margin":"1px",
        "cursor":"pointer"
    });
    //
    $(".langBar").on('click', 'div', function() {
        langCode = $(this).attr("class");
        setLang(langCode, true);
        settings.callBack(langCode);
    });
    //
    function createCookie(name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        else {
            expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    };
    function getCookie(c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=");
            if (c_start !== -1) {
                c_start = c_start + c_name.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end === -1) {
                    c_end = document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
    };
    //----------
  };
})( jQuery );
//});