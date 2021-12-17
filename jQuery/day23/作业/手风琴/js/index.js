window.onload=function (){
    /*获取所有li*/
    let lis=document.querySelectorAll(".main li");
    /*获取所有bg*/
    let bgs=document.querySelectorAll(".bg");
    /*遍历所有的li*/
    lis.forEach((item,index)=>{
        /*给每个li绑定鼠标悬浮事件*/
        item.onmouseover=function () {
            /*清除所有的样式*/
            lis.forEach((el,i)=>{
                el.className="";
                bgs[i].classList.remove("bg-active");
            });
            this.className="li-active";
            bgs[index].classList.add("bg-active");
        }
    });
}
