/**
 * Placeholder imagery — every slot here is AWAITING a real clinic photo
 * (client, Q15: "Add placeholders for now. Will share the actual pics").
 * Tracked in docs/ASSET-DEBT.md. Swap `src` for the real file; nothing else
 * changes. The founder photo is REAL (from the brand folder).
 */
export const PLACEHOLDERS = {
  heroAthlete: {
    src: '/images/placeholder-hero.jpg',
    alt: 'Placeholder — athlete mid-lunge on a badminton court (to be replaced with clinic photography)',
    width: 1400,
    height: 1050,
  },
  handsOn: {
    src: '/images/placeholder-hands-on.jpg',
    alt: 'Placeholder — hands-on physiotherapy treatment (to be replaced with clinic photography)',
    width: 1200,
    height: 900,
  },
  treatmentRoom: {
    src: '/images/placeholder-room.jpg',
    alt: 'Placeholder — treatment room at the clinic (to be replaced with clinic photography)',
    width: 1200,
    height: 900,
  },
  sports: {
    src: '/images/placeholder-sports.jpg',
    alt: 'Placeholder — athletes training (to be replaced with clinic photography)',
    width: 1200,
    height: 900,
  },
} as const;
