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
        //�������
        newLi.innerHTML = i + 1;
        ol.appendChild(newLi);
    }
    var olArr = ol.children;
        olArr[0].className = "current";


        for (var i = 0; i < LiArr.length; i++) {
            var newli = document.createElement("li");
            //�������
            newli.innerHTML = i + 1;
            lo.appendChild(newli);
        }
        var loArr =lo.children;
        loArr[0].className = "current";

    for (var i = 0; i < olArr.length; i++) {
            //�Զ�������;
            olArr[i].index = i;
            olArr[i].onmouseover = function () {
                //1.��������(����˼��)
                for (var j = 0; j < olArr.length; j++) {
                    olArr[j].className = "";
                }
                this.className = "current";
                //2.�ƶ�ul(����animate());
                animate(ul, {left:-imgW * this.index});
                //bug: li��ǩ�ƶ�ul,���Զ�������ֵû��ͬ��;
                key = square = this.index;//ͬ��;
            }
        }

    for (var i = 0; i < loArr.length; i++) {
            //�Զ�������;
            loArr[i].index = i;
            loArr[i].onmouseover = function () {
                //1.��������(����˼��)
                for (var j = 0; j < loArr.length; j++) {
                    loArr[j].className = "";
                }
                this.className = "current";
                //2.�ƶ�ul(����animate());
                animate(lu, {left:-imgWW*this.index});
                //bug: li��ǩ�ƶ�ul,���Զ�������ֵû��ͬ��;
                key = square = this.index;//ͬ��;
            }
        }


    var key = 0;//ģ��ͼƬ������ֵ
    var square = 0;//ģ��С���������ֵ

        rt.onclick = autoPlay;
        tr.onclick = autoPla;

        lf.onclick = function () {
                //˼·: 1.����ֵ����(�޷����);   2.��������;    3.�ƶ�ul;

                //1.����ֵ�Լ�(�޷����)
                key--;//ͼƬ������ֵҪ�յ�Լ��;
                //(�޷����ԭ��: ˲�����������һ��,�ڴӵ���һ�Ż����������ڶ���)
                //key������ֵ��С��0.����-1��ʱ��, ˲��������������һ��,�ڴӵ�����һ�Ż����������ڶ���;
                if(key === 0){
                    //������������һ��;
                    ul.style.left = -imgW*3+"px";//���һ��ͼƬ��ʾ��ʱ��,ul��leftֵΪ5��ͼƬ�Ŀ�px;
                    //�������ڶ���(����ֵΪ4)
                    key = 1;
                }

                square--;//С���������ֵҪ�յ�Լ��;(��)
                //square����СֵΪ0;  ��-1��ʱ���ֵ����Ϊ4;�������һ��!
                if(square === -1){
                    square = 1;
                }

                //2.��������;
                for(var j=0;j<liArr.length;j++){
                    liArr[j].className = "";
                }
                liArr[square].className = "current";
                //3.�ƶ�ul;
                animate(ul,{left:-imgW*key});
            }

        fl.onclick = function () {
            //˼·: 1.����ֵ����(�޷����);   2.��������;    3.�ƶ�ul;

            //1.����ֵ�Լ�(�޷����)
            key--;//ͼƬ������ֵҪ�յ�Լ��;
            //(�޷����ԭ��: ˲�����������һ��,�ڴӵ���һ�Ż����������ڶ���)
            //key������ֵ��С��0.����-1��ʱ��, ˲��������������һ��,�ڴӵ�����һ�Ż����������ڶ���;
            if(key === -1){
                //������������һ��;
                lu.style.left = -imgWW*1+"px";//���һ��ͼƬ��ʾ��ʱ��,ul��leftֵΪ5��ͼƬ�Ŀ�px;
                //�������ڶ���(����ֵΪ4)
                key = 1;
            }
            square--;//С���������ֵҪ�յ�Լ��;(��)
            //square����СֵΪ0;  ��-1��ʱ���ֵ����Ϊ4;�������һ��!
            if(square === -1){
                square = 1;
            }

            //2.��������;
            for(var j=0;j<LiArr.length;j++){
                LiArr[j].className = "";
            }
            LiArr[square].className = "current";
            //3.�ƶ�ul;
            animate(lu,{left:-imgW*key});
        }
    //�Ҳ�С���ǵķ�����װ
    function autoPlay() {
        //˼·: 1.����ֵ����(�޷����);   2.��������;    3.�ƶ�ul;
        //1.����ֵ����(�޷����)
        key++;//ͼƬ������ֵҪ�յ�Լ��;
        //(�޷����ԭ��: ˲����������һ��,�ڴӵ�һ�Ż������ڶ���)
        //key������ֵ���5.����6��ʱ��, ˲����������һ��,�ڴӵ�һ�Ż������ڶ���;
        if (key === 2) {
            ul.style.left = 0;//��һ��ͼƬ��ʾ��ʱ��,ul��leftֵΪ0;
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
        //3.�ƶ�ul;
        animate(ul, {left:-imgW * key});


         }

    function autoPla() {
            //˼·: 1.����ֵ����(�޷����);   2.��������;    3.�ƶ�ul;
            //1.����ֵ����(�޷����)
            key++;//ͼƬ������ֵҪ�յ�Լ��;
            //(�޷����ԭ��: ˲����������һ��,�ڴӵ�һ�Ż������ڶ���)
            //key������ֵ���5.����6��ʱ��, ˲����������һ��,�ڴӵ�һ�Ż������ڶ���;
            if (key === 2) {
                lu.style.left = 0;//��һ��ͼƬ��ʾ��ʱ��,ul��leftֵΪ0;
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
            //3.�ƶ�ul;
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
                //���ж�������
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
    //Ҫ�ö�ʱ��,���嶨ʱ��
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        //һ����forѭ��֮��,�����ܳ�����ʱ��֮��
        var bool = true;
        for(var k in json){
            //Ҫ���ݺܶ�����,��Ҫ�ж�����ֵ��ʲô,Ȼ������߼�;
            //�ж�:�������ʱz-index;
            if(k === "z-index"){
                //����ǲ㼶������ֱ����ߵ���ߡ���Ҫһ��һ�����ӣ�
                ele.style.zIndex = json[k];
                //�����ʱ���Ͳ㼶�޹أ�

                //�ж�:�������ʱopacity;(һ����С��)
            }else if(k === "opacity"){
                //opacity������Խ��ܵĶ���С����С���������׳��־��ȶ�ʧ��
                //�����ȷŴ�10����Ȼ�����,������ϸ�ֵ��ʱ������С10��;
                var leader = parseInt(getStyle(ele,k)*10) || 10;//getStyle();�ķ���ֵ��һ�����д�Ϊ���ַ���
                var step = (parseInt(json[k]*10)-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;//��һ������Ҫ����λ��
                //��ֵ��ʱ��Ҫ��С10��,����Ҫ��λ;
                ele.style[k] = leader/10;
                //����ie678:
                ele.style.filter = "alpha(opacity="+leader*10+")";
                //�����ʱ��;
                if(parseInt(json[k]*10) !== leader){
                    bool = false;
                }
            }else{
                //��������,����һ���߼�
                var leader = parseInt(getStyle(ele,k)) || 0;//getStyle();�ķ���ֵ��һ�����д�Ϊ���ַ���
                var step = (json[k]-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;//��һ������Ҫ����λ��
                ele.style[k] = leader + "px";
                //�����ʱ��;
                if(json[k] !== leader){
                    bool = false;
                }
            }
        }
        //���������ʱ��������forѭ��֮��,����Ҫ�ж�;
        console.log(1);
        if(bool){
            clearInterval(ele.timer);
            //�����ʱ��֮��,������������ִ����ϵ�ʱ��,��ʱ���ҾͿ���ִ����һ��������
            if(fn){
                fn();
            }
        }
    },50);
}


function getStyle(ele,attr){
    //�ж�:������Ƿ�֧��ĳ������,֧�־͵���,��֧�־�������һ��
    if(ele.currentStyle !== undefined){//��������Բ����ڷ���ֵ����undefined
        return ele.currentStyle[attr];//�����Ż�ȡ����ֵ,�Ƚ����,����ʲô����ʲô
    }else{
        //����ȸ�ie9+֧�ֵķ���
        return window.getComputedStyle(ele,null)[attr];
    }
}
