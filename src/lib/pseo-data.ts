// ─── Programmatic SEO data ───────────────────────────────
// Each entry generates a unique /services/[slug] page targeting
// "[event type] in [location]" search intent.

export interface PseoPage {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  intro: string;
  whatWeOffer: string[];
  whyChooseUs: string;
  popularVenues: string[];
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
  eventType: string;
  location: string;
}

export const PSEO_PAGES: PseoPage[] = [
  // ─── Wedding planners ──────────────────────────────────
  {
    slug: "wedding-planners-in-chennai",
    title: "Wedding Planners in Chennai | City Heights Events",
    h1: "Wedding Planners in Chennai",
    metaDescription:
      "Looking for trusted wedding planners in Chennai? City Heights Events plans unforgettable weddings with bespoke decor, entertainment, and coordination. Est. 2012.",
    intro:
      "Your wedding deserves to be extraordinary. City Heights Events has been helping couples across Chennai plan the wedding of their dreams since 2012. From traditional South Indian ceremonies to contemporary receptions, our team led by Jabes Amirtharaj handles every detail — venue selection, decor, catering, entertainment, and day-of coordination — so you can focus on making memories.",
    whatWeOffer: [
      "Complete wedding planning and coordination from engagement to reception",
      "Bespoke decor and floral design tailored to your theme",
      "Professional photography and videography coordination",
      "Live entertainment and DJ booking",
      "Catering management with top Chennai caterers",
      "Guest management and RSVP coordination",
    ],
    whyChooseUs:
      "With over a decade of experience and hundreds of weddings delivered across Chennai, City Heights Events understands the nuances of both traditional and modern celebrations. Our founder Jabes Amirtharaj personally oversees every wedding to ensure flawless execution.",
    popularVenues: [
      "ITC Grand Chola, Guindy",
      "The Leela Palace, Adyar",
      "Taj Coromandel, Nungambakkam",
      "Sheraton Grand, T. Nagar",
      "Radisson Blu, Paschim Vihar",
    ],
    faqs: [
      {
        q: "How much does a wedding planner cost in Chennai?",
        a: "Wedding planning packages at City Heights Events start from ₹50,000 for day-of coordination and go up to ₹2,00,000+ for full-service planning including decor, entertainment, and vendor management. We offer custom quotes based on your requirements.",
      },
      {
        q: "How early should I book a wedding planner in Chennai?",
        a: "We recommend booking at least 3-6 months in advance for full-service planning. For peak wedding season (November-February), booking 6-12 months ahead ensures the best venue and vendor availability.",
      },
      {
        q: "Do you handle both traditional and modern weddings?",
        a: "Absolutely. We have extensive experience with traditional South Indian weddings, Christian ceremonies, Muslim nikaahs, and contemporary fusion celebrations. Our team adapts to your cultural and personal preferences.",
      },
    ],
    relatedSlugs: [
      "wedding-reception-organisers-chennai",
      "wedding-decorators-in-chennai",
      "event-planners-nungambakkam",
    ],
    eventType: "Wedding",
    location: "Chennai",
  },
  {
    slug: "wedding-reception-organisers-chennai",
    title: "Wedding Reception Organisers in Chennai | City Heights Events",
    h1: "Wedding Reception Organisers in Chennai",
    metaDescription:
      "Professional wedding reception organisation in Chennai. City Heights Events delivers stunning receptions with decor, entertainment, and flawless coordination.",
    intro:
      "The reception is where your celebration truly comes alive. City Heights Events specialises in creating grand wedding receptions across Chennai that leave your guests talking for years. Our team manages everything from stage design and lighting to entertainment and catering logistics, ensuring a seamless and spectacular evening.",
    whatWeOffer: [
      "Grand stage design and lighting concepts",
      "Entry choreography and special effects",
      "Live band and DJ entertainment",
      "Multi-course catering coordination",
      "Photo and video booth setups",
      "Guest seating and flow management",
    ],
    whyChooseUs:
      "We have organised receptions for 100 to 1,000+ guests at venues across Chennai. Our attention to detail in stage design, lighting, and guest flow ensures that your reception feels both grand and personal.",
    popularVenues: [
      "ITC Grand Chola, Guindy",
      "Crowne Plaza, Adyar",
      "Hilton Chennai",
      "Ambassador Pallava, Egmore",
      "Residency Towers, T. Nagar",
    ],
    faqs: [
      {
        q: "What is included in a wedding reception package?",
        a: "Our reception packages include venue coordination, stage and decor design, lighting, entertainment booking, catering management, photography coordination, and day-of event management. Packages start from ₹75,000.",
      },
      {
        q: "Can you handle large receptions with 500+ guests?",
        a: "Yes, we regularly manage receptions for 500-1,000+ guests. We have the logistics expertise and vendor network to handle large-scale events with ease.",
      },
    ],
    relatedSlugs: [
      "wedding-planners-in-chennai",
      "wedding-decorators-in-chennai",
      "corporate-event-planners-chennai",
    ],
    eventType: "Wedding Reception",
    location: "Chennai",
  },
  {
    slug: "wedding-decorators-in-chennai",
    title: "Wedding Decorators in Chennai | City Heights Events",
    h1: "Wedding Decorators in Chennai",
    metaDescription:
      "Stunning wedding decoration services in Chennai. City Heights Events creates breathtaking floral, stage, and venue decor for weddings and receptions.",
    intro:
      "First impressions matter, and your wedding decor sets the tone for the entire celebration. City Heights Events offers bespoke wedding decoration services across Chennai — from traditional mandap designs to modern minimalist themes, elaborate floral installations, and dramatic lighting concepts that transform any venue into a visual masterpiece.",
    whatWeOffer: [
      "Custom mandap and stage design",
      "Floral installations and centrepieces",
      "LED and ambient lighting design",
      "Entrance and pathway decor",
      "Table settings and linen coordination",
      "Theme-based complete venue transformation",
    ],
    whyChooseUs:
      "Our in-house design team works closely with you to bring your vision to life. Whether you want a classic temple-inspired mandap or a contemporary European garden theme, we have the creative range and vendor partnerships to execute any style flawlessly.",
    popularVenues: [
      "The Leela Palace, Adyar",
      "Taj Club House, Mount Road",
      "Feathers Hotel, Anna Salai",
      "Courtyard by Marriott, Nungambakkam",
      "Kalaivanar Arangam",
    ],
    faqs: [
      {
        q: "How much does wedding decoration cost in Chennai?",
        a: "Wedding decoration costs in Chennai vary based on the theme, venue size, and floral requirements. Basic packages start around ₹30,000 for simple setups. Premium theme-based decor with floral installations typically ranges from ₹1,00,000 to ₹5,00,000+.",
      },
      {
        q: "Can you match a specific theme or colour palette?",
        a: "Absolutely. We work from mood boards, Pinterest references, or your own ideas to create a cohesive look across the entire venue. Our design team will present concepts for your approval before execution.",
      },
    ],
    relatedSlugs: [
      "wedding-planners-in-chennai",
      "wedding-reception-organisers-chennai",
      "birthday-party-organisers-chennai",
    ],
    eventType: "Wedding Decoration",
    location: "Chennai",
  },

  // ─── Corporate events ──────────────────────────────────
  {
    slug: "corporate-event-planners-chennai",
    title: "Corporate Event Planners in Chennai | City Heights Events",
    h1: "Corporate Event Planners in Chennai",
    metaDescription:
      "Professional corporate event planning in Chennai. Conferences, product launches, award ceremonies, and team-building events by City Heights Events.",
    intro:
      "When your brand's reputation is on the line, you need an event partner you can trust. City Heights Events delivers polished corporate events in Chennai — from intimate board meetings and product launches to large-scale conferences and award ceremonies. We handle the logistics, production, and coordination so your team can focus on the business.",
    whatWeOffer: [
      "Conference and seminar planning",
      "Product launch events with media coordination",
      "Annual award ceremonies and gala dinners",
      "Team-building events and offsites",
      "Exhibition and trade show management",
      "Corporate entertainment and artist booking",
    ],
    whyChooseUs:
      "We understand the precision corporate events demand. From branded stage design and AV production to seamless registration and guest management, our team has delivered events for companies across Chennai's IT corridor, automobile industry, and financial sector.",
    popularVenues: [
      "Chennai Trade Centre, Nandambakkam",
      "ITC Grand Chola, Guindy",
      "Hilton Chennai",
      "Hyatt Regency, Teynampet",
      "Taj Connemara, Binny Road",
    ],
    faqs: [
      {
        q: "Can you manage a corporate conference for 500+ attendees?",
        a: "Yes. We have managed corporate events ranging from 50-person board meetings to 2,000+ attendee conferences. Our team handles venue sourcing, AV production, registration, catering, and on-site management.",
      },
      {
        q: "Do you provide branding and stage design for corporate events?",
        a: "Absolutely. We offer complete branded stage design, backdrops, signage, and digital screen content. We work with your brand guidelines to ensure a professional and cohesive look.",
      },
    ],
    relatedSlugs: [
      "product-launch-event-planners-chennai",
      "event-planners-nungambakkam",
      "birthday-party-organisers-chennai",
    ],
    eventType: "Corporate Event",
    location: "Chennai",
  },
  {
    slug: "product-launch-event-planners-chennai",
    title: "Product Launch Event Planners in Chennai | City Heights Events",
    h1: "Product Launch Event Planners in Chennai",
    metaDescription:
      "Plan a memorable product launch in Chennai with City Heights Events. We create buzz-worthy launch events with staging, media, and entertainment.",
    intro:
      "A great product deserves a great launch. City Heights Events specialises in creating high-impact product launch events in Chennai that generate buzz and leave a lasting impression. Whether you're unveiling a new automobile, tech product, or lifestyle brand, we design immersive experiences that put your product in the spotlight.",
    whatWeOffer: [
      "Product unveil staging and dramatic reveal concepts",
      "Media and press coordination",
      "Influencer and VIP guest management",
      "Live streaming and social media integration",
      "Branded venue transformation",
      "Post-event media coverage and reporting",
    ],
    whyChooseUs:
      "With Jabes Amirtharaj's background in both the automotive industry and event management, City Heights brings a unique understanding of product positioning and presentation. We know how to build anticipation and deliver a reveal that gets people talking.",
    popularVenues: [
      "Phoenix MarketCity, Velachery",
      "Express Avenue Mall, Royapettah",
      "ITC Grand Chola, Guindy",
      "VGP Golden Beach Resort, ECR",
      "Crowne Plaza, Adyar",
    ],
    faqs: [
      {
        q: "How far in advance should we plan a product launch?",
        a: "We recommend a minimum of 4-6 weeks for a standard launch event. For large-scale launches with media involvement, 8-12 weeks gives us time to maximise press coverage and VIP attendance.",
      },
      {
        q: "Can you handle automobile launch events?",
        a: "Yes — our founder Jabes Amirtharaj has extensive experience in the automobile industry and has managed car launch events. We understand the specific requirements for vehicle staging, lighting, and guest experience.",
      },
    ],
    relatedSlugs: [
      "corporate-event-planners-chennai",
      "event-planners-nungambakkam",
      "concert-organisers-chennai",
    ],
    eventType: "Product Launch",
    location: "Chennai",
  },

  // ─── Birthday & private ────────────────────────────────
  {
    slug: "birthday-party-organisers-chennai",
    title: "Birthday Party Organisers in Chennai | City Heights Events",
    h1: "Birthday Party Organisers in Chennai",
    metaDescription:
      "Plan the perfect birthday party in Chennai. City Heights Events organises themed parties for kids and adults with decor, entertainment, and catering.",
    intro:
      "Make every birthday unforgettable. City Heights Events organises birthday celebrations across Chennai — from magical themed parties for kids to elegant milestone celebrations for adults. Whether it's a 1st birthday, sweet 16, or a grand 50th celebration, we bring your party vision to life with creative themes, stunning decor, and seamless coordination.",
    whatWeOffer: [
      "Themed party design for kids and adults",
      "Custom cake and dessert table coordination",
      "Entertainment — magicians, DJs, live performers",
      "Balloon and floral decor installations",
      "Photography and videography",
      "Venue selection and catering management",
    ],
    whyChooseUs:
      "We have organised hundreds of birthday celebrations across Chennai, from intimate home parties to grand ballroom affairs. Our team handles everything so you can enjoy the party as a guest at your own celebration.",
    popularVenues: [
      "Forum Vijaya Mall, Vadapalani",
      "VGP Universal Kingdom, ECR",
      "The Park, Anna Salai",
      "Savera Hotel, Mylapore",
      "Private farmhouses, ECR",
    ],
    faqs: [
      {
        q: "How much does a birthday party organiser cost in Chennai?",
        a: "Birthday party packages start from ₹15,000 for basic decor and coordination. Themed parties with entertainment, custom decor, and catering management typically range from ₹40,000 to ₹2,00,000+ depending on the guest count and venue.",
      },
      {
        q: "Can you organise a surprise birthday party?",
        a: "Yes, surprise parties are one of our specialities. We coordinate discreetly with your family or friends to set up the venue and manage guest arrivals without the birthday person knowing.",
      },
    ],
    relatedSlugs: [
      "wedding-planners-in-chennai",
      "event-planners-anna-nagar",
      "event-planners-nungambakkam",
    ],
    eventType: "Birthday Party",
    location: "Chennai",
  },

  // ─── Concerts & entertainment ──────────────────────────
  {
    slug: "concert-organisers-chennai",
    title: "Concert Organisers in Chennai | City Heights Events",
    h1: "Concert Organisers in Chennai",
    metaDescription:
      "Professional concert and live event organisation in Chennai. City Heights Events manages staging, sound, artist booking, and crowd management.",
    intro:
      "From intimate acoustic sets to large-scale music festivals, City Heights Events has the production expertise to deliver concerts in Chennai that sound incredible and run smoothly. Our team manages artist booking, sound and lighting production, staging, crowd management, and permitting — every detail that makes a concert successful.",
    whatWeOffer: [
      "Artist booking and talent coordination",
      "Professional sound and lighting production",
      "Stage design and construction",
      "Crowd management and security coordination",
      "Ticketing and entry management",
      "Permitting and compliance",
    ],
    whyChooseUs:
      "We have the vendor network and technical expertise to deliver concert-quality production. From 200-person club shows to 5,000+ open-air festivals, our team scales to meet the demands of any live music event in Chennai.",
    popularVenues: [
      "YMCA Grounds, Nandanam",
      "Kalaivanar Arangam",
      "Sir Mutha Venkatasubba Rao Concert Hall",
      "VGP Golden Beach Resort, ECR",
      "Island Grounds",
    ],
    faqs: [
      {
        q: "Can you book artists and performers for concerts in Chennai?",
        a: "Yes, we handle the full artist booking process including negotiation, contracting, rider management, and backstage logistics. We have connections with booking agents across India.",
      },
      {
        q: "What permits are needed for outdoor concerts in Chennai?",
        a: "Outdoor concerts in Chennai require police permissions, fire safety clearance, noise pollution permits, and sometimes municipal corporation approvals depending on the venue. We handle the entire permitting process.",
      },
    ],
    relatedSlugs: [
      "product-launch-event-planners-chennai",
      "corporate-event-planners-chennai",
      "event-planners-nungambakkam",
    ],
    eventType: "Concert",
    location: "Chennai",
  },

  // ─── Location-specific ─────────────────────────────────
  {
    slug: "event-planners-nungambakkam",
    title: "Event Planners in Nungambakkam, Chennai | City Heights Events",
    h1: "Event Planners in Nungambakkam",
    metaDescription:
      "Local event planning company in Nungambakkam, Chennai. City Heights Events plans weddings, corporate events, and private parties. Office at Jagannathan Street.",
    intro:
      "Looking for an event planner right in your neighbourhood? City Heights Events is based in Nungambakkam with our office at No. 10, Jagannathan Street. As your local event planning partner, we know the area's best venues, vendors, and logistics inside out. Whether you're planning a wedding, corporate event, or private celebration, our Nungambakkam team is ready to help.",
    whatWeOffer: [
      "Full-service event planning and coordination",
      "Wedding and reception management",
      "Corporate events and conferences",
      "Birthday and milestone celebrations",
      "Venue sourcing across central Chennai",
      "In-person consultations at our Nungambakkam office",
    ],
    whyChooseUs:
      "Being based in the heart of Chennai at Nungambakkam gives us unmatched access to the city's top venues — Taj Coromandel, Courtyard by Marriott, and The Park are all minutes from our office. Drop by for a face-to-face consultation anytime.",
    popularVenues: [
      "Taj Coromandel, Nungambakkam",
      "Courtyard by Marriott, Nungambakkam",
      "The Park, Anna Salai",
      "Hyatt Regency, Teynampet",
      "Taj Club House, Mount Road",
    ],
    faqs: [
      {
        q: "Where is your Nungambakkam office?",
        a: "Our office is at No. 10, Jagannathan Street, Nungambakkam, Chennai. You can visit us for a face-to-face consultation during business hours, or call us at +91 98842 20242 to schedule an appointment.",
      },
      {
        q: "Do you only serve the Nungambakkam area?",
        a: "No, we serve all of Chennai and surrounding areas. Our Nungambakkam office is our headquarters, but we plan and execute events across the city — from ECR to Anna Nagar and beyond.",
      },
    ],
    relatedSlugs: [
      "event-planners-anna-nagar",
      "wedding-planners-in-chennai",
      "corporate-event-planners-chennai",
    ],
    eventType: "Event Planning",
    location: "Nungambakkam, Chennai",
  },
  {
    slug: "event-planners-anna-nagar",
    title: "Event Planners in Anna Nagar, Chennai | City Heights Events",
    h1: "Event Planners in Anna Nagar",
    metaDescription:
      "Trusted event planning services in Anna Nagar, Chennai. City Heights Events plans weddings, parties, and corporate events across North Chennai.",
    intro:
      "Anna Nagar is one of Chennai's most vibrant residential areas, and City Heights Events is proud to serve the community with premium event planning services. From wedding receptions at Anna Nagar's top banquet halls to birthday celebrations and corporate gatherings, our team brings the same level of expertise and care to every event in the neighbourhood.",
    whatWeOffer: [
      "Wedding and engagement planning",
      "Birthday and anniversary celebrations",
      "Corporate events and team outings",
      "Housewarming and pooja ceremonies",
      "Venue sourcing in Anna Nagar and North Chennai",
      "Decor, catering, and entertainment coordination",
    ],
    whyChooseUs:
      "With our second office at Kolathur (Water Canal Road), we have strong vendor relationships across North Chennai. We know the best venues, caterers, and decorators in the Anna Nagar, Mogappair, and Ambattur belt.",
    popularVenues: [
      "Hotel Ashoka, Anna Nagar",
      "GRT Grand, T. Nagar",
      "Residency Towers, T. Nagar",
      "Hotel Palmyra Grand, Anna Nagar",
      "Convention centres along Inner Ring Road",
    ],
    faqs: [
      {
        q: "Do you have an office in Anna Nagar?",
        a: "Our North Chennai office is at Water Canal Road, Kolathur — a short drive from Anna Nagar. We also offer home consultations across Anna Nagar. Call us at +91 98842 20242 to schedule a visit.",
      },
      {
        q: "What types of events do you plan in Anna Nagar?",
        a: "We plan all types of events — weddings, receptions, birthday parties, corporate events, housewarming ceremonies, and more. Our team adapts to the specific needs and cultural preferences of each client.",
      },
    ],
    relatedSlugs: [
      "event-planners-nungambakkam",
      "birthday-party-organisers-chennai",
      "wedding-planners-in-chennai",
    ],
    eventType: "Event Planning",
    location: "Anna Nagar, Chennai",
  },
  {
    slug: "event-planners-ecr-chennai",
    title: "Event Planners on ECR, Chennai | City Heights Events",
    h1: "Event Planners on East Coast Road (ECR)",
    metaDescription:
      "Plan beach events and destination celebrations on ECR, Chennai. City Heights Events organises weddings, parties, and corporate retreats on East Coast Road.",
    intro:
      "East Coast Road is Chennai's go-to destination for beach weddings, resort celebrations, and outdoor events. City Heights Events has extensive experience organising events along ECR — from intimate beach ceremonies to large-scale resort gatherings. The stunning coastal setting combined with our production expertise creates events that are truly unforgettable.",
    whatWeOffer: [
      "Beach and resort wedding planning",
      "Outdoor event production and staging",
      "Corporate retreats and offsite management",
      "Beach party and festival organisation",
      "Permit management for coastal events",
      "Weather contingency planning",
    ],
    whyChooseUs:
      "ECR events have unique logistical challenges — weather, permits, generator backup, and guest transportation. We have managed dozens of events along the coast and know how to plan for every contingency while keeping the beachside magic intact.",
    popularVenues: [
      "VGP Golden Beach Resort, ECR",
      "Mahabalipuram Beach Resort",
      "InterContinental Chennai Mahabalipuram",
      "Radisson Blu Resort Temple Bay",
      "Private beach villas, ECR",
    ],
    faqs: [
      {
        q: "Is it possible to have a beach wedding on ECR?",
        a: "Yes, beach weddings are very popular on ECR. We handle the permitting, tent and mandap setup, generator and lighting, and all logistics for a beautiful coastal ceremony. We also prepare weather backup plans.",
      },
      {
        q: "What about transport for guests to ECR venues?",
        a: "We coordinate guest transportation including luxury bus services, car pools, and even shuttle services from Chennai city to ECR venues. This is included in our full-service planning packages.",
      },
    ],
    relatedSlugs: [
      "wedding-planners-in-chennai",
      "concert-organisers-chennai",
      "birthday-party-organisers-chennai",
    ],
    eventType: "Event Planning",
    location: "ECR, Chennai",
  },

  // ─── Engagement ────────────────────────────────────────
  {
    slug: "engagement-ceremony-planners-chennai",
    title: "Engagement Ceremony Planners in Chennai | City Heights Events",
    h1: "Engagement Ceremony Planners in Chennai",
    metaDescription:
      "Beautiful engagement ceremony planning in Chennai. City Heights Events creates elegant ring ceremonies with stunning decor and coordination.",
    intro:
      "The engagement ceremony marks the beginning of your wedding journey, and it deserves to be celebrated in style. City Heights Events plans elegant engagement ceremonies across Chennai — from intimate family gatherings to grand ring ceremonies with hundreds of guests. We handle the decor, photography, entertainment, and coordination to make your engagement as special as your wedding day.",
    whatWeOffer: [
      "Ring ceremony stage and decor design",
      "Floral and lighting arrangements",
      "Photography and videography coordination",
      "Catering and refreshment management",
      "Guest coordination and event flow",
      "Cultural ceremony coordination",
    ],
    whyChooseUs:
      "We understand that engagements in Chennai come with specific cultural customs and family expectations. Our team is experienced in coordinating traditional Tamil engagements, Christian ceremonies, and contemporary celebrations with equal attention to detail.",
    popularVenues: [
      "Hotel Savera, Mylapore",
      "Taj Coromandel, Nungambakkam",
      "GRT Grand, T. Nagar",
      "The Raintree, St. Mary's Road",
      "Sterling Mac Hotel, Anna Nagar",
    ],
    faqs: [
      {
        q: "How much does an engagement ceremony planner cost in Chennai?",
        a: "Engagement ceremony planning starts from ₹25,000 for basic decor and coordination. Packages with elaborate stage design, floral installations, and entertainment typically range from ₹50,000 to ₹1,50,000.",
      },
      {
        q: "Can you plan a combined engagement and reception event?",
        a: "Yes, combined engagement-reception events are increasingly popular. We design the event flow to accommodate both ceremonies seamlessly, often with a stage transformation between segments.",
      },
    ],
    relatedSlugs: [
      "wedding-planners-in-chennai",
      "wedding-reception-organisers-chennai",
      "wedding-decorators-in-chennai",
    ],
    eventType: "Engagement Ceremony",
    location: "Chennai",
  },
];

/** Lookup a page by slug — used by the dynamic route. */
export function getPseoPage(slug: string): PseoPage | undefined {
  return PSEO_PAGES.find((p) => p.slug === slug);
}

/** All slugs — used by generateStaticParams. */
export function getAllPseoSlugs(): string[] {
  return PSEO_PAGES.map((p) => p.slug);
}
