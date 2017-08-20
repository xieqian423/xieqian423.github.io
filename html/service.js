(function($util){

    var service = {
        init: function(){
            var contents = document.getElementById("service").getElementsByClassName("content");
            for(var i= 0,len=contents.length; i<len; i++){
                contents[i].innerHTML = "<p>"+gObj.loc["service_content"+(i+1)]+"</p>";
            }
        },
        setContent: function(){
        },
        cfg: function(){
            var cfg = [];
            return cfg;
        }
    }

    service.init();
})(window.gLib);