(function($util){

    var act = {
        setContent: function(){
            var contents = $util.dom.byId("activity").querySelectorAll(".content");
            var times = $util.dom.byId("activity").querySelectorAll(".time");
            for(var i=1,len=contents.length; i<=len; i++){
                contents[i-1].innerText = gObj.loc["activity_content"+i];
                times[i-1].innerText = gObj.loc["activity_time"+i];
            }
        },
        cfg: function(){
            var cfg = [];
            return cfg;
        }
    };

    act.setContent();
})(window.gLib);