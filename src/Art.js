// ============================================================
//  EDIT YOUR CONTENT HERE: links, projects, posts.
// ============================================================

export const SITE = {
  name: 'merwa',
  email: 'm.belaid@esi-sba.dz', 
  // Optional: paste a Formspree endpoint (https://formspree.io) so the form sends
  // straight to your inbox. Leave empty to open the visitor's email app instead.
  formEndpoint: 'https://formspree.io/f/xzedjjkp',
  links: {
    mostaql: 'https://mostaql.com/Yourprogrammer', // TODO: your Mostaql profile URL
    khamsat: 'https://khamsat.com/the_coder_merwa', // TODO: your Khamsat profile URL
    github: 'https://github.com/LetsMakeTheFuture', // TODO: your GitHub profile URL
  },
}

export const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'journey', label: 'Journey' },
  { id: 'projects', label: 'Projects' },
  { id: 'creative', label: 'Creative' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]

export const JOURNEY = [
  {
    title: 'First freelance clients',
    text: 'I turned classroom knowledge into real websites, real conversations, and work that helped real people.',
  },
  {
    title: 'Web development, with intelligence',
    text: 'I began weaving AI features into useful web experiences — not for the buzz, but for the possibility.',
  },
  {
    title: 'Going deeper into AI',
    text: 'Now I’m exploring the ideas behind the tools: models, mathematics, and how thoughtful technology gets made.',
  },
]

// PROJECTS: add a new object here and it appears on the site.
// kind: 'web' | 'ai' | 'freelance'  (used by the filter tabs; a project can have several)
// art:  which little illustration to show: 'pdf' | 'portal' | 'ai' | 'eyra'
// link: where the arrow button goes ('' = no link yet)
export const PROJECTS = [
  {
    badge: 'Team project',
    title: 'EYRA, eye-controlled assistant',
    text: 'An AI eye-tracking system that lets people who cannot use their hands speak, move a robot and call for help using only gaze and blinks. An SOS alert sends a Telegram message with a GPS location.',
    tags: ['Python', 'Computer vision', 'Raspberry Pi', 'Accessibility'],
    kinds: ['ai'],
    art: 'eyra',
    link: '', // TODO: GitHub repo, demo video or report link
  },
  {
    badge: 'Featured build',
    title: 'Syntrix, PDF chat app',
    text: 'A focused workspace to upload documents, ask questions, and turn long PDFs into useful conversations.',
    tags: ['React', 'AI', 'RAG'],
    kinds: ['web', 'ai'],
    art: 'pdf',
    link: '', // TODO: live link or GitHub repo
  },
  {
    badge: 'Client project',
    title: 'Local business portal',
    text: 'A warm, bilingual web experience designed to help a local team reach and support more customers.',
    tags: ['Web design', 'Frontend'],
    kinds: ['web', 'freelance'],
    art: 'portal',
    link: '',
  },
  {
    badge: 'Experiment',
    title: 'Tiny model playground',
    text: 'A visual learning tool for exploring prompts, parameters, and the little decisions behind AI outputs.',
    tags: ['Python', 'AI', 'Learning'],
    kinds: ['ai'],
    art: 'ai',
    link: '',
  },
]

export const CREATIVE = [
  { label: 'Illustration', title: 'Little worlds', tone: 'lav', art: 'flower' },
  { label: 'Digital product', title: 'Gentle planning', tone: 'pink', art: 'paper' },
  { label: 'Handmade work', title: 'Loops, color & patience', tone: 'dark', art: 'loops', wide: true },
  { label: 'Visual notes', title: 'Thinking on paper', tone: 'blush', art: 'notes' },
]

export const POSTS = [
  {
    tag: 'AI',
    min: 6,
    title: 'What if curiosity is the best technical skill?',
    text: 'A note on asking better questions before reaching for better answers.',
    link: '',
  },
  {
    tag: 'Learning',
    min: 4,
    title: 'The quiet joy of not knowing yet',
    text: 'Making room for confusion, experiments, and the wonderfully unfinished.',
    link: '',
  },
  {
    tag: 'Details',
    min: 5,
    title: 'The small choices that shape good work',
    text: 'Why thoughtful details are never just decoration — they’re part of how something works.',
    link: '',
  },
]