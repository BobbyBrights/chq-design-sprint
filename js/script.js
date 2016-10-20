
$(document).ready(function() {

    var fullHeight = $(window).height();
    var halfHeight = fullHeight / 2;

    // init controller
    var controller = new ScrollMagic.Controller();

    var ideasI = $("path#ideas-i");
    var ideasD1 = $("path#ideas-d1");
    var ideasD2 = $("path#ideas-d2");
    var ideasE1 = $("path#ideas-e1");
    var ideasE2 = $("path#ideas-e2");
    var ideasE3 = $("path#ideas-e3");
    var ideasA1 = $("path#ideas-a1");
    var ideasA2 = $("path#ideas-a2");
    var ideasS = $("path#ideas-s");

    // prepare SVG
    pathPrepare(ideasI);
    pathPrepare(ideasD1);
    pathPrepare(ideasD2);
    pathPrepare(ideasE1);
    pathPrepare(ideasE2);
    pathPrepare(ideasE3);
    pathPrepare(ideasA1);
    pathPrepare(ideasA2);
    pathPrepare(ideasS);
    
    var areYouA1 = $("path#are-you-a1");
    var areYouA2 = $("path#are-you-a2");
    var areYouR = $("path#are-you-r");
    var areYouE1 = $("path#are-you-e1");
    var areYouE2 = $("path#are-you-e2");
    var areYouE3 = $("path#are-you-e3");
    var areYouY1 = $("path#are-you-y1");
    var areYouY2 = $("path#are-you-y2");
    var areYouO = $("path#are-you-o");
    var areYouU = $("path#are-you-u");
    var areYouQ1 = $("path#are-you-q1");
    var areYouQ2 = $("path#are-you-q2");

    // prepare SVG
    pathPrepare(areYouA1);
    pathPrepare(areYouA2);
    pathPrepare(areYouR);
    pathPrepare(areYouE1);
    pathPrepare(areYouE2);
    pathPrepare(areYouE3);
    pathPrepare(areYouY1);
    pathPrepare(areYouY2);
    pathPrepare(areYouO);
    pathPrepare(areYouU);
    pathPrepare(areYouQ1);
    pathPrepare(areYouQ2);

    var lionPath = {
        down : {
            curviness: 1.25,
            values: [
                {x: 0,	y: 0},
                {x: -100,	y: fullHeight * 0.25},
                {x: -150,	y: fullHeight * 0.50},
                {x: -150,	y: fullHeight * 0.75},
                {x: -100,	y: fullHeight * 0.9},
                {x: 0,	y: fullHeight * 0.85}
            ]
        }
    };
    
    var wolfPath = {
        in : {
            curviness: 1.25,
            values: [
                {x: 0, y:0 },
                {x: -800,	y: 100},
                {x: -1000,	y: 0}
            ]
        }
    };

    // build tween
    var ideasTween = new TimelineMax()
    .add(TweenMax.to(ideasI, .1, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to(ideasD1, 0.08, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to(ideasD2, 0.08, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to(ideasE1, 0.08, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to(ideasE2, 0.02, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to(ideasE3, 0.02, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to(ideasA1, .1, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to(ideasA2, 0.02, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to(ideasS, 0.08, {strokeDashoffset: 0, ease:Linear.easeNone}));
    
    // build tween
    var areYouTween = new TimelineMax()
    .add(TweenMax.to(areYouA1, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to(areYouA2, 0.08, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to(areYouR, 0.12, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to(areYouE1, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to(areYouE2, 0.02, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to(areYouE3, 0.02, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to(areYouY1, 0.05, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to(areYouY2, 0.08, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to(areYouO, 0.12, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to(areYouU, 0.12, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to(areYouQ1, 0.08, {strokeDashoffset: 0, ease:Linear.easeNone}))
    .add(TweenMax.to(areYouQ2, 0.02, {strokeDashoffset: 0, ease:Linear.easeNone}));

    // create tween
    var lionTween = new TimelineMax()
    .add(TweenMax.to($("#lion"), 1, {css:{bezier:lionPath.down}, ease:Power1.easeInOut}));
    
    // create tween
    var wolfTween = new TimelineMax()
    .add(TweenMax.to($("#wolf-2"), 1, {css:{bezier:wolfPath.in}, ease:Power1.easeInOut}));

    // build scene
    var lionScene = new ScrollMagic.Scene({triggerElement: "#bold", duration: 500, offset: -100})
    //.setPin("#target")
    .setTween(lionTween)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
    
    // build scene
    var wolfScene = new ScrollMagic.Scene({triggerElement: "#invested", duration: 500, offset: -200})
    //.setPin("#target")
    .setTween(wolfTween)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    // build scene
    var ideasScene = new ScrollMagic.Scene({triggerElement: "#bold", duration: halfHeight, tweenChanges: true})
    .setTween(ideasTween)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
    
    // build scene
    var areYou = new ScrollMagic.Scene({triggerElement: "#invested", duration: halfHeight, offset: -200, tweenChanges: true})
    .setTween(areYouTween)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});


function pathPrepare (path) {
    var lineLength = path[0].getTotalLength();
    path.css("stroke-dasharray", lineLength);
    path.css("stroke-dashoffset", lineLength);
}

