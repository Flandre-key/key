/**
 * Created by Lenovo on 2017/3/30.
 */
//封装一个方法,传递过去三个参数,元素/属性/值!
function animate(ele,json,fn){
    //要用定时器,先清定时器
    clearInterval(ele.timer);
    //定义定时器
    ele.timer = setInterval(function () {
        //利用json实现多个属性同时修改；
        //实现的时候只需要使用for...in...遍历即可(不需要考虑清除定时器)
        //开闭原则: 每隔定时器执行时间初始化bool值为true;
        var bool = true;//一定在for循环之外,还不能超出定时器之外
        //利用for...in...遍历json中的每一项;
        for(var k in json){
            //要达到目的:1.把里面原来的attr换成 k;
            //要达到目的:2.把里面原来的target换成 json[k];

            //获取盒子当前位置;获取不到默认为0;
            var leader = parseInt(getStyle(ele,k)) || 0;//getStyle();的返回值是一个带有代为的字符串
            var step = (json[k]-leader)/10;
            //二次操作
            step = step>0?Math.ceil(step):Math.floor(step);
            //赋值;
            leader = leader + step;//下一步盒子要到的位置
            ele.style[k] = leader + "px";

            //清除定时器;考虑(必须保证所有属性都到达指定位置,才能清除定时器)
            //有一个没到举手,也不能清除定时器;(开闭原则: 冒泡排序用的就是类似思路)
            //1.清除定时器必须在for循环之外,需要判断;
            //2.for循环之内必须判断每一个属性,是否都到达目标位置;(有一个没到也不行)
            console.log(1);
            //2.for循环之内必须判断每一个属性,是否都到达目标位置;
            if(json[k] !== leader){
                //有一个没有到达目标位置,也不能清除定时器
                bool = false;
            }
        }

        //所以清除定时器必须在for循环之外,还需要判断;
        if(bool){
            clearInterval(ele.timer);

            //清除定时器之后,就是整个函数执行完毕的时候,这时候我就可以执行另一个函数了
            //bug:没有传递函数就不要执行了;
//                    if( fn && typeof fn === "function"){//存在此变量且数据类型为函数
            //判断有没有函数:
            if(fn){
                fn();//函数名+()就是执行函数
            }
        }
    },8);
}




function getStyle(ele,attr){
    //判断:浏览器是否支持某个方法,支持就调用,不支持就用另外一个
    if(ele.currentStyle !== undefined){//如果该属性不存在返回值就是undefined
        return ele.currentStyle[attr];//中括号获取属性值,比较灵活,传递什么就是什么
    }else{
        //火狐谷歌ie9+支持的方法
        return window.getComputedStyle(ele,null)[attr];
    }
}