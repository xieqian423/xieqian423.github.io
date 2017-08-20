
var EventUtil = (function(){

    /**
     * @method addHandler
     * ��Ӿ����ʹ���¼�ð�ݿ������̶ȼ��������
     * @param element
     * @param type  ��click,mouseover,keydown��Сд�¼���
     * @param handler
     */
    var addHandler = function(element, type, handler ,useCapture){
        useCapture = useCapture ? useCapture : false;
        if(element.addEventListener){
            //�˴�����������false���������¼�ð��
            element.addEventListener(type, handler, useCapture);
        }else if(element.attachEvent){
            element.attachEvent('on'+type, handler);
        }else{
            element['on'+type] = handler;
        }
    };

    /**
     * @method removeHandler
     * �Ƴ����
     * @param element
     * @param type
     * @param hander  �˴��Ƴ����¼�����������ӵ��¼�����ͬһ�������������޷��Ƴ��¼�
     */
    var removeHandler = function(element,type,hander){
        if(element.removeEventListener){
            element.removeEventListener(type, hander, false);
        }else if(element.detachEvent){
            element.detachEvent('on'+type, hander);
        }else{
            element['on'+type] = null;
        }
    }

    //��ȡ�¼�
    var getEvent = function(event) {
        return event ? event : window.event;
    }

    //��ȡ�¼�����
    var getType = function(event){
        return event.type;
    }

    //��ȡ�¼�Դ
    var getTarget = function(event){
        return event.target || event.srcElement;
    }

    //��ֹ�¼�ð��
    var stopPropagation = function(event){
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble = true;
        }
    }

    //��ֹĬ����Ϊ
    var preventDefault = function(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    }

    return {
        addHandler: addHandler
        ,removeHandler: removeHandler
        ,getEvent: getEvent
        ,getType: getType
        ,getTarget: getTarget
        ,stopPropagation: stopPropagation
        ,preventDefault: preventDefault
    }
})();