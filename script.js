/* =========================================
   1. BASES DE DATOS (36 PREGUNTAS RIASEC)
========================================= */
const questions = [
    // --- SECCIÓN 1 (Preguntas 1 a 6) ---
    { id: 1, type: "R", text: "Te gusta armar, reparar o dar mantenimiento a aparatos eléctricos o mecánicos." },
    { id: 2, type: "I", text: "Disfrutas analizar problemas complejos y buscar explicaciones científicas." },
    { id: 3, type: "A", text: "Prefieres expresar tus ideas mediante el dibujo, la música, la escritura o el diseño." },
    { id: 4, type: "S", text: "Sientes satisfacción al enseñar, aconsejar o cuidar a otras personas." },
    { id: 5, type: "E", text: "Te resulta fácil convencer a otros, liderar equipos o iniciar nuevos proyectos." },
    { id: 6, type: "C", text: "Te gusta mantener tus documentos, horarios y tareas perfectamente ordenados." },

    // --- SECCIÓN 2 (Preguntas 7 a 12) ---
    { id: 7, type: "R", text: "Prefieres trabajar al aire libre o con herramientas manuales en lugar de estar en una oficina." },
    { id: 8, type: "I", text: "Te apasiona investigar temas a fondo antes de tomar una decisión basada en datos." },
    { id: 9, type: "A", text: "Te molesta seguir reglas estrictas cuando podrías proponer una solución creativa." },
    { id: 10, type: "S", text: "Sueles ser la persona a la que tus amigos acuden para desahogarse o pedir consejo." },
    { id: 11, type: "E", text: "Te atrae la idea de fundar tu propio negocio o asumir un rol directivo." },
    { id: 12, type: "C", text: "Disfrutas seguir instrucciones paso a paso para garantizar que no haya errores." },

    // --- SECCIÓN 3 (Preguntas 13 a 18) ---
    { id: 13, type: "R", text: "Disfrutas las actividades prácticas donde ves un resultado tangible inmediatamente." },
    { id: 14, type: "I", text: "Te resulta estimulante resolver acertijos lógicos o ecuaciones matemáticas." },
    { id: 15, type: "A", text: "Valoras mucho la estética, la originalidad y la libertad artística." },
    { id: 16, type: "S", text: "Te gustaría trabajar en áreas de salud, educación o asistencia comunitaria." },
    { id: 17, type: "E", text: "Te sientes cómodo hablando en público y negociando para obtener el mejor resultado." },
    { id: 18, type: "C", text: "Prefieres tareas estructuradas con metas claras y procedimientos definidos." },

    // --- SECCIÓN 4 (Preguntas 19 a 24) ---
    { id: 19, type: "R", text: "Te interesa saber exactamente cómo funcionan las máquinas y la tecnología por dentro." },
    { id: 20, type: "I", text: "Te gusta leer artículos científicos, de investigación o innovación tecnológica." },
    { id: 21, type: "A", text: "Sueles buscar formas novedosas de personalizar tu espacio personal o tus proyectos." },
    { id: 22, type: "S", text: "Te preocupa el bienestar social y te gusta participar en causas solidarias." },
    { id: 23, type: "E", text: "Te motiva competir y alcanzar metas ambiciosas en el ámbito académico o laboral." },
    { id: 24, type: "C", text: "Te sientes cómodo revisando bases de datos, hojas de cálculo o inventarios." },

    // --- SECCIÓN 5 (Preguntas 25 a 30) ---
    { id: 25, type: "R", text: "Preferirías construir o reparar un mueble antes que redactar un informe escrito." },
    { id: 26, type: "I", text: "Te gusta cuestionar el porqué de las cosas y no aceptas afirmaciones sin evidencias." },
    { id: 27, type: "A", text: "Te atrae el mundo del diseño gráfico, audiovisual, la moda o las artes escénicas." },
    { id: 28, type: "S", text: "Se te facilita conectar con las emociones de los demás y mostrar empatía." },
    { id: 29, type: "E", text: "Tienes facilidad para organizar eventos, ventas o campañas publicitarias." },
    { id: 30, type: "C", text: "Prefieres tener una rutina de trabajo predecible y organizada." },

    // --- SECCIÓN 6 (Preguntas 31 a 36) ---
    { id: 31, type: "R", text: "Te agrada operar maquinarias, vehículos o software de diseño técnico." },
    { id: 32, type: "I", text: "Te imaginas trabajando en un laboratorio, centro de investigación o desarrollo de software." },
    { id: 33, type: "A", text: "Te consideras una persona intuitiva, imaginativa y con mente abierta." },
    { id: 34, type: "S", text: "Disfrutas coordinar actividades grupales para ayudar al crecimiento de los miembros." },
    { id: 35, type: "E", text: "Disfrutas tomar riesgos calculados para obtener beneficios o reconocimientos." },
    { id: 36, type: "C", text: "Aprecias la precisión contable, la redacción clara de contratos o la gestión de archivos." }
];

const profiles = {
    R: { name: "Realista", img: "images/realista.png", desc: "Eres una persona práctica, independiente y orientada a la acción. Prefieres trabajar con objetos, herramientas, máquinas, plantas o animales en lugar de con ideas o personas. Te desenvuelves mejor en tareas tangibles." },
    I: { name: "Investigador", img: "images/investigador.png", desc: "Eres analítico, curioso y metódico. Disfrutas observando, aprendiendo, investigando y resolviendo problemas complejos. Prefieres trabajar con ideas y datos más que con personas o rutinas repetitivas." },
    A: { name: "Artístico", img: "images/artistico.png", desc: "Eres creativo, intuitivo e imaginativo. Prefieres entornos de trabajo no estructurados donde puedas expresarte libremente, ya sea a través del arte, el diseño, la escritura o la innovación." },
    S: { name: "Social", img: "images/social.png", desc: "Eres empático, comunicativo y amigable. Disfrutas informando, educando, curando o ayudando a otros. Prefieres trabajar interactuando con personas y buscando el bienestar comunitario." },
    E: { name: "Emprendedor", img: "images/emprendedor.png", desc: "Eres persuasivo, enérgico y seguro de ti mismo. Te gusta influir en los demás, liderar proyectos y asumir riesgos para alcanzar objetivos organizacionales o beneficios económicos." },
    C: { name: "Convencional", img: "images/convencional.png", desc: "Eres organizado, cuidadoso y eficiente. Destacas en tareas que requieren atención al detalle, manejo de datos y seguimiento de reglas. Prefieres ambientes estructurados y predecibles." }
};

const careersDB = [
    { 
        title: "Ingeniería Mecatrónica", 
        traits: ["R", "I"], 
        field: "Ingeniería y Manufactura", 
        icon: "🤖",
        desc: "Combina mecánica, electrónica y control para diseñar sistemas automatizados y robótica avanzada.",
        duration: "5 años (10 semestres)",
        where: "Facultad de Ciencias y Tecnología / Universidades locales y nacionales",
        workfield: "Plantas automotrices, robótica industrial, aeroespacial y automatización.",
        skills: "Lógica matemática, diseño técnico, programación básica, resolución de problemas."
    },
    { 
        title: "Mantenimiento Industrial", 
        traits: ["R", "C"], 
        field: "Transporte y Logística", 
        icon: "🛠️",
        desc: "Asegura el funcionamiento óptimo de maquinaria e infraestructura mediante diagnósticos y protocolos de precisión.",
        duration: "3 años (Técnico Superior)",
        where: "Institutos Técnicos Superiores y Centros de Capacitación Industrial",
        workfield: "Aerolíneas, talleres industriales, plantas de energía y centros logísticos.",
        skills: "Uso de herramientas de precisión, diagnóstico técnico y prevención de fallas."
    },
    { 
        title: "Ciberseguridad y Análisis Digital", 
        traits: ["I", "E"], 
        field: "Tecnología y Seguridad", 
        icon: "🔐",
        desc: "Protege infraestructuras digitales contra ataques e investiga eventos informáticos.",
        duration: "4 a 5 años",
        where: "Facultades de Sistemas / Carreras de Ingeniería Informática",
        workfield: "Empresas de tecnología, entidades financieras y consultoras de seguridad.",
        skills: "Programación (Python, C++), redes, criptografía y análisis de datos."
    },
    { 
        title: "Biotecnología", 
        traits: ["I", "R"], 
        field: "Salud y Medioambiente", 
        icon: "🧬",
        desc: "Utiliza organismos vivos y biología molecular para crear soluciones médicas, agrícolas e industriales.",
        duration: "5 años",
        where: "Facultades de Ciencias Biológicas, Bioquímica y Farmacia",
        workfield: "Laboratorios farmacéuticos, empresas agroquímicas e institutos de investigación.",
        skills: "Técnicas de laboratorio molecular, análisis estadístico y método científico."
    },
    { 
        title: "Diseño UX/UI y Producto Digital", 
        traits: ["A", "I"], 
        field: "Arte y Tecnología", 
        icon: "🎨",
        desc: "Diseña interfaces y experiencias digitales intuitivas combinando estética y comportamiento del usuario.",
        duration: "3 a 4 años (Licenciatura o Especialización)",
        where: "Academias de diseño digital, institutos tecnológicos y universidades",
        workfield: "Startups de tecnología, agencias de publicidad y estudios freelance.",
        skills: "Diseño de interfaces (Figma), psicología del usuario y creatividad visual."
    },
    { 
        title: "Artes Culinarias y Gastronomía", 
        traits: ["A", "E"], 
        field: "Hostelería y Turismo", 
        icon: "👨‍🍳",
        desc: "Desarrolla propuestas gastronómicas creativas combinando técnicas de cocina con gestión de negocios.",
        duration: "3 años",
        where: "Escuelas de Gastronomía e Institutos Técnicos especializados",
        workfield: "Restaurantes de alta cocina, hoteles internacionales y emprendimientos.",
        skills: "Creatividad culinaria, gestión de costos y liderazgo de cocina."
    },
    { 
        title: "Psicología Clínica", 
        traits: ["S", "I"], 
        field: "Salud Mental y Ciencias Sociales", 
        icon: "🧠",
        desc: "Evalúa y acompaña la salud mental de personas mediante métodos terapéuticos científicos.",
        duration: "5 años",
        where: "Facultades de Humanidades y Ciencias de la Conducta",
        workfield: "Hospitales, clínicas privadas, centros educativos y práctica independiente.",
        skills: "Escucha activa, empatía, análisis crítico y ética profesional."
    },
    { 
        title: "Trabajo Social y Gestión de ONGs", 
        traits: ["S", "E"], 
        field: "Comunidad y Asistencia", 
        icon: "🤝",
        desc: "Promueve el bienestar social e interviene en proyectos comunitarios y organizaciones de ayuda.",
        duration: "4 a 5 años",
        where: "Facultades de Ciencias Sociales y Humanas",
        workfield: "Gobiernos, ONGs, centros comunitarios y hospitales.",
        skills: "Gestión de proyectos sociales, resolución de conflictos y comunicación."
    },
    { 
        title: "Gestión de Negocios Globales", 
        traits: ["E", "A"], 
        field: "Negocios y Comercio", 
        icon: "🌍",
        desc: "Dirige iniciativas empresariales y estrategias de mercado en entornos internacionales.",
        duration: "4 a 5 años",
        where: "Facultades de Ciencias Económicas y Administrativas",
        workfield: "Multinacionales, empresas de exportación/importación y consultoras.",
        skills: "Liderazgo, negociación, pensamiento estratégico y análisis de mercados."
    },
    { 
        title: "Derecho Corporativo", 
        traits: ["E", "C"], 
        field: "Leyes y Asesoría", 
        icon: "⚖️",
        desc: "Asesora a empresas en contratos, regulaciones comerciales y protección legal corporativa.",
        duration: "5 años",
        where: "Facultades de Ciencias Jurídicas y Políticas",
        workfield: "Bufetes de abogados, departamentos legales corporativos y consultoras.",
        skills: "Razonamiento jurídico, negociación y redacción de contratos."
    },
    { 
        title: "Contabilidad y Auditoría Financiera", 
        traits: ["C", "E"], 
        field: "Finanzas y Contabilidad", 
        icon: "📈",
        desc: "Gestiona, audita y analiza la información financiera garantizando el cumplimiento normativo.",
        duration: "4 a 5 años",
        where: "Facultades de Ciencias Económicas y Financieras",
        workfield: "Empresas de auditoría, departamentos financieros y bancos.",
        skills: "Análisis numérico, organización, manejo de sistemas contables e integridad."
    },
    { 
        title: "Gestión de Logística y Cadena de Suministro", 
        traits: ["C", "I"], 
        field: "Operaciones y Distribución", 
        icon: "📦",
        desc: "Planifica y optimiza el flujo de bienes, recursos e inventarios a escala local e internacional.",
        duration: "4 años",
        where: "Facultades de Ingeniería Industrial y Ciencias Empresariales",
        workfield: "Empresas de comercio electrónico, transporte internacional y distribución.",
        skills: "Planificación operativa, gestión de inventarios y optimización de procesos."
    }
];
/* =========================================
   2. ESTADO GLOBAL DE LA APLICACIÓN
========================================= */
let userData = {
    name: "",
    age: "",
    answers: {}, 
    currentPage: 0
};
const questionsPerPage = 6; // 6 preguntas por página (6 páginas en total para las 36 preguntas)
const totalPages = Math.ceil(questions.length / questionsPerPage);

/* =========================================
   3. INICIALIZACIÓN Y ENRUTAMIENTO
========================================= */
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    loadData();

    const path = window.location.pathname;

    if (path.includes("index.html") || path === "/" || path === "") {
        initIndexPage();
    } else if (path.includes("test.html")) {
        initTestPage();
    } else if (path.includes("resultados.html")) {
        initResultsPage();
    }
});

function saveData() {
    localStorage.setItem("orientaUserData", JSON.stringify(userData));
}
function loadData() {
    const saved = localStorage.getItem("orientaUserData");
    if (saved) {
        userData = JSON.parse(saved);
    }
}

function initNavigation() {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const drawer = document.getElementById("nav-drawer");
    const closeBtn = document.getElementById("drawer-close-btn");
    const overlay = document.getElementById("menu-overlay");
    const resetBtn = document.getElementById("reset-data-btn");

    if(hamburgerBtn) {
        hamburgerBtn.addEventListener("click", () => {
            drawer.classList.add("open");
            overlay.classList.add("visible");
        });
    }

    const closeDrawer = () => {
        drawer.classList.remove("open");
        overlay.classList.remove("visible");
    };

    if(closeBtn) closeBtn.addEventListener("click", closeDrawer);
    if(overlay) overlay.addEventListener("click", closeDrawer);

    if(resetBtn) {
        resetBtn.addEventListener("click", () => {
            localStorage.removeItem("orientaUserData");
            window.location.href = "index.html";
        });
    }
}

/* =========================================
   4. LÓGICA: PÁGINA DE INICIO (INDEX)
========================================= */
function initIndexPage() {
   const form = document.getElementById("user-setup-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const nameInput = document.getElementById("user-name").value.trim();

            userData = { name: nameInput, answers: {}, currentPage: 0 };
            saveData();
            window.location.href = "test.html";
        });
    }
}
/* =========================================
   5. LÓGICA: PÁGINA DEL CUESTIONARIO (TEST)
========================================= */
function initTestPage() {
    if (!userData.name) {
        window.location.href = "index.html";
        return;
    }

    renderQuestions();

    document.getElementById("next-btn").addEventListener("click", () => {
        const startIdx = userData.currentPage * questionsPerPage;
        const endIdx = startIdx + questionsPerPage;
        const currentQuestions = questions.slice(startIdx, endIdx);
        
        let allAnswered = true;
        currentQuestions.forEach(q => {
            if (!userData.answers[q.id]) allAnswered = false;
        });

        if (!allAnswered) {
            alert("Por favor, selecciona una respuesta para todas las preguntas de esta sección antes de continuar.");
            return;
        }

        if (userData.currentPage < totalPages - 1) {
            userData.currentPage++;
            saveData();
            renderQuestions();
            window.scrollTo(0, 0);
        } else {
            saveData();
            window.location.href = "resultados.html";
        }
    });

    document.getElementById("prev-btn-top").addEventListener("click", () => {
        if (userData.currentPage > 0) {
            userData.currentPage--;
            saveData();
            renderQuestions();
            window.scrollTo(0, 0);
        } else {
            window.location.href = "index.html";
        }
    });
}

function renderQuestions() {
    const quizBox = document.getElementById("quiz-box");
    quizBox.innerHTML = "";

    const startIdx = userData.currentPage * questionsPerPage;
    const endIdx = startIdx + questionsPerPage;
    const currentQuestions = questions.slice(startIdx, endIdx);

    currentQuestions.forEach(q => {
        const questionHtml = `
            <div class="question-block">
                <p class="question-text">${q.id}. ${q.text}</p>
                <div class="options-wrapper" id="q-${q.id}">
                    <button class="option-btn" data-val="5" aria-label="Muy de acuerdo"></button>
                    <button class="option-btn" data-val="4" aria-label="De acuerdo"></button>
                    <button class="option-btn" data-val="3" aria-label="Neutral"></button>
                    <button class="option-btn" data-val="2" aria-label="En desacuerdo"></button>
                    <button class="option-btn" data-val="1" aria-label="Muy en desacuerdo"></button>
                </div>
                <div class="labels">
                    <span class="label-agree">De acuerdo</span>
                    <span class="label-disagree">En desacuerdo</span>
                </div>
            </div>
        `;
        quizBox.insertAdjacentHTML("beforeend", questionHtml);
    });

    currentQuestions.forEach(q => {
        const wrapper = document.getElementById(`q-${q.id}`);
        const buttons = wrapper.querySelectorAll(".option-btn");
        
        if (userData.answers[q.id]) {
            const savedVal = userData.answers[q.id];
            wrapper.querySelector(`[data-val="${savedVal}"]`).classList.add("selected");
        }

        buttons.forEach(btn => {
            btn.addEventListener("click", function() {
                buttons.forEach(b => b.classList.remove("selected"));
                this.classList.add("selected");
                userData.answers[q.id] = parseInt(this.getAttribute("data-val"));
                saveData();
            });
        });
    });

    updateProgress();
}

function updateProgress() {
    document.getElementById("page-indicator").innerText = `Paso ${userData.currentPage + 1} de ${totalPages}`;
    const percentage = ((userData.currentPage + 1) / totalPages) * 100;
    document.getElementById("test-progress-bar").style.width = percentage + "%";

    const nextBtn = document.getElementById("next-btn");
    if (userData.currentPage === totalPages - 1) {
        nextBtn.innerText = "Ver mis Resultados 🚀";
    } else {
        nextBtn.innerText = "Siguiente →";
    }
}

/* =========================================
   6. LÓGICA: PÁGINA DE RESULTADOS
========================================= */
function initResultsPage() {
    if (!userData.name || Object.keys(userData.answers).length < questions.length) {
        alert("Primero debes completar las 36 preguntas para generar tus resultados.");
        window.location.href = "test.html";
        return;
    }

    document.getElementById("results-user-name").innerText = `¡Felicidades, ${userData.name}!`;

    let scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    
    questions.forEach(q => {
        const answer = userData.answers[q.id] || 3;
        scores[q.type] += answer;
    });

    const sortedScores = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    
    const dominantType = sortedScores[0][0];
    const secondaryType = sortedScores[1][0];
    const profileData = profiles[dominantType];

    document.getElementById("holland-code-text").innerText = profileData.name;
    document.getElementById("primary-avatar-img").src = profileData.img;
    document.getElementById("profile-description").innerText = profileData.desc;

    const resultsGrid = document.getElementById("results-grid");
    resultsGrid.innerHTML = "";
    
    // Como hay 6 preguntas por categoría y el valor máximo por pregunta es 5, el puntaje máximo por categoría es 30 puntos.
    const maxScorePerTrait = 30; 

    sortedScores.forEach(item => {
        const type = item[0];
        const score = item[1];
        const percent = Math.round((score / maxScorePerTrait) * 100);
        const pData = profiles[type];

        const barHtml = `
            <div class="trait-row">
                <div class="trait-label">${pData.name}</div>
                <div class="trait-bar-bg">
                    <div class="trait-bar-fill bg-${type.toLowerCase()}" style="width: 0%" data-width="${percent}%"></div>
                </div>
                <div class="trait-score">${percent}%</div>
            </div>
        `;
        resultsGrid.insertAdjacentHTML("beforeend", barHtml);
    });

    setTimeout(() => {
        document.querySelectorAll(".trait-bar-fill").forEach(bar => {
            bar.style.width = bar.getAttribute("data-width");
        });
    }, 300);

    renderCareers(dominantType, secondaryType);
}

function renderCareers(t1, t2) {
    const careersGrid = document.getElementById("careers-grid");
    careersGrid.innerHTML = "";

    let matches = careersDB.filter(c => c.traits.includes(t1) || c.traits.includes(t2));
    
    matches.sort((a, b) => {
        const aScore = (a.traits.includes(t1) ? 1 : 0) + (a.traits.includes(t2) ? 1 : 0);
        const bScore = (b.traits.includes(t1) ? 1 : 0) + (b.traits.includes(t2) ? 1 : 0);
        return bScore - aScore;
    });

    const topCareers = matches.slice(0, 4);

    if (topCareers.length === 0) {
        careersGrid.innerHTML = "<p>No encontramos una coincidencia exacta, pero te sugerimos explorar áreas interdisciplinarias.</p>";
        return;
    }

    topCareers.forEach(c => {
        let icon = "💼";
        if (c.field.includes("Salud")) icon = "🩺";
        if (c.field.includes("Tecnología") || c.field.includes("Ingeniería")) icon = "💻";
        if (c.field.includes("Arte") || c.field.includes("Diseño")) icon = "🎨";
        if (c.field.includes("Negocios") || c.field.includes("Finanzas")) icon = "📈";
        if (c.field.includes("Educación") || c.field.includes("Sociales")) icon = "📚";

        const card = document.createElement("div");
        card.className = "career-card";
        card.innerHTML = `
            <div class="career-icon">${icon}</div>
            <div class="career-title">${c.title}</div>
            <p style="font-size: 0.85rem; color: #7b858e; margin-top: 5px;">${c.field}</p>
        `;
        
        card.addEventListener("click", () => openModal(c));
        careersGrid.appendChild(card);
    });
}
/* =========================================
   7. MODAL DE CARRERAS
========================================= */
const modal = document.getElementById("career-modal");
const closeBtn = document.getElementById("modal-close-btn");

function openModal(careerInfo) {
    if (!modal) return;

    document.getElementById("modal-title").innerText = careerInfo.title;
    document.getElementById("modal-category").innerText = careerInfo.field;
    document.getElementById("modal-description").innerText = careerInfo.desc;
    
    // Nuevos campos: Duración y Dónde estudiarla
    const durationElem = document.getElementById("modal-duration");
    if (durationElem) durationElem.innerText = careerInfo.duration || "No especificada";

    const whereElem = document.getElementById("modal-where");
    if (whereElem) whereElem.innerText = careerInfo.where || "Instituciones superiores autorizadas";

    document.getElementById("modal-workfield").innerText = careerInfo.workfield || careerInfo.desc;
    document.getElementById("modal-skills").innerText = careerInfo.skills || "No especificadas";

    modal.style.display = "flex";
}

if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => { modal.style.display = "none"; });
    window.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });
}
/* =========================================
   LÓGICA DE LA PÁGINA DE CARRERAS ("N: Carreras")
========================================= */
function initCarrerasPage() {
    const grid = document.getElementById("all-careers-grid");
    const searchInput = document.getElementById("career-search-input");

    if (!grid) return;

    function renderCareers(list) {
        grid.innerHTML = "";
        if (list.length === 0) {
            grid.innerHTML = "<p class='text-center' style='grid-column: 1/-1;'>No se encontraron carreras que coincidan con la búsqueda.</p>";
            return;
        }

        list.forEach(carrera => {
            const card = document.createElement("div");
            card.className = "career-card";
            card.innerHTML = `
                <div class="career-icon">${carrera.icon || "💼"}</div>
                <div class="career-title">${carrera.title}</div>
                <p style="font-size: 0.85rem; color: #7b858e; margin-top: 5px;">${carrera.field}</p>
                <p style="font-size: 0.8rem; margin-top: 10px; color: #4a5568;">${carrera.desc}</p>
            `;
            card.addEventListener("click", () => openModal(carrera));
            grid.appendChild(card);
        });
    }

    renderCareers(careersDB);

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase();
            const filtered = careersDB.filter(c => 
                c.title.toLowerCase().includes(query) ||
                c.field.toLowerCase().includes(query) ||
                c.desc.toLowerCase().includes(query) ||
                (c.skills && c.skills.toLowerCase().includes(query))
            );
            renderCareers(filtered);
        });
    }
}

// Enrutador principal al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    loadData();

    const path = window.location.pathname;

    if (path.includes("index.html") || path === "/" || path === "") {
        initIndexPage();
    } else if (path.includes("test.html")) {
        initTestPage();
    } else if (path.includes("resultados.html")) {
        initResultsPage();
    } else if (path.includes("carreras.html")) {
        initCarrerasPage();
    }
});