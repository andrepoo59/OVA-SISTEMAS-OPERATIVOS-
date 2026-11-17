// ===== Diccionario Bilingüe Español (es) / Inglés (en) =====
const I18N = {
  es: {
    // Títulos de pestaña
    page_title_index: "Inicio · Panel del Kernel | OVA Sistemas Operativos",
    page_title_eval: "Test obligatorio (Paso 1) | OVA Sistemas Operativos",
    page_title_emb: "Sistemas embebidos | OVA Sistemas Operativos",
    page_title_rt: "Sistemas en tiempo real | OVA Sistemas Operativos",
    page_title_ft: "Tolerancia a fallos | OVA Sistemas Operativos",

    // Topbar y Sidebar compartidos
    brand_title: 'OVA <span class="brand-dot">•</span> Sistemas Operativos',
    brand_sub: "Kernel educativo · Universidad Simón Bolívar",
    progress_label: "Progreso del curso:",
    session_chip_title: "Estado de sesión del estudiante",
    status_pending: "Requisito pendiente",
    status_enabled: "Acceso habilitado",
    status_completed: "Curso completado ✓",
    nav_section: "Ruta de aprendizaje",
    nav_test: "Test obligatorio",
    step_1: "Paso 1",
    step_passed: "Aprobado ✓",
    nav_home: "Inicio",
    nav_emb: "Sistemas embebidos",
    nav_rt: "Sistemas en tiempo real",
    nav_ft: "Tolerancia a fallos",
    btn_reset: "↺ Reiniciar demo",

    // Pie de página
    ft_faculty: "Facultad de Ingeniería",
    ft_program: "Ingeniería de Sistemas",
    ft_course: "<strong>Asignatura:</strong> Sistemas Operativos",
    ft_teacher: "<strong>Docente:</strong> Alvaro Salamanca Lándinez",
    ft_author: "<strong>Desarrollado por:</strong> Andrea Rodríguez",
    ft_ref: "<strong>Referencia bibliográfica (APA 7.ª):</strong> Silberschatz, A., Galvin, P. B., &amp; Gagne, G. (2006). <em>Fundamentos de sistemas operativos</em> (7.ª ed.). McGraw-Hill.",

    // Modal de bloqueo
    modal_badge: "🔒 Acceso restringido por el kernel",
    modal_title: "Completa primero el test obligatorio",
    modal_body: 'Para ingresar a <strong id="gate-target-name">este módulo</strong>, primero debes aprobar el <strong>Test obligatorio (Paso 1)</strong> sobre Memoria virtual, Entrada/Salida y Seguridad (mínimo 6 de 9 respuestas correctas).',
    modal_cta: "Iniciar test obligatorio →",
    modal_close: "Cerrar",

    // Página Inicio (index.html)
    idx_sec_req: "Requisito inicial",
    idx_sys_tag: "Sys_Auth // Paso 1 obligatorio",
    hero_pill_locked: "Paso 1 • Requisito inicial",
    hero_title_locked: "Test obligatorio",
    hero_desc_locked: 'Antes de explorar los módulos del OVA debes aprobar un test corto de <strong>9 preguntas</strong> sobre <strong>Memoria virtual</strong>, <strong>Entrada/Salida</strong> y <strong>Seguridad</strong> (mínimo <strong>6 respuestas correctas</strong>).',
    hero_cta_locked: "Iniciar test obligatorio →",
    hero_pill_unlocked: "Paso 1 completado • Kernel desbloqueado",
    hero_title_unlocked: "Acceso total al OVA habilitado",
    hero_desc_unlocked: 'Has aprobado el <strong>Test obligatorio</strong>. Todos los módulos de <strong>Sistemas embebidos</strong>, <strong>Tiempo real</strong> y <strong>Tolerancia a fallos</strong> están desbloqueados.',
    hero_cta_unlocked: "Ir al Módulo 01: Sistemas embebidos →",
    idx_hero_meta: "Objetivo: Sistemas de tiempo real, embebidos y tolerancia a fallos",
    idx_side_title: "Administración de procesos e hilos",
    svg_thread: "Hilo",
    svg_cpu_sched: "Planificación CPU",
    idx_side_cap: "Planificación periódica: <strong>Tasa monótona (RM)</strong> y <strong>Plazo más próximo (EDF)</strong>.",
    idx_sec_mods: "Módulos de aprendizaje",
    mods_locked_banner: "🔒 Se desbloquean al aprobar el test obligatorio",
    mods_unlocked_banner: "🔓 Todos los módulos desbloqueados",
    mod_tag_1: "Módulo 01",
    mod1_title: "Sistemas embebidos",
    mod1_desc: "Dispositivos con recursos limitados, microcontroladores, firmware y tres formas de construir su software.",
    svg_sensor: "Sensor",
    svg_actuator: "Actuador",
    mod_tag_2: "Módulo 02",
    mod2_title: "Sistemas en tiempo real",
    mod2_desc: "Plazos estrictos (<em>hard</em>) y flexibles (<em>soft</em>), prioridades con expulsión, latencias y planificación RM / EDF.",
    svg_deadline: "Plazo",
    mod_tag_3: "Módulo 03",
    mod3_title: "Tolerancia a fallos",
    mod3_desc: "Detección con mensajes «estoy vivo», reconfiguración ante caídas, degradación elegante y recuperación.",
    svg_coord: "Coord.",
    svg_node_a: "Nodo A",
    svg_node_b: "Nodo B",
    svg_backup: "Respaldo",
    mod_req_step1: "Requiere test Paso 1",
    mod_enter: "Ingresar al módulo",
    mod_explored: "Módulo explorado · Repasar",
    wid_arch_tag: "Arquitectura",
    wid_arch_pill: "Páginas y marcos",
    wid_mem_title: "Gestión de memoria",
    wid_mem_desc: "Asignación de marcos físicos frente a memoria virtual. En tiempo real estricto se bloquean páginas para evitar fallos de página.",
    wid_term_tag: "Consola kernel",
    wid_term_pill: "Interactivo",
    wid_term_title: "Simulador de comandos",
    term_placeholder: "Escribe: help, status, test...",
    term_gate_locked: "Bloqueado: escribe 'test' para iniciar Paso 1",
    term_gate_unlocked: "Desbloqueado: acceso concedido ({pct}% completado)",
    term_help: "Comandos: test, status, ls, clear",
    term_opening_test: "Abriendo test obligatorio (Paso 1)...",
    term_status_ok: "Kernel desbloqueado · Módulos activos.",
    term_status_lock: "Kernel bloqueado · Pendiente test obligatorio.",
    term_unknown: "Comando no reconocido: '{cmd}'. Escribe 'help'.",
    obj_learn_title: "Objetivo de aprendizaje",
    obj_learn_desc: "Explicar las características de los sistemas de tiempo real, los sistemas embebidos y la tolerancia a fallos, y relacionarlos con las decisiones de diseño de un sistema operativo.",
    obj_use_title: "Cómo usar este OVA",
    obj_use_desc: "Primero debes aprobar el <strong>Test obligatorio (Paso 1)</strong> sobre Memoria virtual, E/S y Seguridad. Cada tema incluye explicaciones con pestañas y secciones desplegables, esquemas ilustrados, ejemplos y un resumen de ideas clave basado en <em>Silberschatz, Galvin y Gagne (2006)</em>.",

    // Evaluación (evaluacion.html)
    ev_pill: "Paso 1 • Requisito inicial obligatorio",
    ev_h1: "Test obligatorio de diagnóstico",
    ev_lead: 'Responde estas <strong>9 preguntas</strong> sobre los temas previos (<strong>Memoria virtual</strong>, <strong>Entrada/Salida</strong> y <strong>Seguridad</strong>). Necesitas al menos <strong id="min">6 de 9</strong> respuestas correctas para desbloquear los módulos de <em>Sistemas embebidos</em>, <em>Sistemas en tiempo real</em> y <em>Tolerancia a fallos</em>.',
    ev_locked_alert: "<strong>🔒 Acceso bloqueado por el kernel:</strong> Intentaste abrir un módulo protegido. Aprueba primero este test obligatorio para habilitar toda la navegación del OVA.",
    ev_cite: "Preguntas basadas en Silberschatz et al. (2006), capítulos de memoria virtual, sistemas de E/S y seguridad.",
    quiz_of: "de",
    quiz_answered: "Respondidas: <strong>{a}</strong> de <strong>{t}</strong>",
    quiz_submit: "Calificar test obligatorio ✓",
    quiz_incomplete: "Responde las 9 preguntas antes de calificar el test obligatorio.",
    quiz_ok_prefix: "✓ Correcto. ",
    quiz_bad_prefix: "✕ Incorrecto. ",
    quiz_pass_msg: "🎉 ¡Aprobaste el test obligatorio con {score} de {total}! ({detail})<br>Todos los módulos del OVA han sido desbloqueados.",
    quiz_pass_cta1: "Comenzar Módulo 01: Sistemas embebidos →",
    quiz_pass_cta2: "Ver panel principal desbloqueado",
    quiz_fail_msg: "Obtuviste {score} de {total} ({detail}). Necesitas al menos {min} respuestas correctas para desbloquear los módulos. Repasa los conceptos e inténtalo de nuevo.",
    quiz_retry: "↺ Reintentar test obligatorio",

    // Textos comunes en módulos
    glossary_h2: "Glosario",
    key_ideas_h3: "Ideas clave",
    btn_back_home: "← Panel principal",
    btn_to_rt: "Sistemas en tiempo real →",
    btn_back_emb: "← Sistemas embebidos",
    btn_to_ft: "Tolerancia a fallos →",
    btn_back_rt: "← Sistemas en tiempo real",
    btn_finish_home: "Finalizar y volver al panel ✓",

    // Módulo 01: Sistemas embebidos (embebidos.html)
    emb_pill: "Módulo 01 • Sistemas de propósito especial",
    emb_h1: "Sistemas embebidos",
    emb_obj: "<strong>Objetivo:</strong> reconocer las características de los sistemas embebidos y las formas de construir su software.",
    emb_p1: "Son computadoras integradas en dispositivos como motores de automóviles, robots industriales o electrodomésticos. Cumplen una tarea muy concreta y, con frecuencia, también son de tiempo real. Lo normal es que el usuario ni siquiera note que hay un computador dentro.",
    emb_svg1_t: "Estructura de un sistema embebido",
    emb_svg1_d: "Los sensores envían datos a un procesador pequeño con memoria limitada y software dedicado, que controla actuadores que actúan sobre el entorno físico.",
    emb_svg1_sensors: "Sensores",
    emb_svg1_actuators: "Actuadores",
    emb_svg1_dev: "Dispositivo embebido",
    emb_svg1_s1: "Temperatura",
    emb_svg1_s2: "Velocidad",
    emb_svg1_s3: "Presión",
    emb_svg1_s4: "Posición",
    emb_svg1_a1: "Motor",
    emb_svg1_a2: "Válvula",
    emb_svg1_a3: "Resistencia",
    emb_svg1_a4: "Indicador simple",
    emb_svg1_cpu: "CPU de baja potencia",
    emb_svg1_mem: "Memoria limitada",
    emb_svg1_os: "SO especial o firmware",
    emb_svg1_env: "Entorno físico (retroalimentación)",
    emb_fig1_cap: "Figura 1. Estructura típica: los sensores leen el entorno, el dispositivo procesa y los actuadores actúan sobre él.",
    emb_cite1: "Fuente: Silberschatz et al. (2006), capítulo 1, apartado de sistemas de propósito especial (sistemas empotrados de tiempo real).",
    emb_ex_h3: "Ejemplos cotidianos",
    emb_ex_1: "Control del motor y frenos de un automóvil.",
    emb_ex_2: "Hornos microondas, lavadoras y otros electrodomésticos.",
    emb_ex_3: "Robots industriales y líneas de producción.",
    emb_ex_4: "Termostatos, medidores inteligentes y dispositivos médicos.",
    emb_char_h2: "Explora sus características",
    emb_c1_t: "Poca o ninguna interfaz de usuario",
    emb_c1_d: "Trabajan sin supervisión humana directa: leen sensores y controlan dispositivos físicos. A lo sumo tienen unos botones o un indicador sencillo.",
    emb_c2_t: "Recursos limitados",
    emb_c2_d: "Tienen memoria reducida y procesadores lentos. Por eso el sistema operativo debe ser eficiente y ocupar poco espacio. Además, muchos funcionan con batería, así que el consumo de energía también cuenta.",
    emb_c3_t: "Un propósito específico y fiable",
    emb_c3_d: "Ejecutan siempre la misma función durante años, con el software almacenado en memoria no volátil (firmware). Un fallo puede ser costoso o peligroso, de modo que se exige mucha fiabilidad.",
    emb_c4_t: "Memoria virtual poco habitual",
    emb_c4_d: "Como suelen tener poca memoria y plazos que cumplir, la mayoría evita la memoria virtual: los fallos de página harían imprevisibles los tiempos de respuesta.",
    emb_c5_t: "Relación con el tiempo real",
    emb_c5_d: "Muchos de estos dispositivos deben responder dentro de plazos, de modo que aplican los conceptos de planificación del tema anterior.",
    emb_sw_h2: "Tres formas de construir su software",
    emb_svg2_t: "Tres formas de construir el software de un dispositivo embebido",
    emb_svg2_d: "Opción 1: sistema operativo de propósito especial. Opción 2: sistema operativo general con aplicaciones especiales. Opción 3: circuito ASIC sin sistema operativo.",
    emb_svg2_o1: "1. SO de propósito especial",
    emb_svg2_o2: "2. SO general + apps especiales",
    emb_svg2_o3: "3. Hardware ASIC (sin SO)",
    emb_svg2_app: "Aplicación",
    emb_svg2_rtos: "SO pequeño (tiempo real)",
    emb_svg2_ded: "Aplicaciones dedicadas",
    emb_svg2_gos: "SO de propósito general",
    emb_svg2_asic: "Circuito ASIC",
    emb_svg2_chip: "La lógica está en el chip",
    emb_svg2_n1: "Más control y eficiencia",
    emb_svg2_n2: "Desarrollo más rápido",
    emb_svg2_n3a: "Mínimo coste y consumo",
    emb_svg2_n3b: "pero poca flexibilidad",
    emb_fig2_cap: "Figura 2. Opciones para el software de un dispositivo embebido.",
    tbl_opt: "Opción",
    tbl_adv: "Ventaja",
    tbl_lim: "Limitación",
    emb_t1_r1c1: "SO de propósito especial",
    emb_t1_r1c2: "Pequeño y ajustado al dispositivo",
    emb_t1_r1c3: "Hay que desarrollarlo o adaptarlo",
    emb_t1_r2c1: "SO general + aplicaciones",
    emb_t1_r2c2: "Herramientas conocidas y desarrollo rápido",
    emb_t1_r2c3: "Ocupa más memoria y recursos",
    emb_t1_r3c1: "ASIC sin SO",
    emb_t1_r3c2: "Mínimo coste y consumo",
    emb_t1_r3c3: "Poca flexibilidad: no se reprograma",
    emb_cite2: "Fuente: Silberschatz et al. (2006), capítulo 1, apartado de sistemas de propósito especial.",
    emb_step_h2: "Un ejemplo paso a paso",
    emb_mw_h3: "El horno microondas",
    emb_mw_1: "El usuario programa el tiempo con los botones.",
    emb_mw_2: "Un sensor de la puerta confirma que está cerrada.",
    emb_mw_3: "El controlador activa la fuente de microondas y arranca un temporizador.",
    emb_mw_4: "Cada fracción de segundo vuelve a revisar la puerta y el tiempo restante.",
    emb_mw_5: "Si la puerta se abre o el tiempo llega a cero, apaga la fuente de inmediato.",
    emb_mw_p: "Apagar al abrir la puerta es una tarea crítica de seguridad: tiene un plazo estricto, aunque el resto del programa sea sencillo.",
    emb_cmp_h3: "Computador de escritorio frente a sistema embebido",
    tbl_aspect: "Aspecto",
    tbl_desktop: "Computador de escritorio",
    tbl_embedded: "Sistema embebido",
    emb_c_r1c1: "Propósito",
    emb_c_r1c2: "General: muchas aplicaciones",
    emb_c_r1c3: "Una tarea concreta",
    emb_c_r2c1: "Memoria",
    emb_c_r2c2: "Gigabytes",
    emb_c_r2c3: "Desde kilobytes hasta pocos megabytes",
    emb_c_r3c1: "Procesador",
    emb_c_r3c2: "Rápido y potente",
    emb_c_r3c3: "Lento, de bajo consumo",
    emb_c_r4c1: "Almacenamiento",
    emb_c_r4c2: "Disco o SSD",
    emb_c_r4c3: "Memoria flash o ROM (firmware)",
    emb_c_r5c1: "Interfaz",
    emb_c_r5c2: "Pantalla, teclado, ratón",
    emb_c_r5c3: "Pocos botones o ninguna",
    emb_c_r6c1: "Memoria virtual",
    emb_c_r6c2: "Habitual",
    emb_c_r6c3: "Poco habitual",
    emb_cite3: "Los valores son típicos y orientativos: varían mucho según el dispositivo.",
    emb_g1_t: "Sensor",
    emb_g1_d: "Dispositivo que mide el entorno (temperatura, presión, posición).",
    emb_g2_t: "Actuador",
    emb_g2_d: "Dispositivo que actúa sobre el entorno (motor, válvula).",
    emb_g3_t: "Firmware",
    emb_g3_d: "Software almacenado de forma permanente en el dispositivo.",
    emb_g4_t: "ASIC",
    emb_g4_d: "Circuito integrado diseñado para una función específica.",
    emb_g5_t: "Microcontrolador",
    emb_g5_d: "Chip pequeño que reúne CPU, memoria y entradas/salidas.",
    emb_g6_t: "Lazo de control",
    emb_g6_d: "Ciclo repetido de medir, decidir y actuar.",
    emb_k1: "Un sistema embebido es un computador dedicado dentro de un dispositivo.",
    emb_k2: "Sus recursos son escasos, por lo que el SO debe ser pequeño y eficiente.",
    emb_k3: "Puede usar un SO especial, uno general o hardware ASIC sin SO.",
    emb_k4: "Muchas veces debe cumplir plazos de tiempo real.",
    emb_vid_pill: "Recurso audiovisual • 4 min",
    emb_vid_h2: "Video explicativo: Sistemas embebidos",
    emb_vid_ext: "Ver en YouTube ↗",
    emb_vid_desc: "Repasa en 4 minutos qué es un sistema embebido, sus componentes principales (microcontrolador, sensores, actuadores y conectividad IoT), ámbitos de aplicación y restricciones de diseño.",
    emb_vid_cite: "Fuente audiovisual: Cookie conectada (2026). Sistemas embebidos - Todo lo que debes saber en 4 minutos [Video]. YouTube.",

    // Módulo 02: Sistemas en tiempo real (tiempo-real.html)
    rt_pill: "Módulo 02 • Planificación y plazos estrictos",
    rt_h1: "Sistemas de tiempo real",
    rt_obj: "<strong>Objetivo:</strong> distinguir tiempo real estricto y flexible, y comprender cómo se planifica la CPU para cumplir plazos.",
    rt_p1: "En un sistema de tiempo real no basta con que el resultado sea correcto: también debe llegar a tiempo. Se emplean como dispositivo de control en aplicaciones dedicadas, donde unos sensores entregan datos al computador y este debe analizarlos y ajustar los controles dentro de un límite de tiempo estricto.",
    rt_where_h3: "¿Dónde los encontramos?",
    rt_w1: "Control de procesos industriales y robots.",
    rt_w2: "Experimentos científicos y sistemas de imágenes médicas.",
    rt_w3: "Sistemas de inyección de combustible y frenos de automóviles.",
    rt_w4: "Aviónica, multimedia y realidad virtual.",
    rt_types_h2: "Dos tipos de sistemas",
    rt_tab_hard: "Estricto (hard)",
    rt_tab_soft: "Flexible (soft)",
    rt_panel_hard: "Garantiza que las tareas críticas se completen dentro de su plazo. Un resultado tardío se considera tan inútil como no tenerlo. Suele ejecutarse en dispositivos con poco almacenamiento secundario y con el software en memoria de solo lectura (ROM), y por eso rara vez convive con las funciones de un sistema de tiempo compartido.",
    rt_panel_soft: "Da prioridad a un proceso crítico sobre los demás, pero no ofrece garantía absoluta. Sirve en multimedia y realidad virtual, donde un retraso degrada la calidad sin causar un fallo grave. Puede mezclarse con otros tipos de sistemas, aunque no es apropiado para el control industrial o la robótica, que exigen plazos estrictos.",
    rt_svg1_t: "Valor del resultado según el momento de entrega",
    rt_svg1_d: "A la izquierda, en tiempo real estricto el valor del resultado cae a cero al pasar el plazo. A la derecha, en tiempo real flexible el valor decrece poco a poco.",
    rt_svg1_hard: "Tiempo real estricto (hard)",
    rt_svg1_soft: "Tiempo real flexible (soft)",
    rt_svg1_val: "Valor",
    rt_svg1_time: "Tiempo →",
    rt_svg1_dl: "Plazo",
    rt_svg1_full: "Valor completo",
    rt_svg1_late: "Resultado tardío:",
    rt_svg1_zero: "valor nulo",
    rt_svg1_deg1: "Se degrada",
    rt_svg1_deg2: "la calidad",
    rt_svg1_ex1: "Ej.: frenos ABS, control de un reactor",
    rt_svg1_ex2: "Ej.: vídeo en streaming, realidad virtual",
    rt_fig1_cap: "Figura 1. Valor del resultado según el momento de entrega: caída brusca (estricto) frente a degradación gradual (flexible).",
    rt_t1_c1: "Criterio",
    rt_t1_c2: "Estricto (hard)",
    rt_t1_c3: "Flexible (soft)",
    rt_t1_r1c1: "Plazo incumplido",
    rt_t1_r1c2: "Fallo del sistema",
    rt_t1_r1c3: "Menor calidad del servicio",
    rt_t1_r2c1: "Garantía",
    rt_t1_r2c2: "Absoluta",
    rt_t1_r2c3: "Solo prioridad al proceso crítico",
    rt_t1_r3c1: "Ejemplos",
    rt_t1_r3c2: "Frenos ABS, control industrial",
    rt_t1_r3c3: "Vídeo, juegos, realidad virtual",
    rt_cite1: "Fuente: Silberschatz et al. (2006), capítulo «Sistemas de tiempo real», apartado de características.",
    rt_os_h2: "¿Qué necesita su sistema operativo?",
    rt_o1_t: "Núcleo expulsivo con prioridades",
    rt_o1_d: "Un proceso crítico debe poder quitarle la CPU a otro de menor prioridad en cuanto lo necesite. Por eso estos sistemas usan planificación basada en prioridades con expulsión.",
    rt_o2_t: "Latencia de interrupción",
    rt_o2_d: "Es el tiempo que pasa desde que llega una interrupción hasta que empieza a ejecutarse la rutina que la atiende. Debe estar acotada y ser lo más corta posible.",
    rt_o3_t: "Latencia de despacho",
    rt_o3_d: "Es el tiempo que necesita el despachador para detener un proceso e iniciar otro. Para reducirla, el núcleo debe ser expulsivo y liberar rápido los recursos que retiene un proceso de baja prioridad.",
    rt_o4_t: "Inversión de prioridad",
    rt_o4_d: "Ocurre cuando un proceso de alta prioridad espera un recurso que tiene uno de baja prioridad. Se resuelve con el protocolo de herencia de prioridades: el proceso de baja prioridad hereda temporalmente la prioridad alta hasta liberar el recurso.",
    rt_o5_t: "Gestión de memoria",
    rt_o5_d: "Los fallos de página hacen impredecible el tiempo de acceso, por lo que muchos sistemas de tiempo real evitan la memoria virtual o bloquean en memoria las páginas críticas.",
    rt_cite2: "Fuente: Silberschatz et al. (2006), capítulo «Sistemas de tiempo real», apartado de implementación.",
    rt_cpu_h2: "Planificación de la CPU",
    rt_cpu_p: "Un proceso periódico requiere la CPU cada período <em>p</em>, durante un tiempo de procesamiento <em>t</em>, y debe terminar antes de su plazo <em>d</em>. Su utilización de CPU es <em>t/p</em>, y la del sistema es la suma de las utilizaciones de todos los procesos.",
    rt_s1_t: "Tasa monótona (rate-monotonic)",
    rt_s1_d: "Asigna prioridades estáticas en proporción inversa al período: a menor período, mayor prioridad. Con N procesos garantiza los plazos si la utilización de CPU no supera N(2<sup>1/N</sup> − 1). Con dos procesos el límite es cerca del 83 %, y cae hacia el 69 % cuando N crece.",
    rt_s2_t: "Primero el plazo más próximo (EDF)",
    rt_s2_d: "Asigna prioridades de forma dinámica: cuanto más cercano el plazo, mayor la prioridad. En teoría puede cumplir todos los plazos mientras la utilización no pase del 100 %.",
    rt_s3_t: "Reparto proporcional",
    rt_s3_d: "Reparte T participaciones entre las aplicaciones; una aplicación con N participaciones recibe N/T del tiempo de procesador.",
    rt_ex_h3: "Ejemplo comparativo",
    rt_ex_p: "Sean P1 con período 50 y tiempo 25, y P2 con período 80 y tiempo 35. La utilización total es 25/50 + 35/80 ≈ 94 %, superior al límite de tasa monótona para dos procesos (≈ 83 %). Con tasa monótona, P1 tiene mayor prioridad y expulsa a P2 en t = 50, de modo que P2 solo alcanza 30 de sus 35 unidades en t = 80 y pierde el plazo. Con EDF, en t = 50 el plazo de P2 (80) es más próximo que el nuevo de P1 (100), así que P2 termina en t = 60 y se cumplen todos los plazos.",
    rt_svg2_t: "Planificación con tasa monótona frente a EDF",
    rt_svg2_d: "Diagrama de Gantt con dos procesos: P1 con período 50 y tiempo 25, P2 con período 80 y tiempo 35. Con tasa monótona P2 pierde su plazo en t=80; con EDF se cumplen todos los plazos.",
    rt_svg2_rm: "Tasa monótona: P2 pierde su plazo en t = 80",
    rt_svg2_miss: "✗ P2 lleva 30 de 35",
    rt_svg2_edf: "EDF: todos los plazos se cumplen",
    rt_svg2_dp1: "plazo P1",
    rt_svg2_dp2: "plazo P2",
    rt_svg2_l1: "P1: período 50, tiempo 25",
    rt_svg2_l2: "P2: período 80, tiempo 35",
    rt_svg2_l3: "Unidades de tiempo arbitrarias",
    rt_fig2_cap: "Figura 2. Mismos procesos planificados con tasa monótona y con EDF.",
    rt_cite3: "Fuente: Silberschatz et al. (2006), capítulo «Sistemas de tiempo real», apartado de planificación de la CPU en tiempo real.",
    lab_pill: "Laboratorio interactivo de CPU",
    lab_h3: "Calculadora de planificabilidad (RM vs. EDF)",
    lab_desc: "Modifica los períodos (<em>p</em>) y tiempos de ejecución (<em>t</em>) de dos procesos periódicos para comprobar si cumplen el límite de Liu &amp; Layland para Tasa monótona (82.8 %) o si requieren EDF.",
    lab_t1: "Proceso P1 · Tiempo (t₁):",
    lab_p1: "Proceso P1 · Período (p₁):",
    lab_t2: "Proceso P2 · Tiempo (t₂):",
    lab_p2: "Proceso P2 · Período (p₂):",
    lab_res_rm: "Utilización total: {u}% (≤ límite RM {rm}%). Planificable tanto con Tasa monótona (RM) como con EDF.",
    lab_res_edf: "Utilización total: {u}% (> límite RM {rm}%, ≤ 100%). Supera RM: requiere planificación dinámica EDF.",
    lab_res_over: "Utilización total: {u}% (> 100%). Sobrecarga de CPU: ningún algoritmo puede garantizar todos los plazos.",
    rt_g1_t: "Plazo (<em>d</em>)",
    rt_g1_d: "Instante límite en que debe terminar una tarea.",
    rt_g2_t: "Período (<em>p</em>)",
    rt_g2_d: "Cada cuánto tiempo se repite una tarea periódica.",
    rt_g3_t: "Tiempo de procesamiento (<em>t</em>)",
    rt_g3_d: "CPU que necesita la tarea en cada ejecución.",
    rt_g4_t: "Utilización",
    rt_g4_d: "Fracción de CPU que usa un proceso (t/p) o todos (suma).",
    rt_g5_t: "Expulsión",
    rt_g5_d: "Quitarle la CPU a un proceso para dársela a otro más urgente.",
    rt_g6_t: "Despachador",
    rt_g6_d: "Componente que entrega la CPU al proceso elegido.",
    rt_g7_t: "Latencia",
    rt_g7_d: "Tiempo entre un evento y el inicio de su atención.",
    rt_k1: "En tiempo real, un resultado correcto pero tardío puede ser inútil.",
    rt_k2: "El estricto garantiza plazos; el flexible solo da prioridad.",
    rt_k3: "Tasa monótona usa prioridades estáticas; EDF, dinámicas.",
    rt_k4: "Las latencias de interrupción y de despacho deben mantenerse acotadas.",

    // Módulo 03: Tolerancia a fallos (tolerancia.html)
    ft_pill: "Módulo 03 • Robustez en sistemas distribuidos",
    ft_h1: "Tolerancia a fallos",
    ft_obj: "<strong>Objetivo:</strong> describir cómo un sistema distribuido detecta, reconfigura y se recupera de un fallo.",
    ft_p1: "Un sistema tolerante a fallos sigue funcionando pese a ellos, aunque sea con menos capacidad (degradación elegante). En un sistema distribuido hay más piezas que pueden fallar, y por eso es indispensable planificar cómo reaccionar.",
    ft_what_h3: "¿Qué puede fallar?",
    ft_f1: "<strong>Fallo de un enlace:</strong> la conexión entre dos sitios deja de funcionar.",
    ft_f2: "<strong>Fallo de un sitio:</strong> una computadora completa se detiene.",
    ft_f3: "<strong>Pérdida de mensajes:</strong> la información se pierde en la red.",
    ft_f4: "<strong>Partición de la red:</strong> varios fallos dejan grupos de sitios aislados entre sí.",
    ft_cite1: "Fuente: Silberschatz et al. (2006), capítulo de estructuras de sistemas distribuidos, apartado «Robustez».",
    ft_stages_h2: "Las tres etapas",
    ft_svg1_t: "Etapas de la robustez ante fallos",
    ft_svg1_d: "Tras un fallo en la operación normal, el sistema pasa por detección, reconfiguración y recuperación para volver a la operación normal.",
    ft_svg1_op: "Operación normal",
    ft_svg1_s1: "1. Detección",
    ft_svg1_s2: "2. Reconfiguración",
    ft_svg1_s3: "3. Recuperación",
    ft_svg1_fail: "Fallo",
    ft_svg1_d1a: "Mensajes «estoy vivo»",
    ft_svg1_d1b: "y tiempo de espera",
    ft_svg1_d2a: "Avisar a los sitios y",
    ft_svg1_d2b: "dejar de usar lo caído",
    ft_svg1_d3a: "Reintegrar el sitio o",
    ft_svg1_d3b: "enlace reparado",
    ft_svg1_back: "Vuelve a la operación normal",
    ft_fig1_cap: "Figura 1. Ciclo de respuesta ante un fallo.",
    ft_tab_d: "Detección",
    ft_tab_r: "Reconfiguración",
    ft_tab_c: "Recuperación",
    ft_panel_d: "Los sitios intercambian mensajes periódicos «estoy vivo». Si uno no llega antes del tiempo de espera, se sospecha un fallo. El sitio que espera no puede distinguir si cayó el sitio remoto o el enlace. Puede enviar un mensaje «¿estás vivo?» y probar una ruta alterna: si recibe respuesta por otra ruta, falló el enlace; si no, el sitio, o todas las rutas, pueden haber caído.",
    ft_panel_r: "Se informa a los demás sitios del fallo y se deja de usar el recurso caído. Si el sitio fallido era un coordinador, hay que elegir uno nuevo. Si la caída de un enlace parte la red en grupos aislados, cada grupo debe seguir con lo que pueda hacer sin el resto.",
    ft_panel_c: "Cuando el enlace o el sitio vuelve a funcionar, se notifica a los demás y se reintegra al sistema de forma ordenada. El sitio recuperado debe ponerse al día con lo ocurrido durante su ausencia antes de volver a participar.",
    ft_svg2_t: "Detección de un fallo con mensajes «estoy vivo»",
    ft_svg2_d: "El sitio B envía mensajes periódicos al sitio A. Tras un fallo de B, el mensaje esperado no llega, vence el tiempo de espera y A sospecha del fallo.",
    ft_svg2_sa: "Sitio A",
    ft_svg2_sb: "Sitio B",
    ft_svg2_alive: "«estoy vivo»",
    ft_svg2_bfail: "Falla B",
    ft_svg2_miss: "mensaje esperado: no llega",
    ft_svg2_to1: "Tiempo",
    ft_svg2_to2: "de espera",
    ft_svg2_q: "«¿estás vivo?» (sin respuesta)",
    ft_svg2_susp: "A sospecha de un fallo del sitio B o del enlace",
    ft_fig2_cap: "Figura 2. Detección con mensajes periódicos y tiempo de espera.",
    ft_step_h2: "Un ejemplo paso a paso",
    ft_e1_t: "Tres sitios con un coordinador",
    ft_e1_d: "Los sitios A, B y C se reparten el trabajo y B actúa como coordinador. Todos intercambian mensajes «estoy vivo» cada pocos segundos.",
    ft_e2_t: "B deja de responder",
    ft_e2_d: "A no recibe el mensaje de B antes del tiempo de espera, lo consulta y no obtiene respuesta ni por una ruta alterna. Sospecha que B falló.",
    ft_e3_t: "El sistema se reconfigura",
    ft_e3_d: "A y C se avisan del fallo, dejan de enviar trabajo a B y eligen un nuevo coordinador. El servicio continúa, quizá más lento: eso es degradación elegante.",
    ft_e4_t: "B vuelve",
    ft_e4_d: "Al reiniciar, B avisa a los demás, se pone al día y se reintegra al sistema.",
    ft_reinf_h2: "Cómo se refuerza la tolerancia",
    ft_r1: "<strong>Redundancia:</strong> tener varios sitios o enlaces capaces de hacer el mismo trabajo.",
    ft_r2: "<strong>Replicación:</strong> guardar copias de los datos en sitios distintos.",
    ft_r3: "<strong>Degradación elegante:</strong> seguir dando servicio con menor capacidad.",
    ft_cite2: "Fuente: Silberschatz et al. (2006), capítulo de estructuras de sistemas distribuidos, apartado «Robustez».",
    ft_sum_h2: "Resumen por tipo de fallo",
    ft_sum_h3: "¿Qué hace el sistema ante cada fallo?",
    ft_t1_c1: "Fallo",
    ft_t1_c2: "Cómo se nota",
    ft_t1_c3: "Respuesta del sistema",
    ft_t1_r1c1: "Enlace caído",
    ft_t1_r1c2: "No llegan mensajes, pero el sitio sigue vivo por otra ruta",
    ft_t1_r1c3: "Usar una ruta alterna y actualizar las tablas de rutas",
    ft_t1_r2c1: "Sitio caído",
    ft_t1_r2c2: "No responde por ninguna ruta",
    ft_t1_r2c3: "Avisar a los demás, dejar de usarlo y reasignar su trabajo",
    ft_t1_r3c1: "Coordinador caído",
    ft_t1_r3c2: "Nadie dirige una función compartida",
    ft_t1_r3c3: "Elegir un nuevo coordinador",
    ft_t1_r4c1: "Pérdida de mensajes",
    ft_t1_r4c2: "Falta una respuesta esperada",
    ft_t1_r4c3: "Esperar, reenviar y, si persiste, tratarlo como fallo",
    ft_t1_r5c1: "Partición de la red",
    ft_t1_r5c2: "Grupos de sitios aislados",
    ft_t1_r5c3: "Cada grupo opera con lo que tiene hasta reunirse de nuevo",
    ft_g1_t: "Sitio",
    ft_g1_d: "Cada computadora o nodo de un sistema distribuido.",
    ft_g2_t: "Enlace",
    ft_g2_d: "Conexión de comunicación entre dos sitios.",
    ft_g3_t: "Tiempo de espera",
    ft_g3_d: "Plazo máximo para recibir un mensaje antes de sospechar un fallo.",
    ft_g4_t: "Coordinador",
    ft_g4_d: "Sitio que dirige una función compartida por varios.",
    ft_g5_t: "Redundancia",
    ft_g5_d: "Componentes extra capaces de asumir el trabajo de uno que falla.",
    ft_g6_t: "Degradación elegante",
    ft_g6_d: "Seguir funcionando con prestaciones reducidas.",
    ft_k1: "La robustez ante fallos tiene tres tareas: detectar, reconfigurar y recuperar.",
    ft_k2: "Los mensajes «estoy vivo» y el tiempo de espera detectan fallos.",
    ft_k3: "No siempre se distingue un fallo de sitio de uno de enlace.",
    ft_k4: "Tolerar fallos puede significar funcionar con menos capacidad."
  },

  en: {
    // Page titles
    page_title_index: "Home · Kernel Dashboard | Operating Systems VLO",
    page_title_eval: "Mandatory Test (Step 1) | Operating Systems VLO",
    page_title_emb: "Embedded Systems | Operating Systems VLO",
    page_title_rt: "Real-Time Systems | Operating Systems VLO",
    page_title_ft: "Fault Tolerance | Operating Systems VLO",

    // Shared Topbar & Sidebar
    brand_title: 'OVA <span class="brand-dot">•</span> Operating Systems',
    brand_sub: "Educational kernel · Universidad Simón Bolívar",
    progress_label: "Course progress:",
    session_chip_title: "Student session status",
    status_pending: "Prerequisite pending",
    status_enabled: "Access enabled",
    status_completed: "Course completed ✓",
    nav_section: "Learning path",
    nav_test: "Mandatory test",
    step_1: "Step 1",
    step_passed: "Passed ✓",
    nav_home: "Home",
    nav_emb: "Embedded systems",
    nav_rt: "Real-time systems",
    nav_ft: "Fault tolerance",
    btn_reset: "↺ Reset demo",

    // Footer
    ft_faculty: "Faculty of Engineering",
    ft_program: "Systems Engineering",
    ft_course: "<strong>Course:</strong> Operating Systems",
    ft_teacher: "<strong>Professor:</strong> Alvaro Salamanca Lándinez",
    ft_author: "<strong>Developed by:</strong> Andrea Rodríguez",
    ft_ref: "<strong>Bibliographic reference (APA 7th):</strong> Silberschatz, A., Galvin, P. B., &amp; Gagne, G. (2006). <em>Operating System Concepts</em> (7th ed.). Wiley / McGraw-Hill.",

    // Gate Modal
    modal_badge: "🔒 Access restricted by kernel",
    modal_title: "Complete the mandatory test first",
    modal_body: 'To enter <strong id="gate-target-name">this module</strong>, you must first pass the <strong>Mandatory test (Step 1)</strong> covering Virtual memory, Input/Output, and Security (minimum 6 of 9 correct answers).',
    modal_cta: "Start mandatory test →",
    modal_close: "Close",

    // Home Page (index.html)
    idx_sec_req: "Initial requirement",
    idx_sys_tag: "Sys_Auth // Step 1 mandatory",
    hero_pill_locked: "Step 1 • Initial requirement",
    hero_title_locked: "Mandatory test",
    hero_desc_locked: 'Before exploring the learning modules, you must pass a short <strong>9-question</strong> test on <strong>Virtual memory</strong>, <strong>Input/Output</strong>, and <strong>Security</strong> (minimum <strong>6 correct answers</strong>).',
    hero_cta_locked: "Start mandatory test →",
    hero_pill_unlocked: "Step 1 completed • Kernel unlocked",
    hero_title_unlocked: "Full access to VLO enabled",
    hero_desc_unlocked: 'You passed the <strong>Mandatory test</strong>. All modules on <strong>Embedded systems</strong>, <strong>Real-time systems</strong>, and <strong>Fault tolerance</strong> are now unlocked.',
    hero_cta_unlocked: "Go to Module 01: Embedded systems →",
    idx_hero_meta: "Goal: Real-time systems, embedded systems, and fault tolerance",
    idx_side_title: "Process and thread management",
    svg_thread: "Thread",
    svg_cpu_sched: "CPU Schedule",
    idx_side_cap: "Periodic scheduling: <strong>Rate-monotonic (RM)</strong> and <strong>Earliest deadline first (EDF)</strong>.",
    idx_sec_mods: "Learning modules",
    mods_locked_banner: "🔒 Unlocked upon passing the mandatory test",
    mods_unlocked_banner: "🔓 All modules unlocked",
    mod_tag_1: "Module 01",
    mod1_title: "Embedded systems",
    mod1_desc: "Resource-constrained devices, microcontrollers, firmware, and three ways to build their software.",
    svg_sensor: "Sensor",
    svg_actuator: "Actuator",
    mod_tag_2: "Module 02",
    mod2_title: "Real-time systems",
    mod2_desc: "<em>Hard</em> and <em>soft</em> deadlines, preemptive priorities, latencies, and RM / EDF scheduling.",
    svg_deadline: "Deadline",
    mod_tag_3: "Module 03",
    mod3_title: "Fault tolerance",
    mod3_desc: "Detection with «I am alive» messages, reconfiguration after failures, graceful degradation, and recovery.",
    svg_coord: "Coord.",
    svg_node_a: "Node A",
    svg_node_b: "Node B",
    svg_backup: "Backup",
    mod_req_step1: "Requires Step 1 test",
    mod_enter: "Enter module",
    mod_explored: "Module explored · Review",
    wid_arch_tag: "Architecture",
    wid_arch_pill: "Pages & frames",
    wid_mem_title: "Memory management",
    wid_mem_desc: "Physical frame allocation vs. virtual memory. Hard real-time systems lock pages in RAM to prevent page faults.",
    wid_term_tag: "Kernel console",
    wid_term_pill: "Interactive",
    wid_term_title: "Command simulator",
    term_placeholder: "Type: help, status, test...",
    term_gate_locked: "Locked: type 'test' to start Step 1",
    term_gate_unlocked: "Unlocked: access granted ({pct}% completed)",
    term_help: "Commands: test, status, ls, clear",
    term_opening_test: "Opening mandatory test (Step 1)...",
    term_status_ok: "Kernel unlocked · Modules active.",
    term_status_lock: "Kernel locked · Mandatory test pending.",
    term_unknown: "Unrecognized command: '{cmd}'. Type 'help'.",
    obj_learn_title: "Learning objective",
    obj_learn_desc: "Explain the characteristics of real-time systems, embedded systems, and fault tolerance, and relate them to operating system design decisions.",
    obj_use_title: "How to use this VLO",
    obj_use_desc: "First, pass the <strong>Mandatory test (Step 1)</strong> on Virtual memory, I/O, and Security. Each topic includes interactive tabs, collapsible sections, illustrated diagrams, examples, and key takeaways based on <em>Silberschatz, Galvin, and Gagne (2006)</em>.",

    // Evaluation (evaluacion.html)
    ev_pill: "Step 1 • Mandatory initial requirement",
    ev_h1: "Mandatory diagnostic test",
    ev_lead: 'Answer these <strong>9 questions</strong> covering prerequisite topics (<strong>Virtual memory</strong>, <strong>Input/Output</strong>, and <strong>Security</strong>). You need at least <strong id="min">6 of 9</strong> correct answers to unlock the modules on <em>Embedded systems</em>, <em>Real-time systems</em>, and <em>Fault tolerance</em>.',
    ev_locked_alert: "<strong>🔒 Access blocked by kernel:</strong> You tried to open a protected module. Pass this mandatory test first to unlock full VLO navigation.",
    ev_cite: "Questions based on Silberschatz et al. (2006), chapters on virtual memory, I/O systems, and security.",
    quiz_of: "of",
    quiz_answered: "Answered: <strong>{a}</strong> of <strong>{t}</strong>",
    quiz_submit: "Grade mandatory test ✓",
    quiz_incomplete: "Please answer all 9 questions before grading the mandatory test.",
    quiz_ok_prefix: "✓ Correct. ",
    quiz_bad_prefix: "✕ Incorrect. ",
    quiz_pass_msg: "🎉 You passed the mandatory test with {score} out of {total}! ({detail})<br>All VLO modules have been unlocked.",
    quiz_pass_cta1: "Start Module 01: Embedded systems →",
    quiz_pass_cta2: "View unlocked home dashboard",
    quiz_fail_msg: "You scored {score} out of {total} ({detail}). You need at least {min} correct answers to unlock the modules. Review the concepts and try again.",
    quiz_retry: "↺ Retry mandatory test",

    // Common Module Texts
    glossary_h2: "Glossary",
    key_ideas_h3: "Key takeaways",
    btn_back_home: "← Home dashboard",
    btn_to_rt: "Real-time systems →",
    btn_back_emb: "← Embedded systems",
    btn_to_ft: "Fault tolerance →",
    btn_back_rt: "← Real-time systems",
    btn_finish_home: "Finish and return to dashboard ✓",

    // Module 01: Embedded systems (embebidos.html)
    emb_pill: "Module 01 • Special-purpose systems",
    emb_h1: "Embedded systems",
    emb_obj: "<strong>Objective:</strong> recognize the characteristics of embedded systems and the approaches used to build their software.",
    emb_p1: "Embedded systems are computers integrated into devices such as automobile engines, industrial robots, or home appliances. They perform a very specific task and are often real-time systems as well. Usually, users do not even notice there is a computer inside.",
    emb_svg1_t: "Structure of an embedded system",
    emb_svg1_d: "Sensors send data to a small processor with limited memory and dedicated software, which drives actuators acting on the physical environment.",
    emb_svg1_sensors: "Sensors",
    emb_svg1_actuators: "Actuators",
    emb_svg1_dev: "Embedded device",
    emb_svg1_s1: "Temperature",
    emb_svg1_s2: "Speed",
    emb_svg1_s3: "Pressure",
    emb_svg1_s4: "Position",
    emb_svg1_a1: "Motor",
    emb_svg1_a2: "Valve",
    emb_svg1_a3: "Heating element",
    emb_svg1_a4: "Simple indicator",
    emb_svg1_cpu: "Low-power CPU",
    emb_svg1_mem: "Limited memory",
    emb_svg1_os: "Special OS or firmware",
    emb_svg1_env: "Physical environment (feedback)",
    emb_fig1_cap: "Figure 1. Typical architecture: sensors read the environment, the device processes data, and actuators act upon it.",
    emb_cite1: "Source: Silberschatz et al. (2006), Chapter 1, Special-Purpose Systems (real-time embedded systems).",
    emb_ex_h3: "Everyday examples",
    emb_ex_1: "Automobile engine and brake control systems.",
    emb_ex_2: "Microwave ovens, washing machines, and home appliances.",
    emb_ex_3: "Industrial robots and assembly lines.",
    emb_ex_4: "Thermostats, smart meters, and medical devices.",
    emb_char_h2: "Explore their characteristics",
    emb_c1_t: "Little or no user interface",
    emb_c1_d: "They operate without direct human supervision: reading sensors and controlling physical devices, with at most a few buttons or a simple display.",
    emb_c2_t: "Limited resources",
    emb_c2_d: "They have small memory and slow processors, so the operating system must be compact and efficient. Many also run on batteries, making power consumption critical.",
    emb_c3_t: "Specific and reliable purpose",
    emb_c3_d: "They execute the exact same function for years, with software stored in non-volatile memory (firmware). Failures can be costly or hazardous, requiring high reliability.",
    emb_c4_t: "Virtual memory rarely used",
    emb_c4_d: "Because memory is small and deadlines must be met, most embedded systems avoid virtual memory: page faults would make response times unpredictable.",
    emb_c5_t: "Relationship with real time",
    emb_c5_d: "Many embedded devices must respond within strict deadlines, applying real-time scheduling principles.",
    emb_sw_h2: "Three ways to build their software",
    emb_svg2_t: "Three ways to build software for an embedded device",
    emb_svg2_d: "Option 1: special-purpose operating system. Option 2: general-purpose OS with dedicated applications. Option 3: ASIC circuit without an OS.",
    emb_svg2_o1: "1. Special-purpose OS",
    emb_svg2_o2: "2. General OS + dedicated apps",
    emb_svg2_o3: "3. ASIC hardware (no OS)",
    emb_svg2_app: "Application",
    emb_svg2_rtos: "Compact OS (real-time)",
    emb_svg2_ded: "Dedicated applications",
    emb_svg2_gos: "General-purpose OS",
    emb_svg2_asic: "ASIC circuit",
    emb_svg2_chip: "Logic is built into the chip",
    emb_svg2_n1: "Greater control & efficiency",
    emb_svg2_n2: "Faster development",
    emb_svg2_n3a: "Lowest cost & power",
    emb_svg2_n3b: "but low flexibility",
    emb_fig2_cap: "Figure 2. Software implementation options for an embedded device.",
    tbl_opt: "Option",
    tbl_adv: "Advantage",
    tbl_lim: "Limitation",
    emb_t1_r1c1: "Special-purpose OS",
    emb_t1_r1c2: "Small and tailored to the device",
    emb_t1_r1c3: "Must be developed or adapted",
    emb_t1_r2c1: "General OS + applications",
    emb_t1_r2c2: "Familiar tools and faster development",
    emb_t1_r2c3: "Uses more memory and resources",
    emb_t1_r3c1: "ASIC without OS",
    emb_t1_r3c2: "Lowest cost and power usage",
    emb_t1_r3c3: "Low flexibility: cannot be reprogrammed",
    emb_cite2: "Source: Silberschatz et al. (2006), Chapter 1, Special-Purpose Systems.",
    emb_step_h2: "Step-by-step example",
    emb_mw_h3: "The microwave oven",
    emb_mw_1: "The user sets the cooking time using the buttons.",
    emb_mw_2: "A door sensor confirms that the door is closed.",
    emb_mw_3: "The controller activates the microwave emitter and starts a timer.",
    emb_mw_4: "Every fraction of a second, it rechecks the door and remaining time.",
    emb_mw_5: "If the door opens or the timer reaches zero, it shuts off power immediately.",
    emb_mw_p: "Shutting off power when the door opens is a safety-critical task: it carries a hard deadline, even though the rest of the program is simple.",
    emb_cmp_h3: "Desktop computer vs. embedded system",
    tbl_aspect: "Aspect",
    tbl_desktop: "Desktop computer",
    tbl_embedded: "Embedded system",
    emb_c_r1c1: "Purpose",
    emb_c_r1c2: "General: many applications",
    emb_c_r1c3: "A single dedicated task",
    emb_c_r2c1: "Memory",
    emb_c_r2c2: "Gigabytes",
    emb_c_r2c3: "From kilobytes to a few megabytes",
    emb_c_r3c1: "Processor",
    emb_c_r3c2: "Fast and powerful",
    emb_c_r3c3: "Slower, low power consumption",
    emb_c_r4c1: "Storage",
    emb_c_r4c2: "Hard drive or SSD",
    emb_c_r4c3: "Flash memory or ROM (firmware)",
    emb_c_r5c1: "Interface",
    emb_c_r5c2: "Screen, keyboard, mouse",
    emb_c_r5c3: "Few buttons or none",
    emb_c_r6c1: "Virtual memory",
    emb_c_r6c2: "Standard",
    emb_c_r6c3: "Uncommon",
    emb_cite3: "Values are typical and illustrative; they vary widely by device.",
    emb_g1_t: "Sensor",
    emb_g1_d: "Device that measures the environment (temperature, pressure, position).",
    emb_g2_t: "Actuator",
    emb_g2_d: "Device that acts on the environment (motor, valve).",
    emb_g3_t: "Firmware",
    emb_g3_d: "Software permanently stored inside the device.",
    emb_g4_t: "ASIC",
    emb_g4_d: "Application-Specific Integrated Circuit built for one function.",
    emb_g5_t: "Microcontroller",
    emb_g5_d: "Compact chip integrating CPU, memory, and I/O ports.",
    emb_g6_t: "Control loop",
    emb_g6_d: "Repeated cycle of sensing, deciding, and acting.",
    emb_k1: "An embedded system is a dedicated computer inside a device.",
    emb_k2: "Resources are scarce, so the OS must be small and efficient.",
    emb_k3: "It may use a special OS, a general OS, or OS-free ASIC hardware.",
    emb_k4: "It often must meet real-time deadlines.",
    emb_vid_pill: "Audiovisual resource • 4 min",
    emb_vid_h2: "Explainer video: Embedded systems",
    emb_vid_ext: "Watch on YouTube ↗",
    emb_vid_desc: "Review in 4 minutes what an embedded system is, its core components (microcontroller, sensors, actuators, and IoT connectivity), application domains, and design constraints.",
    emb_vid_cite: "Audiovisual source: Cookie conectada (2026). Sistemas embebidos - Todo lo que debes saber en 4 minutos [Video]. YouTube.",

    // Module 02: Real-time systems (tiempo-real.html)
    rt_pill: "Module 02 • Scheduling and strict deadlines",
    rt_h1: "Real-time systems",
    rt_obj: "<strong>Objective:</strong> distinguish hard and soft real-time systems, and understand how CPU scheduling meets deadlines.",
    rt_p1: "In a real-time system, producing a correct result is not enough: it must also arrive on time. They act as control devices in dedicated applications where sensors feed data to the computer, which must analyze it and adjust controls within a strict time limit.",
    rt_where_h3: "Where are they used?",
    rt_w1: "Industrial process control and robotics.",
    rt_w2: "Scientific experiments and medical imaging systems.",
    rt_w3: "Automobile fuel-injection and braking systems.",
    rt_w4: "Avionics, multimedia, and virtual reality.",
    rt_types_h2: "Two types of systems",
    rt_tab_hard: "Hard real-time",
    rt_tab_soft: "Soft real-time",
    rt_panel_hard: "Guarantees that critical tasks complete within their deadline. A late result is just as useless as no result at all. It typically runs on devices with little secondary storage and software stored in read-only memory (ROM), rarely coexisting with time-sharing OS features.",
    rt_panel_soft: "Gives a critical process priority over others, without an absolute guarantee. Useful in multimedia and virtual reality, where delays degrade quality without causing catastrophic failure. It can coexist with other systems, though it is unsuitable for industrial control or robotics.",
    rt_svg1_t: "Value of result based on delivery time",
    rt_svg1_d: "On the left, in hard real-time the result value drops to zero past the deadline. On the right, in soft real-time the value degrades gradually.",
    rt_svg1_hard: "Hard real-time",
    rt_svg1_soft: "Soft real-time",
    rt_svg1_val: "Value",
    rt_svg1_time: "Time →",
    rt_svg1_dl: "Deadline",
    rt_svg1_full: "Full value",
    rt_svg1_late: "Late result:",
    rt_svg1_zero: "zero value",
    rt_svg1_deg1: "Quality",
    rt_svg1_deg2: "degrades",
    rt_svg1_ex1: "E.g., ABS brakes, reactor control",
    rt_svg1_ex2: "E.g., streaming video, virtual reality",
    rt_fig1_cap: "Figure 1. Value of the result by delivery time: abrupt drop (hard) vs. gradual degradation (soft).",
    rt_t1_c1: "Criterion",
    rt_t1_c2: "Hard real-time",
    rt_t1_c3: "Soft real-time",
    rt_t1_r1c1: "Missed deadline",
    rt_t1_r1c2: "System failure",
    rt_t1_r1c3: "Reduced service quality",
    rt_t1_r2c1: "Guarantee",
    rt_t1_r2c2: "Absolute",
    rt_t1_r2c3: "Priority given to critical process only",
    rt_t1_r3c1: "Examples",
    rt_t1_r3c2: "ABS brakes, industrial control",
    rt_t1_r3c3: "Video, gaming, virtual reality",
    rt_cite1: "Source: Silberschatz et al. (2006), Real-Time Systems chapter, System Characteristics.",
    rt_os_h2: "What does the operating system need?",
    rt_o1_t: "Preemptive priority kernel",
    rt_o1_d: "A critical process must be able to preempt a lower-priority process immediately. Therefore, these systems rely on priority-based preemptive scheduling.",
    rt_o2_t: "Interrupt latency",
    rt_o2_d: "The time elapsed from the arrival of an interrupt until its service routine starts executing. It must be bounded and as short as possible.",
    rt_o3_t: "Dispatch latency",
    rt_o3_d: "The time required by the dispatcher to stop one process and start another. To minimize it, the kernel must be preemptive and quickly release resources held by low-priority processes.",
    rt_o4_t: "Priority inversion",
    rt_o4_d: "Occurs when a high-priority process waits for a resource held by a low-priority process. Solved via priority inheritance: the low-priority process temporarily inherits the higher priority until it releases the resource.",
    rt_o5_t: "Memory management",
    rt_o5_d: "Page faults make memory access times unpredictable, so many real-time systems avoid virtual memory or pin critical pages in RAM.",
    rt_cite2: "Source: Silberschatz et al. (2006), Real-Time Systems chapter, Implementing Real-Time Operating Systems.",
    rt_cpu_h2: "CPU scheduling",
    rt_cpu_p: "A periodic process requires the CPU every period <em>p</em>, for a processing time <em>t</em>, and must finish before its deadline <em>d</em>. Its CPU utilization is <em>t/p</em>, and system utilization is the sum of all process utilizations.",
    rt_s1_t: "Rate-monotonic scheduling",
    rt_s1_d: "Assigns static priorities inversely proportional to the period: shorter period means higher priority. With N processes, deadlines are guaranteed if CPU utilization does not exceed N(2<sup>1/N</sup> − 1). For two processes the bound is about 83%, approaching 69% as N grows.",
    rt_s2_t: "Earliest-deadline-first (EDF)",
    rt_s2_d: "Assigns priorities dynamically: the closer the deadline, the higher the priority. Theoretically, it can meet all deadlines as long as total CPU utilization does not exceed 100%.",
    rt_s3_t: "Proportional share",
    rt_s3_d: "Allocates T shares among applications; an application holding N shares receives N/T of total processor time.",
    rt_ex_h3: "Comparative example",
    rt_ex_p: "Consider P1 with period 50 and execution time 25, and P2 with period 80 and execution time 35. Total utilization is 25/50 + 35/80 ≈ 94%, exceeding the two-process rate-monotonic bound (≈ 83%). Under rate-monotonic, P1 has higher priority and preempts P2 at t = 50, leaving P2 with only 30 of its 35 units at t = 80 and missing its deadline. Under EDF, at t = 50 P2's deadline (80) is earlier than P1's next deadline (100), so P2 finishes at t = 60 and all deadlines are met.",
    rt_svg2_t: "Rate-monotonic vs. EDF scheduling",
    rt_svg2_d: "Gantt chart with two processes: P1 (period 50, time 25) and P2 (period 80, time 35). Under rate-monotonic P2 misses its deadline at t=80; under EDF all deadlines are met.",
    rt_svg2_rm: "Rate-monotonic: P2 misses its deadline at t = 80",
    rt_svg2_miss: "✗ P2 completed 30 of 35",
    rt_svg2_edf: "EDF: all deadlines are met",
    rt_svg2_dp1: "P1 deadline",
    rt_svg2_dp2: "P2 deadline",
    rt_svg2_l1: "P1: period 50, time 25",
    rt_svg2_l2: "P2: period 80, time 35",
    rt_svg2_l3: "Arbitrary time units",
    rt_fig2_cap: "Figure 2. The same processes scheduled under rate-monotonic and EDF.",
    rt_cite3: "Source: Silberschatz et al. (2006), Real-Time Systems chapter, Real-Time CPU Scheduling.",
    lab_pill: "Interactive CPU laboratory",
    lab_h3: "Schedulability calculator (RM vs. EDF)",
    lab_desc: "Adjust the periods (<em>p</em>) and execution times (<em>t</em>) of two periodic processes to test whether they stay within the Liu &amp; Layland Rate-Monotonic bound (82.8%) or require EDF.",
    lab_t1: "Process P1 · Time (t₁):",
    lab_p1: "Process P1 · Period (p₁):",
    lab_t2: "Process P2 · Time (t₂):",
    lab_p2: "Process P2 · Period (p₂):",
    lab_res_rm: "Total utilization: {u}% (≤ RM bound {rm}%). Schedulable under both Rate-Monotonic (RM) and EDF.",
    lab_res_edf: "Total utilization: {u}% (> RM bound {rm}%, ≤ 100%). Exceeds RM bound: requires dynamic EDF scheduling.",
    lab_res_over: "Total utilization: {u}% (> 100%). CPU overload: no algorithm can guarantee all deadlines.",
    rt_g1_t: "Deadline (<em>d</em>)",
    rt_g1_d: "Time limit by which a task must finish.",
    rt_g2_t: "Period (<em>p</em>)",
    rt_g2_d: "Interval at which a periodic task repeats.",
    rt_g3_t: "Processing time (<em>t</em>)",
    rt_g3_d: "CPU time required by the task per execution.",
    rt_g4_t: "Utilization",
    rt_g4_d: "Fraction of CPU used by one process (t/p) or all processes (sum).",
    rt_g5_t: "Preemption",
    rt_g5_d: "Taking the CPU away from a process to give it to a more urgent one.",
    rt_g6_t: "Dispatcher",
    rt_g6_d: "Component that gives control of the CPU to the selected process.",
    rt_g7_t: "Latency",
    rt_g7_d: "Delay between an event occurring and its handling beginning.",
    rt_k1: "In real-time systems, a correct result delivered late can be useless.",
    rt_k2: "Hard real-time guarantees deadlines; soft real-time only grants priority.",
    rt_k3: "Rate-monotonic uses static priorities; EDF uses dynamic priorities.",
    rt_k4: "Interrupt and dispatch latencies must remain strictly bounded.",

    // Module 03: Fault tolerance (tolerancia.html)
    ft_pill: "Module 03 • Robustness in distributed systems",
    ft_h1: "Fault tolerance",
    ft_obj: "<strong>Objective:</strong> describe how a distributed system detects, reconfigures, and recovers from a failure.",
    ft_p1: "A fault-tolerant system continues operating despite failures, even if at reduced capacity (graceful degradation). In a distributed system more components can fail, making failure-handling strategies essential.",
    ft_what_h3: "What can fail?",
    ft_f1: "<strong>Link failure:</strong> the communication link between two sites stops working.",
    ft_f2: "<strong>Site failure:</strong> an entire computer crashes or halts.",
    ft_f3: "<strong>Message loss:</strong> information is lost in transit across the network.",
    ft_f4: "<strong>Network partition:</strong> multiple failures split sites into isolated groups.",
    ft_cite1: "Source: Silberschatz et al. (2006), Distributed-System Structures chapter, Robustness section.",
    ft_stages_h2: "The three stages",
    ft_svg1_t: "Stages of fault robustness",
    ft_svg1_d: "After a failure during normal operation, the system goes through detection, reconfiguration, and recovery to return to normal operation.",
    ft_svg1_op: "Normal operation",
    ft_svg1_s1: "1. Detection",
    ft_svg1_s2: "2. Reconfiguration",
    ft_svg1_s3: "3. Recovery",
    ft_svg1_fail: "Failure",
    ft_svg1_d1a: "«I am alive» messages",
    ft_svg1_d1b: "and timeout window",
    ft_svg1_d2a: "Notify sites and stop",
    ft_svg1_d2b: "using failed resource",
    ft_svg1_d3a: "Reintegrate repaired",
    ft_svg1_d3b: "site or link",
    ft_svg1_back: "Returns to normal operation",
    ft_fig1_cap: "Figure 1. Response lifecycle when a failure occurs.",
    ft_tab_d: "Detection",
    ft_tab_r: "Reconfiguration",
    ft_tab_c: "Recovery",
    ft_panel_d: "Sites exchange periodic «I am alive» messages. If one does not arrive before the timeout expires, a failure is suspected. The waiting site cannot tell whether the remote site or the link failed. It can send an «Are you alive?» probe via an alternate route: a reply indicates a link failure; no reply suggests the site—or all routes—are down.",
    ft_panel_r: "Other sites are notified of the failure and stop using the failed resource. If the failed site was a coordinator, a new one must be elected. If a link failure partitions the network into isolated groups, each group continues operating independently with available resources.",
    ft_panel_c: "Once the link or site is repaired, other sites are notified and it is reintegrated in an orderly manner. The recovered site must catch up on events missed during its downtime before resuming normal participation.",
    ft_svg2_t: "Failure detection using «I am alive» messages",
    ft_svg2_d: "Site B sends periodic messages to Site A. After B fails, the expected message never arrives, the timeout expires, and A suspects a failure.",
    ft_svg2_sa: "Site A",
    ft_svg2_sb: "Site B",
    ft_svg2_alive: "«I am alive»",
    ft_svg2_bfail: "B fails",
    ft_svg2_miss: "expected message: never arrives",
    ft_svg2_to1: "Timeout",
    ft_svg2_to2: "period",
    ft_svg2_q: "«Are you alive?» (no reply)",
    ft_svg2_susp: "A suspects a failure of Site B or the link",
    ft_fig2_cap: "Figure 2. Failure detection with periodic heartbeats and timeout.",
    ft_step_h2: "Step-by-step example",
    ft_e1_t: "Three sites with a coordinator",
    ft_e1_d: "Sites A, B, and C share the workload while B acts as coordinator. All exchange «I am alive» messages every few seconds.",
    ft_e2_t: "B stops responding",
    ft_e2_d: "A does not receive B's message before the timeout, probes it, and gets no reply even over an alternate path. A suspects B has failed.",
    ft_e3_t: "The system reconfigures",
    ft_e3_d: "A and C notify each other, stop routing work to B, and elect a new coordinator. Service continues, perhaps more slowly: this is graceful degradation.",
    ft_e4_t: "B returns",
    ft_e4_d: "Upon rebooting, B notifies the other sites, synchronizes its state, and rejoins the system.",
    ft_reinf_h2: "How fault tolerance is strengthened",
    ft_r1: "<strong>Redundancy:</strong> having multiple sites or links capable of performing the same task.",
    ft_r2: "<strong>Replication:</strong> storing copies of data across separate sites.",
    ft_r3: "<strong>Graceful degradation:</strong> continuing to provide service at reduced capacity.",
    ft_cite2: "Source: Silberschatz et al. (2006), Distributed-System Structures chapter, Robustness section.",
    ft_sum_h2: "Summary by failure type",
    ft_sum_h3: "How does the system respond to each failure?",
    ft_t1_c1: "Failure",
    ft_t1_c2: "How it is noticed",
    ft_t1_c3: "System response",
    ft_t1_r1c1: "Link down",
    ft_t1_r1c2: "Messages stop arriving, but the site responds via another path",
    ft_t1_r1c3: "Use an alternate route and update routing tables",
    ft_t1_r2c1: "Site down",
    ft_t1_r2c2: "No response over any route",
    ft_t1_r2c3: "Notify peers, stop using the site, and reassign its workload",
    ft_t1_r3c1: "Coordinator down",
    ft_t1_r3c2: "No node directs a shared function",
    ft_t1_r3c3: "Elect a new coordinator",
    ft_t1_r4c1: "Message loss",
    ft_t1_r4c2: "An expected reply is missing",
    ft_t1_r4c3: "Wait, retransmit, and if persistent, treat as a failure",
    ft_t1_r5c1: "Network partition",
    ft_t1_r5c2: "Groups of sites become isolated",
    ft_t1_r5c3: "Each group operates independently until reconnected",
    ft_g1_t: "Site",
    ft_g1_d: "Each computer or node in a distributed system.",
    ft_g2_t: "Link",
    ft_g2_d: "Communication connection between two sites.",
    ft_g3_t: "Timeout",
    ft_g3_d: "Maximum wait time for a message before suspecting a failure.",
    ft_g4_t: "Coordinator",
    ft_g4_d: "Site that directs a function shared among several nodes.",
    ft_g5_t: "Redundancy",
    ft_g5_d: "Extra components able to take over the work of a failed one.",
    ft_g6_t: "Graceful degradation",
    ft_g6_d: "Continuing operation with reduced performance.",
    ft_k1: "Fault robustness involves three tasks: detect, reconfigure, and recover.",
    ft_k2: "«I am alive» messages and timeouts are used to detect failures.",
    ft_k3: "A site failure cannot always be distinguished from a link failure.",
    ft_k4: "Tolerating faults may mean operating with reduced capacity."
  }
};

// ===== Banco de 9 Preguntas Bilingüe (Paso 1: Test obligatorio) =====
const QUIZ_BANK = {
  es: [
    ["Memoria virtual", "Un fallo de página ocurre cuando…", ["El proceso accede a una página que no está cargada en memoria principal", "El disco se llena", "La CPU se sobrecalienta"], 0, "El hardware avisa al sistema operativo, que trae la página desde el almacenamiento secundario."],
    ["Memoria virtual", "¿Qué algoritmo de reemplazo elige la página que lleva más tiempo sin usarse?", ["FIFO", "LRU", "Reloj aleatorio"], 1, "LRU (menos recientemente usada) se basa en el pasado reciente como aproximación del futuro."],
    ["Memoria virtual", "La hiperpaginación (thrashing) es cuando…", ["El sistema dedica más tiempo a paginar que a ejecutar procesos", "Un proceso termina muy rápido", "Se amplía la memoria física"], 0, "Ocurre cuando los procesos no tienen suficientes marcos y generan fallos de página constantes."],
    ["Entrada/Salida", "¿Qué permite transferir datos entre un dispositivo y la memoria sin que la CPU intervenga en cada byte?", ["Un compilador", "DMA (acceso directo a memoria)", "La caché de la CPU"], 1, "El controlador DMA mueve bloques de datos y avisa con una interrupción al terminar."],
    ["Entrada/Salida", "El spooling sirve para…", ["Cifrar los datos", "Guardar en un almacenamiento intermedio las salidas de un dispositivo que no admite datos intercalados, como una impresora", "Aumentar la memoria virtual"], 1, "Cada trabajo se guarda en cola y se envía al dispositivo de uno en uno."],
    ["Entrada/Salida", "Un controlador de dispositivo (driver) se encarga de…", ["Ofrecer al núcleo una interfaz uniforme que oculta las diferencias del hardware", "Planificar la CPU", "Asignar direcciones IP"], 0, "Gracias a los drivers, el subsistema de E/S trata distintos dispositivos de forma homogénea."],
    ["Seguridad", "Un caballo de Troya es…", ["Un programa que parece legítimo pero abusa de su entorno", "Un cortafuegos", "Un algoritmo de cifrado"], 0, "Se presenta como útil y realiza acciones no deseadas con los permisos del usuario."],
    ["Seguridad", "En el cifrado simétrico…", ["Se usan dos claves distintas, una pública y otra privada", "Se usa la misma clave para cifrar y descifrar", "No se necesita ninguna clave"], 1, "El reto es compartir la clave secreta de forma segura entre las partes."],
    ["Seguridad", "La autenticación consiste en…", ["Comprobar la identidad de un usuario o programa", "Copiar archivos", "Medir el rendimiento"], 0, "Es el paso previo a la autorización, que define qué puede hacer cada usuario."]
  ],
  en: [
    ["Virtual memory", "A page fault occurs when…", ["A process accesses a page that is not currently loaded in main memory", "The disk becomes full", "The CPU overheats"], 0, "The hardware traps to the operating system, which loads the required page from secondary storage."],
    ["Virtual memory", "Which page-replacement algorithm selects the page that has gone unused for the longest time?", ["FIFO", "LRU", "Random clock"], 1, "LRU (Least Recently Used) uses recent past behavior as an approximation of the near future."],
    ["Virtual memory", "Thrashing happens when…", ["The system spends more time paging than executing processes", "A process finishes very quickly", "Physical RAM is expanded"], 0, "It occurs when processes lack enough frames and continuously generate page faults."],
    ["Input/Output", "What allows data transfer between a device and memory without CPU intervention for every byte?", ["A compiler", "DMA (Direct Memory Access)", "The CPU cache"], 1, "The DMA controller transfers whole blocks of data and signals completion via an interrupt."],
    ["Input/Output", "Spooling is used to…", ["Encrypt data", "Buffer outputs in intermediate storage for a device that cannot accept interleaved data, such as a printer", "Expand virtual memory"], 1, "Each job is queued separately and sent to the device one at a time."],
    ["Input/Output", "A device driver is responsible for…", ["Providing a uniform interface to the kernel that hides hardware differences", "Scheduling the CPU", "Assigning IP addresses"], 0, "Drivers allow the I/O subsystem to interact with diverse hardware devices uniformly."],
    ["Security", "A Trojan horse is…", ["A program that appears legitimate but misuses its environment", "A network firewall", "An encryption algorithm"], 0, "It masquerades as useful software while performing unauthorized actions with the user's privileges."],
    ["Security", "In symmetric encryption…", ["Two different keys are used, one public and one private", "The same key is used to encrypt and decrypt", "No key is needed"], 1, "The main challenge is securely sharing the secret key between communicating parties."],
    ["Security", "Authentication consists of…", ["Verifying the identity of a user or program", "Copying files", "Measuring system throughput"], 0, "It precedes authorization, which determines what actions each authenticated user may perform."]
  ]
};

// ===== Gestión de Idioma y Estado Persistente =====
const KEY_LANG = 'ova_so_lang';
const KEY_TEST = 'ova_so_test_ok';
const KEY_VISITED = 'ova_so_visited_modules';
const MINIMO = 6;
const ALL_MODULES = ['embebidos', 'tiempo-real', 'tolerancia'];

function readWindowState() {
  try {
    if (window.name && window.name.startsWith('OVA_SO:')) {
      return JSON.parse(window.name.slice(7));
    }
  } catch (e) {}
  return { testOk: false, visited: [], lang: 'es' };
}

function writeWindowState(state) {
  try {
    window.name = 'OVA_SO:' + JSON.stringify(state);
  } catch (e) {}
}

function getLang() {
  try {
    const ls = localStorage.getItem(KEY_LANG);
    if (ls === 'es' || ls === 'en') return ls;
  } catch (e) {}
  const wLang = readWindowState().lang;
  return (wLang === 'en') ? 'en' : 'es';
}

function t(key) {
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) || I18N.es[key] || key;
}

function isTestPassed() {
  try {
    if (localStorage.getItem(KEY_TEST) === '1') return true;
  } catch (e) {}
  return readWindowState().testOk === true;
}

function setTestPassed() {
  try {
    localStorage.setItem(KEY_TEST, '1');
  } catch (e) {}
  const st = readWindowState();
  st.testOk = true;
  writeWindowState(st);
}

function getVisitedModules() {
  let fromLs = [];
  try {
    const raw = localStorage.getItem(KEY_VISITED);
    const parsed = raw ? JSON.parse(raw) : [];
    if (Array.isArray(parsed)) fromLs = parsed;
  } catch (e) {}
  const fromWin = readWindowState().visited || [];
  return Array.from(new Set([...fromLs, ...fromWin]));
}

function markModuleVisited(modId) {
  if (!ALL_MODULES.includes(modId)) return;
  const list = getVisitedModules();
  if (!list.includes(modId)) {
    list.push(modId);
    try {
      localStorage.setItem(KEY_VISITED, JSON.stringify(list));
    } catch (e) {}
    const st = readWindowState();
    st.visited = list;
    writeWindowState(st);
  }
}

// Guardia de acceso inmediato en páginas protegidas (data-gate)
if (document.body.hasAttribute('data-gate') && !isTestPassed()) {
  location.replace('evaluacion.html?locked=1');
}

// Si el usuario llegó a evaluacion.html redirigido desde un módulo bloqueado
if (document.body.dataset.page === 'evaluacion') {
  const params = new URLSearchParams(location.search);
  const alertBox = document.getElementById('locked-alert');
  if (params.get('locked') === '1' && !isTestPassed() && alertBox) {
    alertBox.hidden = false;
  }
}

// ===== Barra superior de progreso de lectura =====
const pr = document.getElementById('progreso');
if (pr) {
  addEventListener('scroll', () => {
    const h = document.documentElement;
    pr.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1) * 100) + '%';
  });
}

// ===== Pestañas interactivas =====
document.querySelectorAll('.tabs').forEach(tabGroup => {
  const bs = tabGroup.querySelectorAll('button');
  bs.forEach(b => b.addEventListener('click', () => {
    bs.forEach(x => {
      x.setAttribute('aria-selected', x === b);
      const panel = document.getElementById(x.dataset.p);
      if (panel) panel.hidden = x !== b;
    });
  }));
});

// ===== Sincronizar UI Global (Progreso, Candados, Hero, Terminal) =====
function syncDashboardState() {
  const passed = isTestPassed();
  const currentPage = document.body.dataset.page;

  if (passed && ALL_MODULES.includes(currentPage)) {
    markModuleVisited(currentPage);
  }

  const visited = passed ? getVisitedModules() : [];
  const pct = passed ? Math.min(100, 25 + visited.length * 25) : 0;

  const pctEl = document.getElementById('course-pct');
  const barEl = document.getElementById('course-bar');
  const stateEl = document.getElementById('course-state-label');
  if (pctEl) pctEl.textContent = pct + '%';
  if (barEl) barEl.style.width = pct + '%';
  if (stateEl) {
    stateEl.textContent = !passed
      ? t('status_pending')
      : pct === 100
        ? t('status_completed')
        : t('status_enabled');
  }

  const testBadge = document.getElementById('test-badge');
  if (testBadge) {
    testBadge.textContent = passed ? t('step_passed') : t('step_1');
  }

  document.querySelectorAll('.nav-lockable').forEach(link => {
    const lockIcon = link.querySelector('.lock-icon');
    if (passed) {
      link.classList.remove('locked');
      link.classList.add('unlocked');
      if (lockIcon) lockIcon.textContent = '✓';
    } else {
      link.classList.add('locked');
      link.classList.remove('unlocked');
      if (lockIcon) lockIcon.textContent = '🔒';
    }
  });

  document.querySelectorAll('.lockable-card').forEach(card => {
    const padlock = card.querySelector('.module-padlock');
    const actionText = card.querySelector('.module-action-text');
    const target = card.dataset.target || '';
    const modKey = target.replace('.html', '');
    if (passed) {
      card.classList.remove('locked');
      card.classList.add('unlocked');
      if (padlock) padlock.textContent = visited.includes(modKey) ? '✅' : '🔓';
      if (actionText) actionText.textContent = visited.includes(modKey) ? t('mod_explored') : t('mod_enter');
    } else {
      card.classList.add('locked');
      card.classList.remove('unlocked');
      if (padlock) padlock.textContent = '🔒';
      if (actionText) actionText.textContent = t('mod_req_step1');
    }
  });

  const heroPill = document.getElementById('hero-pill');
  const heroTitle = document.getElementById('hero-title');
  const heroDesc = document.getElementById('hero-desc');
  const heroCta = document.getElementById('hero-cta-btn');
  const modulesBanner = document.getElementById('modules-lock-banner');

  if (heroPill && heroTitle && heroDesc && heroCta) {
    if (passed) {
      heroPill.textContent = t('hero_pill_unlocked');
      heroTitle.textContent = t('hero_title_unlocked');
      heroDesc.innerHTML = t('hero_desc_unlocked');
      heroCta.textContent = t('hero_cta_unlocked');
      heroCta.href = 'embebidos.html';
    } else {
      heroPill.textContent = t('hero_pill_locked');
      heroTitle.textContent = t('hero_title_locked');
      heroDesc.innerHTML = t('hero_desc_locked');
      heroCta.textContent = t('hero_cta_locked');
      heroCta.href = 'evaluacion.html';
    }
  }

  if (modulesBanner) {
    modulesBanner.textContent = passed ? t('mods_unlocked_banner') : t('mods_locked_banner');
    modulesBanner.classList.toggle('unlocked', passed);
  }

  const led = document.getElementById('kernel-led');
  const klog = document.getElementById('kernel-sidebar-log');
  const termGate = document.getElementById('term-gate-status');
  if (led) led.classList.toggle('ok', passed);
  if (klog) {
    klog.textContent = passed
      ? `$ kernel_init\ngate_mode: unlocked\nprogress: ${pct}%\nstatus: ready`
      : `$ kernel_init\ngate_mode: strict\nmodules: locked\nreq: test_step_1`;
  }
  if (termGate) {
    termGate.textContent = passed
      ? t('term_gate_unlocked').replace('{pct}', pct)
      : t('term_gate_locked');
    termGate.className = passed ? 't-ok' : 't-warn';
  }
}

// ===== Renderizado y Evaluación Bilingüe del Quiz (Paso 1) =====
let quizLastScore = null;

function renderQuiz(preserveAnswers = false) {
  const fm = document.getElementById('test');
  if (!fm) return;

  const lang = getLang();
  const questions = QUIZ_BANK[lang] || QUIZ_BANK.es;
  const submitted = fm.dataset.enviado === '1';

  // Guardar respuestas seleccionadas antes de re-renderizar si se cambia el idioma
  const savedAnswers = {};
  if (preserveAnswers) {
    questions.forEach((_, i) => {
      const checked = fm.querySelector(`input[name=q${i}]:checked`);
      if (checked) savedAnswers[i] = +checked.value;
    });
  }

  fm.innerHTML = '';

  const minSpan = document.getElementById('min');
  if (minSpan) minSpan.textContent = `${MINIMO} ${t('quiz_of')} ${questions.length}`;

  questions.forEach((q, i) => {
    const f = document.createElement('fieldset');
    const chosen = savedAnswers[i];
    f.innerHTML =
      `<legend><strong>${q[0]}</strong></legend>` +
      `<p class="quiz-q-title">${i + 1}. ${q[1]}</p>` +
      q[2].map((o, j) => {
        const isChecked = chosen === j ? ' checked' : '';
        const isDisabled = submitted ? ' disabled' : '';
        const cls = submitted ? 'op bloq' : 'op';
        return `<label class="${cls}"><input type="radio" name="q${i}" value="${j}"${isChecked}${isDisabled}> <span>${o}</span></label>`;
      }).join('') +
      `<p class="fb"></p>`;
    fm.appendChild(f);

    if (submitted && typeof chosen === 'number') {
      const ok = chosen === q[3];
      const fb = f.querySelector('.fb');
      fb.textContent = (ok ? t('quiz_ok_prefix') : t('quiz_bad_prefix')) + q[4];
      fb.style.color = ok ? '#1ef58c' : '#ff7a95';
    }
  });

  const btnSubmit = document.createElement('button');
  btnSubmit.type = 'submit';
  btnSubmit.className = 'btn-neon';
  btnSubmit.textContent = t('quiz_submit');
  if (submitted) btnSubmit.disabled = true;
  fm.appendChild(btnSubmit);

  updateQuizCounter();

  if (submitted && quizLastScore !== null) {
    renderQuizResultBanner(quizLastScore);
  }
}

function updateQuizCounter() {
  const fm = document.getElementById('test');
  if (!fm) return;
  const questions = QUIZ_BANK[getLang()] || QUIZ_BANK.es;
  const answered = fm.querySelectorAll('input:checked').length;
  const countEl = document.getElementById('quiz-answered-count');
  const barEl = document.getElementById('quiz-answered-bar');
  if (countEl) {
    countEl.innerHTML = t('quiz_answered').replace('{a}', answered).replace('{t}', questions.length);
  }
  if (barEl) {
    barEl.style.width = ((answered / questions.length) * 100) + '%';
  }
}

function renderQuizResultBanner(score) {
  const resDiv = document.getElementById('resultado');
  if (!resDiv) return;
  const questions = QUIZ_BANK[getLang()] || QUIZ_BANK.es;
  const fm = document.getElementById('test');
  const porTema = {};

  questions.forEach((q, i) => {
    const checked = fm ? fm.querySelector(`input[name=q${i}]:checked`) : null;
    const ok = checked && (+checked.value === q[3]);
    porTema[q[0]] = (porTema[q[0]] || 0) + (ok ? 1 : 0);
  });

  const detalle = Object.entries(porTema).map(([k, v]) => `${k}: ${v}/3`).join(' · ');

  if (score >= MINIMO) {
    resDiv.innerHTML =
      `<div class="res">${t('quiz_pass_msg')
        .replace('{score}', score)
        .replace('{total}', questions.length)
        .replace('{detail}', detalle)}</div>` +
      `<div class="hero-actions" style="margin-top:1rem;">` +
      `<a class="btn-neon" href="embebidos.html">${t('quiz_pass_cta1')}</a>` +
      `<a class="btn-ghost" href="index.html">${t('quiz_pass_cta2')}</a>` +
      `</div>`;
  } else {
    resDiv.innerHTML =
      `<div class="res mal">${t('quiz_fail_msg')
        .replace('{score}', score)
        .replace('{total}', questions.length)
        .replace('{detail}', detalle)
        .replace('{min}', MINIMO)}</div>` +
      `<p style="margin-top:0.9rem;"><button type="button" class="btn-neon" onclick="location.reload()">${t('quiz_retry')}</button></p>`;
  }
}

const fm = document.getElementById('test');
if (fm) {
  renderQuiz(false);

  fm.addEventListener('change', () => {
    updateQuizCounter();
  });

  fm.addEventListener('submit', e => {
    e.preventDefault();
    if (fm.dataset.enviado) return;
    const questions = QUIZ_BANK[getLang()] || QUIZ_BANK.es;
    const resDiv = document.getElementById('resultado');

    if (fm.querySelectorAll('input:checked').length < questions.length) {
      resDiv.innerHTML = `<div class="res mal">${t('quiz_incomplete')}</div>`;
      resDiv.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    let score = 0;
    questions.forEach((q, i) => {
      const val = +fm.querySelector(`input[name=q${i}]:checked`).value;
      const ok = val === q[3];
      const fb = fm.querySelectorAll('.fb')[i];
      if (ok) score++;
      fb.textContent = (ok ? t('quiz_ok_prefix') : t('quiz_bad_prefix')) + q[4];
      fb.style.color = ok ? '#1ef58c' : '#ff7a95';
    });

    fm.dataset.enviado = '1';
    quizLastScore = score;
    fm.querySelectorAll('input').forEach(x => {
      x.disabled = true;
      x.parentElement.classList.add('bloq');
    });
    const submitBtn = fm.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    if (score >= MINIMO) {
      setTestPassed();
      syncDashboardState();
    }

    renderQuizResultBanner(score);
    resDiv.scrollIntoView({ behavior: 'smooth' });
  });
}

// ===== Laboratorio Interactivo de Planificación en Tiempo Real (RM vs EDF) =====
const rtInputs = ['rt-t1', 'rt-p1', 'rt-t2', 'rt-p2'].map(id => document.getElementById(id));
function updateRtLab() {
  if (!rtInputs.every(Boolean)) return;
  const t1 = Math.max(1, +rtInputs[0].value || 1);
  const p1 = Math.max(1, +rtInputs[1].value || 1);
  const t2 = Math.max(1, +rtInputs[2].value || 1);
  const p2 = Math.max(1, +rtInputs[3].value || 1);
  const u = (t1 / p1 + t2 / p2) * 100;
  const rmLimit = 2 * (Math.pow(2, 0.5) - 1) * 100; // ~82.84%
  const bar = document.getElementById('rt-cpu-bar');
  const out = document.getElementById('rt-lab-res');
  if (bar) bar.style.width = Math.min(100, u).toFixed(1) + '%';
  if (out) {
    if (u <= rmLimit) {
      out.className = 'res';
      out.textContent = t('lab_res_rm').replace('{u}', u.toFixed(1)).replace('{rm}', rmLimit.toFixed(1));
    } else if (u <= 100) {
      out.className = 'res';
      out.textContent = t('lab_res_edf').replace('{u}', u.toFixed(1)).replace('{rm}', rmLimit.toFixed(1));
    } else {
      out.className = 'res mal';
      out.textContent = t('lab_res_over').replace('{u}', u.toFixed(1));
    }
  }
}
if (rtInputs.every(Boolean)) {
  rtInputs.forEach(inp => inp.addEventListener('input', updateRtLab));
}

// ===== Aplicar Idioma a Toda la Página =====
function applyLanguage(lang, persist = true) {
  const chosen = (lang === 'en') ? 'en' : 'es';
  if (persist) {
    try {
      localStorage.setItem(KEY_LANG, chosen);
    } catch (e) {}
    const st = readWindowState();
    st.lang = chosen;
    writeWindowState(st);
  }

  document.documentElement.lang = chosen;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.setAttribute('aria-pressed', btn.dataset.lang === chosen ? 'true' : 'false');
  });

  const titleKey = document.body.dataset.titleKey;
  if (titleKey) {
    document.title = t(titleKey);
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder));
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.setAttribute('title', t(el.dataset.i18nTitle));
  });

  syncDashboardState();
  renderQuiz(true);
  updateRtLab();
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLanguage(btn.dataset.lang, true);
  });
});

// ===== Modal de Bloqueo =====
const gateModal = document.getElementById('gate-modal');
const gateTargetName = document.getElementById('gate-target-name');
const closeGateModal = document.getElementById('close-gate-modal');

if (closeGateModal && gateModal) {
  closeGateModal.addEventListener('click', () => { gateModal.hidden = true; });
  gateModal.addEventListener('click', e => {
    if (e.target === gateModal) gateModal.hidden = true;
  });
}

document.querySelectorAll('[data-requires-test="true"]').forEach(el => {
  el.addEventListener('click', e => {
    if (!isTestPassed()) {
      e.preventDefault();
      const label = el.querySelector('.nav-label, h3');
      if (gateTargetName && label) gateTargetName.textContent = label.textContent.trim();
      if (gateModal) gateModal.hidden = false;
    }
  });
});

// ===== Botón reiniciar progreso =====
const resetBtn = document.getElementById('btn-reset-progress');
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    const keepLang = getLang();
    try {
      localStorage.removeItem(KEY_TEST);
      localStorage.removeItem(KEY_VISITED);
    } catch (e) {}
    writeWindowState({ testOk: false, visited: [], lang: keepLang });
    if (document.body.hasAttribute('data-gate')) {
      location.href = 'index.html';
    } else {
      location.reload();
    }
  });
}

// ===== Mini Terminal Interactiva en index.html =====
const termForm = document.getElementById('term-form');
const termInput = document.getElementById('term-input');
const termOutput = document.getElementById('term-output');

if (termForm && termInput && termOutput) {
  termForm.addEventListener('submit', e => {
    e.preventDefault();
    const cmd = termInput.value.trim().toLowerCase();
    if (!cmd) return;
    const line = document.createElement('div');
    line.innerHTML = `<span class="t-prompt">$</span> ${cmd}`;
    termOutput.appendChild(line);

    const resp = document.createElement('div');
    if (cmd === 'help') {
      resp.className = 't-ok';
      resp.textContent = t('term_help');
    } else if (cmd === 'test') {
      resp.className = 't-ok';
      resp.textContent = t('term_opening_test');
      setTimeout(() => { location.href = 'evaluacion.html'; }, 450);
    } else if (cmd === 'status') {
      resp.className = isTestPassed() ? 't-ok' : 't-warn';
      resp.textContent = isTestPassed() ? t('term_status_ok') : t('term_status_lock');
    } else if (cmd === 'ls') {
      resp.className = 't-ok';
      resp.textContent = 'evaluacion.html  embebidos.html  tiempo-real.html  tolerancia.html';
    } else if (cmd === 'clear') {
      termOutput.innerHTML = '';
      termInput.value = '';
      return;
    } else {
      resp.className = 't-warn';
      resp.textContent = t('term_unknown').replace('{cmd}', cmd);
    }
    termOutput.appendChild(resp);
    termOutput.scrollTop = termOutput.scrollHeight;
    termInput.value = '';
  });
}

// Inicializar idioma guardado y sincronizar UI
applyLanguage(getLang(), false);
