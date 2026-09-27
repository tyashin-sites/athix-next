/**
 * Conditions — the six body regions and the condition lists exactly as
 * supplied in the client's services document. Descriptive copy explains
 * the region; it does not promise outcomes (CPO advertising standard).
 */

export interface ConditionRegion {
  slug: string;
  name: string;
  /** The verbatim list from the client document. */
  conditions: string[];
  intro: string[];
  /** Common presentations the physiotherapist assesses in this region. */
  whatWeLookAt: string[];
  /** Which services commonly form part of the plan (slugs from services.ts). */
  relatedServices: string[];
  metaDescription: string;
}

export const CONDITIONS: ConditionRegion[] = [
  {
    slug: 'head-and-neck',
    name: 'Head & Neck',
    conditions: [
      'Neck Pain',
      'Headaches',
      'Whiplash',
      'Dizziness',
      'Vertigo',
      'Concussion-Related Symptoms',
      'TMJ Dysfunction',
      'Tinnitus / Ear Ringing',
    ],
    intro: [
      'Neck pain rarely exists on its own. Posture, breathing, the upper back, the jaw, and the way you load your shoulders through the day all influence how the neck feels and moves.',
      'Assessment looks at the whole region — joints, muscles, nerves, and movement patterns — to understand what is driving the symptoms, not only where they are felt.',
    ],
    whatWeLookAt: [
      'Neck and upper-back joint mobility and muscle tone.',
      'Headache patterns that relate to neck movement or posture.',
      'Jaw (TMJ) mechanics and their relationship to the neck.',
      'Symptoms following a whiplash-type injury or a concussion, and whether physiotherapy is appropriate alongside your physician’s care.',
    ],
    relatedServices: ['joint-mobilization-manipulation', 'soft-tissue-myofascial-release', 'dry-needling-acupuncture', 'strength-mobility-stretching'],
    metaDescription:
      'Physiotherapy for neck pain, headaches, whiplash, dizziness, TMJ dysfunction and concussion-related symptoms in Burlington, ON. Athix Physio & Sports Rehab.',
  },
  {
    slug: 'shoulder-and-arm',
    name: 'Shoulder & Arm',
    conditions: [
      'Shoulder Pain',
      'Rotator Cuff Injuries',
      'Frozen Shoulder',
      'Tennis Elbow',
      'Golfer’s Elbow',
      'Wrist & Hand Injuries',
    ],
    intro: [
      'The shoulder trades stability for mobility, which is why overhead sports, repetitive work, and sudden loads so often lead to rotator cuff and shoulder problems.',
      'Elbow, wrist, and hand symptoms — tennis elbow, golfer’s elbow, and racquet-related overuse — frequently trace back to how load is shared along the whole arm and trunk.',
    ],
    whatWeLookAt: [
      'Rotator cuff strength and control, and shoulder-blade movement.',
      'Range of motion and the pattern of stiffness in a frozen shoulder.',
      'Grip, forearm loading, and technique factors in tennis and golfer’s elbow.',
      'The kinetic chain — how the trunk and lower body contribute to arm loading in overhead and racquet sports.',
    ],
    relatedServices: ['strength-mobility-stretching', 'soft-tissue-myofascial-release', 'dry-needling-acupuncture', 'joint-mobilization-manipulation'],
    metaDescription:
      'Physiotherapy for shoulder pain, rotator cuff injuries, frozen shoulder, tennis elbow, golfer’s elbow and wrist injuries in Burlington. Athix Physio & Sports Rehab.',
  },
  {
    slug: 'back-and-spine',
    name: 'Back & Spine',
    conditions: [
      'Low Back Pain',
      'Sciatica',
      'Mid & Upper Back Pain',
      'Spinal Stiffness',
      'Muscle Strains',
      'Movement-Related Pain',
    ],
    intro: [
      'Most back pain is movement-related: how the spine, hips, and trunk share load through lifting, sitting, rotation, and sport.',
      'Assessment identifies which movements provoke and which relieve, what the surrounding joints and muscles are doing, and — for sciatica-type symptoms — whether nerve sensitivity is part of the picture.',
    ],
    whatWeLookAt: [
      'Movement patterns that aggravate or ease low back and mid-back pain.',
      'Hip and thoracic mobility, and their effect on spinal loading.',
      'Nerve mobility and sensitivity in sciatica and leg symptoms.',
      'Rotational and lifting demands from sport, training, or work.',
    ],
    relatedServices: ['joint-mobilization-manipulation', 'neuro-fascial-release', 'strength-mobility-stretching', 'dry-needling-acupuncture'],
    metaDescription:
      'Physiotherapy for low back pain, sciatica, mid and upper back pain, spinal stiffness and muscle strains in Burlington, ON. Athix Physio & Sports Rehab.',
  },
  {
    slug: 'hip-and-pelvis',
    name: 'Hip & Pelvis',
    conditions: [
      'Hip Pain',
      'Groin Injuries',
      'Hip Flexor Strains',
      'Adductor Injuries',
      'Gluteal Injuries',
      'Sports-Related Hip Conditions',
    ],
    intro: [
      'The hip and pelvis are the engine of change-of-direction sports. Groin, adductor, hip flexor, and gluteal injuries are common in racquet sports, cricket, soccer, and running.',
      'Assessment looks at hip joint mobility, the strength balance around the pelvis, and how load transfers between the trunk and the leg during your sport.',
    ],
    whatWeLookAt: [
      'Hip range of motion and joint irritability.',
      'Adductor, hip flexor, and gluteal strength and length.',
      'Single-leg control and how the pelvis manages cutting, lunging, and sprinting.',
      'Training load changes that may have preceded the symptoms.',
    ],
    relatedServices: ['strength-mobility-stretching', 'soft-tissue-myofascial-release', 'neuro-fascial-release', 'sports-acupuncture'],
    metaDescription:
      'Physiotherapy for hip pain, groin injuries, hip flexor strains, adductor and gluteal injuries in Burlington, ON. Athix Physio & Sports Rehab.',
  },
  {
    slug: 'knee',
    name: 'Knee',
    conditions: [
      'Knee Pain',
      'Patellofemoral Pain',
      'Meniscus-Related Conditions',
      'Ligament Injuries',
      'Tendon Injuries',
      'Post-Surgical Rehabilitation',
    ],
    intro: [
      'Knee problems range from kneecap (patellofemoral) pain and tendon overload to meniscus and ligament injuries — including ACL and other ligament injuries that may or may not involve surgery.',
      'Rehabilitation is staged: settle the knee, restore range and strength, rebuild control, then return to running, cutting, jumping, and sport.',
    ],
    whatWeLookAt: [
      'Knee range of motion, swelling, and irritability.',
      'Quadriceps, hamstring, and hip strength — the muscles that protect the knee.',
      'Landing, lunging, and change-of-direction mechanics.',
      'Post-surgical protocols and the milestones for a safe return to sport.',
    ],
    relatedServices: ['pre-and-post-surgical-rehabilitation', 'strength-mobility-stretching', 'joint-mobilization-manipulation', 'soft-tissue-myofascial-release'],
    metaDescription:
      'Physiotherapy for knee pain, patellofemoral pain, meniscus and ligament injuries, tendon injuries and post-surgical knee rehabilitation in Burlington. Athix Physio & Sports Rehab.',
  },
  {
    slug: 'ankle-and-foot',
    name: 'Ankle & Foot',
    conditions: [
      'Ankle Sprains',
      'Achilles Injuries',
      'Plantar Fascia Pain',
      'Calf Injuries',
      'Shin Pain',
      'Foot & Ankle Injuries',
    ],
    intro: [
      'Ankle sprains are among the most common injuries in badminton, squash, tennis, and cricket — and an ankle that is not fully rehabilitated is more likely to be sprained again.',
      'Achilles, calf, plantar fascia, and shin symptoms are usually load-related: the tissue has been asked to do more than it was prepared for.',
    ],
    whatWeLookAt: [
      'Ankle stability, balance, and range of motion after a sprain.',
      'Calf and Achilles strength and load tolerance.',
      'Foot mechanics and footwear in plantar fascia and shin pain.',
      'Hopping, landing, and push-off mechanics for return to sport.',
    ],
    relatedServices: ['strength-mobility-stretching', 'joint-mobilization-manipulation', 'soft-tissue-myofascial-release', 'therapeutic-modalities'],
    metaDescription:
      'Physiotherapy for ankle sprains, Achilles injuries, plantar fascia pain, calf injuries and shin pain in Burlington, ON. Athix Physio & Sports Rehab.',
  },
];

export const CONDITION_SLUGS = CONDITIONS.map((c) => c.slug);

export function getCondition(slug: string): ConditionRegion | undefined {
  return CONDITIONS.find((c) => c.slug === slug);
}
