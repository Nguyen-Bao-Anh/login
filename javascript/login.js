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
            // if(validateNull()){
            //     $('.account').parent('div').find('.html_error').remove(".html_error")
            //     $('.password').parent('div').find('.html_error').remove(".html_error")
            // }
            // else
            // {
            //     var html = '<div class="html_error" style="color: #dc3545;">' + 'Nhập' + '</div>';
            //     $('.account').parent('div').find('.html_error').remove(".html_error")
            //     $('.password').parent('div').find('.html_error').remove(".html_error")
            //     $('.account').parent('div').append(html);
            //     $('.password').parent('div').append(html);
            // }
            // if(validateEmail() ){
            //     $('.account').parent('div').find('.html_error_email').remove(".html_error_email")
            //     $('.account').parent('div').find('.html_error').remove(".html_error")
            // }
            // else 
            // {
            //     var html1 = '<div class="html_error_email" style="color: #dc3545;">' + 'Lỗi nhập email' + '</div>';
            //     $('.account').parent('div').find('.html_error').remove(".html_error")
            //     $('.account').parent('div').find('.html_error_email').remove(".html_error_email")
            //     $('.account').parent('div').append(html1);
            // }

            // if(validatePass() ){
            //     $('.password').parent('div').find('.html_error_pass').remove(".html_error_pass")
            //     $('.password').parent('div').find('.html_error').remove(".html_error")
            // }
            // else 
            // {
            //     var html2 = '<div class="html_error_pass" style="color: #dc3545;">' + 'Lỗi nhập pass chưa đủ 6 ký tự' + '</div>';
            //     $('.password').parent('div').find('.html_error').remove(".html_error")
            //     $('.password').parent('div').find('.html_error_pass').remove(".html_error_pass")
            //     $('.password').parent('div').append(html2);
               
            // }


        if(validateNull()){
            if (_validateEmail($('.email').val()) && $('.password').val().length >= 6) {
                alert("Đăng nhập thành công");
            }else{
                if (!_validateEmail($('.email').val())) {
                    var html1 = '<div class="html_error" style="color: #dc3545;">' + 'Lỗi nhập email' + '</div>';
                    $('.account').parent('div').append(html1);
                }
                if ($('.password').val().length < 6) {
                    var html2 = '<div class="html_error" style="color: #dc3545;">' + 'Lỗi nhập pass chưa đủ 6 ký tự' + '</div>';
                    $('.password').parent('div').append(html2);
                }
            }
        }
    });

}
function initialize () {
}
// //Kiểm tra rỗng
// function validateNull(element) {
//     if(!element) {
//         element = $('body')
//     }
//     var error = 0;
//     try {
//         element.find('.required').each(function(){
//             if (($(this).is("input") && $(this).val()) == ''){
//                  error ++;
//             }
//     });
//         if (error > 0 )
//         {
//             return false
//         }
        
//         else
//         {
//             return true
//         }

//     } catch (e) {
//         alert('_validate: ' + e.toString());
//     }
// }
// //Kiểm tra Email
// function validateEmail(element) {
//     if(!element) {
//         element = $('body')
//     }
//     var error = 0;
//     try {
//         element.find('.email').each(function(){
           
//         // Kiểm tra định dạng của email
       
//         if ( $(this).val().indexOf('@gmail.com') == -1 ){
//                  error ++
//         }
//     });
//         if (error > 0 )
//         {
//             return false
//         }

//         else 
//         {
//             return true
//         }
        
//     } catch (e) {
//         alert('_validate: ' + e.toString());
//     }
// }

// //Kiểm tra Password
// function validatePass(element) {
//     if(!element) {
//         element = $('body')
//     }
//     var error = 0;
//     try {
//         element.find('.pas').each(function(){
            
//         // Kiểm tra pass đủ 6 ký tự ko
//         element.find('.pas').each(function(){
//             if ( $(this).val().length < 6 ){
//                 error ++
//             }

//             if($(this).val().length == 0) {
//                 error ++
//             }
        
//         })
//     });
//     if (error > 0 )
//     {
//         return false
//     }

//     else 
//     {
//         return true
//     }
//     } catch (e) {
//         alert('_validate: ' + e.toString());
//     }
// }


//Kiểm tra rỗng
function validateNull(element) {
    if(!element) {
        element = $('body')
    }
    //thực hiện xóa hết lỗi
    $('.html_error').remove();
    var error = 0;
    try {
        element.find('.required').each(function(){
            if (($(this).is("input") && $(this).val()) == ''){
                //fill lỗi
                var html = '<div class="html_error" style="color: #dc3545;">' + 'Yêu cầu nhập' + '</div>';
                $(this).parent('div').append(html);
                 error ++;
            }
    });
        if (error > 0 )
        {
            return false
        }
        
        else
        {
            return true
        }

    } catch (e) {
        alert('_validate: ' + e.toString());
    }
}
//Kiểm tra Email
function _validateEmail(string) {
    var regexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (regexp.test(string) || string == '') {
        return true;
    } else {
        return false;
    }
}