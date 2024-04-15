let slideIndex: number = 0;

function showSlides(): void {
    let i: number;
    const slides: HTMLCollectionOf<Element> = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        (slides[i] as HTMLElement).style.display = "none";
    }

    // Move to the next slide
    slideIndex++;

    // If at the end of the slides, start from the first slide
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide
    (slides[slideIndex - 1] as HTMLElement).style.display = "block";

    // Change slide every 5 seconds
    setTimeout(showSlides, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
    // AJAX request to fetch events data from JSON file
    $.ajax({
        url: '/Data/eventData.json',
        dataType: 'json',
        success: function (data) {
            displayEvents(data);
        },
        error: function (xhr, status, error) {
            console.error('Error fetching events data:', error);
        }
    });

    // Function to display events as cards
    function displayEvents(events: any[]): void {
        const eventCards: JQuery<HTMLElement> = $('#event-cards');
        eventCards.empty(); // Clear existing event cards

        events.forEach(function (event) {
            const card: JQuery<HTMLElement> = createEventCard(event);
            eventCards.append(card);
        });
    }

    // Function to create an event card
    function createEventCard(event: any): JQuery<HTMLElement> {
        const card: JQuery<HTMLElement> = $('<div>').addClass('event-card');
        const cardContent: string = `
            <div class="event-card-content">
                <h3 class="event-title">${event.name}</h3>
                <p class="event-address">${event.address}</p>
                <p class="event-description">${event.description}</p>
            </div>
        `;
        card.html(cardContent);
        return card;
    }
});

// Portfolio Page

const gallery: HTMLElement | null = document.getElementById('gallery');
const loadMoreBtn: HTMLElement | null = document.getElementById('loadMoreBtn');

const images: string[] = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg'
];

let currentIndex: number = 0;

function loadImages(startIndex: number, endIndex: number): void {
    for (let i = startIndex; i < endIndex; i++) {
        const img: HTMLImageElement = document.createElement('img');
        img.src = images[i];
        img.alt = `Image ${i + 1}`;
        img.classList.add('image');
        img.addEventListener('click', () => showImage(i));
        if (gallery) gallery.appendChild(img);
    }
}

function showImage(index: number): void {
    alert(`You clicked on Image ${index + 1}`);
}

function loadMoreImages(): void {
    const nextIndex: number = currentIndex + 2;
    if (nextIndex <= images.length) {
        loadImages(currentIndex, nextIndex);
        currentIndex = nextIndex;
        if (currentIndex >= images.length && loadMoreBtn) {
            loadMoreBtn.style.display = 'none';
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const projectList: HTMLElement | null = document.getElementById("project-list");
    const loadMoreButton: HTMLElement | null = document.getElementById("load-more");
    let projectsData: { title: string, description: string, imageSrc: string }[] = [
        {
            title: "Kids Coding Camp",
            description: "Harmony Hub's Kids Coding Camp introduces young minds to the fun of coding through games and creative projects, making technology an exciting learning experience for our little ones.",
            imageSrc: "/assets/images/mb.jpg"
        },
        // More project data...
    ];

    const projectsPerPage: number = 4;
    let projectsToShow: { title: string, description: string, imageSrc: string }[] = projectsData.slice(0, projectsPerPage);

    // Function to create project card
    function createProjectCard(project: { title: string, description: string, imageSrc: string }): HTMLElement {
        const card: HTMLElement = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
            <img src="${project.imageSrc}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        return card;
    }

    // Function to render projects
    function renderProjects(projects: { title: string, description: string, imageSrc: string }[]): void {
        projects.forEach((project) => {
            const card: HTMLElement = createProjectCard(project);
            if (projectList) projectList.appendChild(card);
        });
    }

    // Function to load more projects
    function loadMoreProjects(): void {
        const remainingProjects: { title: string, description: string, imageSrc: string }[] = projectsData.slice(projectsToShow.length, projectsToShow.length + projectsPerPage);
        projectsToShow = projectsToShow.concat(remainingProjects);
        renderProjects(remainingProjects);
        if (projectsToShow.length === projectsData.length && loadMoreButton) {
            loadMoreButton.style.display = "none";
        }
    }

    if (loadMoreButton) loadMoreButton.addEventListener("click", loadMoreProjects);

    // Initial rendering of projects
    renderProjects(projectsToShow);
});

// Helper function to check if a value is empty
function isEmpty(value: string): boolean {
    return value.trim() === '';
}

// Function to create the footer element
function createFooter(): void {
    // Footer creation code...
}

// Call the createFooter function to generate and append the footer
createFooter();

// Function to validate form
function validateForm(): boolean {
    // Form validation code...
    return false; // Replace this with actual validation result
}

// Other functions...
// Event handling for dynamically adding links to the navbar
(function() {
    document.addEventListener("DOMContentLoaded", function () {
        // Dynamically add 'Careers' link
        const careersLink: HTMLElement = document.createElement("li");
        careersLink.classList.add("nav-item");
        careersLink.innerHTML = '<a class="nav-link" href="/careers"><i class="fa-solid fa-briefcase"></i> Careers</a>';

        const eventLink: HTMLElement = document.createElement("li");
        eventLink.classList.add("nav-item");
        eventLink.innerHTML = '<a class="nav-link" href="/Events"><i class="fa-solid fa-calendar-days"></i> Events </a>';

        const galleryLink: HTMLElement = document.createElement("li");
        galleryLink.classList.add("nav-item");
        galleryLink.innerHTML = '<a class="nav-link" href="/Gallery"><i class="fa-solid fa-image"></i> Gallery </a>';



        const navbarLinks: HTMLElement | null = document.querySelector(".navbar-nav");
        if (navbarLinks) {
            navbarLinks.appendChild(careersLink);
            navbarLinks.appendChild(eventLink);
            navbarLinks.appendChild(galleryLink);
        }

        // Programmatically change 'Blog' link to 'News'
        const blogLink: HTMLElement | null = document.querySelector(".nav-link[href='/blog']");
        if (blogLink) {
            blogLink.innerHTML = '<i class="fa-solid fa-newspaper"></i> News';
        }
    });
})();

// Function to show modal
function showModal(name: string, role: string, image: string, description: string): void {
    const modal: HTMLElement | null = document.getElementById("myModal");
    const modalContent: HTMLElement | null = document.getElementById("modal-content");

    if (modal && modalContent) {
        // Display the modal
        modal.style.display = "block";

        // Populate modal content with team member details
        modalContent.innerHTML = `
            <img src="${image}" alt="${name}" style="width: 100%; border-radius: 50%;">
            <h2>${name}</h2>
            <p>${role}</p>
            <p>${description}</p>
        `;
    }
}

// Function to close modal
function closeModal(): void {
    const modal: HTMLElement | null = document.getElementById("myModal");

    if (modal) {
        // Hide the modal
        modal.style.display = "none";
    }
}

// Function to handle search
document.addEventListener("DOMContentLoaded", function() {
    const searchInput: JQuery<HTMLInputElement> = $("#search-input");
    const searchResults: JQuery<HTMLElement> = $("#search-results");
    let blogdata: { class: string, img: string, title: string, content: string }[] = [
        {
            "class": "blog-member",
            "img": "/assets/images/blog1avif.avif",
            "title": "Unleashing the Power of STEM with Specialized Tutoring Services 🚀",
            "content": "At Harmony Hub, we understand the significance of STEM (Science, Technology, Engineering, and Mathematics), in today's world. Our passionate STEM tutors are here to make these complex subjects not only accessible but enjoyable for learners of all ages. Whether you're a student seeking homework help, a professional eager to upskill, or a parent supporting your child's educational journey, our STEM tutoring sessions are crafted to meet your specific needs."
        },
        {
            "class": "blog-member",
            "img": "/assets/images/blog31.jpg",
            "title": "Transformative Learning with Interactive Learning Academy Bootcamp 🎓",
            "content": "Embark on a journey of transformation with our Interactive Learning Academy Bootcamp. Designed for hands-on, immersive learning experiences, our bootcamps cover a diverse range of topics. Whether your interests lie in coding, design, or entrepreneurship, our experienced instructors guide you through a dynamic curriculum, equipping you with practical skills that go beyond traditional education."
        },
        {
            "class": "blog-member",
            "img": "/assets/images/blog2pic.jpg",
            "title": "Connecting Through Networking and Informative Events 🌐",
            "content": "Harmony Hub serves as a central hub for connecting minds, fostering collaboration, and staying informed. Explore a world of thought-provoking discussions, industry insights, and community building through our networking and informative events. From engaging panel discussions to enlightening guest speakers, we curate events that broaden your network, provide valuable knowledge, and connect you with experts across various fields."
        }
    ];

    displayResults(blogdata);

    // Event listener for search input
    searchInput.on("input", function() {
        const query: string = searchInput.val()?.trim().toLowerCase() ?? '';
        const filteredResults: { class: string, img: string, title: string, content: string }[] = filterResults(blogdata, query);
        displayResults(filteredResults);
    });

    // Function to filter results based on search query
    function filterResults(results: { class: string, img: string, title: string, content: string }[], query: string): { class: string, img: string, title: string, content: string }[] {
        if (!query) {
            return results; // If no query, return all results
        }
        return results.filter(function(result) {
            return result.title.toLowerCase().includes(query);
        });
    }

    // Function to display results
    function displayResults(results: { class: string, img: string, title: string, content: string }[]): void {
        searchResults.empty();
        if (results.length > 0) {
            $.each(results, function(index, result) {
                const resultElement: JQuery<HTMLElement> = $("<div>").addClass("result-card");
                resultElement.html(`
                    <img src="${result.img}" alt="${result.title}">
                    <h3>${result.title}</h3>
                    <p>${result.content}</p>
                `);
                searchResults.append(resultElement);
            });
        } else {
            searchResults.html("<p>No results found.</p>");
        }
    }
});

// Functionality for lightbox gallery
document.addEventListener("DOMContentLoaded", function() {
    const galleryItems: NodeListOf<HTMLImageElement> = document.querySelectorAll(".gallery-item img");
    const lightbox: HTMLElement | null = document.querySelector(".lightbox");
    const lightboxImg: HTMLImageElement | null = document.querySelector(".lightbox-img");
    const closeBtn: HTMLElement | null = document.querySelector(".close-btn");
    const prevBtn: HTMLElement | null = document.querySelector(".prev-btn");
    const nextBtn: HTMLElement | null = document.querySelector(".next-btn");

    let currentIndex: number = 0;

    // Open lightbox when clicking on thumbnail
    galleryItems.forEach((item, index) => {
        item.addEventListener("click", function () {
            currentIndex = index;
            showImage(index);
            if (lightbox) lightbox.style.display = "block";
        });
    });

    // Close lightbox when clicking close button
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            if (lightbox) lightbox.style.display = "none";
        });
    }

    // Show previous image
    if (prevBtn) {
        prevBtn.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            showImage(currentIndex);
        });
    }

    // Show next image
    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % galleryItems.length;
            showImage(currentIndex);
        });
    }

    // Show image in lightbox
    function showImage(index: number): void {
        const imgUrl: string | null = galleryItems[index].getAttribute("src");
        const imgAlt: string | null = galleryItems[index].getAttribute("alt");
        if (lightboxImg && imgUrl && imgAlt) {
            lightboxImg.setAttribute("src", imgUrl);
            lightboxImg.setAttribute("alt", imgAlt);
        }
    }
});

// Fetching and rendering chart data
document.addEventListener("DOMContentLoaded", function () {
    fetchChartData('/Data/graphData.json', 'barChart');
    fetchChartData('/Data/pieData.json', 'PieChart');
    fetchChartData('/Data/viewChartData.json', 'viewChartChart');
});

// Function to fetch and render chart data
function fetchChartData(url: string, chartId: string): void {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const labels: string[] = data.map((bar: { label: string }) => bar.label);
            const values: number[] = data.map((bar: { value: number }) => bar.value);
            renderChart(labels, values, chartId);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Function to render chart
function renderChart(labels: string[], values: number[], chartId: string): void {
    const ctx: CanvasRenderingContext2D | null = document.getElementById(chartId) instanceof HTMLCanvasElement ? (document.getElementById(chartId) as HTMLCanvasElement).getContext('2d') : null;
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Value',
                    data: values,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const LoginLink = document.createElement("li");
    LoginLink.classList.add("nav-item");
    LoginLink.innerHTML = '<a class="nav-link fas fa-sign-in-alt" id="login" href="/login">Login</a>';
    const navbaraloginLink = document.querySelector(".navbar-nav");
    navbarLinks?.appendChild(LoginLink);
    const user = sessionStorage.getItem("user");
    const loginLink = document.getElementById("login");

    if (user) {
        const DynaLink = document.querySelector(".nav-link[href='/']");
        if (DynaLink) {
            DynaLink.innerHTML = '<i class="fa-solid fa-newspaper"></i> logout';
            DynaLink.onclick = function () {
                sessionStorage.clear();
                location.href = "/";
            };
        }
    }
    else {
        if (loginLink) {
            loginLink.innerHTML = '<a class="nav-link" href="/login"><i class="fas fa-sign-in-alt"></i> Login</a>';
        }
    }
});