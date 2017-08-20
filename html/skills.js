(function($util){

    var skills = {
        init: function(){
            var color = "#00a78e";
            var canvas = document.getElementById("circle1");
            var width = getComputedStyle(canvas,null).width;
            var border = parseInt(width)/2;

            new Draw("circle1",{
                center:[border,border],
                radius: border,
                border: border*0.3,
                cover: 0.65,
                color:color
            }).drawRing().drawText({text:"Svn/Git",color:"#586371"});

            new Draw("circle2",{
                center:[border,border],
                radius: border,
                border:border*0.3,
                cover: 0.6,
                color:color
            }).drawRing().drawText({text:"Java/Oracle",color:"#586371"});
            new Draw("circle3",{
                center:[border,border],
                radius: border,
                border: border*0.25,
                cover: 0.30,
                color:color
            }).drawRing().drawText({text:"Linux",color:"#586371"});
        },
        setContent: function(){
            var container = $util.dom.byId("exp_win");
            new window.PageSwitch(container,{
                direction:"horizontal",
                keyboard:false,
                loop: true,
                isPlay: false
            });

            $util.dom.byId("exp_1");
        },
        cfg: function(){
            var cfg = [];
            return cfg;
        }
    }

    skills.init();
})(window.gLib);