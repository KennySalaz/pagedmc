/* ============================================================
   DMC LOGISTIC — Main JavaScript
   Swiper carousels | Smooth scroll | Translations | Hamburger
   ============================================================ */

/* ---------- Translations ---------- */
const i18n = {
  es: {
    "nav.home": "HOME",
    "nav.about": "SOBRE NOSOTROS",
    "nav.services": "SERVICIOS",
    "nav.contact": "CONTACTO",

    "hero.tag": "Logistics",
    "hero.title": "ASESORÍA LOGÍSTICA INTEGRAL",
    "hero.tag2": "Delivery",
    "hero.title2": "LOGÍSTICA DE IMPORTACIÓN Y EXPORTACIÓN",
    "hero.tag3": "Management",
    "hero.title3": "AGENTES DE\nADUANA y CONSOLIDADORES DE\nCARGA",

    "about.ghost": "NOSOTROS",
    "about.title":
      '<span class="title-small">SOBRE</span>\n<span class="title-large">NOSOTROS</span>',
    "about.p1":
      "Somos una empresa fundada en 1971 con alcance nacional e internacional en logística integral, con sucursales en los principales puertos y aeropuertos del país.",
    "about.p2":
      "Conformamos un equipo de colaboradores donde nuestra fortaleza es la trayectoria, experiencia y actitud de servicio que nos capacita para brindarle al cliente una asesoría que en conjunto nos permite desarrollar e implementar propuestas de valor que se adapten a las necesidades de cada negocio asegurando la eficiencia, el Lead time y la rentabilidad de las operaciones.",
    "about.p3":
      "Contamos con autorizaciones para operar como agentes de aduana y consolidador de carga en las principales aduanas del País",

    "services.ghost": "SERVICIOS",
    "services.title": "SERVICIOS",
    "services.s1": "Logística integral de comercio internacional.",
    "services.s2": "Transporte de carga aérea, marítimo y terrestre.",
    "services.s3": "Consolidación de carga y almacenaje.",
    "services.s4": "Agenciamiento aduanal a nivel nacional.",
    "services.s5": "Asesoría en valoración y clasificación arancelaria.",
    "services.s6": "Tramitación de regímenes aduaneros especiales y otros.",
    "services.s7": "Transporte terrestre estándar y sobredimensionado.",
    "services.s8": "Esquemas de seguridad para el transporte de mercancías vía terrestre.",

    "contact.title": "¡CONTÁCTANOS!",
    "contact.name": "Nombre y Apellido",
    "contact.email": "Correo electrónico",
    "contact.message": "Mensaje",
    "contact.send": "Enviar",

    "loc.caracas": "CARACAS",
    "loc.caracas.addr":
      "Calle Primera, con Avenida Francisco de Miranda, Edificio Parque Cristal, Los Palos Grandes, Piso 13 Ofic 13-5, Caracas CP 1060",
    "loc.laguaira": "LA GUAIRA",
    "loc.laguaira.addr":
      "Centro Empresarial Puerta del Sol, Av. Domingo del Rosario, Parroquia Maiquetía, Municipio Vargas Edo La Guaira",
    "loc.puertocabello": "PUERTO CABELLO",
    "loc.puertocabello.addr":
      "Edif Distribuidora Madeira, calle Puerto Cabello, Piso 2 No. 2, Parroquia Juan José Flores, CP 2050",
    "loc.puertosucre": "PUERTO SUCRE",
    "loc.puertosucre.addr":
      "Edificio administrativo Rio Manzanares, PB, Puerto Pesquero de Cumaná, Cumana; Estado Sucre. CP 6101",
    "loc.puertoguiria": "GÜIRIA",
    "loc.puertoguiria.addr":
      "Calle Bolívar, Edificio Don Antonio, Local 01, Sector Centro, Güiria, Estado Sucre.",
    "loc.sanantonio": "SAN ANTONIO",
    "loc.sanantonio.addr":
      "Carrera 6 entre calle 3 y 4 Nº 3-35 Edificio K&G, Piso 1, Ofic 101, Barrio Lagunitas, San Antonio, Edo Táchira, CP 5007.",
    "loc.maracaibo": "MARACAIBO",
    "loc.maracaibo.addr":
      "Av. 4 Edf Paulina Pierina, PB, Sector Bella Vista, Maracaibo, Estado Zulia, CP 4002.",
    "loc.puertoguanta": "GUANTA",
    "loc.puertoguanta.addr":
      "Edf Núm 6, calle B, Manzana G, Urbanización Las Palmas, Guanta, Estado Anzoátegui",

    "footer.address":
      "Dirección: Av Francisco de Miranda, Torre Parque Cristal, Los Palos Grandes, Caracas, Venezuela",
    "footer.terms": "Team & Condition",
    "footer.privacy": "Privacy Policy",
    "footer.copy": "© Despachos Molina C.A. RIF: J-070127350",
  },
  en: {
    "nav.home": "HOME",
    "nav.about": "ABOUT US",
    "nav.services": "SERVICES",
    "nav.contact": "CONTACT",

    "hero.tag": "Logistics",
    "hero.title": "COMPREHENSIVE LOGISTICS CONSULTING",
    "hero.tag2": "Delivery",
    "hero.title2": "IMPORT & EXPORT LOGISTICS",
    "hero.tag3": "Management",
    "hero.title3": "CUSTOMS AGENTS &\nFREIGHT CONSOLIDATORS",

    "about.ghost": "ABOUT",
    "about.title": '<span class="title-large">ABOUT US</span>',
    "about.p1":
      "We are a company founded in 1971 with national and international reach in comprehensive logistics, with branches at the main ports and airports of the country.",
    "about.p2":
      "We form a team of collaborators where our strength is the trajectory, experience, and service attitude that enables us to offer each client advisory services that together allow us to develop and implement value proposals tailored to the needs of each business, ensuring efficiency, lead time, and profitability in operations.",
    "about.p3":
      "We have authorizations to operate as customs agents and freight consolidators in the main customs offices of the country.",

    "services.ghost": "SERVICES",
    "services.title": "SERVICES",
    "services.s1": "Comprehensive international trade logistics.",
    "services.s2": "Air, sea, and land freight transport.",
    "services.s3": "Freight consolidation and warehousing.",
    "services.s4": "National customs agency services.",
    "services.s5": "Advisory on valuation and tariff classification.",
    "services.s6": "Processing of special customs regimes and others.",
    "services.s7": "Standard and oversized land transport.",
    "services.s8": "Security schemes for land transport of goods.",

    "contact.title": "CONTACT US!",
    "contact.name": "Full Name",
    "contact.email": "Email address",
    "contact.message": "Message",
    "contact.send": "Send",

    "loc.caracas": "CARACAS",
    "loc.caracas.addr":
      "Calle Primera, con Avenida Francisco de Miranda, Edificio Parque Cristal, Los Palos Grandes, Piso 13 Ofic 13-5, Caracas CP 1060",
    "loc.laguaira": "LA GUAIRA",
    "loc.laguaira.addr":
      "Centro Empresarial Puerta del Sol, Av. Domingo del Rosario, Parroquia Maiquetía, Municipio Vargas Edo La Guaira",
    "loc.puertocabello": "PUERTO CABELLO",
    "loc.puertocabello.addr":
      "Edif Distribuidora Madeira, calle Puerto Cabello, Piso 2 No. 2, Parroquia Juan José Flores, CP 2050",
    "loc.puertosucre": "PUERTO SUCRE",
    "loc.puertosucre.addr":
      "Edificio administrativo Rio Manzanares, PB, Puerto Pesquero de Cumaná, Cumana; Estado Sucre. CP 6101",
    "loc.puertoguiria": "GÜIRIA",
    "loc.puertoguiria.addr":
      "Calle Bolívar, Edificio Don Antonio, Local 01, Sector Centro, Güiria, Estado Sucre.",
    "loc.sanantonio": "SAN ANTONIO",
    "loc.sanantonio.addr":
      "Carrera 6 entre calle 3 y 4 Nº 3-35 Edificio K&G, Piso 1, Ofic 101, Barrio Lagunitas, San Antonio, Edo Táchira, CP 5007.",
    "loc.maracaibo": "MARACAIBO",
    "loc.maracaibo.addr":
      "Av. 4 Edf Paulina Pierina, PB, Sector Bella Vista, Maracaibo, Estado Zulia, CP 4002.",
    "loc.puertoguanta": "GUANTA",
    "loc.puertoguanta.addr":
      "Edf Núm 6, calle B, Manzana G, Urbanización Las Palmas, Guanta, Estado Anzoátegui",

    "footer.address":
      "Address: Av Francisco de Miranda, Torre Parque Cristal, Los Palos Grandes, Caracas, Venezuela",
    "footer.terms": "Terms & Conditions",
    "footer.privacy": "Privacy Policy",
    "footer.copy": "© Despachos Molina C.A. RIF: J-070127350",
  },
};

/* ---------- SVG Flag Assets ---------- */
const FLAG_ES = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><path fill="#ad1519" d="M0 0h640v120H0z"/><path fill="#fac917" d="M0 120h640v240H0z"/><path fill="#ad1519" d="M0 360h640v120H0z"/><g transform="translate(100 180) scale(1.2)"><path d="M0 0v100c0 15 11 27 25 30l25 15 25-15c14-3 25-15 25-30V0H0z" fill="#fac917" stroke="#ad1519" stroke-width="10"/><path d="M25 25h50v50H25z" fill="#ad1519"/></g></svg>`;
const FLAG_EN = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480"><path fill="#bd3d44" d="M0 0h640v480H0z"/><path fill="#fff" d="M0 36.9h640v37H0zm0 73.8h640v37H0zm0 74h640v36.8H0zm0 73.8h640v37H0zm0 73.9h640v37H0zm0 74h640v36.8H0z"/><path fill="#192f5d" d="M0 0h320v258.5H0z"/><path fill="#fff" d="M37.3 35.1l-6.4 19.8 16.9-12.2H26.8l16.9 12.2zm71.1 0l-6.4 19.8 16.9-12.2H97.9l16.9 12.2zm71.1 0l-6.4 19.8 16.9-12.2h-21.1l16.9 12.2zm71.1 0l-6.4 19.8 16.9-12.2h-21.1l16.9 12.2zm-177.8 73.8l-6.4 19.8 16.9-12.2H62.4l16.9 12.2zm71.1 0l-6.4 19.8 16.9-12.2h-21.1l16.9 12.2zm71.1 0l-6.4 19.8 16.9-12.2h-21.1l16.9 12.2zm71.2 0l-6.4 19.8 16.9-12.2h-21.1l16.9 12.2zm-177.8 73.9l-6.4 19.8 16.9-12.2h-21.1l16.9 12.2zm71.1 0l-6.4 19.8 16.9-12.2h-21.1l16.9 12.2zm71.1 0l-6.4 19.8 16.9-12.2h-21.1l16.9 12.2zm71.2 0l-6.4 19.8 16.9-12.2h-21.1l16.9 12.2z"/></svg>`;

/* ---------- Language ---------- */
let currentLang = "es";

function applyTranslations(lang) {
  const dict = i18n[lang];

  // Text nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key].replace(/\n/g, "<br>");
    }
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
}

function toggleLang() {
  currentLang = currentLang === "es" ? "en" : "es";
  document.getElementById("langFlag").innerHTML =
    currentLang === "es" ? FLAG_ES : FLAG_EN;
  document.getElementById("langCode").textContent = currentLang.toUpperCase();
  document.documentElement.lang = currentLang;
  applyTranslations(currentLang);
}

document.getElementById("langToggle").addEventListener("click", toggleLang);
document.getElementById("langFlag").innerHTML = FLAG_ES; // initial
applyTranslations("es"); // default

/* ---------- Hero Swiper ---------- */
const heroSwiper = new Swiper(".hero-swiper", {
  loop: true,
  autoplay: { delay: 5000, disableOnInteraction: false },
  speed: 900,
  effect: "fade",
  fadeEffect: { crossFade: true },
  pagination: { el: ".hero-pagination", clickable: true },
});

/* ---------- Locations Swiper ---------- */
const locSwiper = new Swiper(".locations-swiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: ".loc-next",
    prevEl: ".loc-prev",
  },
  breakpoints: {
    600: { slidesPerView: 2 },
    900: { slidesPerView: 3 },
  },
});

/* ---------- Navbar: scroll shadow + active link ---------- */
const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll("section[id], div[id]");

window.addEventListener(
  "scroll",
  () => {
    // shadow
    navbar.classList.toggle("scrolled", window.scrollY > 20);

    // active nav link
    let current = "";
    sections.forEach((sec) => {
      const top = sec.offsetTop - 100;
      if (window.scrollY >= top) current = sec.id;
    });
    document.querySelectorAll(".nav-links a[data-scroll]").forEach((a) => {
      a.classList.toggle("active", a.dataset.scroll === current);
    });
  },
  { passive: true },
);

/* ---------- Smooth scroll ---------- */
document.querySelectorAll("a[data-scroll]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.getElementById(link.dataset.scroll);
    if (!target) return;
    const offset =
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue("--nav-h"),
      ) || 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });

    // close mobile menu if open
    navLinks.classList.remove("open");
    hamburger.classList.remove("open");
    const overlay = document.getElementById("menuOverlay");
    if (overlay) overlay.classList.remove("open");
    document.body.classList.remove("no-scroll");
    document.documentElement.classList.remove("no-scroll");
  });
});

/* ---------- Hamburger ---------- */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const menuOverlay = document.getElementById("menuOverlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
  if (menuOverlay) menuOverlay.classList.toggle("open");

  const isOpening = hamburger.classList.contains("open");
  document.body.classList.toggle("no-scroll", isOpening);
  document.documentElement.classList.toggle("no-scroll", isOpening);
});

if (menuOverlay) {
  menuOverlay.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
    menuOverlay.classList.remove("open");
    document.body.classList.remove("no-scroll");
    document.documentElement.classList.remove("no-scroll");
  });
}

/* ---------- Scroll-reveal observer ---------- */
const revealEls = document.querySelectorAll(
  ".about-text, .about-image, .services-list-wrap, .contact-card, .location-card",
);
revealEls.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
revealEls.forEach((el) => observer.observe(el));

/* ---------- Contact Form ---------- */
document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    if (!this.checkValidity()) {
      this.reportValidity();
      return;
    }

    const btn = this.querySelector(".btn-send");
    const originalText = currentLang === "es" ? "Enviar" : "Send";
    const sendingText = currentLang === "es" ? "Enviando..." : "Sending...";

    btn.textContent = sendingText;
    btn.style.opacity = "0.7";
    btn.disabled = true;

    const name = document.getElementById("fname").value;
    const email = document.getElementById("femail").value;
    const message = document.getElementById("fmessage").value;

    const formattedMessage = message.replace(/\n/g, "<br>");
    // Plantilla HTML con los datos del formulario, usando tablas para máxima compatibilidad
    const htmlBody = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nuevo Mensaje de Contacto</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f3f6f9; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, Arial; color: #334155; -webkit-font-smoothing: antialiased;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f3f6f9;">
        <tr>
          <td align="center" style="padding: 50px 15px;">
            <!-- Main Card Container -->
            <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
              
              <!-- Top Accent Bar -->
              <tr>
                <td style="background: linear-gradient(90deg, #1a5aad 0%, #52c7e2 100%); height: 6px; font-size: 1px; line-height: 1px; background-color: #1a5aad;">&nbsp;</td>
              </tr>

              <!-- Header -->
              <tr>
                <td align="center" style="padding: 40px 20px 30px; border-bottom: 1px solid #f1f5f9;">
                  <h1 style="color: #0d2942; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -0.5px;">DMC LOGISTIC</h1>
                  <p style="color: #64748b; margin: 8px 0 0; font-size: 15px; font-weight: 500;">Nuevo Mensaje desde la Web</p>
                </td>
              </tr>
              
              <!-- Body -->
              <tr>
                <td style="padding: 40px 35px;">
                  <p style="margin: 0 0 25px; font-size: 16px; line-height: 1.6; color: #475569;">
                    Hola Equipo,<br><br>
                    Se ha recibido un nuevo formulario de contacto a través de la landing page. A continuación se detallan los datos del prospecto:
                  </p>

                  <!-- Data Table -->
                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 30px;">
                    <tr>
                      <td style="padding: 18px 20px; border-bottom: 1px solid #e2e8f0;">
                        <span style="font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.8px; font-weight: 700;">NOMBRE COMPLETO</span><br>
                        <span style="font-size: 16px; color: #0d2942; font-weight: 600;">${name}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 18px 20px; border-bottom: 1px solid #e2e8f0;">
                        <span style="font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.8px; font-weight: 700;">CORREO ELECTRÓNICO</span><br>
                        <a href="mailto:${email}" style="font-size: 16px; color: #1a5aad; font-weight: 600; text-decoration: none;">${email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 18px 20px;">
                        <span style="font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.8px; font-weight: 700;">MENSAJE</span><br><br>
                        <table width="100%" cellpadding="16" cellspacing="0" border="0" style="background-color: #ffffff; border-left: 4px solid #1a5aad; border-radius: 4px;">
                          <tr>
                            <td style="font-size: 15px; color: #334155; line-height: 1.7; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, Arial;">
                              ${formattedMessage}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- CTA / Action -->
                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td align="center">
                        <table border="0" cellspacing="0" cellpadding="0" align="center">
                          <tr>
                            <td align="center" style="background-color: #0d2942; border-radius: 6px;">
                              <a href="mailto:${email}?subject=RE: Mensaje desde sitio web de DMC Logistic" style="display: inline-block; background-color: #0d2942; color: #ffffff; font-size: 15px; font-weight: 600; text-decoration: none; padding: 14px 32px; border-radius: 6px;">Responder al Cliente</a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td align="center" style="background-color: #f1f5f9; padding: 25px 20px; border-top: 1px solid #e2e8f0;">
                  <p style="margin: 0; color: #94a3b8; font-size: 13px; font-weight: 500;">
                    Este correo fue generado automáticamente al enviar el formulario.<br>
                    &copy; DMC Logistics. Todos los derechos reservados.
                  </p>
                </td>
              </tr>

            </table>

            <!-- Micro Footer -->
            <table width="600" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td align="center" style="padding: 20px 0;">
                  <p style="margin: 0; color: #94a3b8; font-size: 12px;">Por favor, no respondas directamente a la dirección de donde proviene este sistema.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

    try {
      const response = await fetch(
        "https://api-smtp-mails.onrender.com/mails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            recipients: [
              {
                email: "contacto@dmc-logistic.com", // IMPORTANTE: Cambia este correo al real donde quieres recibirlo
                name: "Ventas DMC Logistic",
              },
            ],
            subject: `Nuevo mensaje de contacto de: ${name}`,
            htmlBody: htmlBody,
          }),
        },
      );

      if (response.ok || response.status === 201) {
        const label = currentLang === "es" ? "¡Enviado! ✓" : "Sent! ✓";
        btn.textContent = label;
        btn.style.background = "#0d2942";
        btn.style.opacity = "1";
        this.reset();

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = "";
          btn.disabled = false;
        }, 4000);
      } else {
        throw new Error("API responded with status " + response.status);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      btn.textContent =
        currentLang === "es" ? "Error, intenta de nuevo" : "Error, try again";
      btn.style.background = "#c8102e";
      btn.style.opacity = "1";

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = "";
        btn.disabled = false;
      }, 4000);
    }
  });
