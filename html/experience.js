(function($util){

    var experience = {
        setContent: function(){
            var container = $util.dom.byId("exp_win");
            new window.PageSwitch(container,{
                direction:"horizontal",
                keyboard:false,
                loop: true,
                isPlay: true
            });
        }
    };

    experience.setContent();
})(window.gLib);