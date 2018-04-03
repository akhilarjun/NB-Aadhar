var $$ = function(selector) {
    return document.querySelectorAll(selector);
}, $$byId = function(idSelector){
    return document.getElementById(idSelector);
}
function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}
function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}
function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}

var toggleform = function(currentForm){
    switch(currentForm){
        case 'login':
            addClass($$byId("login-form"),'hidden');
            removeClass($$byId("signup-form"),'hidden');
            break;
        case 'signup':
            removeClass($$byId("login-form"),'hidden');
            addClass($$byId("signup-form"),'hidden');
            break;
    }
}

var login = function() {
    addClass($$byId("bg-intro"), "hidden");
    removeClass($$byId("dashboard"), "hidden");
}