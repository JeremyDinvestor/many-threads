(function () {
  var LANGS = ["en", "fr", "es"];
  var LS = function (k, v) {
    try {
      if (v === undefined) return localStorage.getItem(k);
      localStorage.setItem(k, v);
    } catch (e) {
      return null;
    }
  };
  var L = LS("mt-l"),
    TH = LS("mt-t") || "light";
  if (LANGS.indexOf(L) < 0) L = "en";
  var LI = LANGS.indexOf(L),
    B = document.body,
    PAGE = B.dataset.page,
    CID = B.dataset.id;
  // ===== EDIT THESE =====
  var CFG = { wa: "", pay: "", email: "hello@manythreads.example" }; // wa: WhatsApp number with country code, digits only (e.g. 2348012345678). pay: optional online payment link.
  var SOC = [
    ["Instagram", "https://instagram.com/"],
    ["TikTok", "https://tiktok.com/"],
    ["Facebook", "https://facebook.com/"],
    ["X", "https://x.com/"],
    ["Pinterest", "https://pinterest.com/"],
    ["YouTube", "https://youtube.com/"],
    ["WhatsApp", "https://wa.me/"],
  ];

  var LINKS = {
    home: "index.html",
    cultures: "cultures.html",
    meas: "measurements.html",
    how: "how.html",
    partner: "partner.html",
    contact: "contact.html",
    igbo: "igbo.html",
    yoruba: "yoruba.html",
    hausa: "hausa.html",
    edo: "edo.html",
    calabar: "calabar.html",
    tiv: "tiv.html",
  };
  var D = {
    ann: [
      `Made to measure. Shipped worldwide with tracking.`,
      `Sur mesure. Expédié dans le monde entier avec suivi.`,
      `A medida. Enviado a todo el mundo con seguimiento.`,
    ],
    ship: [`Ship to`, `Livrer à`, `Enviar a`],
    cur: [`Currency`, `Devise`, `Moneda`],
    lang: [`Language`, `Langue`, `Idioma`],
    theme: [`Light / Dark`, `Clair / Sombre`, `Claro / Oscuro`],
    menu: [`Menu`, `Menu`, `Menú`],
    navCult: [`Shop by Culture`, `Boutique par culture`, `Comprar por cultura`],
    navHow: [`How It Works`, `Comment ça marche`, `Cómo funciona`],
    navPart: [
      `Partner With Us`,
      `Collaborer avec nous`,
      `Colabora con nosotros`,
    ],
    navContact: [`Contact`, `Contact`, `Contacto`],
    h1a: [`One home.`, `Une maison.`, `Un hogar.`],
    h1b: [`Many threads.`, `Tant de fils.`, `Muchos hilos.`],
    lead: [
      `Handwoven, hand-dyed and made-to-measure Nigerian attire, from the weavers and dyers who make it, delivered to you anywhere in the world.`,
      `Tenues nigérianes tissées et teintes à la main, confectionnées sur mesure par celles et ceux qui les créent, livrées partout dans le monde.`,
      `Atuendos nigerianos tejidos y teñidos a mano, hechos a medida por quienes los crean, entregados en cualquier lugar del mundo.`,
    ],
    cta1: [
      `Explore by culture`,
      `Explorer par culture`,
      `Explorar por cultura`,
    ],
    cta2: [`How it works`, `Comment ça marche`, `Cómo funciona`],
    introE: [`Our idea`, `Notre idée`, `Nuestra idea`],
    introH: [
      `Cloth with a name behind it`,
      `Un tissu qui porte un nom`,
      `Una tela con nombre`,
    ],
    introP: [
      `Every piece begins with a person: a weaver, a dyer, a tailor. We name them, tell where they work, and explain what each outfit means, so what you wear carries its story.`,
      `Chaque pièce commence par une personne : un tisserand, une teinturière, un tailleur. Nous les nommons, disons où ils travaillent et expliquons le sens de chaque tenue, pour que ce que vous portez raconte son histoire.`,
      `Cada prenda comienza con una persona: un tejedor, una tintorera, un sastre. Los nombramos, contamos dónde trabajan y explicamos qué significa cada atuendo, para que lo que vistes lleve su historia.`,
    ],
    cultE: [`Shop by culture`, `Boutique par culture`, `Comprar por cultura`],
    cultH: [
      `Many peoples. Countless ways to dress.`,
      `Des peuples multiples. D'innombrables façons de s'habiller.`,
      `Muchos pueblos. Incontables formas de vestir.`,
    ],
    cultS: [
      `One country, many ways of dressing. Start with the culture that calls to you.`,
      `Un pays, de nombreuses façons de s'habiller. Commencez par la culture qui vous appelle.`,
      `Un país, muchas formas de vestir. Empieza por la cultura que te llame.`,
    ],
    occ: [
      `Weddings|Naming ceremonies|Festivals|Everyday elegance`,
      `Mariages|Cérémonies du nom|Festivals|Élégance au quotidien`,
      `Bodas|Ceremonias de nombre|Festivales|Elegancia diaria`,
    ],
    whyE: [`Why Many Threads`, `Pourquoi Many Threads`, `Por qué Many Threads`],
    whyH: [
      `A curated house, not a crowded market`,
      `Une maison sélectionnée, pas un marché bondé`,
      `Una casa curada, no un mercado saturado`,
    ],
    w1h: [`Made for you`, `Fait pour vous`, `Hecho para ti`],
    w1p: [
      `Every piece is made to your measurements, not a guess at a size.`,
      `Chaque pièce est confectionnée selon vos mesures, pas selon une taille approximative.`,
      `Cada prenda se hace con tus medidas, no con una talla aproximada.`,
    ],
    w2h: [`Verified makers`, `Artisans vérifiés`, `Artesanos verificados`],
    w2p: [
      `We work directly with artisans and tell you who made your piece.`,
      `Nous travaillons directement avec les artisans et vous disons qui a fait votre pièce.`,
      `Trabajamos directamente con artesanos y te decimos quién hizo tu prenda.`,
    ],
    w3h: [`Delivered with care`, `Livré avec soin`, `Entregado con cuidado`],
    w3p: [
      `Tracked international shipping, with duty estimates shown before you pay.`,
      `Expédition internationale suivie, avec estimation des droits de douane avant le paiement.`,
      `Envío internacional con seguimiento y estimación de aranceles antes de pagar.`,
    ],
    w4h: [`Protected purchase`, `Achat protégé`, `Compra protegida`],
    w4p: [
      `If your order doesn't arrive or isn't as described, we step in.`,
      `Si votre commande n'arrive pas ou n'est pas conforme, nous intervenons.`,
      `Si tu pedido no llega o no es como se describe, intervenimos.`,
    ],
    howE: [`How it works`, `Comment ça marche`, `Cómo funciona`],
    howH: [
      `From the loom to your door`,
      `Du métier à tisser à votre porte`,
      `Del telar a tu puerta`,
    ],
    howS: [
      `You always see the full price, shipping and estimated duties before you pay.`,
      `Vous voyez toujours le prix total, la livraison et les droits estimés avant de payer.`,
      `Siempre ves el precio total, el envío y los aranceles estimados antes de pagar.`,
    ],
    s1h: [`Choose`, `Choisir`, `Elegir`],
    s1p: [
      `Pick a piece by culture or occasion.`,
      `Choisissez une pièce par culture ou occasion.`,
      `Elige una prenda por cultura u ocasión.`,
    ],
    s2h: [`Measure`, `Mesurer`, `Medir`],
    s2p: [
      `Send your measurements. We guide you step by step.`,
      `Envoyez vos mesures. Nous vous guidons pas à pas.`,
      `Envía tus medidas. Te guiamos paso a paso.`,
    ],
    s3h: [`Made`, `Confectionné`, `Elaborado`],
    s3p: [
      `Your artisan creates it by hand.`,
      `Votre artisan le crée à la main.`,
      `Tu artesano lo crea a mano.`,
    ],
    s4h: [`Shipped`, `Expédié`, `Enviado`],
    s4p: [
      `Tracked delivery with duty estimates upfront.`,
      `Livraison suivie, droits estimés à l'avance.`,
      `Entrega con seguimiento y aranceles estimados de antemano.`,
    ],
    s5h: [`Protected`, `Protégé`, `Protegido`],
    s5p: [
      `If something goes wrong, our team steps in.`,
      `En cas de problème, notre équipe intervient.`,
      `Si algo sale mal, nuestro equipo interviene.`,
    ],
    measH: [`Measuring guide`, `Guide des mesures`, `Guía de medidas`],
    measP: [
      `Standard sizes rarely fit well. Take these measurements in inches, or message us and we will walk you through it.`,
      `Les tailles standard vont rarement bien. Prenez ces mesures en pouces, ou écrivez-nous et nous vous guiderons.`,
      `Las tallas estándar rara vez quedan bien. Toma estas medidas en pulgadas o escríbenos y te guiamos.`,
    ],
    meas: [
      `Collar|Chest|Waist|Hips|Shoulder|Sleeve|Length`,
      `Col|Poitrine|Taille|Hanches|Épaule|Manche|Longueur`,
      `Cuello|Pecho|Cintura|Cadera|Hombro|Manga|Largo`,
    ],
    pH: [`Partner with us`, `Collaborer avec nous`, `Colabora con nosotros`],
    forArt: [`For artisans`, `Pour les artisans`, `Para artesanos`],
    becomeH: [`Become a Thread`, `Devenez un fil`, `Conviértete en un hilo`],
    becomeP: [
      `If you weave, dye, embroider, bead or tailor, we can bring your work to buyers around the world, with your name and your story.`,
      `Si vous tissez, teignez, brodez, perlez ou cousez, nous présentons votre travail au monde entier, avec votre nom et votre histoire.`,
      `Si tejes, tiñes, bordas, trabajas con cuentas o coses, llevamos tu trabajo a compradores de todo el mundo, con tu nombre y tu historia.`,
    ],
    becomeO: [
      `Your own maker profile · International shipping · Fair payment terms`,
      `Votre profil d'artisan · Expédition internationale · Conditions de paiement équitables`,
      `Tu perfil de artesano · Envío internacional · Condiciones de pago justas`,
    ],
    apply: [`Apply to join`, `Postuler`, `Solicitar unirme`],
    forTrade: [`For trade`, `Pour les professionnels`, `Para profesionales`],
    tradeH: [
      `Dress your clients and your shelves`,
      `Habillez vos clients et vos étagères`,
      `Viste a tus clientes y tus estantes`,
    ],
    tradeP: [
      `Boutiques, planners and stylists: request our trade catalogue for pricing tiers, minimum orders and lead times.`,
      `Boutiques, organisateurs et stylistes : demandez notre catalogue pro pour les tarifs, minimums de commande et délais.`,
      `Boutiques, planificadores y estilistas: solicita nuestro catálogo profesional con precios, pedidos mínimos y plazos.`,
    ],
    tradeO: [
      `Pricing tiers · Minimum orders · Lead times`,
      `Tarifs dégressifs · Commandes minimales · Délais`,
      `Niveles de precio · Pedidos mínimos · Plazos`,
    ],
    reqCat: [
      `Request the catalogue`,
      `Demander le catalogue`,
      `Solicitar el catálogo`,
    ],
    cH: [
      `Talk to a person.`,
      `Parlez à une vraie personne.`,
      `Habla con una persona.`,
    ],
    cP: [
      `Questions about fit, culture or delivery? Reach us on WhatsApp, email or social media.`,
      `Des questions sur la coupe, la culture ou la livraison ? Écrivez-nous sur WhatsApp, par e-mail ou sur les réseaux.`,
      `¿Dudas sobre ajuste, cultura o envío? Escríbenos por WhatsApp, correo o redes sociales.`,
    ],
    fName: [`Name`, `Nom`, `Nombre`],
    fEmail: [`Email address`, `Adresse e-mail`, `Correo electrónico`],
    fCountry: [`Country`, `Pays`, `País`],
    fTopic: [`Topic`, `Sujet`, `Asunto`],
    fMsg: [`Message`, `Message`, `Mensaje`],
    topics: [
      `General question|Become a Thread|Wholesale|Order a piece`,
      `Question générale|Devenir un fil|Vente en gros|Commander une pièce`,
      `Pregunta general|Ser un hilo|Mayoreo|Pedir una prenda`,
    ],
    send: [`Send message`, `Envoyer`, `Enviar mensaje`],
    sent: [
      `Thank you. We will be in touch.`,
      `Merci. Nous vous répondrons.`,
      `Gracias. Te responderemos.`,
    ],
    follow: [`Follow us`, `Suivez-nous`, `Síguenos`],
    c_him: [`For him`, `Pour lui`, `Para él`],
    c_her: [`For her`, `Pour elle`, `Para ella`],
    c_acc: [`Accessories`, `Accessoires`, `Accesorios`],
    mtm: [`Made to measure`, `Sur mesure`, `A medida`],
    enq: [`Enquire`, `Se renseigner`, `Consultar`],
    custom: [`Custom piece`, `Pièce sur mesure`, `Pieza personalizada`],
    customP: [
      `Tell us what you have in mind.`,
      `Dites-nous ce que vous imaginez.`,
      `Cuéntanos lo que tienes en mente.`,
    ],
    addPh: [`Add photo`, `Ajouter une photo`, `Añadir foto`],
    verify: [
      `Piece names and cultural details are being reviewed with artisans and cultural advisers.`,
      `Les noms des pièces et les détails culturels sont en cours de vérification avec des artisans et des conseillers culturels.`,
      `Los nombres de las prendas y los detalles culturales se están revisando con artesanos y asesores culturales.`,
    ],
    others: [
      `Explore other cultures`,
      `Explorer d'autres cultures`,
      `Explora otras culturas`,
    ],
    wear: [
      `Wear where you're from`,
      `Portez vos origines`,
      `Viste tus orígenes`,
    ],
    joinP: [
      `Join the list for new collections and our free Wearer's Guide to Nigerian Attire.`,
      `Rejoignez la liste pour les nouvelles collections et notre guide gratuit des tenues nigérianes.`,
      `Únete a la lista para nuevas colecciones y nuestra guía gratuita de atuendos nigerianos.`,
    ],
    join: [`Join`, `Rejoindre`, `Unirme`],
    thanks: [
      `Thank you. You are on the list.`,
      `Merci. Vous êtes inscrit(e).`,
      `Gracias. Ya estás en la lista.`,
    ],
    explore: [`Explore`, `Explorer`, `Explorar`],
    rights: [
      `© 2026 Many Threads. Made with care in Nigeria.`,
      `© 2026 Many Threads. Fait avec soin au Nigeria.`,
      `© 2026 Many Threads. Hecho con cuidado en Nigeria.`,
    ],
    ai: [
      `Imagery shown for illustration.`,
      `Images présentées à titre d'illustration.`,
      `Imágenes con fines ilustrativos.`,
    ],
    b_igbo: [
      `Bold pattern and strong symbolism, from woven akwete cloth to the lion-head isiagu and coral beads.`,
      `Motifs audacieux et symbolisme fort, du tissu akwete tissé à l'isiagu à tête de lion et aux perles de corail.`,
      `Patrones atrevidos y fuerte simbolismo, desde la tela akwete tejida hasta el isiagu con cabeza de león y las cuentas de coral.`,
    ],
    b_yoruba: [
      `Rich handwoven aso oke, indigo-resist adire and the sweeping agbada.`,
      `Le riche aso oke tissé main, l'adire teint à l'indigo et l'ample agbada.`,
      `El rico aso oke tejido a mano, el adire teñido con índigo y el amplio agbada.`,
    ],
    b_hausa: [
      `Flowing embroidered robes, crisp caps and turbans, rooted in the craft traditions of the north.`,
      `Robes brodées fluides, bonnets et turbans soignés, ancrés dans les traditions artisanales du nord.`,
      `Túnicas bordadas fluidas, gorros y turbantes impecables, con raíces en las tradiciones artesanas del norte.`,
    ],
    b_edo: [
      `Royal tradition expressed through coral beads, regal wrappers and ceremony.`,
      `Une tradition royale exprimée par les perles de corail, les pagnes majestueux et la cérémonie.`,
      `Tradición real expresada en cuentas de coral, paños regios y ceremonia.`,
    ],
    b_efik: [
      `The elegant ceremonial dress of Calabar and the Cross River region.`,
      `L'élégante tenue de cérémonie de Calabar et de la région de la Cross River.`,
      `La elegante vestimenta ceremonial de Calabar y la región del río Cross.`,
    ],
    b_tiv: [
      `Distinctive striped a'nger cloth from the Benue region.`,
      `Le tissu rayé a'nger, emblématique de la région de Benue.`,
      `La distintiva tela a'nger de rayas, de la región de Benue.`,
    ],

    slogan: [
      `One Home, Many Threads`,
      `Une maison, tant de fils`,
      `Un hogar, muchos hilos`,
    ],
    skip: [`Skip`, `Passer`, `Omitir`],
    navMeas: [`Measurements`, `Mesures`, `Medidas`],
    c_both: [`Couples & pairs`, `Couples et duos`, `Parejas y conjuntos`],
    order: [`Order this style`, `Commander ce modèle`, `Pedir este estilo`],
    priceTbd: [
      `Price confirmed on enquiry`,
      `Prix confirmé sur demande`,
      `Precio confirmado al consultar`,
    ],
    dTitle: [`Your measurements`, `Vos mesures`, `Tus medidas`],
    dP: [
      `Enter your measurements, then send your order or a question on WhatsApp. We confirm the price, delivery and payment with you there.`,
      `Saisissez vos mesures, puis envoyez votre commande ou une question sur WhatsApp. Nous y confirmons le prix, la livraison et le paiement.`,
      `Introduce tus medidas y envía tu pedido o una pregunta por WhatsApp. Allí confirmamos contigo el precio, el envío y el pago.`,
    ],
    unit: [`Unit`, `Unité`, `Unidad`],
    uIn: [`Inches`, `Pouces`, `Pulgadas`],
    uCm: [`Centimetres`, `Centimètres`, `Centímetros`],
    notes: [
      `Notes (colour, fabric, event date)`,
      `Notes (couleur, tissu, date de l'événement)`,
      `Notas (color, tela, fecha del evento)`,
    ],
    btnOrder: [
      `Order and pay on WhatsApp`,
      `Commander et payer sur WhatsApp`,
      `Pedir y pagar por WhatsApp`,
    ],
    btnAsk: [`Ask a question`, `Poser une question`, `Hacer una pregunta`],
    btnPay: [`Pay online`, `Payer en ligne`, `Pagar en línea`],
    close: [`Close`, `Fermer`, `Cerrar`],
    guide: [`How to measure`, `Comment mesurer`, `Cómo medir`],
    noMeas: [
      `No measurements needed for accessories. Tell us what you would like in the notes.`,
      `Aucune mesure nécessaire pour les accessoires. Dites-nous ce que vous souhaitez dans les notes.`,
      `No se necesitan medidas para los accesorios. Cuéntanos lo que quieres en las notas.`,
    ],
    msgOrder: [
      `Hello Many Threads, I would like to order:`,
      `Bonjour Many Threads, je souhaite commander :`,
      `Hola Many Threads, quisiera pedir:`,
    ],
    msgAsk: [
      `Hello Many Threads, I have a question about:`,
      `Bonjour Many Threads, j'ai une question sur :`,
      `Hola Many Threads, tengo una pregunta sobre:`,
    ],
    waNote: [
      `Your message opens in WhatsApp so we can reply directly.`,
      `Votre message s'ouvre dans WhatsApp pour que nous puissions vous répondre directement.`,
      `Tu mensaje se abre en WhatsApp para que podamos responderte directamente.`,
    ],
    tipsH: [
      `Tips for an accurate fit`,
      `Conseils pour une coupe précise`,
      `Consejos para un ajuste preciso`,
    ],
    tips: [
      `Ask someone to help you|Measure over light clothing|Keep the tape snug, not tight|Write every number twice`,
      `Demandez de l'aide|Mesurez sur des vêtements légers|Gardez le mètre ajusté, sans serrer|Notez chaque mesure deux fois`,
      `Pide ayuda a alguien|Mide sobre ropa ligera|Mantén la cinta ajustada, sin apretar|Anota cada medida dos veces`,
    ],
    colors: [
      `Black|White|Green|Maroon|Brown|Indigo|Gold|Bronze|Red|Blue|Multicolour|Black & white|Coral`,
      `Noir|Blanc|Vert|Bordeaux|Marron|Indigo|Or|Bronze|Rouge|Bleu|Multicolore|Noir et blanc|Corail`,
      `Negro|Blanco|Verde|Burdeos|Marrón|Índigo|Dorado|Bronce|Rojo|Azul|Multicolor|Blanco y negro|Coral`,
    ],
    mlabels: [
      `Neck|Shoulder|Chest / bust|Waist|Hips|Sleeve|Garment length|Trouser length|Height`,
      `Cou|Épaule|Poitrine / buste|Taille|Hanches|Manche|Longueur du vêtement|Longueur du pantalon|Stature`,
      `Cuello|Hombro|Pecho / busto|Cintura|Cadera|Manga|Largo de la prenda|Largo del pantalón|Estatura`,
    ],
    mdescs: [
      `Around the base of the neck, with one finger of room.|Seam to seam across the back, between the shoulder points.|Around the fullest part of the chest or bust, arms down.|Around your natural waist, the narrowest part of the torso.|Around the fullest part of the hips.|From the shoulder point to the wrist, arm slightly bent.|From the base of the neck to where you want the garment to end.|From the waist to the ankle along the outside of the leg.|Your height without shoes.`,
      `Autour de la base du cou, avec un doigt d'aisance.|D'une couture à l'autre sur le dos, entre les pointes d'épaule.|Autour de la partie la plus large de la poitrine, bras le long du corps.|Autour de la taille naturelle, la partie la plus étroite du torse.|Autour de la partie la plus large des hanches.|De la pointe de l'épaule au poignet, bras légèrement plié.|De la base du cou à la longueur souhaitée du vêtement.|De la taille à la cheville, le long de l'extérieur de la jambe.|Votre taille sans chaussures.`,
      `Alrededor de la base del cuello, con un dedo de holgura.|De costura a costura por la espalda, entre los puntos del hombro.|Alrededor de la parte más ancha del pecho o busto, con los brazos caídos.|Alrededor de la cintura natural, la parte más estrecha del torso.|Alrededor de la parte más ancha de las caderas.|Del punto del hombro a la muñeca, con el brazo ligeramente doblado.|De la base del cuello hasta donde quieres que termine la prenda.|De la cintura al tobillo por el exterior de la pierna.|Tu estatura sin zapatos.`,
    ],
  };
  var KIND = {
    tunic: [`Tunic`, `Tunique`, `Túnica`],
    robe: [`Flowing robe`, `Robe ample`, `Túnica amplia`],
    wrapper: [`Wrapper`, `Pagne`, `Paño envolvente`],
    set: [`Matching set`, `Ensemble assorti`, `Conjunto a juego`],
    gown: [`Gown`, `Robe longue`, `Vestido`],
    cloth: [`Handwoven cloth`, `Tissu tissé main`, `Tela tejida a mano`],
    cap: [`Cap`, `Calot`, `Gorro`],
    wrap: [`Head wrap`, `Foulard de tête`, `Pañuelo de cabeza`],
    beads: [`Beads`, `Perles`, `Cuentas`],
  };
  var CN = [
    [`Nigeria`, `Nigéria`, `Nigeria`],
    [`United Kingdom`, `Royaume-Uni`, `Reino Unido`],
    [`United States`, `États-Unis`, `Estados Unidos`],
    [`Canada`, `Canada`, `Canadá`],
    [`Ghana`, `Ghana`, `Ghana`],
    [`France`, `France`, `Francia`],
    [`Spain`, `Espagne`, `España`],
  ];
  var IC = {
    Instagram:
      '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".8" fill="currentColor"/>',
    TikTok:
      '<path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 4c.3 2.4 1.9 3.9 4.5 4.1"/>',
    Facebook:
      '<path d="M14 21v-8h2.7l.5-3H14V8c0-.9.4-1.5 1.6-1.5H17V4.1C16.6 4 15.8 4 14.9 4 12.7 4 11 5.3 11 7.8V10H8.5v3H11v8"/>',
    X: '<path d="M5 5l14 14M19 5L5 19"/>',
    Pinterest:
      '<circle cx="12" cy="12" r="9"/><path d="M11 18l1.4-6.2M9.5 12.6C8.6 10.2 10.5 8 12.8 8.3c2.2.3 2.8 2.6 2 4.3-.7 1.4-2.4 1.8-3.4 1"/>',
    YouTube:
      '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/>',
    WhatsApp:
      '<path d="M4 20l1.2-4A8.5 8.5 0 1 1 8.2 18.8z"/><path d="M9 8.8c0 3.2 2.8 6 6 6l.8-1.6-1.9-.9-.9.8c-.9-.4-1.9-1.3-2.3-2.3l.8-.9-.9-1.9z"/>',
  };

  // item: [image, name|0, kind, colour, who(him|her|both|acc), objectPosition, crop[x%,y%,zoom]]
  var C = {
    igbo: {
      n: "Igbo",
      card: ["igbo-2", "50% 30%"],
      items: [
        ["igbo-1", "Isiagu", "gown", "green", "her"],
        ["igbo-2", "Isiagu", "set", "black", "both"],
        ["igbo-3", 0, "set", "white", "both"],
        ["igbo-4", "Isiagu", "gown", "maroon", "her"],
        ["igbo-5", "Isiagu", "robe", "black", "him"],
        ["igbo-6", 0, "robe", "maroon", "him"],
      ],
    },
    yoruba: {
      n: "Yoruba",
      card: ["yoruba-5", "50% 25%"],
      items: [
        ["yoruba-1", "Agbada", "robe", "brown", "him", "50% 20%"],
        ["yoruba-2", "Agbada", "robe", "brown", "him"],
        ["yoruba-3", "Agbada", "robe", "green", "him", "50% 25%"],
        ["yoruba-4", "Adire", "set", "indigo", "her"],
        ["yoruba-5", "Aso oke", "set", "green", "her"],
        ["yoruba-6", "Aso oke", "set", "gold", "her"],
      ],
    },
    hausa: {
      n: "Hausa",
      card: ["hausa-2", "50% 25%"],
      items: [
        ["hausa-1", 0, "gown", "bronze", "her", "50% 22%"],
        ["hausa-2", 0, "gown", "maroon", "her", "50% 25%"],
        ["hausa-3", "Babban riga", "robe", "red", "him", "50% 25%"],
        ["hausa-4", 0, "set", "multi", "both", "50% 35%"],
      ],
    },
    edo: {
      n: "Edo",
      card: ["edo-2", "50% 20%"],
      items: [
        ["edo-1", 0, "set", "brown", "him"],
        ["edo-2", 0, "gown", "red", "her"],
        [
          "edo-2",
          "Coral beads",
          "beads",
          "coral",
          "acc",
          "50% 40%",
          [50.8, 42.7, 2],
        ],
        ["edo-2", 0, "cap", "coral", "acc", "50% 20%", [50, 17.3, 2.4]],
      ],
    },
    calabar: {
      n: "Calabar",
      card: ["calabar-5", "50% 22%"],
      items: [
        ["calabar-1", 0, "set", "blue", "him", "50% 33%"],
        ["calabar-2", 0, "set", "green", "him", "50% 15%"],
        ["calabar-3", 0, "set", "green", "her", "50% 30%"],
        ["calabar-4", 0, "gown", "maroon", "her"],
        ["calabar-5", 0, "gown", "red", "her", "50% 22%"],
        ["calabar-6", 0, "set", "brown", "both", "50% 30%"],
      ],
    },
    tiv: {
      n: "Tiv",
      card: ["tiv-2", "50% 32%"],
      items: [
        ["tiv-1", "A'nger", "set", "bw", "her"],
        ["tiv-2", "A'nger", "set", "bw", "him", "50% 32%"],
        ["tiv-2", 0, "cap", "bw", "acc", "50% 20%", [38.2, 22.4, 2.8]],
        [
          "tiv-2",
          "Beads",
          "beads",
          "coral",
          "acc",
          "50% 35%",
          [46.3, 35.5, 2.2],
        ],
      ],
    },
  };
  var HERO = [
    ["igbo-2", "igbo", "50% 26%"],
    ["yoruba-5", "yoruba", "50% 22%"],
    ["hausa-2", "hausa", "50% 20%"],
    ["edo-2", "edo", "50% 18%"],
    ["calabar-6", "calabar", "50% 30%"],
    ["tiv-2", "tiv", "50% 32%"],
  ];
  var IMG = function (k) {
    return "assets/img/" + k + ".jpg";
  };
  var t = function (k) {
      return D[k][LI];
    },
    parts = function (k) {
      return t(k).split("|");
    },
    lk = function (n) {
      return LINKS[n] || "#";
    };
  var COLS = [
    "black",
    "white",
    "green",
    "maroon",
    "brown",
    "indigo",
    "gold",
    "bronze",
    "red",
    "blue",
    "multi",
    "bw",
    "coral",
  ];
  var MK = [
    "neck",
    "shoulder",
    "chest",
    "waist",
    "hips",
    "sleeve",
    "length",
    "trouser",
    "height",
  ];
  var MG = {
    him: [
      "neck",
      "shoulder",
      "chest",
      "waist",
      "hips",
      "sleeve",
      "length",
      "trouser",
    ],
    her: ["shoulder", "chest", "waist", "hips", "sleeve", "length", "height"],
    acc: [],
  };
  var ML = function (k) {
    return parts("mlabels")[MK.indexOf(k)];
  };
  var title = function (it) {
    return it[1] || KIND[it[2]][LI];
  };
  var sub = function (it) {
    return (
      (it[1] ? KIND[it[2]][LI] + " \u00b7 " : "") +
      parts("colors")[COLS.indexOf(it[3])]
    );
  };
  var bl = function (id) {
    return t(id === "calabar" ? "b_efik" : "b_" + id);
  };
  var pimg = function (it, alt) {
    var c = it[6],
      o = c ? c[0] + "% " + c[1] + "%" : it[5] || "50% 28%";
    return (
      '<img src="' +
      IMG(it[0]) +
      '" alt="' +
      alt +
      '" loading="lazy" style="object-position:' +
      o +
      (c ? ";transform-origin:" + o + ";transform:scale(" + c[2] + ")" : "") +
      '">'
    );
  };
  var cards = function () {
    return (
      '<div class="grid">' +
      Object.keys(C)
        .map(function (id) {
          var c = C[id];
          return (
            '<a class="card" href="' +
            lk(id) +
            '"><div class="tile"><img src="' +
            IMG(c.card[0]) +
            '" alt="' +
            c.n +
            '" loading="lazy" style="object-position:' +
            c.card[1] +
            '"></div><div class="t"><h3>' +
            c.n +
            "</h3><p>" +
            bl(id) +
            "</p></div></a>"
          );
        })
        .join("") +
      "</div>"
    );
  };
  var why = function () {
    return (
      '<div class="four">' +
      [1, 2, 3, 4]
        .map(function (i) {
          return (
            "<div><h3>" +
            t("w" + i + "h") +
            "</h3><p>" +
            t("w" + i + "p") +
            "</p></div>"
          );
        })
        .join("") +
      "</div>"
    );
  };
  var steps = function () {
    return (
      '<ol class="steps">' +
      [1, 2, 3, 4, 5]
        .map(function (i) {
          return (
            "<li><b>" +
            t("s" + i + "h") +
            "</b><span>" +
            t("s" + i + "p") +
            "</span></li>"
          );
        })
        .join("") +
      "</ol>"
    );
  };
  var panels = function () {
    return (
      '<div class="two"><div class="panel"><p class="eyebrow">' +
      t("forArt") +
      "</p><h3>" +
      t("becomeH") +
      "</h3><p>" +
      t("becomeP") +
      "</p><small>" +
      t("becomeO") +
      '</small><a class="btn" href="' +
      lk("contact") +
      '?topic=join">' +
      t("apply") +
      '</a></div><div class="panel"><p class="eyebrow">' +
      t("forTrade") +
      "</p><h3>" +
      t("tradeH") +
      "</h3><p>" +
      t("tradeP") +
      "</p><small>" +
      t("tradeO") +
      '</small><a class="btn ghost" href="' +
      lk("contact") +
      '?topic=trade">' +
      t("reqCat") +
      "</a></div></div>"
    );
  };
  var soc = function () {
    return (
      '<div class="soc">' +
      SOC.map(function (s) {
        return (
          '<a href="' +
          s[1] +
          '" target="_blank" rel="noopener" aria-label="' +
          s[0] +
          '"><svg viewBox="0 0 24 24" aria-hidden="true">' +
          IC[s[0]] +
          "</svg>" +
          s[0] +
          "</a>"
        );
      }).join("") +
      "</div>"
    );
  };
  var head = function (e, h, s) {
    return (
      '<div class="ph"><div class="wrap"><p class="eyebrow">' +
      e +
      "</p><h1>" +
      h +
      "</h1>" +
      (s ? '<p class="sub" style="margin:0">' + s + "</p>" : "") +
      "</div></div>"
    );
  };
  var heroIdx = 0;
  function heroBg() {
    return (
      '<div class="hs" aria-hidden="true">' +
      HERO.map(function (h, i) {
        return (
          '<img src="' +
          IMG(h[0]) +
          '" alt="" style="object-position:' +
          h[2] +
          '" class="' +
          (i === heroIdx ? "on" : "") +
          '">'
        );
      }).join("") +
      "</div>"
    );
  }
  function heroCtl() {
    var h = HERO[heroIdx];
    return (
      '<div class="hc"><a href="' +
      lk(h[1]) +
      '" id="hl">' +
      C[h[1]].n +
      ' \u2192</a><div class="dots">' +
      HERO.map(function (x, i) {
        return (
          '<button data-h="' +
          i +
          '" class="' +
          (i === heroIdx ? "on" : "") +
          '" aria-label="' +
          C[x[1]].n +
          '"></button>'
        );
      }).join("") +
      "</div></div>"
    );
  }
  function heroGo(i) {
    heroIdx = (i + HERO.length) % HERO.length;
    document.querySelectorAll(".hs img").forEach(function (e, k) {
      e.classList.toggle("on", k === heroIdx);
    });
    document.querySelectorAll(".dots button").forEach(function (e, k) {
      e.classList.toggle("on", k === heroIdx);
    });
    var l = document.getElementById("hl");
    if (l) {
      l.href = lk(HERO[heroIdx][1]);
      l.textContent = C[HERO[heroIdx][1]].n + " \u2192";
    }
  }
  function item(id, i) {
    var it = C[id].items[i],
      T = title(it);
    return (
      '<div class="item"><button class="slot" data-o="' +
      id +
      ":" +
      i +
      '" aria-label="' +
      t("order") +
      ": " +
      T +
      '">' +
      pimg(it, T) +
      "</button><h3>" +
      T +
      "</h3><p>" +
      sub(it) +
      '</p><div class="row"><small>' +
      t("priceTbd") +
      '</small><button class="btn" data-o="' +
      id +
      ":" +
      i +
      '">' +
      t("order") +
      "</button></div></div>"
    );
  }
  function culturePage(id) {
    var c = C[id],
      o =
        '<div class="ph"><div class="wrap"><p class="eyebrow"><a href="' +
        lk("cultures") +
        '">' +
        t("navCult") +
        "</a></p><h1>" +
        c.n +
        '</h1><p class="sub" style="margin:0 0 22px">' +
        bl(id) +
        '</p><a class="btn ghost" href="' +
        lk("meas") +
        '">' +
        t("guide") +
        "</a></div></div>";
    [
      ["him", "c_him"],
      ["her", "c_her"],
      ["both", "c_both"],
      ["acc", "c_acc"],
    ].forEach(function (g) {
      var li = [];
      c.items.forEach(function (it, i) {
        if (it[4] === g[0]) li.push(i);
      });
      if (!li.length) return;
      o +=
        '<section><div class="wrap"><h2>' +
        t(g[1]) +
        '</h2><div class="grid">' +
        li
          .map(function (i) {
            return item(id, i);
          })
          .join("") +
        "</div></div></section>";
    });
    return (
      o +
      '<section><div class="wrap"><h2>' +
      t("others") +
      '</h2><div class="chips" style="margin-top:0">' +
      Object.keys(C)
        .filter(function (k) {
          return k !== id;
        })
        .map(function (k) {
          return '<a href="' + lk(k) + '">' + C[k].n + "</a>";
        })
        .join("") +
      "</div></div></section>"
    );
  }
  function measPage() {
    var ds = parts("mdescs");
    return (
      head(t("navMeas"), t("measH"), t("measP")) +
      '<section style="border:0;padding-top:0"><div class="wrap"><div class="mc">' +
      MK.map(function (k, i) {
        return "<div><h3>" + ML(k) + "</h3><p>" + ds[i] + "</p></div>";
      }).join("") +
      '</div></div></section><section class="band"><div class="wrap"><h2>' +
      t("tipsH") +
      '</h2><ul class="tips">' +
      parts("tips")
        .map(function (x) {
          return "<li>" + x + "</li>";
        })
        .join("") +
      '</ul><p style="margin-top:28px"><a class="btn" href="' +
      lk("cultures") +
      '">' +
      t("cta1") +
      "</a></p></div></section>"
    );
  }
  function contactPage() {
    var tp = parts("topics"),
      q = new URLSearchParams(location.search).get("topic"),
      ix = { general: 0, join: 1, trade: 2, order: 3 }[q] || 0;
    return (
      head(t("navContact"), t("cH"), t("cP")) +
      '<section><div class="wrap two"><div><p class="eyebrow">' +
      t("follow") +
      "</p>" +
      soc() +
      '<p><a href="mailto:' +
      CFG.email +
      '">' +
      CFG.email +
      '</a></p></div><div><form class="f" id="cf"><label>' +
      t("fName") +
      '<input name="nm" required></label><label>' +
      t("fEmail") +
      '<input name="em" type="email" required></label><label>' +
      t("fCountry") +
      '<input name="ct"></label><label>' +
      t("fTopic") +
      '<select name="tp">' +
      tp
        .map(function (x, i) {
          return (
            "<option" + (i === ix ? " selected" : "") + ">" + x + "</option>"
          );
        })
        .join("") +
      "</select></label><label>" +
      t("fMsg") +
      '<textarea name="ms" rows="4" required></textarea></label><div><button class="btn" type="submit">' +
      t("send") +
      '</button></div></form><p class="ok" id="ok" role="status"></p><p style="color:var(--muted);font-size:13px">' +
      t("waNote") +
      "</p></div></div></section>"
    );
  }
  function page() {
    if (PAGE === "cultures")
      return [
        t("navCult"),
        head(t("cultE"), t("cultH"), t("cultS")) +
          '<section style="border:0;padding-top:0"><div class="wrap">' +
          cards() +
          "</div></section>",
      ];
    if (PAGE === "culture") return [C[CID].n, culturePage(CID)];
    if (PAGE === "meas") return [t("navMeas"), measPage()];
    if (PAGE === "how")
      return [
        t("navHow"),
        head(t("howE"), t("howH"), t("howS")) +
          '<section><div class="wrap">' +
          steps() +
          '</div></section><section class="band"><div class="wrap"><h2>' +
          t("measH") +
          '</h2><p class="sub">' +
          t("measP") +
          '</p><a class="btn" href="' +
          lk("meas") +
          '">' +
          t("guide") +
          "</a></div></section>",
      ];
    if (PAGE === "partner")
      return [
        t("navPart"),
        head(t("forArt") + " / " + t("forTrade"), t("pH")) +
          '<section style="border:0;padding-top:0"><div class="wrap">' +
          panels() +
          "</div></section>",
      ];
    if (PAGE === "contact") return [t("navContact"), contactPage()];
    return [
      "",
      '<div class="hero">' +
        heroBg() +
        '<div class="wrap"><div class="threads" aria-hidden="true"><i style="background:var(--t1)"></i><i style="background:var(--t2)"></i><i style="background:var(--t3)"></i><i style="background:var(--t4)"></i><i style="background:var(--t5)"></i></div><h1>' +
        t("h1a") +
        "<br>" +
        t("h1b") +
        '</h1><p class="lead">' +
        t("lead") +
        '</p><div class="cta"><a class="btn" href="' +
        lk("cultures") +
        '">' +
        t("cta1") +
        '</a><a class="btn ghost" href="' +
        lk("how") +
        '">' +
        t("cta2") +
        "</a></div></div>" +
        heroCtl() +
        "</div>" +
        '<section><div class="wrap"><p class="eyebrow">' +
        t("introE") +
        "</p><h2>" +
        t("introH") +
        '</h2><p class="sub" style="margin:0">' +
        t("introP") +
        "</p></div></section>" +
        '<section><div class="wrap"><p class="eyebrow">' +
        t("cultE") +
        "</p><h2>" +
        t("cultH") +
        '</h2><p class="sub">' +
        t("cultS") +
        "</p>" +
        cards() +
        '<div class="chips">' +
        parts("occ")
          .map(function (x) {
            return '<a href="' + lk("cultures") + '">' + x + "</a>";
          })
          .join("") +
        "</div></div></section>" +
        '<section class="band"><div class="wrap"><p class="eyebrow">' +
        t("whyE") +
        "</p><h2>" +
        t("whyH") +
        '</h2><p class="sub"></p>' +
        why() +
        "</div></section>" +
        '<section><div class="wrap"><p class="eyebrow">' +
        t("howE") +
        "</p><h2>" +
        t("howH") +
        '</h2><p class="sub">' +
        t("howS") +
        "</p>" +
        steps() +
        "</div></section>" +
        '<section class="band"><div class="wrap">' +
        panels() +
        "</div></section>",
    ];
  }
  var ease = function (q) {
    return q < 0.5 ? 2 * q * q : 1 - Math.pow(-2 * q + 2, 2) / 2;
  };
  var SS = function (k, v) {
    try {
      if (v === undefined) return sessionStorage.getItem(k);
      sessionStorage.setItem(k, v);
    } catch (e) {
      return null;
    }
  };
  function splash() {
    if (
      (window.matchMedia &&
        matchMedia("(prefers-reduced-motion: reduce)").matches) ||
      SS("mt-sp")
    )
      return false;
    SS("mt-sp", "1");
    var s = document.createElement("div");
    s.id = "sp";
    s.setAttribute("aria-hidden", "true");
    s.innerHTML =
      '<svg viewBox="0 0 60 40"><path class="strand" style="stroke:var(--t1)"/><path class="strand" style="stroke:var(--t2)"/><path class="strand" style="stroke:var(--t3)"/><path class="strand" style="stroke:var(--t4)"/><path class="strand" style="stroke:var(--t5)"/></svg><div class="sw">Many Threads</div><div class="ss">' +
      t("slogan") +
      '</div><button class="sk" tabindex="-1">' +
      t("skip") +
      "</button>";
    document.body.appendChild(s);
    var w = s.querySelector(".sw"),
      g = s.querySelector(".ss"),
      ps = s.querySelectorAll(".strand"),
      done = false,
      st = null;
    function end() {
      if (done) return;
      done = true;
      s.classList.add("out");
      setTimeout(function () {
        s.remove();
      }, 800);
    }
    s.addEventListener("click", end);
    document.addEventListener("keydown", end, { once: true });
    (function f(now) {
      if (done) return;
      if (st === null) st = now;
      var x = (now - st) / 1000;
      drawThreads(
        [0, 1, 2, 3, 4].map(function (i) {
          return Math.min(1, Math.max(0, (x - 0.5 - i * 0.12) / 1.3));
        }),
        "#sp .strand",
      );
      ps.forEach(function (p) {
        p.style.opacity = Math.min(1, x / 0.4);
      });
      var a = ease(Math.min(1, Math.max(0, (x - 1.9) / 0.7)));
      w.style.opacity = a;
      w.style.letterSpacing = 0.3 - 0.16 * a + "em";
      var b = Math.min(1, Math.max(0, (x - 2.5) / 0.6));
      g.style.opacity = b;
      g.style.transform = "translateY(" + (1 - b) * 8 + "px)";
      if (x < 3.9) requestAnimationFrame(f);
      else end();
    })(performance.now());
    return true;
  }
  var Y0 = [4, 12, 20, 28, 36],
    Y1 = [15, 17.5, 20, 22.5, 25];
  function drawThreads(p, sel) {
    document.querySelectorAll(sel || "#logo .strand").forEach(function (el, i) {
      var q = typeof p === "number" ? p : p[i],
        e = q < 0.5 ? 2 * q * q : 1 - Math.pow(-2 * q + 2, 2) / 2,
        y = (Y0[i] + (Y1[i] - Y0[i]) * e).toFixed(2);
      el.setAttribute(
        "d",
        "M0 " + Y0[i] + " C18 " + Y0[i] + " 22 " + y + " 38 " + y + " L60 " + y,
      );
    });
  }
  var reduce =
      window.matchMedia &&
      matchMedia("(prefers-reduced-motion: reduce)").matches,
    busy = false;
  function weave() {
    if (reduce || busy) return;
    busy = true;
    var s = null;
    (function f(now) {
      if (s === null) s = now;
      var t = (now - s) / 1000;
      drawThreads(
        [0, 1, 2, 3, 4].map(function (i) {
          return Math.min(1, Math.max(0, (t - i * 0.08) / 1.1));
        }),
      );
      if (t < 1.5) requestAnimationFrame(f);
      else {
        drawThreads(1);
        busy = false;
      }
    })(performance.now());
  }
  function render() {
    LI = LANGS.indexOf(L);
    var pg = page(),
      a = PAGE === "culture" ? "cultures" : PAGE;
    document.documentElement.lang = L;
    document.documentElement.dataset.theme = TH;
    var nav = [
      ["cultures", "navCult"],
      ["meas", "navMeas"],
      ["how", "navHow"],
      ["partner", "navPart"],
      ["contact", "navContact"],
    ];
    document.getElementById("root").innerHTML =
      '<div class="ann">' +
      t("ann") +
      '</div><div class="util"><div class="wrap"><label>' +
      t("ship") +
      ' <select id="co">' +
      CN.map(function (c) {
        return "<option>" + c[LI] + "</option>";
      }).join("") +
      "</select></label><label>" +
      t("cur") +
      ' <select id="cu"><option>NGN \u20a6</option><option>GBP \u00a3</option><option>USD $</option><option>EUR \u20ac</option></select></label><div class="lgs" role="group" aria-label="' +
      t("lang") +
      '">' +
      [
        ["en", "English"],
        ["fr", "Fran\u00e7ais"],
        ["es", "Espa\u00f1ol"],
      ]
        .map(function (x) {
          return (
            '<button class="sm lb" data-l="' +
            x[0] +
            '" lang="' +
            x[0] +
            '" aria-pressed="' +
            (L === x[0]) +
            '">' +
            x[1] +
            "</button>"
          );
        })
        .join("") +
      "</div></div></div>" +
      '<header><div class="wrap"><a class="logo" href="' +
      lk("home") +
      '" id="logo" aria-label="Many Threads"><svg viewBox="0 0 60 40" aria-hidden="true"><path class="strand" style="stroke:var(--t1)"/><path class="strand" style="stroke:var(--t2)"/><path class="strand" style="stroke:var(--t3)"/><path class="strand" style="stroke:var(--t4)"/><path class="strand" style="stroke:var(--t5)"/></svg><span>Many Threads</span></a>' +
      '<nav id="nav">' +
      nav
        .map(function (n) {
          return (
            '<a href="' +
            lk(n[0]) +
            '"' +
            (a === n[0] ? ' aria-current="page"' : "") +
            ">" +
            t(n[1]) +
            "</a>"
          );
        })
        .join("") +
      '</nav><div class="hr"><button class="sm tg" id="th" aria-label="' +
      t("theme") +
      '" title="' +
      t("theme") +
      '" aria-pressed="' +
      (TH === "dark") +
      '"><svg viewBox="0 0 24 24" aria-hidden="true"><path class="moon" d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/><g class="sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></g></svg></button><button class="sm menu" id="mn" aria-expanded="false">' +
      t("menu") +
      "</button></div></div></header>" +
      "<main>" +
      pg[1] +
      "</main>" +
      '<footer><div class="wrap"><div class="fgrid"><div><h4>' +
      t("wear") +
      '</h4><p style="margin:0;color:var(--muted)">' +
      t("joinP") +
      '</p><form class="sign" id="nf"><input type="email" name="em" required placeholder="' +
      t("fEmail") +
      '" aria-label="' +
      t("fEmail") +
      '"><button class="btn" type="submit">' +
      t("join") +
      '</button></form><p class="ok" id="nok" role="status"></p></div><div><h4>' +
      t("explore") +
      "</h4><ul>" +
      nav
        .map(function (n) {
          return '<li><a href="' + lk(n[0]) + '">' + t(n[1]) + "</a></li>";
        })
        .join("") +
      "</ul></div><div><h4>" +
      t("follow") +
      "</h4>" +
      soc() +
      '<a href="mailto:' +
      CFG.email +
      '" style="color:var(--muted)">' +
      CFG.email +
      '</a></div></div><p class="fine">' +
      t("rights") +
      '</p></div></footer><dialog id="od"></dialog>';
    var uw = document.querySelector(".util .wrap"),
      nv = document.getElementById("nav"),
      tg = document.getElementById("th");
    if (uw && nv) {
      var nu = uw.cloneNode(true);
      nu.className = "nav-util";
      nu.querySelectorAll("[id]").forEach(function (x) {
        x.removeAttribute("id");
      });
      if (tg) {
        var t2 = tg.cloneNode(true);
        t2.insertAdjacentHTML(
          "beforeend",
          '<span class="tl">' + t("theme") + "</span>",
        );
        nu.appendChild(t2);
      }
      nv.appendChild(nu);
    }
    drawThreads(1);
  }
  var OI, OC;
  function openOrder(id, i) {
    OC = id;
    OI = C[id].items[i];
    var it = OI,
      g = it[4] === "both" ? ["him", "her"] : [it[4]],
      T = title(it);
    var F = g
      .map(function (x) {
        var ks = MG[x];
        return ks.length
          ? "<fieldset><legend>" +
              (g.length > 1 ? t("c_" + x) + " \u00b7 " : "") +
              t("dTitle") +
              '</legend><div class="mg">' +
              ks
                .map(function (k) {
                  return (
                    "<label>" +
                    ML(k) +
                    '<input data-m="' +
                    k +
                    '" data-g="' +
                    x +
                    '" inputmode="decimal" placeholder="0"></label>'
                  );
                })
                .join("") +
              "</div></fieldset>"
          : '<p style="color:var(--muted)">' + t("noMeas") + "</p>";
      })
      .join("");
    var d = document.getElementById("od");
    d.innerHTML =
      '<div class="dg"><button class="x" data-x="1" aria-label="' +
      t("close") +
      '">\u00d7</button><div class="dh"><div class="dimg">' +
      pimg(it, T) +
      '</div><div><p class="eyebrow" style="margin:0 0 6px">' +
      C[id].n +
      "</p><h3>" +
      T +
      "</h3><p>" +
      sub(it) +
      '</p></div></div><p style="color:var(--muted);font-size:14px">' +
      t("dP") +
      '</p><form id="of"><div class="fr2"><label>' +
      t("fName") +
      '<input name="nm" required></label><label>' +
      t("fCountry") +
      '<input name="ct" required></label><label>' +
      t("unit") +
      '<select name="un"><option value="in">' +
      t("uIn") +
      '</option><option value="cm">' +
      t("uCm") +
      "</option></select></label></div>" +
      F +
      "<label>" +
      t("notes") +
      '<textarea name="nt" rows="2"></textarea></label><p style="margin:10px 0 0;font-size:13px"><a href="' +
      lk("meas") +
      '">' +
      t("guide") +
      ' \u2192</a></p><div class="acts"><button type="button" class="btn" data-w="order">' +
      t("btnOrder") +
      '</button><button type="button" class="btn ghost" data-w="ask">' +
      t("btnAsk") +
      "</button>" +
      (CFG.pay
        ? '<a class="btn ghost" href="' +
          CFG.pay +
          '" target="_blank" rel="noopener">' +
          t("btnPay") +
          "</a>"
        : "") +
      "</div></form></div>";
    d.showModal();
  }
  function wa(kind) {
    var f = document.getElementById("of");
    if (!f.reportValidity()) return;
    var ms = [].slice.call(f.querySelectorAll("[data-m]")).filter(function (x) {
      return x.value.trim();
    });
    var m = [
      t(kind === "order" ? "msgOrder" : "msgAsk"),
      title(OI) + " (" + C[OC].n + ", " + sub(OI) + ")",
      t("fName") + ": " + f.elements.nm.value.trim(),
      t("fCountry") + ": " + f.elements.ct.value.trim(),
    ];
    if (ms.length) {
      m.push(t("dTitle") + " (" + f.elements.un.value + "):");
      ms.forEach(function (x) {
        m.push(
          "- " +
            (OI[4] === "both" ? t("c_" + x.dataset.g) + " " : "") +
            ML(x.dataset.m) +
            ": " +
            x.value.trim(),
        );
      });
    }
    if (f.elements.nt.value.trim())
      m.push(t("notes") + ": " + f.elements.nt.value.trim());
    window.open(
      "https://wa.me/" + CFG.wa + "?text=" + encodeURIComponent(m.join("\n")),
      "_blank",
    );
  }
  var root = document.getElementById("root");
  root.addEventListener("mouseover", function (e) {
    var l = e.target.closest && e.target.closest("#logo");
    if (l && !l.contains(e.relatedTarget)) weave();
  });
  root.addEventListener("focusin", function (e) {
    if (e.target.id === "logo") weave();
  });
  root.addEventListener("click", function (e) {
    if (e.target.id === "od") {
      e.target.close();
      return;
    }
    var el = e.target.closest("button");
    if (!el) return;
    if (el.id === "th") {
      TH = TH === "dark" ? "light" : "dark";
      LS("mt-t", TH);
      document.documentElement.dataset.theme = TH;
      el.setAttribute("aria-pressed", TH === "dark");
    } else if (el.dataset.l) {
      L = el.dataset.l;
      LS("mt-l", L);
      render();
    } else if (el.id === "mn") {
      var n = document.getElementById("nav"),
        o = n.classList.toggle("open");
      el.setAttribute("aria-expanded", o);
    } else if (el.dataset.h !== undefined) {
      heroGo(+el.dataset.h);
    } else if (el.dataset.o) {
      var p = el.dataset.o.split(":");
      openOrder(p[0], +p[1]);
    } else if (el.dataset.w) {
      wa(el.dataset.w);
    } else if (el.dataset.x) {
      document.getElementById("od").close();
    }
  });
  root.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target,
      v = function (n) {
        return f.elements[n].value.trim();
      };
    if (f.id === "cf") {
      var m = [
        t("fTopic") + ": " + v("tp"),
        t("fName") + ": " + v("nm"),
        t("fEmail") + ": " + v("em"),
        t("fCountry") + ": " + v("ct"),
        "",
        v("ms"),
      ];
      window.open(
        "https://wa.me/" + CFG.wa + "?text=" + encodeURIComponent(m.join("\n")),
        "_blank",
      );
      document.getElementById("ok").textContent = t("sent");
    } else if (f.id === "nf") {
      window.location.href =
        "mailto:" +
        CFG.email +
        "?subject=" +
        encodeURIComponent(t("join")) +
        "&body=" +
        encodeURIComponent(v("em"));
      document.getElementById("nok").textContent = t("thanks");
    }
  });
  setInterval(function () {
    if (!reduce && document.querySelector(".hs") && !document.hidden)
      heroGo(heroIdx + 1);
  }, 5500);
  render();
  var sp = splash();
  setTimeout(weave, sp ? 4300 : 400);
})();
