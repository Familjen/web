const MEMBER_BOX_COLLAPSED_HEIGHT = "35px";
const SCROLL_TO_TOP_SPEED_POSITION_MULTIPLIER = 0.2;
const REVEAL_BACK_TO_TOP_BUTTON_SCROLL_HEIGHT = 800;

$(document).ready(function () {
    showBackToTopButtonWhenScrolledDown();
    backToTopButtonScrollUpOnClick();
    generateMemberCardsFromJson();
});

function showBackToTopButtonWhenScrolledDown() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > REVEAL_BACK_TO_TOP_BUTTON_SCROLL_HEIGHT) {
            $('.back-to-top').addClass('back-to-top-visible');
        } else {
            $('.back-to-top').removeClass('back-to-top-visible');
        }
    });
}

function backToTopButtonScrollUpOnClick() {
    $('.back-to-top').click(function (event) {
        event.preventDefault();
        $('html').animate({ scrollTop: 0 }, 200 + $(window).scrollTop() * SCROLL_TO_TOP_SPEED_POSITION_MULTIPLIER);
    })
}

function generateMemberCardsFromJson() {
    $.getJSON("members.json", function (members) {
        members.forEach(member => {
            addMemberToTimeline(member);
        });

        expandAndCollapseCardsOnClick()
    });
}

function expandAndCollapseCardsOnClick() {
    $(".member-box-header").click(function () {
        let memberBox = findParentWithClass($(this), ".member-box");

        memberBox.hasClass("member-box-active") ? collapseMemberBox(memberBox) : expandMemberBox(memberBox);
        memberBox.toggleClass("member-box-active");
    });
}

function expandMemberBox(memberBox) {
    memberBox.animate({ height: memberBox.get(0).scrollHeight - getTopAndBottomMargin(memberBox) }, 500);
}

function findParentWithClass(element, className) {
    return element.closest(className);
};

function collapseMemberBox(memberBox) {
    memberBox.animate({ height: MEMBER_BOX_COLLAPSED_HEIGHT }, 500);
}

function getTopAndBottomMargin(element) {
    margin = parseInt($(element).css("marginBottom"));
    margin += parseInt($(element).css("marginTop"));

    return margin;
}

function addMemberToTimeline(member) {
    if ($(`#${member.inaugurationYear}`).length === 0) {
        addYearToTimeline(member.inaugurationYear);
    }

    let memberBoxTemplate = `<div class="member-box"><h2 class="member-box-header">${member.name}</h2><div class="member-description"><h4>${member.irlName}<br>${member.inaugurationLocation}<br><span class="member-bio-decoration">T</h4><p>${formatBio(member.bio)}</i></p></div></div>`

    $("#timeline").append(memberBoxTemplate);
}

function addYearToTimeline(year) {
    $("#timeline").append(`<h3 id="${year}">${year}</h3>`);
}

function formatBio(bio) {
    let formattedBio = bio.replace(/Familjens/gmi, "<span class=\"corleone\">Familjens</span>");
    formattedBio = formattedBio.replace(/Familjen(?!s)/gmi, "<span class=\"corleone\">Familjen</span>");
    formattedBio = formattedBio.replace(/Wannabes/gmi, "<span class=\"corleone-due\">Wannabes</span>");
    formattedBio = formattedBio.replace(/Wannabe(?!s)/gmi, "<span class=\"corleone-due\">Wannabe</span>");

    return formattedBio;
}