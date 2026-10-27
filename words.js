// Word data. Add more entries to this array; index.html needs no changes.
// Source: Oxford English-English-Hindi Dictionary (page numbers in "page").
// say = optional text sent to the voice (helps with words like "contract", noun vs verb).
window.WORDS = [
  {
    word: "contingent", pos: "noun", ipa: "/kənˈtɪndʒənt/", page: 271,
    en: "A group of people from the same country, organization, etc. who are attending an event; a group of armed forces forming part of a larger force.",
    hi: "Kisi sammelan aadi mein upasthit, ek hi desh ya sangathan ke logon ka dal. Sainya dal ka bhaag.",
    syn: ["delegation", "group", "party", "detachment"], ant: ["individual"],
    example: "A large contingent of students attended the conference."
  },
  {
    word: "continual", pos: "adjective", ipa: "/kənˈtɪnjuəl/", page: 271,
    en: "Happening again and again.",
    hi: "Baarambaar hone wala, lagaatar, nirantar.",
    syn: ["repeated", "constant", "recurrent", "frequent"], ant: ["occasional", "rare", "intermittent"],
    example: "His continual phone calls started to annoy her.",
    note: "Continual = baar baar hota hai (beech mein gap). Continuous = bina ruke chalta rehta hai."
  },
  {
    word: "continue", pos: "verb", ipa: "/kənˈtɪnjuː/", page: 271,
    en: "To keep happening or existing without stopping; to begin to do or say something again after you had stopped.",
    hi: "Jaari rehna, lagaatar bane rehna. Ruk kar phir se shuru karna.",
    syn: ["carry on", "go on", "proceed", "persist"], ant: ["stop", "cease", "halt", "discontinue"],
    example: "If the pain continues, see your doctor."
  },
  {
    word: "continuity", pos: "noun", ipa: "/ˌkɒntɪˈnjuːəti/", page: 271,
    en: "The fact of continuing without stopping or of staying the same.",
    hi: "Avichchhinnata, nirantarta. Bina ruke jaari rehne ki sthiti.",
    syn: ["continuation", "persistence", "flow", "consistency"], ant: ["break", "interruption", "discontinuity"],
    example: "The students will have the same teacher for two years to ensure continuity."
  },
  {
    word: "continuous", pos: "adjective", ipa: "/kənˈtɪnjuəs/", page: 271,
    en: "Happening or existing without stopping.",
    hi: "Bina ruke hone wala, lagaatar.",
    syn: ["unbroken", "constant", "uninterrupted", "ceaseless"], ant: ["intermittent", "broken", "interrupted", "occasional"],
    example: "There was a continuous line of cars stretching for miles.",
    note: "Grammar mein 'continuous tense' (jaise: I am waiting) abhi chal rahi kriya batata hai."
  },
  {
    word: "contort", pos: "verb", ipa: "/kənˈtɔːt/", page: 271,
    en: "To move or to make something move into a strange or unusual shape.",
    hi: "Marodkar aakriti bigaadna ya bigadna, marodna, ainthna.",
    syn: ["twist", "distort", "warp", "deform"], ant: ["straighten", "untwist"],
    example: "His face contorted with pain."
  },
  {
    word: "contour", pos: "noun", ipa: "/ˈkɒntʊə(r)/", page: 271,
    en: "The shape of the outer surface of something; a line on a map joining places of equal height.",
    hi: "Kisi vastu ki baahri satah ki aakriti, rooprekha. Manchitra par samaan oonchai ke sthanon ko milaane wali rekha.",
    syn: ["outline", "shape", "profile", "silhouette"], ant: [],
    example: "I could just make out the contours of the house in the dark."
  },
  {
    word: "contraband", pos: "noun", ipa: "/ˈkɒntrəbænd/", page: 271,
    en: "Goods that are taken into or out of a country illegally.",
    hi: "Kisi desh mein gair-kanooni dhang se laya ya bheja gaya maal, taskari ka maal.",
    syn: ["smuggled goods", "illicit goods", "bootleg"], ant: ["legal goods", "licensed goods"],
    example: "The police seized a large amount of contraband cigarettes."
  },
  {
    word: "contract", pos: "noun", ipa: "/ˈkɒntrækt/", page: 271, say: "a contract",
    en: "A written legal agreement.",
    hi: "Iqraarnaama, anubandh-patra. Kanooni likhit samjhauta.",
    syn: ["agreement", "deal", "pact", "treaty"], ant: [],
    example: "They signed a three-year contract with a major record company.",
    note: "Noun: pehle syllable par zor (CON-tract). Verb: doosre syllable par zor (con-TRACT)."
  },
  {
    word: "contract", pos: "verb", ipa: "/kənˈtrækt/", page: 271, say: "to contract",
    en: "To become smaller or shorter; to get an illness or disease; to make a written agreement.",
    hi: "Sankuchit hona ya karna, sikudna. Kisi bimari ka shikaar hona.",
    syn: ["shrink", "narrow", "shorten", "tighten"], ant: ["expand", "stretch", "lengthen", "extend"],
    example: "Metals contract as they cool.",
    note: "Verb: con-TRACT (doosre syllable par zor). Noun wale 'contract' se alag."
  }
];
