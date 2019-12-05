$("span").each(function (index) {
    var originalText = $(this).text();
    var newText = "";
    for (var i = 0; i < originalText.length; i++) {
        if (i % 2 === 0)
            newText += "<span>" + originalText.charAt(i) + "</span>";
        else
            newText += originalText.charAt(i);
    }
    $(this).html(newText);
});