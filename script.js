/* CURSOR */

const cursor = document.querySelector(".cursor")
const glow = document.querySelector(".cursor-glow")

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"

    glow.style.left = e.clientX - 15 + "px"
    glow.style.top = e.clientY - 15 + "px"

})


/* hamburger */

const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
})


/* SCROLL PROGRESS */

const progress = document.querySelector(".progress-bar")

window.addEventListener("scroll", () => {

    const scroll = window.scrollY
    const height = document.body.scrollHeight - window.innerHeight

    progress.style.width = (scroll / height) * 100 + "%"

})


/* PARTICLES */

const canvas = document.getElementById("particles")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particles = []

for (let i = 0; i < 80; i++) {

    particles.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5

    })

}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles.forEach(p => {

        p.y += p.speed

        if (p.y > canvas.height) {

            p.y = 0
            p.x = Math.random() * canvas.width

        }

        ctx.fillStyle = "rgba(139,92,246,.6)"
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

    })

    requestAnimationFrame(animate)

}

animate()


/* LOAD SECTIONS */

async function loadSection(id, file) {

    const res = await fetch(file)
    const html = await res.text()

    document.getElementById(id).innerHTML = html

}

loadSection("about-content", "sections/about.html")
loadSection("experience-content", "sections/experience.html")
loadSection("education-content", "sections/education.html")
loadSection("projects-content", "sections/projects.html")
loadSection("skills-content", "sections/skills.html")
loadSection("certifications-content", "sections/certifications.html")
loadSection("contact-content", "sections/contact.html")