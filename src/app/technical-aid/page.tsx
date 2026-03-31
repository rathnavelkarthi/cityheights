import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  BarChart, 
  Database, 
  LineChart, 
  PieChart, 
  ArrowRight,
  Award,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  CheckCircle2
} from "lucide-react";

export const metadata: Metadata = {
  title: "Priyanka Venkatesan | Technical Aid",
  description: "Power BI Developer and Quality Analyst. Expert in Data analytics, DAX, Power Query, SQL, and Advanced Excel.",
  alternates: {
    canonical: "/technical-aid",
  },
  openGraph: {
    title: "Priyanka Venkatesan | Technical Aid",
    description: "Dynamic and results-driven Power BI Developer with experience in Data analytics and healthcare Quality Analysis.",
    images: ["/priyanka.jpeg"],
  }
};

const expertise = [
  "Data Visualization: Power BI, Tableau",
  "DAX (Measures, Calculated Columns)",
  "Data Modeling: Relationships, Star/Snowflake Schema",
  "Databases: MySQL, DynamoDB",
  "Data Transformation/ETL: Power Query",
  "Query Language: SQL, Advanced SQL",
  "Programming: Python Scripts",
  "Analytics Techniques: KPI Design, Trend & Variance Analysis",
  "Automation & Reporting: Power BI, Tableau",
  "Advanced Excel: Pivot Tables, Power Query",
  "Methodologies: Agile, Scrum",
];

const experience = [
  {
    role: "Power BI Developer",
    company: "UST Global",
    period: "2021–2025",
    description: "Developed interactive and automated Power BI dashboards using DAX, optimized data models, and advanced SQL to deliver accurate performance KPIs and insights. Reduced manual reporting time by 60% and improved data accuracy by 40%, enabling data-driven decision-making across stakeholders.",
    highlights: [
      "Built interactive Power BI dashboards using DAX, data modeling and Power Query to deliver actionable KPIs.",
      "Designed data models, relationships and calculated measures for analytical performance.",
      "Implemented Row-Level Security (RLS) and governance standards for secure BI deployment.",
      "Developed SQL queries (Joins, CTEs and Window Functions) for large-scale data extraction and transformation.",
      "Created stored procedures and analytical views to support dashboard automation.",
      "Performed data quality checks and validation routines to ensure accuracy.",
      "Developed statistical models and visualizations for business analysis.",
      "Designed KPI frameworks and scorecards for leadership reporting.",
      "Converted complex datasets into clear, actionable insights.",
      "Collaborated with cross-functional stakeholders under Agile methodology.",
      "Increased stakeholder productivity by 30% via intuitive KPI dashboards."
    ]
  },
  {
    role: "Quality Analyst",
    company: "Accenture Solutions Pvt. Ltd",
    period: "2015–2020",
    description: "Experienced Claims Handling & Quality Analyst with strong expertise in adjudication, error analysis, RCA and CAPA implementation. Ensured high claim accuracy and compliance with RCM standards.",
    highlights: [
      "Performed end-to-end claim adjudication audits, validating CPT, ICD-10, HCPCS codes, pricing, adjustments and benefits.",
      "Ensured claim accuracy aligned with provider contracts, reimbursement rules and SOP workflows.",
      "Identified and categorized errors based on RCM quality frameworks and documentation standards.",
      "Conducted Root Cause Analysis (RCA) to detect recurring system or process issues.",
      "Implemented Corrective and Preventive Actions (CAPA) to improve audit accuracy and reduce rework.",
      "Prepared daily, weekly, and monthly QA reports tracking accuracy, error trends, and SLA adherence.",
      "Created and presented quality dashboards using Power BI and Excel.",
      "Improved claim accuracy by 25% through targeted CAPA initiatives.",
      "Reduced repeat errors by 30% via RCA-driven process improvements.",
      "Enhanced leadership visibility through monthly performance dashboards."
    ]
  }
];

export default function TechnicalAidPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Priyanka Venkatesan",
    "jobTitle": "Power BI Developer / Technical Aid",
    "description": "Dynamic and results-driven Power BI Developer with 3 years of experience in Data analytics and 5 years as a quality analyst in Healthcare.",
    "url": "https://cityheights.com/technical-aid",
    "image": "https://cityheights.com/priyanka.jpeg",
    "email": "priyankavenkatesan104@yahoo.com",
    "telephone": "+91-8608017252"
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-white/10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-wider uppercase mb-6 text-white/60">
                <BarChart className="w-3 h-3" />
                Technical Aid
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-4 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                Priyanka Venkatesan
              </h1>
              <div className="text-xl font-medium text-gold/80 mb-6 font-[family-name:var(--font-poppins)]">
                Power BI Developer
              </div>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-white/60 mb-8 border-y border-white/5 py-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gold/50" />
                  <a href="mailto:priyankavenkatesan104@yahoo.com" className="hover:text-white transition-colors">priyankavenkatesan104@yahoo.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gold/50" />
                  <a href="tel:+918608017252" className="hover:text-white transition-colors">+91-8608017252</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold/50" />
                  <span>Chennai</span>
                </div>
              </div>

              <p className="text-lg text-white/50 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
                Dynamic and results-driven Power BI Developer with 3 years of experience in Data analytics and 5 years as a Quality Analyst in Healthcare. Proficient in DAX, Power Query, SQL and Advanced Excel with strong capabilities in ETL, data modeling, KPI development, and performance optimization.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href="#experience" className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-all flex items-center gap-2">
                  View Experience <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="px-8 py-3 rounded-full bg-white/5 border border-white/10 font-semibold hover:bg-white/10 transition-all">
                  Get in touch
                </Link>
              </div>
            </div>
            
            <div className="relative w-64 lg:w-96 group shrink-0">
              <div className="absolute inset-0 bg-white/10 rounded-2xl blur-2xl group-hover:bg-white/20 transition-all duration-500" />
              <div className="relative rounded-2xl border border-white/10 overflow-hidden aspect-[3/4] bg-neutral-900 shadow-2xl">
                <Image
                  src="/priyanka.jpeg"
                  alt="Priyanka Venkatesan"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <p className="text-white/40 text-lg">Comprehensive expertise in data strategy, modeling, and visualization tools.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((item, i) => {
              const [title, desc] = item.split(": ");
              return (
                <div key={i} className="flex gap-3 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all">
                  <Database className="w-5 h-5 text-gold/50 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white/90 block mb-1">{title}</span>
                    {desc && <span className="text-sm text-white/50">{desc}</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <Briefcase className="w-8 h-8 text-gold/60" /> Professional Experience
            </h2>
            <div className="space-y-12">
              {experience.map((exp, i) => (
                <div key={i} className="relative pl-8 md:pl-0">
                  <div className="hidden md:block absolute left-[-45px] top-2 w-4 h-4 rounded-full border-2 border-gold/60 bg-neutral-950" />
                  <div className="hidden md:block absolute left-[-38px] top-8 bottom-[-48px] w-0.5 bg-white/10 last:hidden" />
                  
                  <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 md:p-8 hover:bg-white/[0.04] transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <span className="text-gold/80 font-mono text-xs px-3 py-1 bg-gold/10 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="text-lg text-white/70 mb-6 font-[family-name:var(--font-poppins)]">{exp.company}</h4>
                    
                    <p className="text-white/50 leading-relaxed mb-6 italic">
                      {exp.description}
                    </p>
                    
                    <div className="space-y-3">
                      {exp.highlights.map((highlight, j) => (
                        <div key={j} className="flex gap-3 items-start">
                          <CheckCircle2 className="w-4 h-4 text-white/20 shrink-0 mt-1" />
                          <span className="text-sm text-white/60">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certification Section */}
      <section className="py-24 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Education */}
            <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-2xl p-8 hover:border-gold/20 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-gold/60" /> Education
              </h2>
              <div className="relative pl-6 border-l border-white/10">
                <div className="absolute left-[-4.5px] top-2 w-2 h-2 rounded-full bg-gold/40" />
                <h3 className="text-xl font-bold text-white/90">B.C.A</h3>
                <p className="text-white/60 mt-1 font-[family-name:var(--font-poppins)]">S.D.N.B Vaishnav College for Women</p>
                <p className="text-gold/60 text-sm mt-2 font-mono">2012–2015</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 rounded-2xl p-8 hover:border-gold/20 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Award className="w-6 h-6 text-gold/60" /> Certifications
              </h2>
              <div className="relative pl-6 border-l border-white/10">
                <div className="absolute left-[-4.5px] top-2 w-2 h-2 rounded-full bg-gold/40" />
                <h3 className="text-lg font-bold text-white/90 leading-tight">PL-300: Power BI Data Analyst Associate</h3>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="text-xs uppercase tracking-widest text-gold/40">Microsoft Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="py-12 border-t border-white/5 bg-neutral-950">
        <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-4">
          <div className="text-sm text-white/20">
            © {new Date().getFullYear()} Priyanka Venkatesan. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
