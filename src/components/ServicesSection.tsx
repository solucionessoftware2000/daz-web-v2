import React, { useMemo, useState } from "react";
import {
  Cloud,
  Wifi,
  Shield,
  Monitor,
  Code,
  Camera,
  Package,
  ChevronLeft,
} from "lucide-react";

// ========================
// Tipos
// ========================
export interface Subcategory {
  id: string;
  title: string;
  description: string;
  images: { src: string; alt?: string }[];
}

export interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  color?: string; // Tailwind class para acentos (ej. "from-cyan-400 to-blue-500")
  subcategories: Subcategory[];
}

interface ServicesCatalogProps {
  /** Si no envías data, se usará un demo por defecto */
  data?: Category[];
  /** Título de la sección */
  title?: string;
  /** Descripción opcional debajo del título */
  subtitle?: string;
}

// ========================
// Demo data (puedes reemplazar por tu API)
// ========================
const demoData: Category[] = [
  {
    id: "infra-cloud",
    title: "Infraestructura y Cloud",
    icon: <Cloud className="w-8 h-8" />,
    color: "from-cyan-400 to-blue-500",
    subcategories: [
      {
        id: "migracion-nube",
        title: "Migración a la nube",
        description:
          "Planificación, ejecución y hardening de cargas en AWS, Azure o GCP con zero-downtime cuando es posible.",
        images: [
          {
            src: "http://manageengine.com/latam/desktop-central/images/dc-cloud-architecture.png",
            alt: "Arquitectura cloud",
          },
          {
            src: "https://www.rrhhdigital.com/wp-content/uploads/userfiles/devops-tecnologia-empleo.jpg",
            alt: "DevOps",
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFMnPkwvCm1pe4K39hd1KJDyahlqncRoCYg&s",
            alt: "Servidores en rack",
          },
        ],
      },
      {
        id: "virtualizacion",
        title: "Virtualización & Monitoreo",
        description:
          "Clusters, backups y observabilidad 24/7 para garantizar disponibilidad y performance.",
        images: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdTW8BRqePIDUJtCu8L-23TzlYevglFXmxCg&s",
          },
          {
            src: "https://img.site24x7static.com/images/virtualization-platforms.png",
          },
          {
            src: "https://tomahost.com/wp-content/uploads/2021/11/Cluster-min.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "conectividad-cableado",
    title: "Conectividad y Cableado",
    icon: <Wifi className="w-8 h-8" />,
    color: "from-emerald-400 to-teal-500",
    subcategories: [
      {
        id: "lan-wan",
        title: "Redes LAN/WAN",
        description:
          "Diseño e instalación de redes empresariales con alta disponibilidad y seguridad.",
        images: [
          {
            src: "https://www.adesur.pe/wp-content/uploads/2022/04/cableado-estructurado-en-lima.jpg",
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeH7EemCEdZtUgOC4PWmqCfdDdeQwC4EbADQ&s",
          },
          {
            src: "https://blogs.salleurl.edu/sites/default/files/blogs/networking-and-internet-technologies/119976.jpg",
          },
        ],
      },
      {
        id: "cableado-fo",
        title: "Cableado Estructurado / FO",
        description:
          "Tendido, certificación y documentación de cableado Cat6A y fibra óptica.",
        images: [
          {
            src: "https://blog.precision.tech/hubfs/Fn-cfp-quad_15a_c%20(1).jpg",
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTge_vzwIWMp9mFQ0efQzb3aSAeKdqxXqqvwg&s",
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlFmBbc7lahAolJ1KolCWO7h0nwHoFl9lAQ&s",
          },
        ],
      },
    ],
  },
  {
    id: "soporte-gestionados",
    title: "Soporte y Gestionados",
    icon: <Shield className="w-8 h-8" />,
    color: "from-fuchsia-400 to-pink-500",
    subcategories: [
      {
        id: "helpdesk",
        title: "Help Desk 24/7",
        description:
          "Mesa de ayuda multicanal con SLAs personalizados y reportes mensuales.",
        images: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMgslsdYOS7IHrMbmdNIGEN3pncgm9bIDDag&s",
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJwwCGFW-0e2OM10DnAvM7V4uBV-JHlXzJMQ&s",
          },
          {
            src: "https://es.mailpro.com/images/features/monthly-email-reports.webp",
          },
        ],
      },
      {
        id: "mantenimiento",
        title: "Mantenimiento Preventivo",
        description:
          "Rutinas programadas de revisión, parchado y optimización de endpoints y servidores.",
        images: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVjNZgkWqdAQoJl018uDdIbUrHx5oxS0rTw&s",
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8ZF0vU6ecZsOBhXtratr9HR5Nvj5EwdXow&s",
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdWu0b6tr6yvT8SpCQoO9KcruZx2z96-FUXQ&s",
          },
        ],
      },
    ],
  },
  {
    id: "venta-hw-sw",
    title: "Venta de Hardware y Software",
    icon: <Monitor className="w-8 h-8" />,
    color: "from-amber-400 to-orange-500",
    subcategories: [
      {
        id: "equipos-empresariales",
        title: "Equipos Empresariales",
        description:
          "PCs, laptops, servidores y periféricos de marcas líderes.",
        images: [
          {
            src: "https://www.infordata.com.pe/wp-content/uploads/2025/07/productos-destacados.IFDT_.demas_14.webp",
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8SxtghnfLgW0mssXpSK-mhbIsPHTv9LWsQ&s",
          },
					{
						src: "https://www.infordata.com.pe/wp-content/uploads/2025/04/productos-destacados.IFDTver3._01.png"
					}
        ],
      },
      {
        id: "licenciamiento",
        title: "Licenciamiento",
        description:
          "Software comercial y empresarial con gestión de renovaciones y compliance.",
        images: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Ru-fAQ3P9QNIflgNXKsFNFLXqMoC7ds_vw&s",
          },
					{
						src: "https://blog.invgate.com/hubfs/cumplimiento-de-licencias-de-software.jpg"
					},
					{
						src: "https://cpl.thalesgroup.com/sites/default/files/content/SM_pages/sm-general-image-21.jpg"
					}
        ],
      },
    ],
  },
  {
    id: "desarrollo-asesoria",
    title: "Desarrollo y Asesoría",
    icon: <Code className="w-8 h-8" />,
    color: "from-sky-400 to-indigo-500",
    subcategories: [
      {
        id: "apps-web-moviles",
        title: "Apps Web & Móviles",
        description:
          "Desarrollo full‑stack, integración de APIs y despliegues CI/CD.",
        images: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGrcm_S5zxSjrZ02xc9Vfdu4kXivX4wGEXFA&s",
          },
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-mnzCEaLdpTYn9aCPP1ksczfFWyCina9TYQ&s",
          },
					{
						src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUkBd0EKWU9Pq87A4ySmwrM39fl4ApS6YLJg&s"
					}
        ],
      },
      {
        id: "automatizacion",
        title: "Automatización de Procesos",
        description:
          "Bots, RPA e integraciones para reducir tiempos operativos.",
        images: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_hFQjZhqXrW7C3Ek9L7dP9ZQAtz-3woyFqA&s",
          },
					{
						src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaLvYhPVvCSlt0QKVnluGsFiknRQJT0b4gKA&s"
					},
					{
						src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69s5twQoGf-gBNgxU7w7fgKW7bHSb1f688A&s",
					}
        ],
      },
    ],
  },
  {
    id: "seguridad-videovigilancia",
    title: "Seguridad y Videovigilancia",
    icon: <Camera className="w-8 h-8" />,
    color: "from-rose-400 to-red-500",
    subcategories: [
      {
        id: "cctv",
        title: "CCTV IP y Análogo",
        description:
          "Diseño e implementación de soluciones de videovigilancia con grabación y acceso remoto.",
        images: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLbocGikdVUYE-NgngNsCTMvm6ThtrtkZihw&s",
          },
          {
            src: "https://gongusca.com/wp-content/uploads/2023/07/DIAGRAMA-DE-CONEXION-SISTEMA-CCTV-ANALOGO.webp",
          },
					{
						src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4PN4r0i_jIItjpt_JMtBfjQ5iqEeCXe00zA&s"
					}
        ],
      },
      {
        id: "control-acceso",
        title: "Control de Acceso",
        description:
          "Biometría, tarjetas y credenciales con auditoría y roles.",
        images: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuEJ3SEUfgcScc4xzFR4DXePF55cDSmZ73Qw&s",
          },
					{
						src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn_4DuIHnlZuIx7nps5dyIOwEFuKteFqPYPg&s"
					},
					{
						src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGLf1-ASRG3lt3LQ438s_d0dqMyEZniOvfpQ&s"
					}
        ],
      },
    ],
  },
  {
    id: "suministros",
    title: "Suministros de Oficina",
    icon: <Package className="w-8 h-8" />,
    color: "from-violet-400 to-purple-500",
    subcategories: [
      {
        id: "papeleria",
        title: "Papelería y Materiales",
        description: "Todo lo necesario para el día a día de tu operación.",
        images: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlyGtGHZwl8LXm3FWRZk9bL5NhsSwGXs2l1w&s",
          },
					{
						src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1XOnjYRXfVmWE5V0_1kw9u_KSVEt9hkKHQ&s"
					},
					{
						src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgUd4mIDjWMJm-jojjoff9OFEI7zAIUh7TsA&s"
					}
        ],
      },
      {
        id: "mobiliario",
        title: "Mobiliario Ergonómico",
        description:
          "Sillas, escritorios y accesorios orientados a la salud postural.",
        images: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjNFjzH0tLOzknYIMLv6Bc3jG-83KWwatmg&s",
          },
					{
						src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdD9-NMxonEbecr0_fiHtD7w_KItH5IIPYQ&s"
					},
					{
						src: "https://http2.mlstatic.com/D_NQ_NP_866035-MPE93689542333_092025-O-silla-ergonomica-escritorio-oficina-giratoria-soporte-lumbar.webp"
					}
        ],
      },
    ],
  },
];

// ========================
// UI helpers
// ========================
const cls = (...parts: (string | false | null | undefined)[]) =>
  parts.filter(Boolean).join(" ");

// ========================
// Componente principal
// ========================
const ServicesCatalog: React.FC<ServicesCatalogProps> = ({
  data,
  title = "Catálogo de Servicios",
  subtitle = "Explora nuestras categorías y descubre sus subcategorías con descripciones e imágenes.",
}) => {
  const catalog = useMemo(() => data ?? demoData, [data]);
  const [selected, setSelected] = useState<Category | null>(null);

  return (
    <section id="services" className="py-16 bg-slate-900">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-4xl font-bold text-white md:text-5xl">
            {title}
          </h2>
          <p className="max-w-3xl mx-auto text-slate-300">{subtitle}</p>
        </div>

        {/* Breadcrumb / Back */}
        {selected && (
          <div className="max-w-6xl mx-auto mb-6">
            <button
              onClick={() => setSelected(null)}
              className="inline-flex items-center gap-2 px-3 py-2 transition border text-slate-200 hover:text-white rounded-xl border-slate-700 hover:border-slate-500"
            >
              <ChevronLeft className="w-5 h-5" /> Volver a categorías
            </button>
          </div>
        )}

        {/* Vista de Categorías */}
        {!selected && (
          <div className="grid max-w-6xl grid-cols-2 gap-4 mx-auto sm:grid-cols-3 lg:grid-cols-4">
            {catalog.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelected(cat)}
                className={cls(
                  "group aspect-square rounded-2xl border border-slate-700 bg-slate-800/60 hover:bg-slate-800 hover:border-slate-500 transition overflow-hidden p-4 flex flex-col items-center justify-center text-center",
                  "shadow-sm hover:shadow-md"
                )}
              >
                <div
                  className={cls(
                    "mb-3 inline-flex items-center justify-center rounded-2xl p-3 bg-gradient-to-br text-white",
                    cat.color ?? "from-cyan-400 to-blue-500"
                  )}
                >
                  {/* El icono viene desde la data */}
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold leading-tight text-white">
                  {cat.title}
                </h3>
                <div className="mt-2 text-xs transition opacity-0 text-slate-400 group-hover:opacity-100">
                  Ver subcategorías
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Vista de Subcategorías */}
        {selected && (
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h3 className="mb-2 text-3xl font-bold text-white">
                {selected.title}
              </h3>
              <div
                className={cls(
                  "h-1 w-24 rounded-full bg-gradient-to-r",
                  selected.color ?? "from-cyan-400 to-blue-500",
                  "to-transparent"
                )}
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {selected.subcategories.map((sc) => (
                <article
                  key={sc.id}
                  className="overflow-hidden transition border shadow-sm rounded-2xl border-slate-700 bg-slate-800 hover:border-slate-500 hover:shadow-md"
                >
                  {/* Header subcategoría */}
                  <div className="p-5">
                    <h4 className="mb-1 text-lg font-semibold text-white">
                      {sc.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-300">
                      {sc.description}
                    </p>
                  </div>

                  {/* Galería */}
                  <div className="grid grid-cols-3 gap-1 p-1">
                    {sc.images.map((img, i) => (
                      <div key={i} className="relative">
                        <img
                          src={img.src}
                          alt={img.alt ?? sc.title}
                          loading="lazy"
                          className={cls(
                            "h-28 w-full object-cover",
                            i === 0 && "rounded-tl-2xl",
                            i === 2 && "rounded-tr-2xl",
                            "sm:rounded-none"
                          )}
                        />
                      </div>
                    ))}
                  </div>

                  {/* CTA / Footer */}
                  <div className="flex items-center justify-between p-4 border-t border-slate-700">
                    <span className="text-xs text-slate-400">
                      {sc.images.length} imagen
                      {sc.images.length !== 1 ? "es" : ""}
                    </span>
                    <a
                      href="#contact"
                      className="text-sm font-medium text-white px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 border border-slate-600"
                    >
                      Solicitar más info
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesCatalog;
