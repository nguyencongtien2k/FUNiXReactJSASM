$(document).ready(function() {
    //Hiển thị cửa sổ lightbox
    $("#s-box").click(function() {
        $('.backdrop, .box').animate({'opacity':'.50'}, 300, 'linear');
        $('.box').animate({'opacity':'1.00'}, 300, 'linear');
        $('.backdrop, .box').css('display', 'block');
    });
    //Ẩn lightbox
    $('.close').click(function() {
        $('.backdrop, .box').animate({'opacity':'0'}, 300, 'linear', function() {
            $('.backdrop, .box').css('display', 'none');
        });
    });
    //Xem tin tức hàng đầu
    var t_Token = 'https://gnews.io/api/v4/top-headlines?&token=e80d3837f8ba65d10c64459aa295a70b';
    fetch(t_Token)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var htmls = data.articles.map(function(data) {
                return `
                    <div>
                        <div style="float: left; margin-right: 30px;">
                            <img src= "${data.image}" width="500px" height="300px">
                        </div>
                        <div>
                            <strong><a href="${data.url}" target="_blank">${data.title}</a></strong>
                            <p><small>${data.publishedAt}</small></p>
                            <p>${data.description}</p>
                        </div>
                    </div><br>
                ` 
            });
            var html = htmls.join('');
            $("#content").append(html);
        });
    //Tìm kiếm tin tức
    $('#search').click(function() {
        //Ẩn phần tin tức đang có
        $('#content').children().remove();
        //Hiển thị tin tức từ khóa tìm kiếm
        var s_Token = 'e80d3837f8ba65d10c64459aa295a70b';
        var k_word = $('#word').val();
        var urls = 'https://gnews.io/api/v4/search?q=' + k_word + '&max=10&lang=en&token=' + s_Token;
        fetch(urls, {method: 'GET',})
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                var htmls = data.articles.map(function(data) {
                    return `
                        <div>
                            <div style="float: left; margin-right: 30px;">
                                <img src= "${data.image}" width="500px" height="300px">
                            </div>
                            <div>
                                <strong><a href="${data.url}" target="_blank">${data.title}</a></strong>
                                <p><small>${data.publishedAt}</small></p>
                                <p>${data.description}</p>
                            </div>
                        </div><br>
                    ` 
                });
                var html = htmls.join('');
                $("#content").append(html);
            })
        //Ẩn lightbox
        $('.backdrop, .box').animate({'opacity':'0'}, 300, 'linear', function() {
            $('.backdrop, .box').css('display', 'none');
        });
    });
});