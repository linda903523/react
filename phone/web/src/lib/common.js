// export function changeLogin(){
//     return {type: 'login'};
// }
/**
 * [获取随机验证码]
 * @param  {[Number]} num [验证码位数]
 * @return {String}     [验证码]
 */
export function vcode(num){
    if(num === undefined){
        num = 4;
    }
    var arr = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');

    // 循环获取验证码
    var res = '';
    for(var i=0;i<num;i++){
        var idx = parseInt(Math.random()*arr.length);
        res += arr[idx];
    }
    return res;
}
//vcode(4);


/**
 * [生成任意两个数之间的随机整数]
 * @param  {Number} min [最小值]
 * @param  {Number} max [最大值]
 * @return {Number}     [返回一个min~max之间的随机整数]
 */
function randomNumber(min,max){
    var res = parseInt(Math.random()*(max-min+1)) + min;
    return res
}
//randomNumber(10,50)

/**
 * [生成随机颜色]
 * @return {String}     [颜色16进制]
 */
function randomColor(){
    var str = '0123456789abcdef';
    var res = '#';
    for(var i=0;i<6;i++){
        var idx = Math.floor(Math.random()*str.length);
        res += str[idx]; 
    }
    return res;
}
// randomColor();//'#ff0000'

/**
 * [过滤其他节点，得到元素节点]
 * @param  {Array} nodes [节点集合（类数组）]
 * @return {Array}       [返回元素节点集合]
 */
function getElement(nodes){
    var res = [];
    for(var i=0;i<nodes.length;i++){
        if(nodes[i].nodeType === 1){
            res.push(nodes[i]);
        }
    }
    return res;
}
// getElement(all_child);//[h4,ul,h4,ul]

/**
 * [获取第一个子元素]
 * @param  {Element} parent [当前元素的父级]
 * @return {ele} [返回元素节点]
 */
function firstElementChild(parent){
    var res = getElement(parent.childNodes);
    return res[0];
}

/**
 * [获取最后一个子元素]
 * @param  {Element} parent [当前元素的父级]
 * @return {ele} [返回元素节点]
 */
function lastElementChild(parent){
    var res = getElement(parent.childNodes);
    return res[res.length-1];
}

/**
 * [获取当前元素得下一个元素]
 * @param  {Element} ele [当前元素]
 * @return {Element}     [返回下一个元素]
 */
function nextElement(ele){
    var res = ele.nextSibling;

    // 判断res是否为元素节点，并且不是最后一个元素
    while(res.nodeType !== 1 && res != ele.parentNode.lastChild){
        res = res.nextSibling;
    }
    return res;
}

/**
 * [获取当前元素得前一个元素]
 * @param  {Element} ele [当前元素]
 * @return {Element}     [返回前一个元素]
 */
function previousElement(ele){
    var res = ele.previousSibling;

    // 判断res是否为元素节点，并且不是第一个元素
    while(res.nodeType !== 1 && res != ele.parentNode.firstChild){
        res = res.previousSibling;
    }
    return res;
}

/**
 * [通过类名获取元素]
 * @param  {String} className [类名]
 * @param  {[Element]} ele [获取这个元素下代className类名元素]
 * @return {[type]}           [description]
 */
function getElementByClassName(className){
    //不用判断是否为ie8以下的浏览器
    //推荐：判断当前浏览器是否支持该方法
    if(document.getElementByClassName){
        return getElementByClassName(className);
    }
    //ie8以下浏览器
    //思路：利用getElementByClassName('*')
    else{
        var res = getElementByClassName('*');
        var eles = getElementByClassName(className);
        for(var i=0;i<res.length;i++){
            if(res[i].className.indexOf(className)>=0){
                res.push(eles[i]);
            }
        }
        return res;
    }
}
//getElementsByClassName('box');

/**
 * [获取元素css样式，兼容ie8-]
 * @param  {Element} ele  [获取样式的元素]
 * @param  {String} attr [css属性名]
 * @return {String}      [css属性值（带单位）]
 */
function getStyle(ele,attr){
    var res = '';
    // 标准浏览器
    if(window.getComputedStyle){
        res = getComputedStyle(ele)[attr];
    }
    
    // ie8-
    else if(ele.currentStyle){
        res = ele.currentStyle[attr];
    }
    
    // 其他浏览器
    else{
        res = ele.style[attr];
    }
    return res;
}
// getStyle(box,'width');//600px

/**
 * [给元素添加事件的方法，支持事件捕获，兼容ie8-]
 * @param  {Element} e [需要绑定事件的元素]
 * @param {String} type    [事件类型]
 * @param  {Function} handler [事件处理函数]
 * @param  {Boolean} capture [是否捕获]
 */
function bind(e,type,handler,capture){
    //标准浏览器
    if(e.addEventListener){
        e.addEventListener(type,handler,capture);
    }

    //ie8-
    else if(e.attachEvent){
        e.attachEvent('on' + type,handler);
    }

    //其他浏览器
    else{
        e['on' + type] = handler;
    }
}
//bind(box,'click',function(){})

/*
    封装Cookie的增删查改
        * 添加 setCookie()
        * 删除 removeCookie()
        * 读取 getCookie()
        * 修改 利用setCookie()
    利用对象封装
        Cookie
            * set()
            * get()
            * remove()
 */
var Cookie = {
    /**
     * [获取cookie]
     * @param {String} name    [cookie名]
     * @return {[String]}      [cookie名对应的值]
     */
    get:function(name){
        var res = '';
        var cookies = document.cookie;
        if(cookies.length>0){
            cookies = cookies.split('; ');
            cookies.forEach(function(item){
                var temp = item.split('=');
                if(temp[0] === name){
                    res = temp[1];
                }
            })
        }
        return res;
    },

    /**
     * [设置cookie]
     * @param {String} name    [cookie名]
     * @param {String} value     [cookie值]
     * @param {[object]} opt     [cookie参数：expires,path,domain]
     */
    set:function(name,value,opt){
        var cookieStr = name + '=' + value;
        if(opt !== undefined){
            for(var attr in opt){
                cookieStr += ';' + attr + '=' + opt[attr]
            }
        }
        document.cookie = cookieStr;
    },

    // 删除cookie
    remove:function(name){
        var date = new Date();
        date.setDate(date.getDate()-1);
        //document.cookie = name + '=x;expires='+date.toUTCString();
        this.set(name,'x',date.toUTCString());
    }
}

// JSON.parse(Cookie.get('carlist'));//[{},{}]
// Cookie.set('carlist',val,{expires:date.toUTCString(),path:'/'});//[{},{}]
// Cookie.remove('carlist')

/**
 * [动画函数]
 * @param {Element} ele    [动画元素]
 * @param {String} attr     [需要动画的css属性]
 * @param {Number} target     [动画目标值]
*/
/*function animate(ele,attr,target){
    //为每个属性设置不同的定时器（关键1）
    let timerName = attr + 'timer';

    clearInterval(ele[timerName]);

    //把定时器与DOM关联（关键2）
    ele[timerName] = setInterval(()=>{
        //先获取当前值
        let current = getComputedStyle(ele)[attr];

        //提取数值：单位
        //根据当前值提取单位（单位在current最后）
        let unit = current.match(/[a-z]+$/);
        if(unit){
            current = current.substring(0,unit.index)*1;
            unit = unit[0];
        }else{
            unit = '';
            current *=1;
        }

        //计算速度
        let speed = (target - current)/10;

        //处理speed值，防止speed为小数而造成定时器无法完成的情况
        //0.3=>1,-0.3=>-1
        speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

        if(attr === 'opacity'){
            speed = speed>0 ? 0.05 : -0.05;
        }

        if(current === target){
            clearInterval(ele[timerName]);
            current = target - speed;
        }
        ele.style[attr] = current + speed + unit;
    },30)
}*/
//animate(ele,'left',800)//把ele元素从初始位置移动到left：800的位置

/**
 * [动画函数]
 * @param {Element} ele    [动画元素]
 * @param {Object} opt     [需要动画的css属性]
 * @param {Function} callback  [回调函数]
*/
function animate(ele,opt,callback){
    //记录动画数量
    let timerLen = 0;

    //遍历opt
    for(var attr in opt){
        // 如何把attr限定到局部作用域中
        // ES6解决方案：用let声明attr
        // 传统解决方案：利用函数传参
        createTimer(attr);

        timerLen++;     
    }

    function createTimer(attr){
        //为每个属性设置不同的定时器（关键1）
        let timerName = attr + 'timer';
        let target = opt[attr];

        clearInterval(ele[timerName]);

        //把定时器与DOM关联（关键2）
        ele[timerName] = setInterval(()=>{
            //先获取当前值
            let current = getComputedStyle(ele)[attr];

            //数值：单位
            //根据当前值提取单位（单位在current最后）
            let unit = current.match(/[a-z]+$/);
            if(unit){
                current = current.substring(0,unit.index)*1;
                unit = unit[0];
            }else{
                unit = '';
                current *= 1;
            }

            //计算速度
            let speed = (target - current)/10;

            //处理speed值，防止speed为小数而造成定时器无法完成的情况
            //0.3=>1,-0.3=>-1
            speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

            if(attr === 'opacity'){
                speed = speed>0 ? 0.05 : -0.05;
            }

            //动画完成
            if(current === target){
                clearInterval(ele[timerName]);
                current = target - speed;

                timerLen--;

                if(typeof callback === 'function' && timerLen === 0){
                    callback();
                }
            }
            ele.style[attr] = current + speed + unit;
        },30)
    }
}