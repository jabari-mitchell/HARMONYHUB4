"use strict";
let slideIndex = 0;
function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}
document.addEventListener("DOMContentLoaded", function () {
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
    function displayEvents(events) {
        const eventCards = $('#event-cards');
        eventCards.empty();
        events.forEach(function (event) {
            const card = createEventCard(event);
            eventCards.append(card);
        });
    }
    function createEventCard(event) {
        const card = $('<div>').addClass('event-card');
        const cardContent = `
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
const gallery = document.getElementById('gallery');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg'
];
let currentIndex = 0;
function loadImages(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
        const img = document.createElement('img');
        img.src = images[i];
        img.alt = `Image ${i + 1}`;
        img.classList.add('image');
        img.addEventListener('click', () => showImage(i));
        if (gallery)
            gallery.appendChild(img);
    }
}
function showImage(index) {
    alert(`You clicked on Image ${index + 1}`);
}
function loadMoreImages() {
    const nextIndex = currentIndex + 2;
    if (nextIndex <= images.length) {
        loadImages(currentIndex, nextIndex);
        currentIndex = nextIndex;
        if (currentIndex >= images.length && loadMoreBtn) {
            loadMoreBtn.style.display = 'none';
        }
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const projectList = document.getElementById("project-list");
    const loadMoreButton = document.getElementById("load-more");
    let projectsData = [
        {
            title: "Kids Coding Camp",
            description: "Harmony Hub's Kids Coding Camp introduces young minds to the fun of coding through games and creative projects, making technology an exciting learning experience for our little ones.",
            imageSrc: "assets/images/mb.jpg"
        },
    ];
    const projectsPerPage = 4;
    let projectsToShow = projectsData.slice(0, projectsPerPage);
    function createProjectCard(project) {
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
            <img src="${project.imageSrc}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        return card;
    }
    function renderProjects(projects) {
        projects.forEach((project) => {
            const card = createProjectCard(project);
            if (projectList)
                projectList.appendChild(card);
        });
    }
    function loadMoreProjects() {
        const remainingProjects = projectsData.slice(projectsToShow.length, projectsToShow.length + projectsPerPage);
        projectsToShow = projectsToShow.concat(remainingProjects);
        renderProjects(remainingProjects);
        if (projectsToShow.length === projectsData.length && loadMoreButton) {
            loadMoreButton.style.display = "none";
        }
    }
    if (loadMoreButton)
        loadMoreButton.addEventListener("click", loadMoreProjects);
    renderProjects(projectsToShow);
});
function isEmpty(value) {
    return value.trim() === '';
}
function createFooter() {
}
createFooter();
function validateForm() {
    return false;
}
(function () {
    document.addEventListener("DOMContentLoaded", function () {
        const careersLink = document.createElement("li");
        careersLink.classList.add("nav-item");
        careersLink.innerHTML = '<a class="nav-link" href="/careers"><i class="fa-solid fa-briefcase"></i> Careers</a>';
        const eventLink = document.createElement("li");
        eventLink.classList.add("nav-item");
        eventLink.innerHTML = '<a class="nav-link" href="/Events"><i class="fa-solid fa-calendar-days"></i> Events </a>';
        const galleryLink = document.createElement("li");
        galleryLink.classList.add("nav-item");
        galleryLink.innerHTML = '<a class="nav-link" href="/Gallery"><i class="fa-solid fa-image"></i> Gallery </a>';
        const navbarLinks = document.querySelector(".navbar-nav");
        if (navbarLinks) {
            navbarLinks.appendChild(careersLink);
            navbarLinks.appendChild(eventLink);
            navbarLinks.appendChild(galleryLink);
        }
        const blogLink = document.querySelector(".nav-link[href='/blog']");
        if (blogLink) {
            blogLink.innerHTML = '<i class="fa-solid fa-newspaper"></i> News';
        }
    });
})();
function showModal(name, role, image, description) {
    const modal = document.getElementById("myModal");
    const modalContent = document.getElementById("modal-content");
    if (modal && modalContent) {
        modal.style.display = "block";
        modalContent.innerHTML = `
            <img src="${image}" alt="${name}" style="width: 100%; border-radius: 50%;">
            <h2>${name}</h2>
            <p>${role}</p>
            <p>${description}</p>
        `;
    }
}
function closeModal() {
    const modal = document.getElementById("myModal");
    if (modal) {
        modal.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = $("#search-input");
    const searchResults = $("#search-results");
    let blogdata = [
        {
            "class": "blog-member",
            "img": "./Images/blog1avif.avif",
            "title": "Unleashing the Power of STEM with Specialized Tutoring Services 🚀",
            "content": "At Harmony Hub, we understand the significance of STEM (Science, Technology, Engineering, and Mathematics), in today's world. Our passionate STEM tutors are here to make these complex subjects not only accessible but enjoyable for learners of all ages. Whether you're a student seeking homework help, a professional eager to upskill, or a parent supporting your child's educational journey, our STEM tutoring sessions are crafted to meet your specific needs."
        },
        {
            "class": "blog-member",
            "img": "./Images/blog31.jpg",
            "title": "Transformative Learning with Interactive Learning Academy Bootcamp 🎓",
            "content": "Embark on a journey of transformation with our Interactive Learning Academy Bootcamp. Designed for hands-on, immersive learning experiences, our bootcamps cover a diverse range of topics. Whether your interests lie in coding, design, or entrepreneurship, our experienced instructors guide you through a dynamic curriculum, equipping you with practical skills that go beyond traditional education."
        },
        {
            "class": "blog-member",
            "img": "./Images/blog2pic.jpg",
            "title": "Connecting Through Networking and Informative Events 🌐",
            "content": "Harmony Hub serves as a central hub for connecting minds, fostering collaboration, and staying informed. Explore a world of thought-provoking discussions, industry insights, and community building through our networking and informative events. From engaging panel discussions to enlightening guest speakers, we curate events that broaden your network, provide valuable knowledge, and connect you with experts across various fields."
        }
    ];
    displayResults(blogdata);
    searchInput.on("input", function () {
        const query = searchInput.val()?.trim().toLowerCase() ?? '';
        const filteredResults = filterResults(blogdata, query);
        displayResults(filteredResults);
    });
    function filterResults(results, query) {
        if (!query) {
            return results;
        }
        return results.filter(function (result) {
            return result.title.toLowerCase().includes(query);
        });
    }
    function displayResults(results) {
        searchResults.empty();
        if (results.length > 0) {
            $.each(results, function (index, result) {
                const resultElement = $("<div>").addClass("result-card");
                resultElement.html(`
                    <img src="${result.img}" alt="${result.title}">
                    <h3>${result.title}</h3>
                    <p>${result.content}</p>
                `);
                searchResults.append(resultElement);
            });
        }
        else {
            searchResults.html("<p>No results found.</p>");
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".close-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let currentIndex = 0;
    galleryItems.forEach((item, index) => {
        item.addEventListener("click", function () {
            currentIndex = index;
            showImage(index);
            if (lightbox)
                lightbox.style.display = "block";
        });
    });
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            if (lightbox)
                lightbox.style.display = "none";
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener("click", function () {
            currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
            showImage(currentIndex);
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            currentIndex = (currentIndex + 1) % galleryItems.length;
            showImage(currentIndex);
        });
    }
    function showImage(index) {
        const imgUrl = galleryItems[index].getAttribute("src");
        const imgAlt = galleryItems[index].getAttribute("alt");
        if (lightboxImg && imgUrl && imgAlt) {
            lightboxImg.setAttribute("src", imgUrl);
            lightboxImg.setAttribute("alt", imgAlt);
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    fetchChartData('/Data/graphData.json', 'barChart');
    fetchChartData('/Data/pieData.json', 'PieChart');
    fetchChartData('/Data/viewChartData.json', 'viewChartChart');
});
function fetchChartData(url, chartId) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
        const labels = data.map((bar) => bar.label);
        const values = data.map((bar) => bar.value);
        renderChart(labels, values, chartId);
    })
        .catch(error => {
        console.error('Error fetching data:', error);
    });
}
function renderChart(labels, values, chartId) {
    const ctx = document.getElementById(chartId) instanceof HTMLCanvasElement ? document.getElementById(chartId).getContext('2d') : null;
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
//# sourceMappingURL=main.js.map