let _ = (ele) => {
    return document.querySelector(ele);
}

let _all= (eles) => {
    return document.querySelectorAll(eles);
}

let reloadFunction = () => {
    window.location.reload();
}

_(".logo").addEventListener("click",reloadFunction);