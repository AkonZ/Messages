(function () {

    // 获取数据
    window.getData = function () {
        var res = JSON.parse(localStorage.getItem("data") || "[]");
        console.log(res);
        return res;
    };

    // 存储数据
    window.saveData = function (data) {
        if (data !== undefined) {
            localStorage.setItem("data", JSON.stringify(data));
        }
    };

})();
