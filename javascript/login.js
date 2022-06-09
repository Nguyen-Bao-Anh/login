$(document).ready(function(){
    try {
        initEvents();
        initialize();
    } catch (e) {
        alert("realy" +e.message);
    }
});

function initEvents () {
    $(document).on('click', '.login', function  () {
        alert('banh dzai')        
    });

}
function initialize () {
}

function validate(element) {
    if(!element) {
        element = $('body')
    }
    var error = 0;
    try {
        
    } catch (e) {
        
    }
}