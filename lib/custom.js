var cfunc = {
TalksWaterFall: function() {
        document.querySelector("#waterfall") && setTimeout((function() {
                waterfall("#waterfall"),
                document.getElementById("waterfall").classList.add("show")
            }
        ), 500)
    }
};


window.addEventListener("resize", (function() {
        if (window.location.pathname == '/talks/'){
                document.querySelector("#waterfall") && cfunc.TalksWaterFall()
        }
    }
))

function initBlog() {
        cfunc.TalksWaterFall()
}

$(document).ready((function() { 
        initBlog()
    }
))