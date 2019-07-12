let login_pop = document.getElementById('logmodalbox');

function login_popup() { //로그인 버튼을 클릭하면 로그인 옵션 화면을 띄워주는 함수.
    let login = document.getElementById('login-modal');
    login.style.display = 'block'
    login_pop.style.display = 'block';
}

window.onclick = function (event) { //나타난 영역의 외부를 클릭하면 화면이 닫히고 메인 화면이 보이도록 함.
    if (event.target == login_pop) {
        login_pop.style.display = "none";
    }
}

//각 빌보드 차트에 대한 정보를 리스트의 형태로 chartlist-ul에 뿌려준다.
function show_hot100_charts() {
    var a = document.getElementById("chartlist-ul");
    a.innerHTML = "";
    $.getJSON("bill-hot-100.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(a).append('<li class="chart" id="hot' + i + '" onclick="showtube(event)">' + '<span id="rank" style="float:left;">' + json.entries[i].rank + '</span>' + '<span id="artist">' + json.entries[i].artist + '</span>' + ' - <span id="title">' + json.entries[i].title + '</span>' + '</li>');
        }

    });

}

//각 빌보드 차트에 대한 정보를 리스트의 형태로 chartlist-ul에 뿌려준다.
function show_pop_charts() {
    var a = document.getElementById("chartlist-ul");
    a.innerHTML = "";
    $.getJSON("bill-pop.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(a).append('<li class="chart" id="hot' + i + '"onclick="showtube(event)">' + '<span id="rank" style="float:left;">' + json.entries[i].rank + '</span>' + '<span id="artist">' + json.entries[i].artist + '</span>' + ' - <span id="title">' + json.entries[i].title + '</span>' + '</li>');
        }

    });
}
//각 빌보드 차트에 대한 정보를 리스트의 형태로 chartlist-ul에 뿌려준다.
function show_kpop_charts() {
    var a = document.getElementById("chartlist-ul");
    a.innerHTML = "";
    $.getJSON("bill-kpop.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(a).append('<li class="chart" id="hot' + i + '"onclick="showtube(event)">' + '<span id="rank" style="float:left;">' + json.entries[i].rank + '</span>' + '<span id="artist">' + json.entries[i].artist + '</span>' + ' - <span id="title">' + json.entries[i].title + '</span>' + '</li>');
        }

    });
}

//각 빌보드 차트에 대한 정보를 리스트의 형태로 chartlist-ul에 뿌려준다.
function show_rap_charts() {
    var a = document.getElementById("chartlist-ul");
    a.innerHTML = "";
    $.getJSON("bill-rap.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(a).append('<li class="chart" id="hot' + i + '"onclick="showtube(event)">' + '<span id="rank" style="float:left;">' + json.entries[i].rank + '</span>' + '<span id="artist">' + json.entries[i].artist + '</span>' + ' - <span id="title">' + json.entries[i].title + '</span>' + '</li>');
        }

    });
}
//각 빌보드 차트에 대한 정보를 리스트의 형태로 chartlist-ul에 뿌려준다.
function show_rock_charts() {
    var a = document.getElementById("chartlist-ul");
    a.innerHTML = "";

    $.getJSON("bill-rock.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(a).append('<li class="chart" id="hot' + i + '"onclick="showtube(event)">' + '<span id="rank" style="float:left;">' + json.entries[i].rank + '</span>' + '<span id="artist">' + json.entries[i].artist + '</span>' + ' - <span id="title">' + json.entries[i].title + '</span>' + '</li>');
        }

    });
}
//각 빌보드 차트에 대한 정보를 리스트의 형태로 chartlist-ul에 뿌려준다.
function show_rnb_charts() {
    var a = document.getElementById("chartlist-ul");
    a.innerHTML = "";

    $.getJSON("bill-rnb.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(a).append('<li class="chart" id="hot' + i + '"onclick="showtube(event)">' + '<span id="rank" style="float:left;">' + json.entries[i].rank + '</span>' + '<span id="artist">' + json.entries[i].artist + '</span>' + ' - <span id="title">' + json.entries[i].title + '</span>' + '</li>');
        }

    });
}
//각 빌보드 차트에 대한 정보를 리스트의 형태로 chartlist-ul에 뿌려준다.
function show_latin_charts() {
    var a = document.getElementById("chartlist-ul");
    a.innerHTML = "";

    $.getJSON("bill-latin.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(a).append('<li class="chart" id="hot' + i + '"onclick="showtube(event)">' + '<span id="rank" style="float:left;">' + json.entries[i].rank + '</span>' + '<span id="artist">' + json.entries[i].artist + '</span>' + ' - <span id="title">' + json.entries[i].title + '</span>' + '</li>');
        }

    });
}
//각 빌보드 차트에 대한 정보를 리스트의 형태로 chartlist-ul에 뿌려준다.
function show_dance_charts() {
    var a = document.getElementById("chartlist-ul");
    a.innerHTML = "";
    $.getJSON("bill-dance-elec.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(a).append('<li class="chart" id="hot' + i + '"onclick="showtube(event)">' + '<span id="rank" style="float:left;">' + json.entries[i].rank + '</span>' + '<span id="artist">' + json.entries[i].artist + '</span>' + ' - <span id="title">' + json.entries[i].title + '</span>' + '</li>');
        }

    });
}

//각 빌보드 차트에 대한 정보를 리스트의 형태로 chartlist-ul에 뿌려준다.
function show_club_charts() {
    var a = document.getElementById("chartlist-ul");
    a.innerHTML = "";
    $.getJSON("bill-club-songs.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(a).append('<li class="chart" id="hot' + i + '"onclick="showtube(event)">' + '<span id="rank" style="float:left;">' + json.entries[i].rank + '</span>' + '<span id="artist">' + json.entries[i].artist + '</span>' + ' - <span id="title">' + json.entries[i].title + '</span>' + '</li>');
        }

    });
}
//각 빌보드 차트에 대한 정보를 리스트의 형태로 chartlist-ul에 뿌려준다.
function show_alter_charts() {
    var a = document.getElementById("chartlist-ul");
    a.innerHTML = "";
    $.getJSON("bill-alternative.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(a).append('<li class="chart" id="hot' + i + '"onclick="showtube(event)">' + '<span id="rank" style="float:left;">' + json.entries[i].rank + '</span>' + '<span id="artist">' + json.entries[i].artist + '</span>' + ' - <span id="title">' + json.entries[i].title + '</span>' + '</li>');
        }

    });
}
//각 빌보드 차트에 대한 정보를 리스트의 형태로 chartlist-ul에 뿌려준다.
function show_jpop_charts() {
    var a = document.getElementById("chartlist-ul");
    a.innerHTML = "";
    $.getJSON("bill-japan.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(a).append('<li class="chart" id="hot' + i + '"onclick="showtube(event)">' + '<span id="rank" style="float:left;">' + json.entries[i].rank + '</span>' + '<span id="artist">' + json.entries[i].artist + '</span>' + ' - <span id="title">' + json.entries[i].title + '</span>' + '</li>');
        }

    });
}
//각 빌보드 차트에 대한 정보를 리스트의 형태로 chartlist-ul에 뿌려준다.
function show_country_charts() {
    var a = document.getElementById("chartlist-ul");
    a.innerHTML = "";
    $.getJSON("bill-country.json", function (json) {
        for (var i = 0; i < json.entries.length; i++) {
            $(a).append('<li class="chart" id="hot' + i + '"onclick="showtube(event)">' + '<span id="rank" style="float:left;">' + json.entries[i].rank + '</span>' + '<span id="artist">' + json.entries[i].artist + '</span>' + ' - <span id="title">' + json.entries[i].title + '</span>' + '</li>');
        }

    });
}



//각 차트별 리스트의 내용으로 탐색된 유튜브 영상을 우측 화면에 띄워주는 함수이다.
var event;

function showtube(ev) {
    event = ev;
    var keyvalue = event.target.innerText;
    $.ajax({
        dataType: "json",
        url: 'https://www.googleapis.com/youtube/v3/search' +
            '?part=snippet' +
            '&maxResults=10' +
            '&order=relevance' +
            '&q=' + keyvalue + 'Official' +
            '&key=AIzaSyBXjC5s3z02hP_wTIyO8tkinjkgWrGvAvk'
    }).done(function (data) {
        /* Initial */
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



        var player;
        window.onYouTubeIframeAPIReady = function () {
            $('#youtube-player').empty();
            var iframe = document.createElement("iframe");
            iframe.width = 600;
            iframe.height = 380;
            iframe.id = "youtubeIframe";
            player = new YT.Player('youtubeIframe', {
                videoId: data.items[0].id.videoId
            });

            iframe.src = "https://www.youtube.com/embed/" + data.items[0].id.videoId + "?autoplay=1&enablejsapi=1&origin=" + encodeURIComponent(window.location.protocol + "//" + document.domain) + "&playsinline=1&rel=0";
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowFullScreen', '');

            document.getElementById('youtube-player').appendChild(iframe);
        };
        console.log(data.items[0].id.videoId);


        window.onYouTubeIframeAPIReady();
    });

}

//검색어와 차트에 존재하는 리스트 중 일치하는 내용이 있다면 찾아서 재생시켜주고 없다면 에러를 반환해주는 함수.
//구현 과정 중 시간이 모자라 중도 포기했습니다.
function searchandplay() {
    console.log('hi?');
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