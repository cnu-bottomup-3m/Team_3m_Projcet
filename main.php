<!DOCTYPE html>
<html lang="ko">

<head>
    <meta content="text/html; charset=UTF-8">
    <script src="http://code.jquery.com/jquery-latest.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./style.css" rel="stylesheet">

</head>

<body>
    <!-- 상단 메뉴 바에 해당하는 영역 -->
    <div class="top-layout">
        <!-- 로고를 나타내는 영역 -->
        <div class="logo" onclick="window.location.reload()"> Mutube ! </div>

        <div class="search-text-content" >
            <!-- 검색창을 나타내는 영역 -->
            <input type="text" id="sin" class="search-text-box">
        </div>
        <!-- 검색 버튼 -->
        <button class="search-btn" id="sbtn" onclick="searchandplay()">Search</button>
        <!-- 로그인 버튼 -->
        <form class="logout-form" method="POST">
            <input type="submit" name="submit" value="Log-out" class="logout-btns" formaction="./logout.php">
        </form>
    </div>

    <div class="playlist-layout">
        <ul class="playlist-ul">

            <li onclick="show_hot100_charts()" id="play">
                Billboard Hot 100
            </li>
            <li onclick="show_pop_charts()" id="play">
                Billboard Pop Chart
            </li>
            <li onclick="show_kpop_charts()" id="play">
                Billboard K-Pop Chart
            </li>
            <li onclick="show_rap_charts()" id="play">
                Billboard Hip-Hop Chart
            </li>
            <li onclick="show_rock_charts()" id="play">
                Billboard Rock Chart
            </li>
            <li onclick="show_rnb_charts()" id="play">
                Billboard R&B Chart
            </li>
            <li onclick="show_latin_charts()" id="play">
                Billboard Latin Chart
            </li>
            <li onclick="show_club_charts()" id="play">
                Billboard Club-Song Chart
            </li>
            <li onclick="show_dance_charts()" id="play">
                Billboard Dance-Electronic Chart
            </li>
            <li onclick="show_alter_charts()" id="play">
                Billboard Alternative Chart
            </li>
            <li onclick="show_jpop_charts()" id="play">
                Billboard J-Pop Chart
            </li>
            <li onclick="show_country_charts()" id="play">
                Billboard Country Chart
            </li>


        </ul>
    </div>

    <div class="list-layout">
        <ul class="chartlist-ul" id="chartlist-ul">

        </ul>
    </div>

    <!-- 유튜브 화면을 가져올 영역 -->
    <div id="youtube-selected">
        <div id="youtube-player">

        </div>
    </div>

    <script src="login.js"></script>
</body>

</html>