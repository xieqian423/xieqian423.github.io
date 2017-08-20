(function(){
    var gLib={};

    gLib.module = {
        require: function(){

        }
    }

    /**
     * �첽����
     * @param opts          �������
     * @param opts.url      ����·��
     * @param opts.type     ����ʽ  get��post
     * @param opts.dataType ������������
     * @param opts.data     post������Ҫ��������
     * @param success   {function}      �ɹ��ص�����
     * @param fail      {function}      ʧ�ܻص�����
     */
    gLib.ajax = function(opts, success, fail){
        opts = opts || {};

        var method = opts.method || "GET";

        var xmlHttp;
        if(window.XMLHttpRequest){
            xmlHttp = new window.XMLHttpRequest();
        }else{
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        method = method.toLowerCase();
        xmlHttp.open(method,opts.url,true);
        xmlHttp.onreadystatechange = function(){
            if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
                if(success instanceof Function){
                    success(xmlHttp.responseText);
                }
            }else{
                if(fail instanceof Function){
                    fail(xmlHttp.responseText);
                }
            }
        };

        if(method == "get"){
            xmlHttp.send();
        }else if(method == "post"){
            xmlHttp.send(opts.data);
        }
    };

    gLib.event = {};
    gLib.dom = {
        byId: function(id){
            return document.getElementById(id);
        }
    };

    gLib.file = {
        loadHtml: function(url,success,fail){
            var self = this;
            var opts = {
                url: url,
                type:'get'
            }
            gLib.ajax(opts,function(ret){
                if(typeof success == 'function'){
                    success(ret)
                }
            },fail);
        },
        loadJs: function(url,callback){
            if(!url){
                return;
            }

            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = url;
            document.body.appendChild(script);
        },
        loadComponent: function(cfg){
            var self = this;
            this.loadHtml(cfg.html,function(ret){
                var container = null;
                if(typeof cfg.container == "string"){
                    container = document.body.querySelector(cfg.container);
                }else if(cfg.container instanceof HTMLElement){
                    container = cfg.container;
                }
                if(container){
                    container.innerHTML = ret;
                }

                self.loadJs(cfg.js);
            });
        }
    };

    window.xe = window.gLib = gLib;
})();

