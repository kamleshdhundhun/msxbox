//$("body").addClass("blackout");  // add back for popup

$(document).ready(function() {
    var screenwidth = $(document).width();
    if (screenwidth < 1080) {
        $(".blackout").removeClass("blackout");
    } else {
        $(".pophidden").removeClass("pophidden");
    }
    var urlRegion = document.URL.toLowerCase().split("xbox.com/")[1].slice(0, 5);
    if (urlRegion === "en-ae") {
        urlRegion = "ar-ae";
    } else if (urlRegion === "en-sa") {
        urlRegion = "ar-sa";
    } else if (urlRegion === "en-il") {
        urlRegion = "he-il";
    }

    function makedc(title) {
        return title.toLowerCase().replace(/\s/g, "-").replace(/[^>a-z0-9-]/gi, '');
    }

    var sec = 0;
    var checklogin = setInterval(function() {
        if (document.getElementById('mectrl_headerPicture')) {
            var iconImage = document.getElementById('mectrl_headerPicture').style.backgroundImage.replace(/url\(|\)|"/gi, '')
            $('.myAccount img').attr("srcset", iconImage);
            $('.myAccount img').attr("src", iconImage);
            $('.myAccount img').css("border-radius", "50%");
            clearInterval(checklogin)
        }
        sec++;
        if (sec === 6) { clearInterval(checklogin) }
    }, 1000)

    var populateHero = (function() {
        var regHeroContent = allHeroes.locales[urlRegion]

        var heroTypes = {};
        heroTypes["center"] = '<section class="m-hero-item f-x-center f-y-center context-accessory" itemscope itemtype="http://schema.org/Product" role="tabpanel" tabindex="0">' +
            '<picture class="c-image">' +
            '<source class="heroImgDesktop" srcset="" media="(min-width:1084px)">' +
            '<source class="heroImgTablet" srcset="" media="(min-width:768px)">' +
            '<source class="heroImgMobile" srcset="" media="(min-width:0)">' +
            '<img srcset="" src="" alt="">' +
            '</picture>' +
            '<div>' +
            '<div class="high-contrast">' +
            '<strong class="c-badge f-small"><span></span></strong>' +
            '<h1 class="c-heading-1"></h1>' +
            '<p class="c-subheading-1"></p>' +
            '<div>' +
            '<a href="" class="c-call-to-action c-glyph f-heavyweight cta1">' +
            '<span></span>' +
            '</a>' +
            '<a href="" class="c-call-to-action c-glyph cta2">' +
            '<span></span>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</section>'

        heroTypes["centerlogo"] = '<section class="m-hero-item f-x-center f-y-center context-accessory" itemscope itemtype="http://schema.org/Product" role="tabpanel" tabindex="0">' +
            '<picture class="c-image">' +
            '<source class="heroImgDesktop" srcset="" media="(min-width:1084px)">' +
            '<source class="heroImgTablet" srcset="" media="(min-width:768px)">' +
            '<source class="heroImgMobile" srcset="" media="(min-width:0)">' +
            '<img srcset="" src="" alt="">' +
            '</picture>' +
            '<div>' +
            '<div class="high-contrast">' +
            '<strong class="c-badge f-small"><span></span></strong>' +
            '<h1 class="c-heading-1"></h1>' +
            '<p class="c-subheading-1"></p>' +
            '<div>' +
            '<a href="" class="c-call-to-action c-glyph f-heavyweight cta1">' +
            '<span></span>' +
            '</a>' +
            '<a href="" class="c-call-to-action c-glyph cta2">' +
            '<span></span>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</section>'

        heroTypes["right"] = '<section class="m-hero-item f-x-right f-y-center context-accessory" itemscope itemtype="http://schema.org/Product" role="tabpanel" tabindex="0">' +
            '<picture class="c-image">' +
            '<source class="heroImgDesktop" srcset="" media="(min-width:1084px)">' +
            '<source class="heroImgTablet" srcset="" media="(min-width:768px)">' +
            '<source class="heroImgMobile" srcset="" media="(min-width:0)">' +
            '<img srcset="" src="" alt="">' +
            '</picture>' +
            '<div>' +
            '<div class="high-contrast">' +
            '<strong class="c-badge f-small"><span></span></strong>' +
            '<h1 class="c-heading-1"></h1>' +
            '<p class="c-subheading-1"></p>' +
            '<div>' +
            '<a href="" class="c-call-to-action c-glyph f-heavyweight cta1">' +
            '<span></span>' +
            '</a>' +
            '<a href="" class="c-call-to-action c-glyph cta2">' +
            '<span></span>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</section>'

        heroTypes["left"] = '<section class="m-hero-item f-x-left f-y-center context-accessory" itemscope itemtype="http://schema.org/Product" role="tabpanel" tabindex="0">' +
            '<picture class="c-image">' +
            '<source class="heroImgDesktop" srcset="" media="(min-width:1084px)">' +
            '<source class="heroImgTablet" srcset="" media="(min-width:768px)">' +
            '<source class="heroImgMobile" srcset="" media="(min-width:0)">' +
            '<img srcset="" src="" alt="">' +
            '</picture>' +
            '<div>' +
            '<div class="high-contrast">' +
            '<strong class="c-badge f-small"><span></span></strong>' +
            '<h1 class="c-heading-1"></h1>' +
            '<p class="c-subheading-1"></p>' +
            '<div>' +
            '<a href="" class="c-call-to-action c-glyph f-heavyweight cta1">' +
            '<span></span>' +
            '</a>' +
            '<a href="" class="c-call-to-action c-glyph cta2">' +
            '<span></span>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</section>'

        heroTypes["righttop"] = '<section class="m-hero-item f-x-right f-y-top context-accessory" itemscope itemtype="http://schema.org/Product" role="tabpanel" tabindex="0">' +
            '<picture class="c-image">' +
            '<source class="heroImgDesktop" srcset="" media="(min-width:1084px)">' +
            '<source class="heroImgTablet" srcset="" media="(min-width:768px)">' +
            '<source class="heroImgMobile" srcset="" media="(min-width:0)">' +
            '<img srcset="" src="" alt="">' +
            '</picture>' +
            '<div>' +
            '<div class="high-contrast">' +
            '<strong class="c-badge f-small"><span></span></strong>' +
            '<h1 class="c-heading-2"></h1>' +
            '<p class="c-subheading-2"></p>' +
            '<div>' +
            '<a href="" class="c-call-to-action c-glyph f-heavyweight cta1">' +
            '<span></span>' +
            '</a>' +
            '<a href="" class="c-call-to-action c-glyph cta2">' +
            '<span></span>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</section>'

        heroTypes["centerbottom"] = '<section class="m-hero-item f-x-center f-y-bottom context-accessory" itemscope itemtype="http://schema.org/Product" role="tabpanel" tabindex="0">' +
            '<picture class="c-image">' +
            '<source class="heroImgDesktop" srcset="" media="(min-width:1084px)">' +
            '<source class="heroImgTablet" srcset="" media="(min-width:768px)">' +
            '<source class="heroImgMobile" srcset="" media="(min-width:0)">' +
            '<img srcset="" src="" alt="">' +
            '</picture>' +
            '<div>' +
            '<div class="high-contrast">' +
            '<strong class="c-badge f-small"><span></span></strong>' +
            '<h1 class="c-heading-1"></h1>' +
            '<p class="c-subheading-1"></p>' +
            '<div>' +
            '<a href="" class="c-call-to-action c-glyph f-heavyweight cta1">' +
            '<span></span>' +
            '</a>' +
            '<a href="" class="c-call-to-action c-glyph cta2">' +
            '<span></span>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</section>'

        heroTypes["centertop"] = '<section class="m-hero-item f-x-center f-y-top context-accessory" itemscope itemtype="http://schema.org/Product" role="tabpanel" tabindex="0" >' +
            '<picture class="c-image">' +
            '<source class="heroImgDesktop" srcset="" media="(min-width:1084px)">' +
            '<source class="heroImgTablet" srcset="" media="(min-width:768px)">' +
            '<source class="heroImgMobile" srcset="" media="(min-width:0)">' +
            '<img srcset="" src="" alt="">' +
            '</picture>' +
            '<div>' +
            '<div class="high-contrast">' +
            '<strong class="c-badge f-small"><span></span></strong>' +
            '<h1 class="c-heading-1"></h1>' +
            '<p class="c-subheading-1"></p>' +
            '<div>' +
            '<a href="" class="c-call-to-action c-glyph f-heavyweight cta1">' +
            '<span></span>' +
            '</a>' +
            '<a href="" class="c-call-to-action c-glyph cta2">' +
            '<span></span>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</section>'

        heroTypes["video"] = '<section class="m-hero-item context-device videohero" itemscope itemtype="http://schema.org/Product" role="tabpanel" tabindex="0">' +
            '<div class="m-ambient-video vid herovideo">' +
            '<video alt="Ambient video alt text" poster="" muted autoplay>' +
            '<source class="heroImgDesktop" src="" type="video/mp4">' +
            '</video>' +
            '</div> ' +
            '<picture class="c-image">' +
            '<source class="heronovideomobbiggest" srcset="" media="(min-width:768px)">' +
            '<source class="heronovideomobmedium" srcset="" media="(min-width:540px)">' +
            '<source class="heronovideomobsmallest" srcset="" media="(min-width:0)">' +
            '<img class="heronovideomobile" srcset="" src="" alt="">' +
            '</picture>' +
            '<div>' +
            '<div class="high-contrast">' +
            '<strong class="c-badge f-small"><span></span></strong>' +
            '<h1 class="c-heading-2"></h1>' +
            '<p class="c-subheading-1"></p>' +
            '<div>' +
            '<a href="" class="c-call-to-action c-glyph f-heavyweight cta1">' +
            '<span></span>' +
            '</a>' +
            '<a href="" class="c-call-to-action c-glyph cta2">' +
            '<span></span>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</section>' +
            '<style>.m-hero-item .m-ambient-video {padding: 0;}</style>'


        var numHeroes = regHeroContent["keyNumberofheroes"]
        if (numHeroes === "1") {
            var heroInsert = heroTypes[regHeroContent["keyHero1type"].toLowerCase()];
            $(".sl-hero").append(heroInsert)
            $(".m-hero-item").removeAttr("tabindex");
            if (regHeroContent["keyHero1extraclasses"] !== "####") {
                $(".sl-hero .m-hero-item").addClass(regHeroContent["keyHero1extraclasses"])
            }
            $(".sl-hero .heroImgDesktop").attr("srcset", regHeroContent["keyHero1imagedesktop"])
            $(".sl-hero .heroImgTablet").attr("srcset", regHeroContent["keyHero1imagetablet"])
            $(".sl-hero .heroImgTabletSmall").attr("srcset", regHeroContent["keyHero1imagetabletsmall"])
            $(".sl-hero .heroImgMobile").attr("srcset", regHeroContent["keyHero1imagemobile"])
            $(".sl-hero picture img").attr("src", regHeroContent["keyHero1imagedesktop"]).attr("srcset", regHeroContent["keyHero1imagedesktop"])
            $(".sl-hero video source").attr("src", regHeroContent["keyHero1imagedesktop"]); // for video
            $(".sl-hero picture img").attr("src", regHeroContent["keyHero1imagedesktop"])
            $(".sl-hero picture img").attr("alt", regHeroContent["keyHero1alt"])
            $(".sl-hero video").attr("alt", regHeroContent["keyHero1alt"]); // for video
            $(".sl-hero video").attr("poster", regHeroContent["keyHero1imagetablet"]); // for video
            $(".sl-hero .heronovideomobile").attr("src", regHeroContent["keyHero1imagesmallest"]);
            $(".sl-hero .heronovideomobsmallest").attr("srcset", regHeroContent["keyHero1imagesmallest"]);
            $(".sl-hero .heronovideomobmedium").attr("srcset", regHeroContent["keyHero1imagemobile"]);
            $(".sl-hero .heronovideomobbiggest").attr("srcset", regHeroContent["keyHero1imagetablet"]);
            if (regHeroContent["keyHero1badgecolor"].toLowerCase() === "gold") {
                $(".sl-hero .c-badge").addClass("f-highlight");
            } else {
                $(".sl-hero .c-badge").addClass("f-lowlight");
            }
            $(".sl-hero .c-badge").attr("data-loc-color", "keyHero1badgecolor");
            $(".sl-hero .c-badge span").text(regHeroContent["keyHero1badgecopy"]);
            $(".sl-hero h1").html(regHeroContent["keyHero1headline"])
            $(".sl-hero p.c-subheading-1").html(regHeroContent["keyHero1subheading"])
            $(".sl-hero p.c-subheading-2").html(regHeroContent["keyHero1subheading"])
            $(".sl-hero a.cta1").attr("href", regHeroContent["keyHero1link"])
            $(".sl-hero a.cta1 span").text(regHeroContent["keyHero1cta"])
            if (regHeroContent["keyHero1ctatype"] !== undefined && regHeroContent["keyHero1ctatype"].toLowerCase() === "text") { 
                $(".sl-hero a.cta1").removeClass("f-heavyweight").addClass("f-lightweight");
            }
            if (regHeroContent["keyHero1dataretailer"] !== "####" && regHeroContent["keyHero1dataretailer"] !== "") { $(".sl-hero a.cta1").attr("data-retailer", regHeroContent["keyHero1dataretailer"]) }
            if (regHeroContent["keyHero1datacta"] !== "####" && regHeroContent["keyHero1datacta"] !== "") { $(".sl-hero a.cta1").attr("data-cta", regHeroContent["keyHero1datacta"]) }
            $(".sl-hero a.cta1").attr("aria-label", regHeroContent["keyHero1arialabel"])

            $(".sl-hero a.cta2").attr("href", regHeroContent["keyHero1link2"])
            $(".sl-hero a.cta2 span").text(regHeroContent["keyHero1cta2"])
            if (regHeroContent["keyHero1ctatype2"] !== undefined && regHeroContent["keyHero1ctatype2"].toLowerCase() === "text") { 
                $(".sl-hero a.cta1").addClass("f-lightweight");
            } else {
                $(".sl-hero a.cta1").addClass("f-heavyweightweight");
            }
            if (regHeroContent["keyHero1dataretailer2"] !== "####" && regHeroContent["keyHero1dataretailer2"] !== "") { $(".sl-hero a.cta2").attr("data-retailer", regHeroContent["keyHero1dataretailer2"]) }
            if (regHeroContent["keyHero1datacta2"] !== "####" && regHeroContent["keyHero1datacta2"] !== "") { $(".sl-hero a.cta2").attr("data-cta", regHeroContent["keyHero1datacta2"]) }
            $(".sl-hero a.cta2").attr("aria-label", regHeroContent["keyHero1arialabel2"])
        } else {
            String.prototype.replaceAll = function(search, replacement) {
                var target = this;
                return target.replace(new RegExp(search, 'g'), replacement);
            };

            var playslidetext = {
                "locales": {
                    "en-us": {
                        "keyPlayslideshow": "Play slideshow"
                    },
                    "ar-ae": {
                        "keyPlayslideshow": "Play slideshow"
                    },
                    "ar-sa": {
                        "keyPlayslideshow": "Play slideshow"
                    },
                    "cs-cz": {
                        "keyPlayslideshow": "Přehrát prezentaci"
                    },
                    "da-dk": {
                        "keyPlayslideshow": "Afspil slideshow"
                    },
                    "de-at": {
                        "keyPlayslideshow": "Diashow abspielen"
                    },
                    "de-ch": {
                        "keyPlayslideshow": "Diashow abspielen"
                    },
                    "de-de": {
                        "keyPlayslideshow": "Diashow abspielen"
                    },
                    "el-gr": {
                        "keyPlayslideshow": "Αναπαραγωγή παρουσίασης"
                    },
                    "en-au": {
                        "keyPlayslideshow": "Play slideshow"
                    },
                    "en-ca": {
                        "keyPlayslideshow": "Play slideshow"
                    },
                    "en-gb": {
                        "keyPlayslideshow": "Play slideshow"
                    },
                    "en-hk": {
                        "keyPlayslideshow": "Play slideshow"
                    },
                    "en-ie": {
                        "keyPlayslideshow": "Play slideshow"
                    },
                    "en-in": {
                        "keyPlayslideshow": "Play slideshow"
                    },
                    "en-nz": {
                        "keyPlayslideshow": "Play slideshow"
                    },
                    "en-sg": {
                        "keyPlayslideshow": "Play slideshow"
                    },
                    "en-za": {
                        "keyPlayslideshow": "Play slideshow"
                    },
                    "es-ar": {
                        "keyPlayslideshow": "Reproducir presentación de diapositivas"
                    },
                    "es-cl": {
                        "keyPlayslideshow": "Reproducir presentación de diapositivas"
                    },
                    "es-co": {
                        "keyPlayslideshow": "Reproducir presentación de diapositivas"
                    },
                    "es-es": {
                        "keyPlayslideshow": "Reproducir presentación de diapositivas"
                    },
                    "es-mx": {
                        "keyPlayslideshow": "Reproducir presentación de diapositivas"
                    },
                    "fi-fi": {
                        "keyPlayslideshow": "Toista diaesitys"
                    },
                    "fr-be": {
                        "keyPlayslideshow": "Lancer le diaporama"
                    },
                    "fr-ca": {
                        "keyPlayslideshow": "Lancer le diaporama"
                    },
                    "fr-ch": {
                        "keyPlayslideshow": "Lancer le diaporama"
                    },
                    "fr-fr": {
                        "keyPlayslideshow": "Lancer le diaporama"
                    },
                    "he-il": {
                        "keyPlayslideshow": "Play slideshow"
                    },
                    "hu-hu": {
                        "keyPlayslideshow": "Diavetítés"
                    },
                    "it-it": {
                        "keyPlayslideshow": "Esegui presentazione"
                    },
                    "ja-jp": {
                        "keyPlayslideshow": "スライドショーの再生"
                    },
                    "ko-kr": {
                        "keyPlayslideshow": "슬라이드쇼 재생"
                    },
                    "nb-no": {
                        "keyPlayslideshow": "Spill lysbildefremvisning"
                    },
                    "nl-be": {
                        "keyPlayslideshow": "Diavoorstelling afspelen"
                    },
                    "nl-nl": {
                        "keyPlayslideshow": "Diavoorstelling afspelen"
                    },
                    "pl-pl": {
                        "keyPlayslideshow": "Odtwórz pokaz slajdów"
                    },
                    "pt-br": {
                        "keyPlayslideshow": "Ver apresentação de slides"
                    },
                    "pt-pt": {
                        "keyPlayslideshow": "Reproduzir apresentação de diapositivos"
                    },
                    "ru-ru": {
                        "keyPlayslideshow": "Воспроизвести слайд-шоу"
                    },
                    "sk-sk": {
                        "keyPlayslideshow": "Prehrať prezentáciu"
                    },
                    "sv-se": {
                        "keyPlayslideshow": "Spela bildspell"
                    },
                    "tr-tr": {
                        "keyPlayslideshow": "Slayt gösterisini oynat"
                    },
                    "zh-hk": {
                        "keyPlayslideshow": "播放投影片"
                    },
                    "zh-tw": {
                        "keyPlayslideshow": "播放投影片"
                    }
                }
            }

            $(".sl-hero").append('<div class="c-carousel f-multi-slide f-auto-play" role="region" aria-label="featured items on xbox dot com" data-js-interval="6000">' +
                '<div class="c-group">' +
                // '<button class="c-action-toggle high-contrast c-glyph glyph-play f-toggle" data-toggled-label="Play" data-toggled-glyph="glyph-pause" ' +
                // 'aria-label="' + playslidetext.locales[urlRegion].keyPlayslideshow + '" aria-pressed="false"></button>' +
                '<button class="c-action-toggle high-contrast c-glyph glyph-play f-toggle" data-toggled-label="Pause" data-toggled-glyph="glyph-pause" ' +
                'aria-label="Play" aria-pressed="false"></button>' +
                '<div class="c-sequence-indicator" role="tablist">' +
                '<button role="tab" aria-selected="true" aria-label="" aria-controls="hero-1" title="' +
                regHeroContent["keyHero1headline"].replace("<br>", " ") + '"></button>' +
                '<button role="tab" aria-selected="false" aria-label="" aria-controls="hero-2" title="' +
                regHeroContent["keyHero2headline"].replace("<br>", " ") + '"></button>' +
                '</div>' +
                '</div>' +
                '<button class="c-flipper f-previous high-contrast" aria-hidden="true" tabindex="-1"></button>' +
                '<button class="c-flipper f-next high-contrast" aria-hidden="true" tabindex="-1"></button>' +
                '<div itemscope itemtype="http://schema.org/ItemList">' +
                '<ul class="heroList">' +
                '</ul>' +
                '</div>' +
                '</div>')

            for (var i = 1; i <= numHeroes; i++) {
                var heroPre = "keyHero" + i;
                if (i > 2) {
                    var controllab = regHeroContent[heroPre + "headline"].replaceAll("<br>", " ").replaceAll("</br>", " ").replaceAll("<i>", "").replaceAll("</i>", "").replaceAll("<b>", "").replaceAll("</b>", "");
                    if (controllab.length === 0) {
                        controllab = regHeroContent[heroPre + "subheading"].replaceAll("<br>", " ").replaceAll("</br>", " ").replaceAll("<i>", "").replaceAll("</i>", "").replaceAll("<b>", "").replaceAll("</b>", "");
                    }
                    $(".sl-hero .c-sequence-indicator button").last().after('<button role="tab" aria-selected="false" aria-label="' + controllab + '" aria-controls="hero-' +
                        i + '" title="' + controllab + '"></button>')
                }
                var heroInsert = heroTypes[regHeroContent[heroPre + "type"].toLowerCase()];
                $(".sl-hero .heroList").append('<li id="hero-' + i + '" role="tabpanel">' +
                    heroInsert +
                    '</li>')
                if (regHeroContent[heroPre + "extraclasses"] !== "####") {
                    $(".sl-hero li").eq(i - 1).find(".m-hero-item").addClass(regHeroContent[heroPre + "extraclasses"])
                }
                var ariasectionhelp = regHeroContent[heroPre + "headline"].replace("<br>", " ");
                if (ariasectionhelp.length === 0) {
                    ariasectionhelp = regHeroContent[heroPre + "subheading"].replace("<br>", " ");
                }
                $(".sl-hero li").eq(i - 1).find("section").attr("aria-label", "section describing " + ariasectionhelp)
                $(".sl-hero li").eq(i - 1).find(".heroImgDesktop").attr("srcset", regHeroContent[heroPre + "imagedesktop"])
                $(".sl-hero li").eq(i - 1).find(".heroImgTablet").attr("srcset", regHeroContent[heroPre + "imagetablet"])
                $(".sl-hero li").eq(i - 1).find(".heroImgTabletSmall").attr("srcset", regHeroContent[heroPre + "imagetabletsmall"])
                $(".sl-hero li").eq(i - 1).find(".heroImgMobile").attr("srcset", regHeroContent[heroPre + "imagemobile"])
                $(".sl-hero li").eq(i - 1).find("picture img").attr("src", regHeroContent[heroPre + "imagedesktop"]).attr("srcset", regHeroContent[heroPre + "imagedesktop"])
                $(".sl-hero li").eq(i - 1).find("video source").attr("src", regHeroContent[heroPre + "imagedesktop"]); // for video
                $(".sl-hero li").eq(i - 1).find("picture img").attr("alt", regHeroContent[heroPre + "alt"])
                $(".sl-hero li").eq(i - 1).find("video").attr("alt", regHeroContent[heroPre + "alt"]); // for video
                $(".sl-hero li").eq(i - 1).find("video").attr("poster", regHeroContent[heroPre + "imagetablet"]); // for video
                $(".sl-hero li").eq(i - 1).find(".heronovideomobile").attr("src", regHeroContent[heroPre + "imagesmallest"])
                $(".sl-hero li").eq(i - 1).find(".heronovideomobsmallest").attr("srcset", regHeroContent[heroPre + "imagesmallest"]);
                $(".sl-hero li").eq(i - 1).find(".heronovideomobmedium").attr("srcset", regHeroContent[heroPre + "imagemobile"]);
                $(".sl-hero li").eq(i - 1).find(".heronovideomobbiggest").attr("srcset", regHeroContent[heroPre + "imagetablet"]);
                if (regHeroContent["keyHero" + i + "badgecolor"].toLowerCase() === "gold") {
                    $(".sl-hero li").eq(i - 1).find(".c-badge").addClass("f-highlight");
                } else {
                    $(".sl-hero li").eq(i - 1).find(".c-badge").addClass("f-lowlight");
                }
                $(".sl-hero li").eq(i - 1).find(".c-badge span").text(regHeroContent["keyHero" + i + "badgecopy"]);
                $(".sl-hero li").eq(i - 1).find("h1").html(regHeroContent[heroPre + "headline"])
                $(".sl-hero li").eq(i - 1).find("p.c-subheading-1").html(regHeroContent[heroPre + "subheading"])
                $(".sl-hero li").eq(i - 1).find("p.c-subheading-2").html(regHeroContent[heroPre + "subheading"])
                $(".sl-hero li").eq(i - 1).find("a.cta1").attr("href", regHeroContent[heroPre + "link"])
                $(".sl-hero li").eq(i - 1).find("a.cta1 span").text(regHeroContent[heroPre + "cta"])
                if (regHeroContent[heroPre + "ctatype"] !== undefined && regHeroContent[heroPre + "ctatype"].toLowerCase() === "text") { 
                    $(".sl-hero li").eq(i - 1).find("a.cta1").removeClass("f-heavyweight").addClass("f-lightweight");
                }
                if (regHeroContent[heroPre + "dataretailer"] !== "####" && regHeroContent[heroPre + "dataretailer"] !== "") {
                    $(".sl-hero li").eq(i - 1).find("a.cta1").attr("data-retailer", regHeroContent[heroPre + "dataretailer"])
                }
                if (regHeroContent[heroPre + "datacta"] !== "####" && regHeroContent[heroPre + "datacta"] !== "") {
                    $(".sl-hero li").eq(i - 1).find("a.cta1").attr("data-cta", regHeroContent[heroPre + "datacta"])
                }
                $(".sl-hero li").eq(i - 1).find("a.cta1").attr("aria-label", regHeroContent[heroPre + "arialabel"])

                $(".sl-hero li").eq(i - 1).find("a.cta2").attr("href", regHeroContent[heroPre + "link2"])
                $(".sl-hero li").eq(i - 1).find("a.cta2 span").text(regHeroContent[heroPre + "cta2"])
                if (regHeroContent[heroPre + "ctatype2"] !== undefined && regHeroContent[heroPre + "ctatype2"].toLowerCase() === "text") { 
                    $(".sl-hero li").eq(i - 1).find("a.cta2").addClass("f-lightweight");
                } else {
                    $(".sl-hero li").eq(i - 1).find("a.cta2").addClass("f-heavyweight");
                }
                if (regHeroContent[heroPre + "dataretailer2"] !== "####" && regHeroContent[heroPre + "dataretailer2"] !== "") {
                    $(".sl-hero li").eq(i - 1).find("a.cta2").attr("data-retailer", regHeroContent[heroPre + "dataretailer2"])
                }
                if (regHeroContent[heroPre + "datacta2"] !== "####" && regHeroContent[heroPre + "datacta2"] !== "") {
                    $(".sl-hero li").eq(i - 1).find("a.cta2").attr("data-cta", regHeroContent[heroPre + "datacta2"])
                }
                $(".sl-hero li").eq(i - 1).find("a.cta2").attr("aria-label", regHeroContent[heroPre + "arialabel2"])
                if ($(".sl-hero li").eq(i - 1).find("p.c-subheading-1").text() === "####") {
                    $(".sl-hero li").eq(i - 1).find("p.c-subheading-1").remove();
                }
                if ($(".sl-hero li").eq(i - 1).find("p.c-subheading-2").text() === "####") {
                    $(".sl-hero li").eq(i - 1).find("p.c-subheading-2").remove();
                }
                if ($(".sl-hero li").eq(i - 1).find("h1").text() === "####") {
                    $(".sl-hero li").eq(i - 1).find("h1").remove();
                }
                if ($(".sl-hero li").eq(i - 1).find("h1").text().length > 32) {
                    $(".sl-hero li").eq(i - 1).find("h1").removeClass("c-heading-1").addClass("c-heading-2");
                }
            }
        }

        $(".sl-hero a").each(function() {
            if ($(this).text() === "####" || $(this).text() === "") {
                $(this).remove();
            }
        })
        $(".sl-hero p").each(function() {
            if ($(this).text() === "####") {
                $(this).remove();
            }
        })
        $(".sl-hero h1").each(function() {
            if ($(this).text() === "####") {
                $(this).remove();
            }
        })



        $(".sl-hero ul li").eq(0).addClass("f-active");

        $(".heroList section").each(function() {
            if ($(this).hasClass("theme-dark")) {
                $(this).parents("li").attr("data-f-theme", "dark")
            } else {
                $(this).parents("li").attr("data-f-theme", "light")
            }
        })

        $(".sl-hero h1").each(function(index) {
            var head = $(this);
            var temphead = $(head).html();
            var headarr = temphead.toLowerCase().replace("<br>", " ").split(" ");
            headarr.forEach(function(word) {
                if (word.length > 11) {
                    $(head).removeClass("c-heading-1").addClass("c-heading-2");
                }
            })
        })

        $(".m-hero-item h1").each(function(index) {
            if (index !== 0) {
                var newhtext = $(this).html();
                var newhclasses = $(this).attr("class");
                $(this).after('<h2 class="' + newhclasses + ' x-hidden-focus">' + newhtext + '</h2>');
                $(this).remove();
            }
        });

        $(".m-hero-item p").each(function() {
            if ($(this).text().length === 0) {
                $(this).remove();
            }
        })

        if (regHeroContent["keyHero1type"].toLowerCase().trim() === "video") {
            videoTransitionCss();
        }

        function videoTransitionCss() {
            $("body").append('<style>' +
                '.m-hero .c-carousel { background-color: black !important; }' +
                '.heroList a { pointer-events: all; }' +
                '.heroList li { opacity: 0; visibility: hidden !important; transition-timing-function: linear !important; transition-duration: 0s, .7s !important;' +
                'transition-property: visibility, opacity !important; transition-delay: 1s, .3s !important; position: absolute !important; ' +
                'display: block !important; pointer-events: none; }' +
                '.heroList li.f-active  { opacity: 1; display: block !important; position:relative !important; visibility: visible !important;' +
                'transition-timing-function: linear !important; transition-duration: 0s, .7s !important; transition-property: visibility, opacity !important;' +
                'transition-delay: 0.3s, .7s !important; }' +
                '</style>')
        }

        // if (regHeroContent["keyTakeover"].length > 4) {
        //   $("#BodyContent #ContentBlockList_1").parent("div").prepend('<div class="clickableback" style="position: absolute; left: 0; right: 0; overflow: hidden;"><img src="' + 
        //     regHeroContent["keyTakeover"] + '" style="width: 100%; opacity:0;"><div data-grid="container" style="position: absolute; left:0; right: 0; height: 100%; top: 0;">' + 
        //     '<a class="lefttakeoverlink" style="position: absolute; right: 100%; width: 8vw; height: 100%; top: 0;" href="' + 
        //     regHeroContent["keyTakeoverurl"] + '" data-clickname="www>home>takeover>click"></a>' + 
        //     '<a class="righttakeoverlink" style="position: absolute; left: 100%; width: 8vw; height: 100%;top: 0;" href="' + regHeroContent["keyTakeoverurl"] + 
        //     '" data-clickname="www>home>takeover>click"></a></div></div>');
        //   $("#BodyContent #ContentBlockList_1").parent("div").css("background-image", "url(" + regHeroContent["keyTakeover"] + ")").css("background-repeat", "no-repeat");
        //   $("#BodyContent #ContentBlockList_1").parent("div").addClass("backgrounded").css("background-color", regHeroContent["keyTakeovercolor"]);
        //   $('.backgrounded [data-grid~="container"]').css("background", "white").css("max-width", "1600px").css("padding-left", "0").css("padding-right", "0");
        //   $(".ribbonSpacer").css("background", "white").css("margin-top", "0").css("padding-top", "48px");
        //   $(".homeRibbon").closest('[data-grid~="container"]').removeAttr("style");
        //   $(".homeRibbon").removeClass("theme-2f").css("background", "transparent").css("color", "white");
        //   $(".homeRibbon div, .homeRibbon picture").css("z-index", "3");
        //   $(".clickableback, .clickableback div").css("background", "transparent");
        // }

        setTimeout(function() {
            populateContent();
            $("body").css("visibility", "visible");
        }, 100)

        // setTimeout(function () {
        //   if ($(".c-carousel .c-action-toggle.c-glyph").hasClass("glyph-pause")) {
        //     heroPlaying();
        //   } else {
        //     heroPaused();
        //   }

        //   $(document).on("click", ".c-carousel .c-action-toggle.c-glyph.glyph-pause", function (e) {
        //     heroPlaying();
        //   })

        //   $(document).on("keydown", ".c-carousel .c-action-toggle.c-glyph.glyph-pause", function (e) {
        //     if ((e.keyCode == 13) || (e.keyCode == 32)) {
        //       heroPlaying();
        //     }
        //   })

        //   $(document).on("click", ".c-carousel .c-action-toggle.c-glyph.glyph-play", function (e) {
        //     heroPaused()
        //   })
        //   $(document).on("keydown", ".c-carousel .c-action-toggle.c-glyph.glyph-play", function (e) {
        //     if ((e.keyCode == 13) || (e.keyCode == 32)) {
        //       heroPaused();
        //     }
        //   })

        //   function heroPaused() {
        //     //$(".home-hero .c-carousel .c-action-toggle.c-glyph").attr("aria-label", "Play slideshow"); // play slideshow
        //   }
        //   function heroPlaying() {
        //    // $(".home-hero .c-carousel .c-action-toggle.c-glyph").attr("aria-label", "Play slideshow"); // pause slideshow
        //   }
        // }, 1500)
    })();

    var populateContent = function() {
        var urlRegion = document.URL.toLowerCase().split("xbox.com/")[1].slice(0, 5);
        if (urlRegion === "en-ae") {
            urlRegion = "ar-ae";
        } else if (urlRegion === "en-sa") {
            urlRegion = "ar-sa";
        } else if (urlRegion === "en-il") {
            urlRegion = "he-il";
        }


        var popJSON = (function() {
            var regionContent = allContent.locales[urlRegion];
            var allKeys = Object.keys(regionContent)
            var keysLength = allKeys.length
            for (var i = 0; i < keysLength; i++) {
                if (allKeys[i].indexOf("keyCopy") !== -1) {
                    $("[data-loc-copy=" + allKeys[i] + "]").html(regionContent[allKeys[i]]);
                    $("[data-loc-aria=" + allKeys[i] + "]").attr("aria-label", regionContent[allKeys[i]]);
                } else if (allKeys[i].indexOf("keyImage") !== -1) {
                    $("source[data-loc-image=" + allKeys[i] + "]").attr("srcset", regionContent[allKeys[i]]);
                    $("img[data-loc-image=" + allKeys[i] + "]").attr("src", regionContent[allKeys[i]]).attr("srcset", regionContent[allKeys[i]]);
                } else if (allKeys[i].indexOf("keyAlt") !== -1) {
                    $("[data-loc-alt=" + allKeys[i] + "]").attr("alt", regionContent[allKeys[i]]);
                } else if (allKeys[i].indexOf("keyLink") !== -1) {
                    $("[data-loc-link=" + allKeys[i] + "]").attr("href", regionContent[allKeys[i]]);
                } else if (allKeys[i].indexOf("keyClickname") !== -1) {
                    $("[data-loc-clickname=" + allKeys[i] + "]").attr("data-clickname", regionContent[allKeys[i]]);
                } else if (allKeys[i].indexOf("keyRetailer") !== -1) {
                    if (regionContent[allKeys[i]] !== "####" && regionContent[allKeys[i]] !== "") {
                        $("[data-loc-retailer=" + allKeys[i] + "]").attr("data-retailer", regionContent[allKeys[i]]);
                    }
                } else if (allKeys[i].indexOf("keyCta") !== -1) {
                    if (regionContent[allKeys[i]] !== "####" && regionContent[allKeys[i]] !== "") {
                        $("[data-loc-cta=" + allKeys[i] + "]").attr("data-cta", regionContent[allKeys[i]]);
                    }
                } else if (allKeys[i].indexOf("keyAria") !== -1) {
                    $("[data-loc-aria=" + allKeys[i] + "]").attr("aria-label", regionContent[allKeys[i]]);
                } else if (allKeys[i].indexOf("keyInclude") !== -1) {
                    $("[data-loc-include=" + allKeys[i] + "]").attr("data-region-include", regionContent[allKeys[i]]);
                } else if (allKeys[i].indexOf("keyExclude") !== -1) {
                    $("[data-loc-exclude=" + allKeys[i] + "]").attr("data-region-exclude", regionContent[allKeys[i]]);
                } else if (allKeys[i].indexOf("keyPlayson") !== -1) {
                    $("[data-loc-playson=" + allKeys[i] + "]").attr("data-playson", regionContent[allKeys[i]].toLowerCase());
                } else if (allKeys[i].indexOf("keyYoutube") !== -1) {
                    $("[data-loc-youtube=" + allKeys[i] + "]").attr("data-raven-youtubeid", regionContent[allKeys[i]]);
                }
            }

            // popup video
            // function removepopup() {
            //   $(".sl-hero .f-toggle")[0].click();
            //   $(".home-hero").fadeIn(3000, function() {
            //     $("#headerArea").removeClass("headersee");
            //     $(".sl-hero .glyph-play")[0].click()
            //   });
            //   $(".iconBlade").removeClass("invisible");
            //   $(".homeMosaic").removeClass("invisible");
            //   $("#BodyFooter").removeClass("invisible");
            //   $("#thepopupvideo").addClass("fadingout");
            //   setTimeout(function() {
            //     $("#thepopupvideo").remove()
            //   }, 4000)
            // }

            // var screenwidth = $(document).width();

            // if (screenwidth < 1080) {
            //   $(".blackout").removeClass("blackout");
            //   removepopup();
            // }

            // if ($(".videopopup video source").attr("src").length > 4 && screenwidth > 1079) {
            //   $("#headerArea").addClass("headersee");
            //   $("#thepopupvideo").show();
            //   $(".home-hero").hide();
            //   $(".iconBlade").addClass("invisible");
            //   $(".homeMosaic").addClass("invisible");
            //   $("#BodyFooter").addClass("invisible");
            //   setTimeout(function() {
            //     removepopup();
            //   }, 5500)

            // } else {
            //   $(".videopopup").remove();
            // }
            // $(".blackout").removeClass("blackout");

            // $(".c-glyph.glyph-cancel").click(function() {
            //   removepopup();
            // })

            // copy color
            var copycolors = ["Mos1pos1copycolor", "Mos1pos2copycolor", "Mos1pos3copycolor", "Mos1pos4copycolor", "Mos2pos1copycolor", "Mos2pos2copycolor", "Mos2pos3copycolor", "Mos2pos4copycolor"]

            copycolors.forEach(function(b) {
                var bc = "keyCopy" + b.toLowerCase().replace("copy", "badge").replace("color", "");
                var color = regionContent["key" + b].toLowerCase();
                if (color === "white") {
                    if (!$("[data-loc-copy='" + bc + "']").closest("section").hasClass("greenthm")) {
                        $("[data-loc-copy='" + bc + "']").closest("section").removeClass("theme-dark").removeClass("theme-light").addClass("theme-dark");
                    }
                    $("[data-loc-copy='" + bc + "']").closest("section").find("h2, h3, p, span, a").not(".c-badge span").removeClass("white-c").removeClass("black-c").addClass("white-c");
                } else {
                    if (!$("[data-loc-copy='" + bc + "']").closest("section").hasClass("greenthm")) {
                        $("[data-loc-copy='" + bc + "']").closest("section").removeClass("theme-dark").removeClass("theme-light");
                    }
                    $("[data-loc-copy='" + bc + "']").closest("section").find("h2, h3, p, span, a").not(".c-badge span").removeClass("white-c").removeClass("black-c").addClass("black-c");
                }
            })

            if (regionContent["keyFullcopycolor"].toLowerCase().trim() === "white") {
                $(".fullLeftRight .copy").not(".fullLeftRight2 .copy").find("h2, h3, p, span").not(".c-badge span").removeClass("white-c").removeClass("black-c").addClass("white-c");
                $(".fullLeftRight .copy").not(".fullLeftRight2 .copy").find("a").not(".c-badge span").removeClass("f-lightweight");
                $(".fullLeftRight").not(".fullLeftRight2").addClass("theme-dark")
            } else {
                $(".fullLeftRight section").not(".fullLeftRight2 section").removeClass("theme-dark")
            }

            if (regionContent["keyFullcopycolor2"].toLowerCase().trim() === "white") {
                $(".fullLeftRight2 .copy").find("h2, h3, p, span").not(".c-badge span").removeClass("white-c").removeClass("black-c").addClass("white-c");
                $(".fullLeftRight2 .copy").find("a").not(".c-badge span").removeClass("f-lightweight");
            } else {
                $(".fullLeftRight2 section").removeClass("theme-dark");
            }

            // badge color
            var badgecolors = ["Mos1pos1badgecolor", "Mos1pos2badgecolor", "Mos1pos3badgecolor", "Mos1pos4badgecolor", "Dq1leftbadgecolor", "Dq1rightbadgecolor",
                "Fullbadgecolor", "Dq2leftbadgecolor", "Dq2rightbadgecolor", "Mos2pos1badgecolor", "Mos2pos2badgecolor", "Mos2pos3badgecolor", "Mos2pos4badgecolor", "Fullbadgecolorb"
            ]

            badgecolors.forEach(function(b) {
                var bc = "keyCopy" + b.toLowerCase().replace("color", "");
                if (regionContent["key" + b] !== undefined) {
                    var color = regionContent["key" + b].toLowerCase();
                    if (color === "gold") {
                        $("[data-loc-copy='" + bc + "']").closest(".c-badge").removeClass("f-highlight").removeClass("f-lowlight").addClass("f-highlight");
                    } else {
                        $("[data-loc-copy='" + bc + "']").closest(".c-badge").removeClass("f-highlight").removeClass("f-lowlight").addClass("f-lowlight");
                    }
                }
            })

            $(".icons a").each(function() {
                if ($(this).attr("href") === "####") {
                    $(this).remove();
                }
            })

            $(".hp-mosaic li a.c-call-to-action span.secondcta").each(function() {
                if ($(this).text() === "####") {
                    $(this).closest("a").remove();
                }
            })

            $(".hp-mosaic li a.c-call-to-action span").not(".secondcta").each(function() {
                if ($(this).text() === "####") {
                    $(this).closest("li").remove()
                }
            })

            $(".c-badge span").each(function() {
                if ($(this).text() === "####") {
                    $(this).closest(".c-badge").remove()
                }
            })

            $(".hp-mosaic a").each(function() {
                var temphref = $(this).attr("href")
                if (temphref.toLowerCase().indexOf("xbox.com") === -1) {
                    $(this).attr("target", "blank");
                }
            })
            $(".gearMerch h2:contains(####)").closest(".gearMerch").remove();
            $("h2:contains(####)").closest(".slide").remove();
            if ($(".gearMerch h2").hasClass("white-c")) {
                $(".gearMerch").addClass("theme-black");
            }
            //TODO: FIX THIS TO BE REGULAR IMAGES!!!!!
            //CHECK GAMES/XBOX(ONE?) TO MAKE SURE THIS FILE ISN'T SHARED
            $("#zoomImg1 img").attr("src", regionContent["keyImagemos1pos2anim"]);
            $("#zoomImg2 img").attr("src", regionContent["keyImagemos1pos4anim"]);
            $("#zoomImg3 img").attr("src", regionContent["keyImagedq1leftanim"]);
            $("#zoomImg4 img").attr("src", regionContent["keyImagedq1rightanim"]);
            $("#zoomImg5 img").attr("src", regionContent["keyImagedq2leftanim"]);
            $("#zoomImg6 img").attr("src", regionContent["keyImagedq2rightanim"]);
            $("#zoomImg7 img").attr("src", regionContent["keyImagemos2pos1anim"]);
            $("#zoomImg8 img").attr("src", regionContent["keyImagemos2pos4anim"]);
            /*$("body").append('<style>' +
                    '#zoomImg1 {' +
                    'background: url(' + regionContent["keyImagemos1pos2anim"] + ');' +
                    '}' +
                    '#zoomImg2 {' +
                    'background: url(' + regionContent["keyImagemos1pos4anim"] + ');' +
                    '}' +
                    '#zoomImg3 {' +
                    'background: url(' + regionContent["keyImagedq1leftanim"] + ');' +
                    '}' +
                    '#zoomImg4 {' +
                    'background: url(' + regionContent["keyImagedq1rightanim"] + ');' +
                    '}' +
                    '#zoomImg5 {' +
                    'background: url(' + regionContent["keyImagedq2leftanim"] + ');' +
                    '}' +
                    '#zoomImg6 {' +
                    'background: url(' + regionContent["keyImagedq2rightanim"] + ');' +
                    '}' +
                    '#zoomImg7 {' +
                    'background: url(' + regionContent["keyImagemos2pos1anim"] + ');' +
                    '}' +
                    '#zoomImg8 {' +
                    'background: url(' + regionContent["keyImagemos2pos4anim"] + ');' +
                    '}' +
                    '@media screen and (min-width: 1084px) {' +
                    '.fullTile section {' +
                    'background-image: url(' + regionContent["keyImagefullanim"] + ');' +
                    '}' +
                    '}' +
                    '@media screen and (min-width: 1084px) {' +
                    '.fullTile.gearMerch section {' +
                    'background-image: url(' + regionContent["keyImagefullbanim"] + ');' +
                    '}' +
                    '}' +
                    '</style>'
            )*/

            // middle full blade center top copy
            if (regionContent["keyTypefull"].toLowerCase().trim() === "centertop") {
                $("[data-loc-aria='keyAriafull']").closest(".fullTile").addClass("fullTileCenterTop");
                $(".fullTileCenterTop section .copy").prepend('<picture class="c-image fulltilelogo">' +
                    '<source class="heroImgMobile" srcset="' + regionContent["keyImagefulllogo"] + '" media="(min-width:0)">' +
                    '<img srcset="' + regionContent["keyImagefulllogo"] + '" src="' + regionContent["keyImagefulllogo"] + '" alt="xbox one logo">' +
                    '</picture>');
                $("body").append('<style>' +
                    '@media screen and (min-width: 1084px) {' +
                    '.fullTile.fullTileCenterTop .copy { top: 52px; }' +
                    '}' +
                    '@media screen and (min-width: 1600px) {' +
                    '.fullTile.fullTileCenterTop .copy { top: 136px; max-width: 880px; padding: 0; }' +
                    '}' +
                    '</style>'
                )
            }
            if (regionContent["keyLinkfull2"] === "####") {
                $("[data-loc-link='keyLinkfull2']").remove();
            }
            // green outline small tout fix
            $("body").append('<style>' +
                '@media screen and (min-width: 1084px) {' +
                '.hp-mosaic li.double .floatR { height: 27.75vw; position: relative; right: -1px; }' +
                '}' +
                '</style>'
            )

            //special styling css
            var thespecials = regionContent["keySpecialstyles"].replace(/\s+/g, '').split(",");
            for (var i = 0; i < thespecials.length; i++) {
                if (thespecials[i] === "fullblade1") {
                    console.log("running special style " + thespecials[i]);
                    $(".fullLeftRight").not(".fullLeftRight2").addClass("fblrstyle");
                    $(".fblrstyle .c-call-to-action").addClass("green-brdr");
                    $(".fblrstyle p").removeClass("c-paragraph-2").addClass("c-subheading-2");
                    $("body").append('<style>' +
                        '@media screen and (min-width: 1400px) { .fullTile .copy { padding-right: 8%; max-width: 680px;} }' +
                        '@media screen and (min-width: 1800px) { .fullTile .copy { padding-right: 12%; max-width: 680px; } }' +
                        '@media screen and (min-width: 1084px) {.fblrstyle.theme-dark { background-color: transparent; } }' +
                        '.fblrstyle h2 { letter-spacing: .08em; text-transform: uppercase; }' +
                        '.fblrstyle p { letter-spacing: .5em; margin-top: 8px; text-transform: uppercase; }' +
                        '.fblrstyle .green-brdr { border: 2px solid #9bf00b !important; }' +
                        '.fblrstyle a.c-call-to-action.c-glyph.green-brdr:hover { background: #107c10 !important; }' +
                        '.fblrstyle strong.c-badge.f-small.f-lowlight { color: black; background: white; }' +
                        '.fblrstyle a.c-call-to-action.c-glyph.green-brdr:focus { outline: 3px dashed white !important; }' +
                        '</style>')
                }

                if (thespecials[i] === "longvideo") {
                    console.log("running special style " + thespecials[i]);
                  $(".herovideo video").attr("loop", "");
                  $(".herovideo").addClass("pp-button");
                  $(".videohero .high-contrast").prepend('<a style="display:none;" href="JavaScript:Void(0);" class="c-call-to-action c-glyph" data-clickname="" aria-hidden="true" tab-index="-1"></a>')
                  // shared xbox js for pp button
                  $("head").eq(0).append('<script type="text/javascript" src="/en-US/global-resources/templates/MWF/JS/xbox-MWF.js"></s' + 'cript>'); 
                  $("body").append('<style>' +
                                    '.m-ambient-video{position:relative;}' +
                                      '.m-ambient-video button:focus{outline: 2px dashed #000 !important; border:2px dashed #fff !important;}' +
                                      '.m-ambient-video button{' +
                                        'height:36px !important;width: 36px;position: absolute;color: white;background-color:rgba(0, 0, 0, 0.60);' + 
                                        'border: 1px solid white !important;bottom: 24px;display: block;padding: 2px 0px 0px 0px;margin-left: 24px;}' +
                                      '.videohero {pointer-events:none !important}' +
                                      '.videohero a, .videohero button {pointer-events:auto !important}' +
                                   '</style>')
                  $(".pp-button button").unwrap();

                }
                if (thespecials[i] === "fulltilelightweight") {
                    console.log("running special style " + thespecials[i]);
                  $(".fullLeftRight").not(".fullLeftRight2").find("a").eq(0).addClass("f-lightweight");
                }
            }

            // FLIP FROM LEFT TO RIGHT
            // $(".m-hero-item").removeClass("f-x-left theme-dark").addClass("f-x-right theme-light")

        })();
    }

});
