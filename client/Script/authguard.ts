"use strict";

(() => {
    if (!sessionStorage.getItem("user")) {
        location.href = "login.ejs";
    }
})();
