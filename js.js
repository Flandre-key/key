/**
 * Created by hp on 2017/4/8.
 */

    window.onload = function() {

        var ul = document.getElementById("left_00");
        var left = document.getElementsByClassName("left")[0];
        var liArr = ul.children;
        var ol = document.getElementById("ol");
        var olArr = ol.children;
        var spanArr = document.getElementsByName("span");
         var imgW = left.offsetWidth;
        var zy = document.getElementById("zy");
        var lf = document.getElementById("lf");
        var rt = document.getElementById("rt");


        var lu = document.getElementById("right_00");
        var right = document.getElementsByClassName("right")[0];
        var LiArr = lu.children;
        var lo = document.getElementById("lo");
        var loArr = lo.children;
        var spanArr = document.getElementsByName("span");
        var imgWW = right.offsetWidth;
        var yz = document.getElementById("yz");
        var fl= document.getElementById("fl");
        var tr = document.getElementById("tr");

        left.onmouseover = function () {
            zy.style.display = "block";
            animate(left,{top:-5});
        }

        right.onmouseover = function () {
            yz.style.display = "block";
            //right.className = "yicang";
            animate(right,{top:-5});
        }
        right.onmouseout = function () {
            yz.style.display = "none";
            animate(right,{top:0});
        }

        left.onmouseout = function () {
            zy.style.display = "none";
            animate(left,{top:0});
        }

    for (var i = 0; i < liArr.length; i++) {
        var newLi = document.createElement("li");
        //添加内容
        newLi.innerHTML = i + 1;
        ol.appendChild(newLi);
    }
    var olArr = ol.children;
        olArr[0].className = "current";


        for (var i = 0; i < LiArr.length; i++) {
            var newli = document.createElement("li");
            //添加内容
            newli.innerHTML = i + 1;
            lo.appendChild(newli);
        }
        var loArr =lo.children;
        loArr[0].className = "current";

    for (var i = 0; i < olArr.length; i++) {
            //自定义属性;
            olArr[i].index = i;
            olArr[i].onmouseover = function () {
                //1.点亮盒子(排他思想)
                for (var j = 0; j < olArr.length; j++) {
                    olArr[j].className = "";
                }
                this.className = "current";
                //2.移动ul(利用animate());
                animate(ul, {left:-imgW * this.index});
                //bug: li标签移动ul,和自定义索引值没有同步;
                key = square = this.index;//同步;
            }
        }

    for (var i = 0; i < loArr.length; i++) {
            //自定义属性;
            loArr[i].index = i;
            loArr[i].onmouseover = function () {
                //1.点亮盒子(排他思想)
                for (var j = 0; j < loArr.length; j++) {
                    loArr[j].className = "";
                }
                this.className = "current";
                //2.移动ul(利用animate());
                animate(lu, {left:-imgWW*this.index});
                //bug: li标签移动ul,和自定义索引值没有同步;
                key = square = this.index;//同步;
            }
        }


    var key = 0;//模拟图片的索引值
    var square = 0;//模拟小方块的索引值

        rt.onclick = autoPlay;
        tr.onclick = autoPla;

        lf.onclick = function () {
                //思路: 1.索引值自增(无缝滚动);   2.点亮盒子;    3.移动ul;

                //1.索引值自减(无缝滚动)
                key--;//图片的索引值要收到约束;
                //(无缝滚动原理: 瞬间闪动到最后一张,在从倒数一张滑动到倒数第二张)
                //key的索引值最小到0.等于-1的时候, 瞬间闪动到倒数第一张,在从倒数第一张滑动到倒数第二张;
                if(key === 0){
                    //闪动到倒数第一张;
                    ul.style.left = -imgW*3+"px";//最后一张图片显示的时候,ul的left值为5张图片的宽px;
                    //滑动到第二张(索引值为4)
                    key = 1;
                }

                square--;//小方块的索引值要收到约束;(简单)
                //square的最小值为0;  到-1的时候把值设置为4;代表最后一个!
                if(square === -1){
                    square = 1;
                }

                //2.点亮盒子;
                for(var j=0;j<liArr.length;j++){
                    liArr[j].className = "";
                }
                liArr[square].className = "current";
                //3.移动ul;
                animate(ul,{left:-imgW*key});
            }

        fl.onclick = function () {
            //思路: 1.索引值自增(无缝滚动);   2.点亮盒子;    3.移动ul;

            //1.索引值自减(无缝滚动)
            key--;//图片的索引值要收到约束;
            //(无缝滚动原理: 瞬间闪动到最后一张,在从倒数一张滑动到倒数第二张)
            //key的索引值最小到0.等于-1的时候, 瞬间闪动到倒数第一张,在从倒数第一张滑动到倒数第二张;
            if(key === -1){
                //闪动到倒数第一张;
                lu.style.left = -imgWW*1+"px";//最后一张图片显示的时候,ul的left值为5张图片的宽px;
                //滑动到第二张(索引值为4)
                key = 1;
            }
            square--;//小方块的索引值要收到约束;(简单)
            //square的最小值为0;  到-1的时候把值设置为4;代表最后一个!
            if(square === -1){
                square = 1;
            }

            //2.点亮盒子;
            for(var j=0;j<LiArr.length;j++){
                LiArr[j].className = "";
            }
            LiArr[square].className = "current";
            //3.移动ul;
            animate(lu,{left:-imgW*key});
        }
    //右侧小三角的方法封装
    function autoPlay() {
        //思路: 1.索引值自增(无缝滚动);   2.点亮盒子;    3.移动ul;
        //1.索引值自增(无缝滚动)
        key++;//图片的索引值要收到约束;
        //(无缝滚动原理: 瞬间闪动到第一张,在从第一张滑动到第二张)
        //key的索引值最大到5.等于6的时候, 瞬间闪动到第一张,在从第一张滑动到第二张;
        if (key === 2) {
            ul.style.left = 0;//第一张图片显示的时候,ul的left值为0;
            key = 1;
        }
        square++;
        if (square === 2) {
            square = 0;
        }

        for (var j = 0; j < liArr.length; j++) {
            liArr[j].className = "";
        }
        liArr[square].className = "current";
        //3.移动ul;
        animate(ul, {left:-imgW * key});


         }

    function autoPla() {
            //思路: 1.索引值自增(无缝滚动);   2.点亮盒子;    3.移动ul;
            //1.索引值自增(无缝滚动)
            key++;//图片的索引值要收到约束;
            //(无缝滚动原理: 瞬间闪动到第一张,在从第一张滑动到第二张)
            //key的索引值最大到5.等于6的时候, 瞬间闪动到第一张,在从第一张滑动到第二张;
            if (key === 2) {
                lu.style.left = 0;//第一张图片显示的时候,ul的left值为0;
                key = 1;
            }
            square++;
            if (square === 2) {
                square = 0;
            }

            for (var j = 0; j < LiArr.length; j++) {
                LiArr[j].className = "";
            }
            LiArr[square].className = "current";
            //3.移动ul;
            animate(lu, {left:-imgWW * key});


        }




var center = document.getElementsByClassName("center")[0];
var center_00 = document.getElementById("center_00");
        var dw = document.getElementsByClassName("dw")[0];
var imgWWW = dw.offsetHeight;

var index = 0;


var ting = setInterval(fn,2500);

center.onmouseover = function(){
        clearInterval(ting);
    clearInterval(Ting);
    animate(center,{top:-5});

}
center.onmouseout = function(){
         ting = setInterval(fn,2500);
    Ting = setInterval(fN,2500);
    animate(center,{top:0});

}

function fn(){

    if(index === 3){
        center_00.style.top = 0;
        index = 0;
    }

    index ++;
    Aanimate( center_00,{top:-index*imgWWW});

}




var center_11 = document.getElementsByClassName("center_11")[0];
        var center_10 = document.getElementById("center_10");
        var wd = document.getElementsByClassName("wd")[0];
        var imgWWWW = wd.offsetHeight;

            var iin = 3;

            var Ting = setInterval(fN,2500);

            center_11.onmouseover = function(){
                clearInterval(ting);
                clearInterval(Ting);
                animate(center_11,{top:-5});
            }
            center_11.onmouseout = function(){
                ting = setInterval(fn,2500);
                Ting = setInterval(fN,2500);
                animate(center_11,{top:0});
            }

            function fN(){


                if(iin === 0){
                    center_10.style.top = -990+"px";
                    iin= 3;
                }
                //先判断在索引
                iin--;
                Aanimate(center_10,{top:-iin*imgWWWW});
            }


        //var ul = document.getElementById("ul");
        //var LIARR = ul.children;

        //for(var o=0;o<LIARR.length;o++)
        //LIARR[o].onmouseover = function(){
        //    animate(this,{top:-5});

        //}

    }
































function Aanimate(ele,json,fn){
    //要用定时器,先清定时器
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        //一定在for循环之外,还不能超出定时器之外
        var bool = true;
        for(var k in json){
            //要兼容很多属性,就要判断属性值是什么,然后给定逻辑;
            //判断:如果属性时z-index;
            if(k === "z-index"){
                //如果是层级，需求：直接提高到最高。不要一点一点增加；
                ele.style.zIndex = json[k];
                //清除定时器和层级无关；

                //判断:如果属性时opacity;(一定是小数)
            }else if(k === "opacity"){
                //opacity这个属性接受的都是小数，小数运算容易出现精度丢失；
                //所以先放大10倍；然后计算,计算完毕赋值的时候在缩小10倍;
                var leader = parseInt(getStyle(ele,k)*10) || 10;//getStyle();的返回值是一个带有代为的字符串
                var step = (parseInt(json[k]*10)-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;//下一步盒子要到的位置
                //赋值的时候要缩小10倍,不需要单位;
                ele.style[k] = leader/10;
                //兼容ie678:
                ele.style.filter = "alpha(opacity="+leader*10+")";
                //清除定时器;
                if(parseInt(json[k]*10) !== leader){
                    bool = false;
                }
            }else{
                //正常属性,走这一套逻辑
                var leader = parseInt(getStyle(ele,k)) || 0;//getStyle();的返回值是一个带有代为的字符串
                var step = (json[k]-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;//下一步盒子要到的位置
                ele.style[k] = leader + "px";
                //清除定时器;
                if(json[k] !== leader){
                    bool = false;
                }
            }
        }
        //所以清除定时器必须在for循环之外,还需要判断;
        console.log(1);
        if(bool){
            clearInterval(ele.timer);
            //清除定时器之后,就是整个函数执行完毕的时候,这时候我就可以执行另一个函数了
            if(fn){
                fn();
            }
        }
    },50);
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
