(function(){

    window.onload = function(id){

        var btn = document.getElementsByClassName('btn-backtop')[0];
        //�Ӵ��߶�
        var height = document.documentElement.clientHeight;
        var isTop = true;
        var timer = null;

        window.onscroll = function(){
            if(!isTop){
                clearInterval(timer);
            }
            isTop = false;

            var sTop = document.body.scrollTop || document.documentElement.scrollTop;
            //�����ڶ�����ʾ��ť
            if(sTop >= height){
                btn.style.display = 'inline-block';
            }else{
                btn.style.display = 'none';
            }
        }

        btn.onclick = function(){
            timer = setInterval(function(){
                isTop = true;
                var sTop = document.documentElement.scrollTop || document.body.scrollTop;
                var speed = Math.floor(-sTop/5);
                document.documentElement.scrollTop = document.body.scrollTop = sTop + speed;

                if(document.body.scrollTop <= 0){
                    clearInterval(timer);
                }
            },50);
        }
    }

})();
