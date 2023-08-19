



function waterfall(a) {
    function b(a, b) {
        var c = window.getComputedStyle(b);
        return parseFloat(c["margin" + a]) || 0
    }
    function c(a) {
        return a + "px"
    }
    function d(a) {
        return parseFloat(a.style.top)
    }
    function e(a) {
        return parseFloat(a.style.left)
    }
    function f(a) {
        return a.clientWidth
    }
    function g(a) {
        return a.clientHeight
    }
    function h(a) {
        return d(a) + g(a) + b("Bottom", a)
    }
    function i(a) {
        return e(a) + f(a) + b("Right", a)
    }
    function j(a) {
        a = a.sort(function(a, b) {
            return h(a) === h(b) ? e(b) - e(a) : h(b) - h(a)
        })
    }
    function k(b) {
        f(a) != t && (b.target.removeEventListener(b.type, arguments.callee), waterfall(a))
    }

    function z(a){
        var b = window.getComputedStyle(a);
        return parseFloat(b["marginRight"])
    }
    function y(a,b){
        var c = document.body.clientWidth;
        var d = 0;
        var e = x(b);
        if (c >= 992) {
            d = (f(a) - z(b)*2)/3 - e;
        } else if (c > 768) {
            d = (f(a) - z(b)*1)/2 - e;
        } else if (c <= 768) {
            d = f(a) - e;
        }
        return Math.floor(d)
    }
    function x(a){
        var b = window.getComputedStyle(a);
        return parseFloat(b["paddingLeft"]) + parseFloat(b["paddingRight"])
    }
    
    "string" == typeof a && (a = document.querySelector(a));
    var achild = a.children;
    var achildWidh = y(a, achild[0]) + "px";
    var bodyWidth = document.body.clientWidth;
    for (var n = 0; n < achild.length; n++){
        achild[n].style.width = achildWidh;
        if (bodyWidth >= 992) {
            if ((n+1)%3 == 0) {achild[n].style.marginRight = "0px!important"}
        } else if (bodyWidth > 768) {
            if ((n+1)%2 == 0) {achild[n].style.marginRight = "0px!important"}
        } 
        
    }
    var l = [].map.call(a.children,
    function(a) {
        return a.style.position = "absolute",
        a
    });
    a.style.position = "relative";
    var m = [];
    l.length && (l[0].style.top = "0px", l[0].style.left = c(b("Left", l[0])), m.push(l[0]));
    for (var n = 1; n < l.length; n++) {
        var o = l[n - 1],
        p = l[n],
        q = i(o) + f(p) <= f(a);
        if (!q) break;
        p.style.top = o.style.top,
        p.style.left = c(i(o) + b("Left", p)),
        m.push(p)
    }
    for (; n < l.length; n++) {
        j(m);
        var p = l[n],
        r = m.pop();
        p.style.top = c(h(r) + b("Top", p)),
        p.style.left = c(e(r)),
        m.push(p)
    }
    j(m);
    var s = m[0];
    a.style.height = c(h(s) + b("Bottom", s));
    var t = f(a);
    window.addEventListener ? window.addEventListener("resize", k) : document.body.onresize = k
}