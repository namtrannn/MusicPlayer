
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const app = {
     songs:  [
        {
            Name: 'Lạ',
            singer: 'Phạm Đình Thái Ngân',
            path: 'https://zingmp3.vn/bai-hat/La-Pham-Dinh-Thai-Ngan/ZW6FF8W8.html',
            img: 'https://event.mediacdn.vn/2020/9/11/pham-dinh-thai-ngan-1-15998125671502078085814.png'
        },

        {
            Name: 'Mùa thu xanh lá',
            singer: 'Thái Thuyết Trâm',
            path: 'https://zingmp3.vn/bai-hat/Mua-Thu-La-Xanh-Le-Thu-Uyen/Z6UUFI6C.html',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKe78Wo9VpLmdmJbcoyUQNI8rA1OtjzyVRNA&usqp=CAU'
        },

        {
            Name: 'Em của ngày hôm qua',
            singer: 'Sơn Tùng MTP',
            path: 'https://zingmp3.vn/bai-hat/Em-Cua-Ngay-Hom-Qua-Slim-V-Remix-Son-Tung-M-TP/ZW70EI6D.html',
            img: 'data:image/jpeg;base64,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'
        },

        {
            Name: 'Chỉ còn những mùa nhớ',
            singer: 'Tăng Phúc',
            path: 'https://zingmp3.vn/bai-hat/Chi-Con-Nhung-Mua-Nho-Bao-Tram/ZW68A99Z.html',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyoYWXFn-X5Nfp5KFct08VFLoHiL9mxo1oHg&usqp=CAU'
        }
    ],

    render: function() {
        const htmls = this.songs.map(song => {
            return `
             <div class="song">
                <div class="thumb">
                    <img class="img-singer" src="${song.img}">
                </div>                
                <div class="body">
                    <h3>${song.Name}</h3>
                    <p>${song.singer}</p>
                </div>
                <div class="option">
                    <a href="">
                        <i class="ti-more-alt"></i>
                    </a>
                </div>
            </div>
            `
        })
        $('.play-list').innerHTML = htmls.join('')
    },

    start: function() {
        this.render();
    }
}

app.start();