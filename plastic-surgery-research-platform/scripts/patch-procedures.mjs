import fs from "fs";

const p = "src/lib/mock-data/procedures.ts";
let s = fs.readFileSync(p, "utf8");
const cats = {
  rhinoplasty: "facial",
  blepharoplasty: "facial",
  facelift: "facial",
  liposuction: "body",
  "breast-augmentation": "breast",
  "breast-reduction": "breast",
  gynecomastia: "body",
  abdominoplasty: "body",
  otoplasty: "facial",
  "chin-augmentation": "facial",
  "buccal-fat-removal": "facial",
  "revision-surgery": "facial",
};
const exp =
  "Individual results vary with anatomy, healing, and surgeon technique. No specific outcome should be expected.";

s = s.replace(
  /slug: "([^"]+)",\n    description:/g,
  (_, slug) =>
    `slug: "${slug}",\n    category: "${cats[slug] ?? "general"}",\n    description:`,
);
s = s.replace(
  /(revisionRisk:\n      "[^"]+",)\n  \},/g,
  `$1\n    realisticExpectations:\n      "${exp}",\n  },`,
);
fs.writeFileSync(p, s);
console.log("patched", s.includes("category:"));
