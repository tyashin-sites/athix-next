/**
 * Services â sourced verbatim in scope from the client's "Services and
 * Conditions and precise content for website" document (27 Sep 2026).
 * Descriptions expand the client's own one-liners; nothing here claims a
 * service, modality or outcome the document does not.
 *
 * College of Physiotherapists of Ontario advertising rules applied: no
 * guarantees, no superlatives, no comparative claims, "when clinically
 * appropriate" retained from the source wording.
 */

export interface Service {
  slug: string;
  name: string;
  /** Short line from the client document. */
  summary: string;
  /** What it is. */
  what: string[];
  /** Who it helps. */
  who: string[];
  /** What to expect in a session. */
  expect: string[];
  metaDescription: string;
  /** Lucide icon name â resolved in the ServiceCard. */
  icon: 'Waves' | 'Hand' | 'Syringe' | 'Zap' | 'Move' | 'Dumbbell' | 'Circle' | 'Activity' | 'ClipboardCheck';
}

export const SERVICES: Service[] = [
  {
    slug: 'neuro-fascial-release',
    name: 'Neuro-Fascial Release',
    icon: 'Waves',
    summary:
      'Targeted techniques addressing the relationship between the nervous system, fascia, muscles, and movement.',
    what: [
      'Neuro-fascial release is a hands-on approach that looks at how the nervous system, the fascia (the connective tissue that wraps and links muscles), and your movement patterns interact.',
      'Rather than treating only the spot that hurts, the aim is to identify restrictions along the connected chain that may be contributing to pain, stiffness, or limited movement.',
    ],
    who: [
      'People with persistent tightness or pain that keeps returning to the same area.',
      'Athletes and active people whose movement feels restricted or inefficient.',
      'Anyone whose symptoms seem to involve more than one region of the body.',
    ],
    expect: [
      'A movement-based assessment of how the affected region relates to the rest of your body.',
      'Sustained, targeted manual techniques combined with guided movement.',
      'A home plan so the changes made in the session carry over into daily life and training.',
    ],
    metaDescription:
      'Neuro-fascial release physiotherapy in Burlington, ON â hands-on techniques addressing how the nervous system, fascia and movement patterns interact. Athix Physio & Sports Rehab.',
  },
  {
    slug: 'soft-tissue-myofascial-release',
    name: 'Soft Tissue & Myofascial Release',
    icon: 'Hand',
    summary:
      'Hands-on treatment to address muscular tension, soft-tissue restrictions, and mobility limitations.',
    what: [
      'Soft-tissue and myofascial release uses hands-on pressure, stretch, and movement to address muscle tension and restrictions in the fascia around it.',
      'It is used to reduce tightness, improve tissue mobility, and prepare the body for the exercise and movement retraining that follows.',
    ],
    who: [
      'People with muscle tightness, knots, or tension-related discomfort.',
      'Athletes managing training load and recovery between sessions.',
      'Anyone with reduced range of motion linked to soft-tissue restriction.',
    ],
    expect: [
      'An assessment to identify which tissues are restricted and why.',
      'Focused manual work â you may feel pressure, stretch, and release during treatment.',
      'Stretching and mobility exercises to maintain the gains between visits.',
    ],
    metaDescription:
      'Soft tissue and myofascial release in Burlington â hands-on physiotherapy for muscle tension, tissue restriction and limited mobility. Athix Physio & Sports Rehab.',
  },
  {
    slug: 'dry-needling-acupuncture',
    name: 'Dry Needling & Acupuncture',
    icon: 'Syringe',
    summary:
      'Targeted needling approaches integrated into physiotherapy care when clinically appropriate.',
    what: [
      'Dry needling and medical acupuncture use fine, sterile, single-use needles at specific points in muscle and connective tissue.',
      'They are integrated into a physiotherapy plan â not used on their own â to help address pain, muscle tension, and movement restriction when clinically appropriate.',
      'Acupuncture, including dry needling, is a controlled act in Ontario. Abhishek Thakur, PT holds the College of Physiotherapists of Ontario authorization to perform it.',
    ],
    who: [
      'People with muscular pain or trigger points that have not settled with other approaches.',
      'Athletes managing overuse-type muscle and tendon symptoms.',
      'Anyone whose physiotherapist identifies needling as a suitable addition to their plan.',
    ],
    expect: [
      'A discussion of whether needling is suitable for you, and your informed consent before treatment.',
      'Brief needle placement in targeted areas; sensations vary from very little to a short muscle twitch or ache.',
      'Needling is combined with movement and exercise â it is one part of the plan, not the whole plan.',
    ],
    metaDescription:
      'Dry needling and medical acupuncture in Burlington, ON, delivered by a registered physiotherapist authorized by the College of Physiotherapists of Ontario. Athix Physio & Sports Rehab.',
  },
  {
    slug: 'sports-acupuncture',
    name: 'Sports Acupuncture',
    icon: 'Zap',
    summary: 'Acupuncture techniques incorporated into sports rehabilitation and recovery programs.',
    what: [
      'Sports acupuncture applies acupuncture and needling techniques within a sports rehabilitation program â supporting recovery, load management, and return to training.',
      'It is used alongside manual therapy and progressive exercise as part of an individualized plan.',
    ],
    who: [
      'Competitive and recreational athletes managing training-related muscle and tendon symptoms.',
      'Racquet-sport, cricket, running, and gym athletes who train frequently.',
      'People returning to sport after injury who want needling included in their recovery plan.',
    ],
    expect: [
      'An assessment of the sport-specific demands on the affected region.',
      'Needling targeted to the muscles and tissues involved, with your consent.',
      'Integration with strength, mobility, and sport-specific rehabilitation work.',
    ],
    metaDescription:
      'Sports acupuncture in Burlington â acupuncture and needling techniques integrated into sports rehabilitation and recovery programs at Athix Physio & Sports Rehab.',
  },
  {
    slug: 'joint-mobilization-manipulation',
    name: 'Joint Mobilization & Manipulation',
    icon: 'Move',
    summary:
      'Manual techniques to improve joint mobility and restore functional movement when appropriate.',
    what: [
      'Joint mobilization uses graded, hands-on movements of a joint to reduce stiffness and improve range of motion.',
      'Manipulation is a quicker, more specific manual technique used when clinically appropriate and with your informed consent.',
      'Both are followed by exercise so the joint keeps moving well after the session.',
    ],
    who: [
      'People with stiff or restricted joints after injury, surgery, or prolonged immobility.',
      'Those with neck, back, shoulder, hip, knee, or ankle stiffness limiting movement.',
      'Athletes whose joint restriction is affecting technique or load tolerance.',
    ],
    expect: [
      'An assessment of the joint, the surrounding tissues, and how the region moves as a whole.',
      'Graded manual techniques, explained before they are performed.',
      'Mobility and control exercises to maintain the improved range.',
    ],
    metaDescription:
      'Joint mobilization and manipulation in Burlington, ON â hands-on physiotherapy to improve joint mobility and restore functional movement. Athix Physio & Sports Rehab.',
  },
  {
    slug: 'strength-mobility-stretching',
    name: 'Strength, Mobility & Stretching',
    icon: 'Dumbbell',
    summary:
      'Progressive exercise programs designed to improve flexibility, strength, stability, and movement quality.',
    what: [
      'Progressive exercise is the backbone of rehabilitation. Programs are built around your condition, your activity, and your goals â and progressed as you improve.',
      'The aim is not only less pain, but better strength, stability, mobility, and control so the problem is less likely to return.',
    ],
    who: [
      'Anyone rebuilding after injury or surgery.',
      'People whose pain is linked to weakness, poor control, or limited flexibility.',
      'Athletes and active adults who want a structured plan for capacity and movement quality.',
    ],
    expect: [
      'Baseline testing of strength, mobility, and movement control relevant to your goals.',
      'A program you can perform at the clinic, at home, or at the gym â with coaching on technique.',
      'Regular progression as your capacity improves.',
    ],
    metaDescription:
      'Strength, mobility and stretching programs in Burlington â progressive, individualized exercise prescription from a registered physiotherapist. Athix Physio & Sports Rehab.',
  },
  {
    slug: 'cupping-therapy',
    name: 'Cupping Therapy',
    icon: 'Circle',
    summary: 'An adjunctive technique used to complement hands-on treatment and rehabilitation.',
    what: [
      'Cupping uses suction cups on the skin to create a lifting effect on the underlying tissue. It is used as an adjunct â a supporting technique â alongside hands-on treatment and exercise.',
    ],
    who: [
      'People with muscle tightness or soft-tissue restriction where a lifting, decompressive technique is useful.',
      'Athletes looking to complement their recovery work between sessions.',
    ],
    expect: [
      'Cups placed on the treatment area for a short period, sometimes with movement.',
      'Temporary circular marks on the skin are common and typically fade within days.',
      'Cupping is combined with the rest of your plan; it is never the whole treatment.',
    ],
    metaDescription:
      'Cupping therapy in Burlington, ON â an adjunctive technique complementing hands-on physiotherapy and rehabilitation at Athix Physio & Sports Rehab.',
  },
  {
    slug: 'therapeutic-modalities',
    name: 'Ultrasound, IFC & NMES',
    icon: 'Activity',
    summary:
      'Therapeutic modalities incorporated when clinically indicated as part of an individualized treatment plan.',
    what: [
      'Therapeutic ultrasound, interferential current (IFC), and neuromuscular electrical stimulation (NMES) are modalities that may be incorporated into a treatment plan when clinically indicated.',
      'They support â and never replace â hands-on treatment and progressive exercise.',
    ],
    who: [
      'People in the early stages of an injury where pain or swelling limits movement.',
      'Those rebuilding muscle activation after injury or surgery (NMES).',
    ],
    expect: [
      'Modalities are chosen for a specific reason in your plan and explained before use.',
      'Sessions remain centred on assessment, hands-on care, and exercise.',
    ],
    metaDescription:
      'Therapeutic ultrasound, IFC and NMES in Burlington â modalities incorporated when clinically indicated within an individualized physiotherapy plan. Athix Physio & Sports Rehab.',
  },
  {
    slug: 'pre-and-post-surgical-rehabilitation',
    name: 'Pre & Post-Surgical Rehabilitation',
    icon: 'ClipboardCheck',
    summary:
      'Progressive rehabilitation based on your condition, surgical protocol, and functional goals â before and after orthopaedic surgery.',
    what: [
      'Prepare. Recover. Rebuild. Whether you are preparing for orthopaedic surgery or rebuilding afterward, rehabilitation is planned around your condition, your surgeonâs protocol, and your functional goals.',
      'Pre-surgery: build strength, mobility, movement capacity, and confidence before the procedure.',
      'Post-surgery: progressively restore range of motion, strength, control, and function through a staged rehabilitation program.',
    ],
    who: [
      'People preparing for knee, hip, shoulder, or other orthopaedic surgery.',
      'Those recovering from ACL reconstruction, rotator cuff repair, joint replacement, or other procedures.',
      'Anyone whose surgeon or physician has recommended physiotherapy as part of their recovery.',
    ],
    expect: [
      'A plan built around your surgeonâs protocol and your personal goals.',
      'Staged progression â from early post-operative care through to return to activity.',
      'Clear milestones and communication with your surgical team where appropriate.',
    ],
    metaDescription:
      'Pre and post-surgical physiotherapy rehabilitation in Burlington, ON â staged programs before and after orthopaedic surgery. Athix Physio & Sports Rehab.',
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
