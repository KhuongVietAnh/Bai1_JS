
function clickAdd() {
    var list = document.getElementsByClassName('list-items-js');
    //Set giá trị  value= input
    var input = document.getElementById("input").value;
    //Khởi tạo giá trị exist
    var exist;
    if (input.trim().length <= 0)
    {
        alert("Input is empty. Please add input.");
    } else if (input.trim().length > 20)
    {
        alert("Input is too long, input < 20");
        document.getElementById('input').value = '';
    }
    else
    {
        //Add vào list
        if (list.length === 0)
        {
            $('.list-js').append('<li class="list-items-js" value="' + input.trim() + '">' + input.trim() + ' <button type="button" class="del-js" value="X">X</button></li>');
            document.getElementById('input').value = '';
        } else {
            $.each(list, function (index, value) {
                //So Sánh giá trị input đang nhập với giá trị input trong danh sách
                //Nếu đã có thì exist =1.
                if (input === value.getAttribute("value"))
                {
                    exist = 1;
                    return 0;
                }
            });
            //Kiểm tra nếu giá trị exist = 1 thì không add, ngược lại add 
            if (exist === 1)
            {
                alert("Input is existed");
                document.getElementById('input').value = '';
            } else {
                $('.list-js').append('<li class="list-items-js" value="' + input.trim() + '">' + input.trim() + ' <button type="button" class="del-js" value="X">X</button></li>');
                document.getElementById('input').value = '';
            }
        }
    }
    document.getElementById('input').focus();
}
;
//Del members in list
$(document).on("click", ".del-js", function () {
    $(this).parent().remove();
});

