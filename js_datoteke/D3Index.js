d3.selectAll(".section")
    .on("mouseover", function () {
        d3.select(this)
            .transition()
            .duration(300)
            .style("transform", "scale(1.1)")
            .style("box-shadow", "0px 4px 20px rgba(0,0,0,0.3)");
    })
    .on("mouseout", function () {
        d3.select(this)
            .transition()
            .duration(300)
            .style("transform", "scale(1)")
            .style("box-shadow", "none");
    });


function navigateTo(page) {
    d3.select("body")
        .classed("fade-out", true);

    setTimeout(function() {
        window.location.href = page;
    }, 1000);
}

const button1 = d3.select("#button1");

button1
    .on("click", function () {
        navigateTo("dora.html");
        button1
            .transition()
            .duration(200) 
            .style("transform", "scale(1.2)") 
            .transition()
            .duration(200)
            .style("transform", "scale(1)"); 
            
    })
    .on("mouseover", function () {
        button1
            .transition()
            .duration(150)
            .style("transform", "scale(1.2)")
            .style("background-color", "#594864");
    })
    .on("mouseout", function () {
        button1
            .transition()
            .duration(150)
            .style("transform", "scale(1)")
            .style("background-color", "#6d597a");
    });

const button2 = d3.select("#button2");

button2
    .on("click", function () {
        navigateTo("gabriela.html");
        button2
            .transition()
            .duration(200) 
            .style("transform", "scale(1.2)")
            .transition()
            .duration(200)
            .style("transform", "scale(1)"); 
    })
    .on("mouseover", function () {
        button2
            .transition()
            .duration(150)
            .style("transform", "scale(1.2)")
            .style("background-color", "#b95256");
    })
    .on("mouseout", function () {
        button2
            .transition()
            .duration(150)
            .style("transform", "scale(1)")
            .style("background-color", "#e56b6f");
    });