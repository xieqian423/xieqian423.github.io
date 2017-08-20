var gObj = {};
(function($util){

    function InitSys(){
        this.init();
    }

    InitSys.prototype={
        constructor: InitSys,
        init: function(){
            var self = this;
            this.loadLoc("local.json",function(){
                self.addPage();
            });
        },

        readCfg: function(){
            var cfg = [
               //{componet:"Inform",container:"#information",html:"html_test/information.html", js:""}
                {componet:"Inform",container:"#menu", html:"html/menu.html", js:""}
                ,{componet:"Inform",container:"#education", html:"html/education.html", js:""}
                ,{componet:"Inform",container:"#skills", html:"html/skills.html", js:"html/skills.js"}
                ,{componet:"Inform",container:".experience",html:"html/experience.html", js:"html/experience.js"}
                ,{componet:"Inform",container:"#service",html:"html/service.html", js:"html/service.js"}
                ,{componet:"Inform",container:"#activity", html:"html/activity.html", js:"html/activity.js"}
                ,{componet:"Inform",container:"#contact",html:"html/contact.html", js:""}
            ];

           return cfg;
        },

        addPage: function(){
            //Œﬁ–Úº”‘ÿ
            var cfg = this.readCfg();
            for(var i= 0,len=cfg.length; i<len; i++){
                $util.file.loadComponent(cfg[i]);
            }
        },

        loadLoc: function(loc, callback) {
            "use strict";
            var baseDir = "local/";

            var opts = {url: baseDir + loc};
            $util.ajax(opts, function (ret) {
                if (ret) {
                    gObj.loc = JSON.parse(ret);
                    callback(ret);
                }
            }, null);
        }
    }

    window.InitSys = InitSys;
})(window.gLib);

(new InitSys());
