const HTTPS = 'https:' + '//',
    HTTP = 'http:' + '//',
    PROX = 'CORS-Anywhere.HerokuApp.com/',
    SITE = 'swapi.co/',
    PATH = 'api/people/',
    FORMAT = '/?format=json';
var id = 15;

function getHero(peopleID) {
    var url = HTTPS + PROX + HTTP + SITE + PATH + peopleID + FORMAT;
    $.get(url, function (data, status) {
        $(".hero").text(data.name);
    });
};
$(document).ready(getHero(id));
if (getCookie('showreadme') != 'true') {
    document.getElementById("button-for-modal").click();
}
$("#button-next").click(function () {
    getHero(++id);
});
$("#button-previous").on("click", function () {
    getHero(--id);
});
var date = new Date(new Date().getTime() + 3 * 60 * 1000);//3 min
document.cookie = "showreadme=true;expires=" + date.toUTCString();

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}