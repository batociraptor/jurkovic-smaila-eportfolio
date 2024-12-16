document.addEventListener('DOMContentLoaded', function () {
    const toggleChartButton = document.getElementById('toggleChartButton');
    const toggleTimelineButton = document.getElementById('toggleTimelineButton');
    const chartSection = document.getElementById('chart-section');
    const gradeChartCanvas = document.getElementById('gradeChart');
    const courseList = document.getElementById('course-list');
    const timelineContainer = document.getElementById('timeline-container');

    const grades = [4.1, 4.2, 3.6, 3.8]; 
    const courses = [
        ["Engleski jezik", "Matematika 1", "Multimedijski sustavi", "Osnove ekonomike za inforatičare", "Osnove informatike", "Programiranje 1", "Arhitektura i organizacija računala", "Matematika 2", "Modeliranje podataka", "Operacijski sustavi", "Osnove vjerojatnosti i statistike", "Programiranje 2"], 
        ["Analiza poslovnih procesa", "Baze podataka", "Matematika 3", "Objektno programiranje", "Računalne mreže", "Uvod u programsko inženjerstvo", "Algoritmi i strukture podataka", "Operacijska istraživanja", "Razvoj informacijskih sustava", "Sigurnost informacijskih i komunikacijskih tehnologija", "Upravljanje informatičkim projektima", "Uvod u programiranje za web"], 
        ["Administriranje i sigurnost baza podataka", "Mrežni i mobilni operacijski sustavi", "Multimedijske tehnologije", "Programiranje za web", "Računalna animacija", "Računalna grafika", "Dizajn korisničkog sučelja i iskustva", "Dizajniranje multimedije", "Osnove razvoja računalnih igara", "Razvoj desktop i mobilnih aplikacija", "Stručna praksa", "Završni rad"], 
        ["Digitalni marketing", "Elektroničko poslovanje i digitalne inovacije", "E-učenje za obrazovanje i poslovanje", "Informacijska sigurnost i blockchain tehnologije", "Kvantitativne metode za poslovno odlučivanje", "Nerelacijske i distribuirane baze podataka", "Prikaz znanja i rezoniranje o znanju", "Programsko inženjerstvo", "Razvoj #3D raćunalnih igara", "Upravljanje digitalnom transformacijom"]
    ];

    const chartData = {
        labels: ['1. Godina', '2. Godina', '3. Godina', '4. Godina'],
        datasets: [{
            label: 'Prosjek ocjena',
            data: grades,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };

    const chartOptions = {
        responsive: true,
        onClick: (e) => {
            const chart = Chart.getChart(gradeChartCanvas);
            const activePoints = chart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true);
            if (activePoints.length > 0) {
                const clickedIndex = activePoints[0].index;
                displayCourses(clickedIndex);
            }
        }
    };

    const gradeChart = new Chart(gradeChartCanvas, {
        type: 'bar',
        data: chartData,
        options: chartOptions
    });

    toggleChartButton.addEventListener('click', () => {
        if (chartSection.style.display === 'none') {
            chartSection.style.display = 'block';
            toggleChartButton.textContent = 'Sakrij dijagram';
            setTimeout(() => {
                gradeChartCanvas.classList.add('visible'); 
            }, 50);
        } else {
            gradeChartCanvas.classList.remove('visible'); 
            setTimeout(() => {
                chartSection.style.display = 'none';
            }, 500); 

            toggleChartButton.textContent = 'Prikaži dijagram';
            courseList.style.display = 'none';
        }
    });

    function displayCourses(yearIndex) {
        courseList.style.display = 'block';
        courseList.innerHTML = ''; 
    
        courses[yearIndex].forEach((course, courseIndex) => {
            const li = document.createElement('li');
            courseList.appendChild(li);
    
            setTimeout(() => {
                li.textContent = `${course}`;
                li.classList.add('visible');
            }, courseIndex * 800); 
        });
    }

    const workExperiences = [
        {
            program: "Code::Blocks",
            description: "Open-source integrirani razvojni okoliš (IDE) namijenjen prvenstveno za razvoj u C, C++ i Fortran jezicima."
        },
        {
            program: "PyCharm",
            description: "Integrirani razvojni okoliž za razvoj u Python programskom jeziku."
        },
        {
            program: "Adobe Photoshop",
            description: "Profesionalni softver za uređivanje i obradu slika, koji omogućava naprednu manipulaciju fotografija, grafički dizajn i digitalno slikanje pomoću širokog spektra alata i efekata."
        },
        {
            program: "Unity",
            description: "Softver za razvoj videoigara."
        },
        {
            program: "Figma",
            description: "Web aplikacija za dizajn sučelja i izradu prototipa."
        },
        {
            program: "Wordpress",
            description: "Softver za izradu web stranica."
        }
    ];

    function createTimeline() {
        timelineContainer.innerHTML = ''; 
        const ul = document.createElement('ul');
        ul.id = 'timeline-list';

        workExperiences.forEach((experience, index) => {
            const li = document.createElement('li');
            li.classList.add('timeline-item');
            li.innerHTML = `
                <div class="timeline-content">
                    <h4>${experience.program}</h4>
                    <p>${experience.description}</p>
                </div>
            `;
            ul.appendChild(li);

            setTimeout(() => {
                li.classList.add('visible'); 
            }, index * 500); 
        });

        timelineContainer.appendChild(ul);
    }

    toggleTimelineButton.addEventListener('click', () => {
        if (timelineContainer.innerHTML === '') {
            createTimeline();
            toggleTimelineButton.textContent = "Sakrij programe"; 
        } else {
            timelineContainer.innerHTML = ''; 
            toggleTimelineButton.textContent = "Prikaži programe"; 
        }
    });
});
