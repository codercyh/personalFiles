/**
 * 添加cookie内容
 * @param key cookie名
 * @param value cookie值
 * @param expires 有效期
 */
function setItem(key, value, expires) {
    let d = '';
    if (expires) {
        let date = new Date();
        date.setDate(date.getDate() + expires);
        d = ";expires=" + date;
    }
    document.cookie = key + "=" + value + d;
}
function getItem(key) {
    let cookies = cookieList();
    /*遍历cookie 数组*/
    for (let i = 0; i < cookies.length; i++) {
        /*获取每个cookie*/
        let ck = cookies[i];
        /*再次拆分单条cookie信息*/
        let cks = ck.split("=");
        /*判断cks下标0的值和要找的key是否相等*/
        if (cks[0] == key){
            return cks[1];
        }

    }
}
function removeItem(key) {
    setItem(key,"",-1);
}


function cookieSize() {
    return cookieList().length;
}
function clear() {
    let cookies = cookieList();
    for (let i = 0; i < cookies.length; i++) {
        let cks = cookies[i].split("=");
        removeItem(cks[0]);

    }
}
function key(index) {
    let cookies = cookieList();
    for (let i = 0; i < cookies.length; i++) {
        if (i===index){
            let cks = cookies[i].split("=");
            return cks[0];
        }
    }
    return null;
}


function cookieList() {
    //获取cookie
    let cookie = document.cookie;
    /*判断是否有cookie*/
    if (cookie){
        /*拆分所有cookie*/
        let cookies  = cookie.split("; ");
        return cookies;
    }
    /*找不到分号则直接返回空数组*/
    return [];

}