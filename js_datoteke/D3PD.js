d3.select("#icon-graphic-design").on("click", function () {
    scrollToSection("#graphic-design");
});
d3.select("#icon-programming").on("click", function () {
    scrollToSection("#programming-projects");
});
d3.select("#icon-database-projects").on("click", function () {
    scrollToSection("#database-projects");
});

d3.selectAll(".icon")
    .on("mouseover", function (event) {
        d3.select(this)
            .transition()
            .duration(500)
            .style("transform", "scale(1.2)")
            .style("transition", "transform 0.5s ease"); 
    })
    .on("mouseout", function (event) {
        d3.select(this)
            .transition()
            .duration(500)
            .style("transform", "scale(1)");
    });

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth",
        });
    }
}

const graphicDesignProjects = [
    { name: "Izrada prototipa aplikacije u Figmi", image: "slike/projektiD/figma.PNG", description: "Izrada prototipaaplikacije za učenje sviranja gitare u Figmi." },
    { name: "Izrada modela", image: "slike/projektiD/model1.png", description: "Izrada 3D modela u Blenderu." },
    { name: "Izrada moodboarda", image: "slike/projektiD/mood.PNG", description: "Izrada moodboarda aplikacije u Figmi." },
];

const programmingProjects = [
    { name: "LanGuide aplikacija", image: "slike/projektiD/lan.PNG", description: "Razvoj LanGuide aplikacije u sklopu kolegija Razvoj desktop i mobilnih aplikacija." },
    { name: "Izrada programa za prikaz algoritma", image: "slike/projektiD/algoritam.PNG", description: "Izrada jednostavnog programa za prikaz osnovnih algoritama." },
    { name: "Izrada programa putem objektno orijentiranog programiranja", image: "slike/projektiD/objektno.PNG", description: "Izrada jednostavnog programa za upravljanje kompanijom primjenom principa objektno-orijentiranog programiranja." },
];

const databaseDevelopmentProjects = [
    { name: "Izrada arhitekture baze", image: "slike/projektiD/baza.JPG", description: "Izrada arhitekture baze podataka koja prati skladištenje proizvoda." }
];

function generateProjectCards(sectionId, projects) {
    const section = d3.select(sectionId);

    const projectCards = section.selectAll(".project-card")
        .data(projects)
        .enter()
        .append("div")
        .attr("class", "project-card")
        .on("click", function(event, d) {
            openSection(d);
        });

    projectCards.append("img")
        .attr("src", d => d.image)
        .attr("alt", d => d.name)
        .attr("class", "project-image");

    projectCards.append("p")
        .attr("class", "project-description")
        .text(d => d.name);
}

function openSection(project) {
    d3.select("#section-project-image").attr("src", project.image);
    d3.select("#section-project-name").text(project.name);
    d3.select("#section-project-description").text(project.description);

    d3.select("#project-section").style("display", "flex");
}

function closeSection() {
    d3.select("#project-section").style("display", "none");
}

d3.select(".close-btn").on("click", closeSection);

generateProjectCards("#graphic-design-projects", graphicDesignProjects);
generateProjectCards("#programming-projects-row", programmingProjects);
generateProjectCards("#database-projects-row", databaseDevelopmentProjects);