var _id = function _id(id) {
        return document.getElementById(id);
    }
    // function btn() {
    //     alert("S.P.");
    // }
function wrk() {
    para.innerHTML = "Hi this is Me";
}
var button = _id('btn');
//button.addEventListener('click',btn,false);
var para = _id('para');
button.addEventListener('mouseover', wrk, false);
button.addEventListener('mouseout', function() {
    para.innerHTML = "";
});
