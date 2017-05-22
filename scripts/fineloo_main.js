

jQuery(document).ready(function () {

    jQuery(window).resize(function () {
        var lNewHeight2 = jQuery(".finelooframe").contents().find("#FinelooBody").height();
        var lNewHeight = jQuery("#FinelooBody").height();
        jQuery(".finelooframe").css( "height" ,lNewHeight2 );
    });



   /* new ResizeSensor(jQuery(".finelooframe").contents().find("#FinelooBody"), function() {
        console.log('myelement has been resized');
        var lNewHeight2 = jQuery(".finelooframe").contents().find("#FinelooBody").height();
        var lNewHeight = jQuery("#FinelooBody").height();
        jQuery(".finelooframe").css( "height" ,lNewHeight2 );
    }); */

});

function updateIFrameHeight() {
    setTimeout(function(){
        var lNewHeight2 = jQuery(".finelooframe").contents().find("#FinelooBody").height();
        var lNewHeight = jQuery("#FinelooBody").height();
        jQuery(".finelooframe").css( "height" ,lNewHeight2 );

    }, 1000);

}



