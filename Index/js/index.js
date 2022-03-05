$(document).ready(function () {
    const arrayUsername = ['minhnhat569'];
    const arrayPassword = ['123456'];
    $('#username').blur(function () {
        var username = $(this).val();
        if (username.length < 5) {
            $('#username').val("");
            $('#username').attr('Tên đăng nhập tối thiểu 5 ký tự');

        } else {
            if ($.inArray(username, arrayUsername) == -1) {

                $('#username').val("");
                $('#username').attr('placeholder', 'Tên đăng nhập không tồn tại');
            }

        }

    });
    $('#dangnhap').click(function () {
        var username1 = $('#username').val();
        var password1 = $('#password').val();

        if ($.inArray(username1, arrayUsername) == $.inArray(password1, arrayPassword)
            && $.inArray(username1, arrayUsername) != -1
            && $.inArray(password1, arrayPassword) != -1) {

            window.location.replace("sanpham.html");
            alert('thanh cong');


        } else {
            alert('sai mật khẩu, thử lại !');
        }

    });
});




// (function() {
//     'use strict';
//     window.addEventListener('load', function() {
//       // Get the forms we want to add validation styles to
//       var forms = document.getElementsByClassName('needs-validation');
//       // Loop over them and prevent submission
//       var validation = Array.prototype.filter.call(forms, function(form) {
//         form.addEventListener('submit', function(event) {
//           if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
//           }
//           form.classList.add('was-validated');
//         }, false);
//       });
//     }, false);
//   })();


$(document).ready(function () {
    $('#list').click(function (event) { event.preventDefault(); $('#products .item').addClass('list-group-item'); });
    $('#grid').click(function (event) {
        event.preventDefault(); $('#products .item').removeClass('list-group-item');
        $('#products .item').addClass('grid-group-item');
    });
});

// $('#myModal').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
//     })




function anHienAo() {
    var b = document.getElementById('itemao');
    if (b.style.display == 'block') {
        b.style.display = 'none';
    } else {
        b.style.display = "block";
    }
    return false;
}
function anHienQuan() {
    var b = document.getElementById('itemquan');
    if (b.style.display == 'block') {
        b.style.display = 'none';
    } else {
        b.style.display = "block";
    }
    return false;
}
function anHienGiay() {
    var b = document.getElementById('itemgiay');
    if (b.style.display == 'block') {
        b.style.display = 'none';
    } else {
        b.style.display = "block";
    }
    return false;
}

