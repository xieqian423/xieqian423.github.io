/**
 *
 */
function sliderToggle(box){

};

var experience = (function(){

    var exp1 = {
        title:'广州茂名电信资源管理平台'
        ,description:'用于电信光缆的资源采集和维护、任务调度'
        ,content:['参与权限管理模块的前端开发','实现数据导入导出、轨迹回放等功能；','参与业务模块的改造，提高代码的复用性。']
    };
    var exp2 =  {
        title:'Web 燃气地理信息系统'
        ,description:''
        ,content:[]
    };
    var exp3 =  {
        title:'中国地质大学教学管理系统'
        ,description:''
        ,content:[]
    };

    var exp = [exp1,exp2,exp3];


    var curIndex=1;
    var box = null;
    var wrapper = null;
    var init = function(id){
        box = document.getElementById(id);
        setContent();
        wrapper = box.getElementsByClassName("slider-wrapper")[0];
    }


    function setContent(id){
        //var box = document.getElementById(id);
        var items = box.getElementsByClassName("slider-item");

        var i,len,insert;
        for(i=0, len=items.length; i<len; i++){
            ins = exp[i];
            items[i].appendChild(createContent(ins.title, ins.description, ins.content));
        }
    }

    function createContent(title, describe, content){

        var box = document.createElement("div");
        var text = '<h4>' + title + '</h4>';
        text += '<p>' + describe + '</p>';
        text += '<ul>';
        for(var i=0; i<content.length; i++)
        {
            text += '<li>';
            text += content[i];
            text += '</li>';
        }
        text += '</ul>';

        box.innerHTML = text;
        return box;
    }

    function setAnimation(){
        wrapper.classList.add("slider-animation");
    }

    function onSwitch(id){
        //var box = document.getElementById(id);
        var control = box.getElementsByClassName("slider-controls")[0];
        var timer = null;

        control.onclick = function(event){
            //清除动画样式
            wrapper.classList.remove("slider-animation");
            //如何有定时器清除定时器
            if(timer){
                clearTimeout(timer);
            }

            var target = event.target;
            var index = parseInt(target.getAttribute("data-index"));
            wrapper.style.left = (index-1) * (-500) + 'px';

            var btns = box.getElementsByClassName("slider-btn");
            for(var i=0;i<btns.length;i++){
                btns[i].classList.remove("active");
            }
             target.classList.add("active");
            curIndex = index;

            timer = setTimeout(setAnimation, 3000);
        }
    }

    return {
        init: init
        ,createContent: createContent
        ,setContent: setContent
        ,onSwitch: onSwitch
    }
    //window.experience = init;
})();


