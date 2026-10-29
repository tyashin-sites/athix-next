/**
 * Clinic photography + service artwork supplied by the client (Google Drive
 * "Website pictures", 28 Oct 2026). Phone screenshots were cropped to the
 * image itself and re-encoded to WebP; nothing was retouched or generated.
 * Every image on the site resolves through this file — swap a `src` here and
 * every page follows.
 */

export interface Media {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

const img = (src: string, width: number, height: number, alt: string, caption?: string): Media => ({ src, width, height, alt, caption });

export const CLINIC = {
  room: img('/images/clinic/clinic-room.webp', 956, 718, 'Treatment room at Athix Physio & Sports Rehab with treatment table, exercise ball and resistance bands', 'The Athix treatment room'),
  interior: img('/images/clinic/clinic-interior.webp', 956, 1324, 'Inside the Athix clinic — treatment table, waiting chairs and the doorway to the BATTS gym', 'The clinic opens onto the BATTS gym'),
  sportsRehab: img('/images/clinic/sports-rehab.webp', 956, 874, 'Abhishek Thakur, PT, assessing a patient’s knee in the Athix treatment room', 'Hands-on assessment'),
  rehabCable: img('/images/clinic/rehab-cable.webp', 956, 2050, 'Abhishek Thakur, PT, guiding a patient through a cable-resistance exercise in the gym', 'Rehab on the gym floor'),
  rehabMobility: img('/images/clinic/rehab-mobility.webp', 956, 2050, 'Abhishek Thakur, PT, coaching an assisted mobility exercise in the gym', 'Mobility work with support'),
  portrait: img('/images/clinic/abhishek.webp', 1024, 1536, 'Abhishek Thakur, PT, registered physiotherapist at Athix Physio & Sports Rehab'),
  battsGym: img('/images/clinic/batts-athletics-gym.webp', 680, 453, 'The gym at BATTS ATHLETICS BURLINGTON, next to the Athix clinic', 'The BATTS gym — the clinic is right next to it'),
  parking: img('/images/clinic/batts-parking.webp', 1360, 1020, 'Front of BATTS ATHLETICS BURLINGTON at 1233 Dillon Road with its parking lot', 'The parking lot at the front of 1233 Dillon Road'),
} as const;

export const SPORTS_ACUPUNCTURE_PHOTO = img('/images/services/sports-acupuncture.webp', 1536, 1024, 'Fine acupuncture needles placed along the upper back and shoulder during a sports acupuncture session');
const NMES_CARD = img('/images/services/card-nmes.webp', 495, 511, 'NMES (electrical muscle stimulation): gentle electrical impulses activate muscles to reduce pain, improve strength, enhance recovery and support neuromuscular control');

/** Home hero carousel — order and selection set by the client. */
export const HERO_SLIDES: Media[] = [
  CLINIC.room,
  SPORTS_ACUPUNCTURE_PHOTO,
  { ...NMES_CARD, alt: 'Electrodes on the upper arm during NMES (electrical muscle stimulation)' },
  CLINIC.sportsRehab,
];

/**
 * Per-service visuals. `cards` are the client's branded therapy cards — the
 * therapy name and one-line description are part of the artwork, so they are
 * shown whole (never cropped). `diagrams` are anatomy references.
 */
export const SERVICE_MEDIA: Record<string, { cover?: Media; cards?: Media[]; diagrams?: Media[]; photos?: Media[] }> = {
  'neuro-fascial-release': {
    cover: img('/images/services/neuro-6.webp', 955, 913, 'Illustration of the body’s fascial network running through the whole body in motion'),
    diagrams: [
      img('/images/services/neuro-1.webp', 955, 847, 'Front and back views of the body’s muscle layers', 'The muscle layers, front and back'),
      img('/images/services/neuro-2.webp', 955, 751, 'Four myofascial lines: superficial front line, superficial back line, lateral line and deep front line', 'Myofascial lines that link regions of the body'),
      img('/images/services/neuro-4.webp', 955, 1387, 'The superficial back line running from the soles of the feet, up the back of the legs and spine to the scalp', 'One continuous line: foot to scalp'),
      img('/images/services/neuro-6.webp', 955, 913, 'Illustration of the fascial web wrapping the whole body during walking', 'Fascia: one connected web'),
      img('/images/services/neuro-9.webp', 955, 1149, 'Thoracolumbar fascia anatomy — how the low-back fascia links the latissimus dorsi, glutes and obliques', 'Thoracolumbar fascia: where back, hips and shoulders meet'),
      img('/images/services/neuro-10.webp', 955, 1363, 'Illustration of the nervous system and muscles of the whole body', 'Nerves and muscles work as one system'),
    ],
  },
  'soft-tissue-myofascial-release': {
    cover: img('/images/services/card-myofascial.webp', 510, 504, 'Myofascial release: gentle, targeted hands-on techniques to release tight fascia, reduce pain, improve mobility and restore normal movement patterns'),
    cards: [img('/images/services/card-myofascial.webp', 510, 504, 'Myofascial release: gentle, targeted hands-on techniques to release tight fascia, reduce pain, improve mobility and restore normal movement patterns')],
    photos: [img('/images/services/soft-tissue-tool.webp', 955, 638, 'Abhishek Thakur, PT, using a handheld instrument on the side of a patient’s knee', 'Instrument-assisted soft-tissue work')],
  },
  'dry-needling-acupuncture': {
    cover: img('/images/services/card-dry-needling.webp', 495, 504, 'Dry needling: insertion of fine needles into tight or overactive muscles (trigger points) to reduce pain, release tension and restore normal muscle function'),
    cards: [img('/images/services/card-dry-needling.webp', 495, 504, 'Dry needling: insertion of fine needles into tight or overactive muscles (trigger points) to reduce pain, release tension and restore normal muscle function')],
  },
  'sports-acupuncture': {
    cover: SPORTS_ACUPUNCTURE_PHOTO,
    cards: [img('/images/services/card-sports-acupuncture.webp', 511, 504, 'Sports acupuncture: traditional and functional acupuncture techniques to reduce pain, enhance recovery, improve circulation and support performance for athletic and active people')],
    photos: [SPORTS_ACUPUNCTURE_PHOTO],
  },
  'cupping-therapy': {
    cover: img('/images/services/card-cupping.webp', 510, 511, 'Cupping therapy: specialised cups create gentle suction to improve blood flow, reduce muscle tightness, relieve pain and support tissue healing'),
    cards: [img('/images/services/card-cupping.webp', 510, 511, 'Cupping therapy: specialised cups create gentle suction to improve blood flow, reduce muscle tightness, relieve pain and support tissue healing')],
  },
  'therapeutic-modalities': {
    cover: img('/images/services/card-ultrasound.webp', 511, 511, 'Therapeutic ultrasound: deep heat waves to increase blood flow, reduce inflammation, relieve pain and promote tissue healing'),
    cards: [
      img('/images/services/card-ultrasound.webp', 511, 511, 'Therapeutic ultrasound: deep heat waves to increase blood flow, reduce inflammation, relieve pain and promote tissue healing'),
      NMES_CARD,
    ],
  },
  'strength-mobility-stretching': {
    // Landscape crop of rehab-cable framed on the exercise; the portrait original shows mostly ceiling in a 16:10 card.
    cover: img('/images/clinic/rehab-cable-cover.webp', 956, 598, 'Abhishek Thakur, PT, guiding a patient through a cable-resistance exercise in the gym'),
    photos: [CLINIC.rehabCable, CLINIC.rehabMobility],
  },
  'pre-and-post-surgical-rehabilitation': {
    cover: CLINIC.sportsRehab,
    photos: [CLINIC.sportsRehab],
  },
  'joint-mobilization-manipulation': {
    cover: CLINIC.room,
  },
};

/** Community page — events, sport and volunteering (client photos). */
export const COMMUNITY: { title: string; body: string; images: Media[] }[] = [
  {
    title: 'On the field with Halton cricket',
    body: 'Match days with the Halton Cricket Club and the cricket community that plays across Halton.',
    images: [
      img('/images/community/community-01.webp', 1078, 1460, 'Abhishek Thakur with Halton Cricket Club players at a cricket ground', 'With Halton Cricket Club players'),
      img('/images/community/community-02.webp', 1086, 1448, 'Abhishek Thakur standing at the boundary during a cricket match', 'Match day at the boundary'),
      img('/images/community/community-04.webp', 1600, 748, 'A cricket squad lined up in team kit on the field', 'Team line-up'),
      img('/images/community/community-05.webp', 1600, 748, 'A cricket team and support staff lined up on the field', 'With the squad and support staff'),
    ],
  },
  {
    title: 'Youth and community cricket',
    body: 'Time with young players, families and local club teams across Burlington and Halton.',
    images: [
      img('/images/community/community-03.webp', 1254, 1254, 'A youth cricket team with families and coaches holding a trophy', 'Youth cricket celebration'),
      img('/images/community/community-09.webp', 1600, 748, 'A local cricket team in yellow kit with Abhishek Thakur on the field', 'Local club match day'),
      img('/images/community/community-10.webp', 1600, 748, 'A cricket team in yellow kit posing on the grass', 'The team before play'),
      img('/images/community/community-11.webp', 1600, 748, 'Abhishek Thakur with two cricketers in the middle of the ground', 'Between innings'),
      img('/images/community/community-12.webp', 1600, 748, 'A cricket team in yellow kit gathered for a team photo', 'Team photo'),
      img('/images/community/community-13.webp', 1600, 748, 'Cricketers walking out onto the field', 'Walking out'),
      img('/images/community/community-14.webp', 1600, 748, 'A cricket team in yellow kit with Abhishek Thakur', 'With the team'),
    ],
  },
  {
    title: 'Community events and health fairs',
    body: 'Volunteering and showing up at community events in Burlington and the surrounding area.',
    images: [
      img('/images/community/community-06.webp', 934, 2000, 'Abhishek Thakur beside the Athix Physio & Sports Rehab banner at a community event', 'Athix at a community event'),
      img('/images/community/community-07.webp', 934, 2000, 'Abhishek Thakur with community members at an event', 'Meeting the community'),
      img('/images/community/community-08.webp', 934, 2000, 'Abhishek Thakur with a group of community members at an indoor event', 'Community gathering'),
    ],
  },
];
