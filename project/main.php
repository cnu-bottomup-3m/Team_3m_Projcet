<!DOCTYPE html>
<html lang="ko">

<head>
    <meta content="text/html; charset=UTF-8">
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./style.css?ver=1" type="text/css" rel="stylesheet">

</head>

<body>
    <!-- 상단 메뉴 바에 해당하는 영역 -->
    <section class="top-layout">
        <!-- 로고를 나타내는 영역 -->
        <div class="logo" onclick="window.location.reload()"> Mutube ! </div>

        <div class="search-text-content">
            <!-- 검색창을 나타내는 영역 -->
            <input type="text" id="sin" class="search-text-box">
        </div>
        <!-- 검색 버튼 -->
        <button class="search-btn" id="sbtn" onclick="searchandplay()">검색</button>
        <!-- 로그인 버튼 -->
        <form class="logout-form" method="POST">
            <input type="submit" name="submit" value="로그아웃" class="logout-btns" formaction="./logout.php">

        </form>
    </section>

    <section class="playlist-layout">

        <table class="genre-table">
            <thead class="charttablehead">
                <tr>
                    <td colspan="2" id="charthead">
                        차트
                    </td>
                </tr>
            </thead>
            <tbody class="playlist-ul">

                <tr>
                    <td colspan="2" onclick="show_melon_apop_chart()" id="play">
                        멜론 해외 Pop
                    </td>
                </tr>
                <tr>
                    <td colspan="2" onclick="show_melon_arap_chart()" id="play">
                        멜론 해외 랩/힙합
                    </td>
                </tr>
                <tr>
                    <td colspan="2" onclick="show_melon_arock_chart()" id="play">
                        멜론 해외 록/메탈
                    </td>

                </tr>
                <tr>
                    <td colspan="2" onclick="show_melon_arnb_chart()" id="play">
                        멜론 해외 R&B
                    </td>
                </tr>
                <tr>
                    <td colspan="2" onclick="show_melon_aelec_chart()" id="play">
                        멜론 해외 일렉트로닉
                    </td>
                </tr>
                <tr>
                    <td colspan="2" onclick="show_melon_afolk_chart()" id="play">
                        멜론 해외 포크/블루스
                    </td>
                </tr>
                <tr>
                    <td colspan="2" onclick="show_melon_top100_chart()" id="play">
                        멜론 Top 100
                    </td>
                </tr>
                <tr>
                    <td colspan="2" onclick="show_melon_bal_chart()" id="play">
                        멜론 발라드
                    </td>
                </tr>
                <tr>
                    <td colspan="2" onclick="show_melon_dance_chart()" id="play">
                        멜론 댄스
                    </td>
                </tr>
                <tr>
                    <td colspan="2" onclick="show_melon_hiphop_chart()" id="play">
                        멜론 랩/힙합
                    </td>
                </tr>
                <tr>
                    <td colspan="2" onclick="show_melon_rnb_chart()" id="play">
                        멜론 R&B
                    </td>
                </tr>
                <tr>
                    <td colspan="2" onclick="show_melon_inde_chart()" id="play">
                        멜론 인디
                    </td>
                </tr>
                <tr>
                    <td colspan="2" onclick="show_melon_rock_chart()" id="play">
                        멜론 록/메탈
                    </td>
                </tr>
                <tr>
                    <td colspan="2" onclick="show_melon_folk_chart()" id="play">
                        멜론 포크/블루스
                    </td>
                </tr>
            </tbody>
        </table>
    </section>

    <section class="list-layout">
        <table class="songs-table">
            <thead class="songtable-head">
                <tr>
                    <td id="rankh">
                        순위
                    </td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td id="artisth">
                        가수명
                    </td>
                    <td id="titleh">
                        제목
                    </td>
                </tr>
            </thead>
            <tbody id="chartlist-ul" class="chartlist-ul">

            </tbody>

        </table>
    </section>
    <section class="ongoing-player">
        <div class="img">
            <!-- <img src="img/icon/thumbnail.png"> -->
        </div>

        <div class="con">
            <div class="controller">
                <img class="prev" src="./controller_prev.png">
                <img class="state" src="./controller_pause.png">
                <img class="next" src="./controller_next.png">
            </div>
        </div>

        <div class="bar">
            <input type="range" class="timeBar">
            <div class="lyrics"></div>
        </div>

        <div class="time">
            <span>0:00 - 0:00</span>
        </div>
    </section>

    <!-- 유튜브 화면을 가져올 영역 -->
    <section id="youtube-selected">
        <div id="youtube-player">

        </div>
    </section>

    <script type="text/javascript" src="./login.js?ver=1"></script>
</body>

</html>