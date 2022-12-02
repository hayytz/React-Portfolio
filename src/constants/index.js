import {
    proyectoImagen,
    proyecto2,
    check,
    checkGray,
    linkedin,
    instagram,
    whatsapp,
    github
} from "../assets";

export const navLinks = [
    {
        id: "#about",
        title: "Sobre mí",
    },
    {
        id: "#progress",
        title: "Progreso",
    },
    {
        id: "#projects",
        title: "Proyectos",
    },
    {
        id: "#contact",
        title: "Contacto",
    },

]
export const navSecondLinks = [
    {
        id: "link-1",
        title: "Github",
        linkSite: "https://github.com/hayytz"
    },
    {
        id: "link-2",
        title: "Linkedin",
        linkSite: "https://www.linkedin.com/in/ricardo-guevara-511582257/"
    },
]

export const projects = [
    {
        id: "proyecto-1",
        contenido: "Prueba de manejo de layout. Uso de php y fetch para envío de formulario. Animaciones con gsap.",
        titulo: "Ecology Web",
        siteLink: "https://mapecology.000webhostapp.com/",
        img: proyecto2,
        alt: "Ecomap",
        estado: "Finalizado",
        icon: check,
    },

    {
        id: "proyecto-2",
        contenido: "Layout de sitio web de moda y accesorios, no backend. Primer proyecto con finalidad de práctica.",
        titulo: "Fashion Web",
        siteLink: "https://webfashion.vercel.app/home.html",
        img: proyecto2,
        alt: "Web de moda.",
        estado: "Finalizado",
        icon: check,
    },
    {
        id: "proyecto-3",
        contenido: "Sitio web dinámico creado con las principales tecnologías Html, CSS, JavaScript y php.",
        titulo: "Web escolar",
        siteLink: "https://www.colegioiptce.edu.gt/",
        img: proyectoImagen,
        alt: "Página Colegio IPTCE",
        estado: "Finalizado",
        icon: check,
    },

    {
        id: "proyecto-4",
        contenido: "Utilización de Fake Store API para realizar un e-commerce con React.",
        titulo: "Comercio electrónico",
        siteLink: "",
        img: proyecto2,
        alt: "",
        estado: "En proceso",
        icon: checkGray,
    },

]

export const footerLinks = [
    {
        id: "social1",
        title: "Instagram",
        linkSite: "https://www.instagram.com/hayy.tz/?igshid=YmMyMTA2M2Y=",
        logo: instagram
    },
    {
        id: "social2",
        title: "Whatsapp",
        linkSite: "https://api.whatsapp.com/send/?phone=50250689418&text&type=phone_number&app_absent=0",
        logo: whatsapp
    },
    {
        id: "social3",
        title: "Github",
        linkSite: "https://github.com/hayytz",
        logo: github
    },
    {
        id: "social4",
        title: "Linkedin",
        linkSite: "https://www.linkedin.com/in/ricardo-guevara-511582257/",
        logo: linkedin
    }
    

]