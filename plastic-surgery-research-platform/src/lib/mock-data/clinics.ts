import type { Clinic } from "@/types/domain";

/** Fictional clinics for UI — not real businesses. */
export const clinics: Clinic[] = [
  {
    id: "c-akhaldaba",
    name: "Akhaldaba Aesthetic Institute",
    city: "Tbilisi",
    address: "14 Akhaldaba St, Tbilisi 0108",
    phone: "+995 32 200 00 01",
    website: "https://example.org/akhaldaba",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Akhaldaba+Tbilisi",
    description:
      "Fictional multidisciplinary aesthetic institute emphasizing nasal and facial surgery research transparency.",
    surgeonIds: ["s1"],
    procedures: ["rhinoplasty", "revision-surgery", "blepharoplasty"],
  },
  {
    id: "c-vake",
    name: "Vake Surgical Suites",
    city: "Tbilisi",
    address: "8 Chavchavadze Ave, Vake, Tbilisi",
    phone: "+995 32 200 00 02",
    website: null,
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Vake+Tbilisi+clinic",
    description: "Fictional facial plastic surgery suites with structured consent workflows.",
    surgeonIds: ["s2"],
    procedures: ["facelift", "blepharoplasty", "rhinoplasty"],
  },
  {
    id: "c-riverbank",
    name: "Riverbank Plastic Surgery Center",
    city: "Tbilisi",
    address: "3 Riverbank Rd, Tbilisi",
    phone: "+995 32 200 00 03",
    website: "https://example.org/riverbank",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Riverbank+Tbilisi",
    description: "Fictional body contouring center with staged recovery education programs.",
    surgeonIds: ["s3"],
    procedures: ["breast-augmentation", "breast-reduction", "abdominoplasty", "liposuction"],
  },
  {
    id: "c-blacksea",
    name: "Black Sea Cosmetic Clinic",
    city: "Batumi",
    address: "21 Gogebashvili St, Batumi",
    phone: "+995 422 00 00 04",
    website: "https://example.org/blacksea",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Batumi+cosmetic+clinic",
    description: "Fictional coastal clinic serving regional and international consult patients.",
    surgeonIds: ["s4", "s10"],
    procedures: ["liposuction", "breast-augmentation", "rhinoplasty"],
  },
  {
    id: "c-liberty",
    name: "Liberty Eye & Face Clinic",
    city: "Tbilisi",
    address: "5 Liberty Sq, Tbilisi",
    phone: "+995 32 200 00 05",
    website: null,
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Liberty+Square+Tbilisi",
    description: "Fictional periorbital and facial harmony practice.",
    surgeonIds: ["s5"],
    procedures: ["blepharoplasty", "brow-lift"],
  },
  {
    id: "c-mtatsminda",
    name: "Mtatsminda Surgical Arts",
    city: "Tbilisi",
    address: "2 Mtatsminda St, Tbilisi",
    phone: "+995 32 200 00 06",
    website: "https://example.org/mtatsminda",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Mtatsminda+Tbilisi",
    description: "Fictional boutique facial surgery studio.",
    surgeonIds: ["s6"],
    procedures: ["rhinoplasty", "chin-augmentation"],
  },
  {
    id: "c-saburtalo",
    name: "Saburtalo Precision Rhinoplasty",
    city: "Tbilisi",
    address: "44 Vazha-Pshavela Ave, Saburtalo",
    phone: "+995 32 200 00 07",
    website: "https://example.org/saburtalo-rhino",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Saburtalo+Tbilisi",
    description: "Fictional rhinoplasty-focused clinic with imaging review sessions.",
    surgeonIds: ["s11"],
    procedures: ["rhinoplasty", "revision-surgery"],
  },
  {
    id: "c-rioni",
    name: "Rioni Medical Plaza",
    city: "Kutaisi",
    address: "12 Rioni Ave, Kutaisi",
    phone: "+995 431 00 00 09",
    website: null,
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kutaisi+medical",
    description: "Fictional regional plastic surgery plaza.",
    surgeonIds: ["s7"],
    procedures: ["facelift", "rhinoplasty"],
  },
  {
    id: "c-eastside",
    name: "Eastside Body Contouring",
    city: "Tbilisi",
    address: "77 Eastside Blvd, Tbilisi",
    phone: "+995 32 200 00 10",
    website: null,
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Eastside+Tbilisi",
    description: "Fictional body contouring practice.",
    surgeonIds: ["s8"],
    procedures: ["liposuction", "abdominoplasty"],
  },
  {
    id: "c-sololaki",
    name: "Sololaki Skin & Surgery Lab",
    city: "Tbilisi",
    address: "4 Sololaki Ln, Tbilisi",
    phone: "+995 32 200 00 11",
    website: "https://example.org/sololaki",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sololaki+Tbilisi",
    description: "Fictional skin and minor aesthetic surgery lab.",
    surgeonIds: ["s9"],
    procedures: ["blepharoplasty", "buccal-fat-removal"],
  },
  {
    id: "c-batumi-collab",
    name: "Batumi Surgical Collaborative",
    city: "Batumi",
    address: "8 Ninoshvili St, Batumi",
    phone: "+995 422 00 00 12",
    website: null,
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Batumi+surgery",
    description: "Fictional collaborative surgical group.",
    surgeonIds: ["s10"],
    procedures: ["rhinoplasty", "otoplasty"],
  },
  {
    id: "c-greenhill",
    name: "Greenhill ENT & Aesthetics",
    city: "Tbilisi",
    address: "30 Greenhill Rd, Tbilisi",
    phone: "+995 32 200 00 13",
    website: null,
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Greenhill+Tbilisi",
    description: "Fictional ENT-aesthetic crossover clinic.",
    surgeonIds: ["s12"],
    procedures: ["rhinoplasty", "otoplasty"],
  },
  {
    id: "c-oldtown",
    name: "Old Town Face Balance",
    city: "Tbilisi",
    address: "1 Erekle II St, Tbilisi",
    phone: "+995 32 200 00 14",
    website: null,
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Old+Town+Tbilisi",
    description: "Fictional facial harmony studio in historic district.",
    surgeonIds: ["s13"],
    procedures: ["facelift", "blepharoplasty"],
  },
  {
    id: "c-harbor",
    name: "Harbor View Clinic",
    city: "Batumi",
    address: "2 Harbor Walk, Batumi",
    phone: "+995 422 00 00 15",
    website: "https://example.org/harbor",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Harbor+Batumi",
    description: "Fictional waterfront consult clinic.",
    surgeonIds: ["s15"],
    procedures: ["liposuction", "gynecomastia"],
  },
  {
    id: "c-womens",
    name: "Women's Reconstructive & Aesthetic Center",
    city: "Tbilisi",
    address: "9 Health Campus Dr, Tbilisi",
    phone: "+995 32 200 00 08",
    website: "https://example.org/womens-center",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Tbilisi+medical+campus",
    description: "Fictional center for breast and reconstructive aesthetics.",
    surgeonIds: ["s14"],
    procedures: ["breast-reduction", "breast-augmentation", "revision-surgery"],
  },
];

export function getClinicById(id: string): Clinic | undefined {
  return clinics.find((c) => c.id === id);
}

export const clinicIdByName: Record<string, string> = Object.fromEntries(
  clinics.map((c) => [c.name, c.id]),
);
