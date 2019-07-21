// let login_pop = document.getElementById('logmodalbox');

// function login_popup() { //로그인 버튼을 클릭하면 로그인 옵션 화면을 띄워주는 함수.
//     let login = document.getElementById('login-modal');
//     login.style.display = 'block'
//     login_pop.style.display = 'block';
// }

// window.onclick = function (event) { //나타난 영역의 외부를 클릭하면 화면이 닫히고 메인 화면이 보이도록 함.
//     if (event.target == login_pop) {
//         login_pop.style.display = "none";
//     }
// }



function show_melon_apop_chart() {
    var b = document.getElementById('chartlist-ul');
    b.innerHTML = "";
    $.getJSON("melon_day_ab_pop.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(b).append('<tr class="chart" id="bpop' + i + '"">' + '<td id="rank">' + json.entries[i].rank + '</td>' + '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc + '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td id="artist">' + json.entries[i].artist + '</td>' + '<td id="title">' + json.entries[i].title + '</td>' + '<td id="onplay"><button id="playbutton" onclick="showtube(event)"></button></td>' + '</td><td id="addtolist"><button id="listaddbutton" onclick=""></button></td>' + '</tr>');
        }

    });
}


function show_melon_arap_chart() {
    var c = document.getElementById('chartlist-ul');
    c.innerHTML = "";
    $.getJSON("melon_day_ab_rap.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(c).append('<tr class="chart" id="brap' + i + '"">' + '<td id="rank">' + json.entries[i].rank + '</td>' + '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc + '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td id="artist">' + json.entries[i].artist + '</td>' + '<td id="title">' + json.entries[i].title + '</td>' + '<td id="onplay"><button id="playbutton" onclick="showtube(event)"></button></td>' + '</td><td id="addtolist"><button id="listaddbutton" onclick=""></button></td>' + '</tr>');
        }

    });
}


function show_melon_arock_chart() {
    var d = document.getElementById('chartlist-ul');
    d.innerHTML = "";
    $.getJSON("melon_day_ab_rock.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(d).append('<tr class="chart" id="broc' + i + '"">' + '<td id="rank">' + json.entries[i].rank + '</td>' + '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc + '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td id="artist">' + json.entries[i].artist + '</td>' + '<td id="title">' + json.entries[i].title + '</td>' + '<td id="onplay"><button id="playbutton" onclick="showtube(event)"></button></td>' + '</td><td id="addtolist"><button id="listaddbutton" onclick=""></button></td>' + '</tr>');
        }
    });

}

function show_melon_arnb_chart() {
    var e = document.getElementById('chartlist-ul');
    e.innerHTML = "";
    $.getJSON("melon_day_ab_rnb.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(e).append('<tr class="chart" id="brnb' + i + '"">' + '<td id="rank">' + json.entries[i].rank + '</td>' + '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc + '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td id="artist">' + json.entries[i].artist + '</td>' + '<td id="title">' + json.entries[i].title + '</td>' + '<td id="onplay"><button id="playbutton" onclick="showtube(event)"></button></td>' + '</td><td id="addtolist"><button id="listaddbutton" onclick=""></button></td>' + '</tr>');
        }

    });
}


function show_melon_aelec_chart() {
    var a = document.getElementById('chartlist-ul');
    a.innerHTML = "";
    $.getJSON("melon_day_ab_elec.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(a).append('<tr class="chart"  id="bele' + i + '"">' + '<td id="rank">' + json.entries[i].rank + '</td>' + '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc + '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td id="artist">' + json.entries[i].artist + '</td>' + '<td id="title">' + json.entries[i].title + '</td>' + '<td id="onplay"><button id="playbutton" onclick="showtube(event)"></button></td>' + '</td><td id="addtolist"><button id="listaddbutton" onclick=""></button></td>' + '</tr>');
        }
    });
}

function show_melon_afolk_chart() {
    var z = document.getElementById('chartlist-ul');
    z.innerHTML = "";
    $.getJSON("melon_day_ab_folk.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(z).append('<tr class="chart"  id="bfol' + i + '"">' + '<td id="rank">' + json.entries[i].rank + '</td>' + '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc + '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td id="artist">' + json.entries[i].artist + '</td>' + '<td id="title">' + json.entries[i].title + '</td>' + '<td id="onplay"><button id="playbutton" onclick="showtube(event)"></button></td>' + '</td><td id="addtolist"><button id="listaddbutton" onclick=""></button></td>' + '</tr>');
        }
    });

}

function show_melon_top100_chart() {
    var f = document.getElementById('chartlist-ul');
    f.innerHTML = "";
    $.getJSON("melon_top_100.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(f).append('<tr class="chart" id="mtop' + i + '"">' + '<td id="rank">' + json.entries[i].rank + '</td>' + '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc + '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td id="artist">' + json.entries[i].artist + '</td>' + '<td id="title">' + json.entries[i].title + '</td>' + '<td id="onplay"><button id="playbutton" onclick="showtube(event)"></button></td>' + '</td><td id="addtolist"><button id="listaddbutton" onclick=""></button></td>' + '</tr>');
        }

    });
}

function show_melon_bal_chart() {
    var g = document.getElementById('chartlist-ul');
    g.innerHTML = "";
    $.getJSON("melon_day_ballad.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(g).append('<tr class="chart" id="mbal' + i + '"">' + '<td id="rank">' + json.entries[i].rank + '</td>' + '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc + '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td id="artist">' + json.entries[i].artist + '</td>' + '<td id="title">' + json.entries[i].title + '</td>' + '<td id="onplay"><button id="playbutton" onclick="showtube(event)"></button></td>' + '</td><td id="addtolist"><button id="listaddbutton" onclick=""></button></td>' + '</tr>');
        }

    });
}

function show_melon_dance_chart() {
    var h = document.getElementById('chartlist-ul');
    h.innerHTML = "";
    $.getJSON("melon_day_dance.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(h).append('<tr class="chart" id="mdan' + i + '"">' + '<td id="rank">' + json.entries[i].rank + '</td>' + '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc + '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td id="artist">' + json.entries[i].artist + '</td>' + '<td id="title">' + json.entries[i].title + '</td>' + '<td id="onplay"><button id="playbutton" onclick="showtube(event)"></button></td>' + '</td><td id="addtolist"><button id="listaddbutton" onclick=""></button></td>' + '</tr>');
        }

    });
}

function show_melon_hiphop_chart() {
    var j = document.getElementById('chartlist-ul');
    j.innerHTML = "";
    $.getJSON("melon_day_hiphop.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(j).append('<tr class="chart" id="mhip' + i + '"">' + '<td id="rank">' + json.entries[i].rank + '</td>' + '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc + '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td id="artist">' + json.entries[i].artist + '</td>' + '<td id="title">' + json.entries[i].title + '</td>' + '<td id="onplay"><button id="playbutton" onclick="showtube(event)"></button></td>' + '</td><td id="addtolist"><button id="listaddbutton" onclick=""></button></td>' + '</tr>');
        }

    });
}

function show_melon_inde_chart() {
    var k = document.getElementById('chartlist-ul');
    k.innerHTML = "";
    $.getJSON("melon_day_inde.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(k).append('<tr class="chart" id="mind' + i + '"">' + '<td id="rank">' + json.entries[i].rank + '</td>' + '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc + '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td id="artist">' + json.entries[i].artist + '</td>' + '<td id="title">' + json.entries[i].title + '</td>' + '<td id="onplay"><button id="playbutton" onclick="showtube(event)"></button></td>' + '</td><td id="addtolist"><button id="listaddbutton" onclick=""></button></td>' + '</tr>');
        }

    });
}

function show_melon_rnb_chart() {
    var l = document.getElementById('chartlist-ul');
    l.innerHTML = "";
    $.getJSON("melon_day_rnb.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(l).append('<tr class="chart" id="mrnb' + i + '"">' + '<td id="rank">' + json.entries[i].rank + '</td>' + '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc + '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td id="artist">' + json.entries[i].artist + '</td>' + '<td id="title">' + json.entries[i].title + '</td>' + '<td id="onplay"><button id="playbutton" onclick="showtube(event)"></button></td>' + '</td><td id="addtolist"><button id="listaddbutton" onclick=""></button></td>' + '</tr>');
        }

    });
}

function show_melon_rock_chart() {
    var m = document.getElementById('chartlist-ul');
    m.innerHTML = "";
    $.getJSON("melon_day_rock.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(m).append('<tr class="chart" id="mroc' + i + '"">' + '<td id="rank">' + json.entries[i].rank + '</td>' + '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc + '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td id="artist">' + json.entries[i].artist + '</td>' + '<td id="title">' + json.entries[i].title + '</td>' + '<td id="onplay"><button id="playbutton" onclick="showtube(event)"></button></td>' + '</td><td id="addtolist"><button id="listaddbutton" onclick=""></button></td>' + '</tr>');
        }
    });

}

function show_melon_folk_chart() {
    var n = document.getElementById('chartlist-ul');
    n.innerHTML = "";

    $.getJSON("melon_day_folk.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(n).append('<tr class="chart" id="mfol' + i + '"">' + '<td id="rank">' + json.entries[i].rank + '</td>' + '<td id="thumbnail">' + '<img class="albumcover" width="70" height="70" src="' + json.entries[i].imgsrc + '" alt="' + json.entries[i].imgalt + '"> </td>' + '<td id="artist">' + json.entries[i].artist + '</td>' + '<td id="title">' + json.entries[i].title + '</td>' + '<td id="onplay"><button id="playbutton" onclick="showtube(event)"></button></td>' + '</td><td id="addtolist"><button id="listaddbutton" onclick=""></button></td>' + '</tr>');
        }
    });
}

//각 차트별 리스트의 내용으로 탐색된 유튜브 영상을 우측 화면에 띄워주는 함수이다.
var event;

function showtube(ev) {
    event = ev;
    var keyvalue = event.target.parentNode.parentNode.children[2].innerText + ' - ' + event.target.parentNode.parentNode.children[3].innerText;
    console.log(event.target.parentNode.parentNode.children[2].innerText + ' - ' + event.target.parentNode.parentNode.children[3].innerText);
    $.ajax({
        dataType: "json",
        url: 'https://www.googleapis.com/youtube/v3/search' +
            '?part=snippet' +
            '&maxResults=10' +
            '&order=relevance' +
            // '&type=video'+
            // '&videoCategoryId=Music'+
            '&q=' + keyvalue + 'audio' +
            '&key=AIzaSyBXjC5s3z02hP_wTIyO8tkinjkgWrGvAvk'
    }).done(function (data) {
        /* Initial */
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



        var player;

        function onYouTubeIframeAPIReady() {
            $('#youtube-player').empty();
            var iframe = document.createElement("iframe");
            iframe.width = 250;
            iframe.height = 200;
            iframe.id = "youtubeIframe";
            player = new YT.Player('youtubeIframe', {
                videoId: data.items[0].id.videoId
            });

            iframe.src = "https://www.youtube.com/embed/" + data.items[0].id.videoId + "?&autoplay=1&enablejsapi=1&origin=" + encodeURIComponent(window.location.protocol + "//" + document.domain) + "&playsinline=1&rel=0";
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowFullScreen', '');

            document.getElementById('youtube-player').appendChild(iframe);
        };
        console.log(data.items[0].id.videoId);

        onYouTubeIframeAPIReady();
    });

}

//검색어와 존재하는 리 일치하는 내용이 있다면 찾아서 재생시켜주고 없다면 에러를 반환해주는 함수.
//정 중 시간자 포기했습니다.
function searchandplay() {
    var input = document.getElementById("sin");
    var alllist = document.getElementsByTagName("li");

    for (var i = 0; i < alllist.length; i++) {
        console.log('hi2');
        if (alllist[i].className == "chart") {
            console.log('hi3');
            if (input.innerText.match(alllist[i].innerText)) {
                console.log(alllist[i].className);
                var temp = document.getElementById(alllist[i].id);
                temp.onclick(showtube(event));
            } else {
                window.alert("검색하신 결과가 차트에 없습니다.");
            }
        }

    }
}