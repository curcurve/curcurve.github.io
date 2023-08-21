
var cfunc = {
initTalks: function () {
        if (window.location.pathname == '/talks/') cfunc.TalksWaterFall();
    },

TalksWaterFall: function() {
        document.querySelector("#waterfall") && setTimeout((function() {
                waterfall("#waterfall"),
                document.getElementById("waterfall").classList.add("show")
            }
        ), 500)
    },

//跳转评论框回复说说 
CommentTalks: function(e) {
        var n = document.getElementById("veditor");
        let t = document.createEvent("HTMLEvents");
        t.initEvent("input", !0, !0);
        let o = replaceAll(e, "\n", "\n> ");
        n.value = "> " + o + "\n\n",
        n.dispatchEvent(t);
        var i = document.querySelector("#valine-comments").offsetTop;
        window.scrollTo(0, i - 80),
        n.focus(),
        n.setSelectionRange(-1, -1)
    },

TalksSwiper: function() {
        if (document.querySelector('#bber-talk')) {
            var swiper = new Swiper('.swiper-container', {
                direction: 'vertical', // 垂直切换选项
                loop: true,
                autoplay: {
                    delay: 3000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                },
            });
        }
    }
};

function replaceAll(e, n, t) {
    return e.split(n).join(t)
}

window.addEventListener("resize", (function() {
        if (window.location.pathname == '/talks/'){
                document.querySelector("#waterfall") && cfunc.TalksWaterFall()
        }
    }
))

$(document).ready((function() { 
        cfunc.initTalks()
        cfunc.TalksSwiper()
    }
))