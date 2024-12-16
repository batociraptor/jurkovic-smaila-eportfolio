d3.select("#icon-graphic-design").on("click", function () {
    scrollToSection("#graphic-design");
});
d3.select("#icon-programming").on("click", function () {
    scrollToSection("#programming-projects");
});
d3.select("#icon-game-development").on("click", function () {
    scrollToSection("#game-development");
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
    { name: "Grb škole rukometa Crikvenica", image: "slike/projektiG/logo.png", description: "Koncept novog grba izrađen za školu rukometa Crikvenica." },
    { name: "Logo BullIT stranice", image: "slike/projektiG/logo2.png", description: "Logo za koncept stranice BullIT koja bi se bavila dostavljanjem IT vijesti." },
    { name: "Prototip DestiFinder aplikacije", image: "slike/projektiG/desti.PNG", description: "Koncept DestiFinder aplikacije namijenjene turistima za pronalaženje raznih lokacija na nekom mjestu." },
];

const programmingProjects = [
    { name: "Stvaranje pametnog ugovora putem Solidity-ja", image: "slike/projektiG/block.jpg", description: "Stvaranje pametnog ugovora koji sadržava tokene koji se mogu prenijeti među korisnicima." },
    { name: "Izrada programa putem objektno orijentiranog programiranja", image: "slike/projektiG/objektno.PNG", description: "Izrada jednostavnog programa za upravljanje kompanijom primjenom principa objektno-orijentiranog programiranja." },
    { name: "LanGuide aplikacija", image: "slike/projektiG/lan.PNG", description: "Razvoj LanGuide aplikacije u sklopu kolegija Razvoj desktop i mobilnih aplikacija." },
];

const gameDevelopmentProjects = [
    { name: "Knight Time", image: "slike/projektiG/game1.PNG", description: "Izrada 2D računalne igre Knight Time." },
    { name: "Sentinel's Flight", image: "slike/projektiG/sentinel.PNG", description: "Izrada 3D računalne igre Sentinel's Flight." },
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
generateProjectCards("#game-development-projects-row", gameDevelopmentProjects);