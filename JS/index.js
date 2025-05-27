

$("#eLearning-modal").on("shown.bs.modal", function() {
    let originalSource = $("#eLearningframe").data("src");
    if (originalSource) {
        $("#eLearningframe").attr("src", originalSource);
    }
})

$("#eLearning-modal").on("hidden.bs.modal", function() {
    let iframe = $("#eLearningframe");
    iframe.data("src", iframe.attr("src"));
    iframe.attr("src", "");
    })

