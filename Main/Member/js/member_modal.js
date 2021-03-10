$(function () {
    //六角形をクリックしたら
    $(".hexLink").click(function () {
        //クリックされた名前のIDを取得する。誰がクリックされたのかを識別する
        var id = $(this).attr("id");//誰かの判別ID格納
        var hn = $("#" + id + " h2.name").text();//IDに基づいたハンドルネーム格納
        var grade = $("#" + id + " .grade").text();//学年を格納
        var com = $("#" + id + " .comment").html();//一言コメント
        var job = $("#" + id + " .job").text();//その人の役職格納
        var nodata = "No Data..."//データがないときに表示させる文字列のマクロ的な何か

        // alert(grade);
        //---------------モーダル内の情報の書き換え----------------
        //----ハンドルネーム----
        $("#hn").text(hn);
        //----学年----
        $("#grade").text(grade);
        //----役職----
        $("#job").text(job);
        //----一言コメント----
        if (com == "") {
            $("#comment").text("No Comment...");
        } else {
            $("#comment").html(com);
        }
        //----------------------------------------------------------
        //body内の最後に<div id="modal-bg"></div>を挿入
        $("body").append('<div id="modal-bg"></div>');
        //画面中央を計算する関数を実行
        modalResize();

        //モーダルウィンドウを表示
        $("#modal-main").fadeIn("slow");
        $("#modal-bg").fadeIn("slow");

        //スクロール一の初期化
        $("#modal-main").scrollTop(0);

        //---------------------事後処理-------------------------------------
        //画面のどこかをクリックしたらモーダルを閉じる
        $("#modal-bg,.close_btn").click(function () {
            $("#modal-main,#modal-bg").fadeOut("slow", function () {
                //閉じると同時に内容をすべてクリアして初期化する役割も担わせる
                $('#modal-bg').remove();
                // $("#hn").text();
                // $("#grade").text();
                // $("#job").text();
                // $("#comment").text();
            });
        });
        //画面の左上からmodal-mainの横幅・高さを引き、その値を2で割ると画面中央の位置が計算できます
        $(window).resize(modalResize);
        function modalResize() {

            var w = $(window).width();
            var h = $(window).height();

            var cw = $("#modal-main").outerWidth();
            var ch = $("#modal-main").outerHeight();

            //取得した値をcssに追加する
            $("#modal-main").css({
                "left": ((w - cw) / 2) + "px",
                "top": ((h - ch) / 2) + "px"
            });
        }
    });
});
