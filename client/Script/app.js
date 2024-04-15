"use strict";
(() => {
    function CheckLogin() {
        const user = sessionStorage.getItem("user");
        if (user) {
            const logoutButton = document.getElementById("logout");
            logoutButton.innerHTML = '<i class="fas fa-sign-out-alt"></i> Logout';
            logoutButton.onclick = () => {
                sessionStorage.clear();
                location.href = "/";
            };
        }
        else {
            const loginButton = document.getElementById("login");
            loginButton.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login';
            loginButton.onclick = () => {
                location.href = "/login";
            };
        }
    }
    function AuthGuard() {
        const path = location.pathname;
        const protectedRoutes = ["/contact-list", "/edit"];
        if (protectedRoutes.includes(path) && !sessionStorage.getItem("user")) {
            location.href = "/login";
        }
    }
    function DisplayHomePage() {
        console.log("Displaying Home Page...");
    }
    function DisplayEditPage() {
        const pageId = location.hash.substring(1);
        console.log("Editing Page ID:", pageId);
    }
    function Start() {
        console.log("App Started...");
        const pageID = document.body.getAttribute("id");
        switch (pageID) {
            case "home":
                DisplayHomePage();
                break;
            case "edit":
                DisplayEditPage();
                break;
            default:
                console.error("ERROR: Unknown page ID " + pageID);
        }
        CheckLogin();
        AuthGuard();
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map