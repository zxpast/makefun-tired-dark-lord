// The Tired Dark Lord: A 100-Word Villain Monologue — entry program.
// Writes one ~100-word monologue to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The monologue: a dark lord with the Ashen Crown (forged from the last
// ember of a dead star), betrayed by a brother who traded it for a donkey.
// The tiredness lives in deflections — the wrong crown, the postponed doom,
// inviting the hero to rest his eyes — never in a flat "I am tired".
// The sting lands in the last line: the doom can keep till morning.
// 101 words, 515 characters, no trailing newline (the gate counts every char).
const LINE =
  "You came for the Ashen Crown. Good. It took me four centuries to forge it from the last ember of a dead star, and my brother traded it for a donkey. A donkey. Anyway. When I wear it, the harvests fail, the wells turn to salt, the whole valley begs — begging takes a while, mind you, bring a chair, hero. Pold, the crown. No, not that one, the... the heavy one. Yes. Now kneel, hero, and... hold on. One moment. Just... rest your eyes a second. The doom will keep. It has kept four hundred years. It can keep till morning.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
