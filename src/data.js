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
    badge: 'AI project',
    title: 'EYRA, eye-controlled assistant',
    text: 'Eye-tracking software that lets people who cannot use their hands type and speak, send movement commands and call for help using only their eyes. An SOS alert sends a Telegram message with their location.',
    tags: ['Python', 'Computer vision', 'Eye tracking', 'Telegram bot', 'Accessibility'],
    kinds: ['ai'],
    art: 'eyra',
    link: '',
    // Popup shown when the card is clicked. Remove `details` to make the card non-clickable.
    details: {
      intro:
        'EYRA (Eye Robot Assistant) is an AI-powered eye-control system for people who cannot use their hands. A camera follows the eyes, and gaze plus blinks replace the mouse and keyboard.',
      // Animated explainer. Files live in the `public` folder.
      video: { src: '/eyra-demo.mp4', webm: '/eyra-demo.webm', poster: '/eyra-poster.jpg', caption: 'Animated explainer of how the eye controls work' },
      stepsTitle: 'How it works',
      steps: [
        'Look left or right: the program tracks where the iris is looking and highlights that button.',
        'Hold a long blink to select it, for example MOVE.',
        'In move mode, looking right sends a TURN RIGHT command to the wheelchair, and looking left sends TURN LEFT.',
        'Look up for about a second to stop and return to the dashboard.',
      ],
      points: [
        { title: 'Speak', text: 'A dynamic keyboard controlled by the eyes, with text-to-speech so the user can say what they type.' },
        { title: 'Move', text: 'Looking left or right sends turn commands, and looking up stops and returns to the main screen.' },
        { title: 'SOS', text: 'Looking at SOS sends a Telegram message to the bot saying the user needs help, with their location.' },
      ],
      role: 'My part: detecting where the iris is looking, the SOS alert to Telegram with the location, and the text-to-speech with the eye-controlled dynamic keyboard.',
      // links: buttons shown at the bottom of the popup. Leave empty to hide them.
      links: [
        // { label: 'View the slides', url: 'https://...' },
        // { label: 'GitHub', url: 'https://github.com/...' },
      ],
    },
  },
  {
    badge: 'In progress',
    title: 'Syntrix, PDF chat app',
    text: 'A focused workspace to upload documents, ask questions, and turn long PDFs into useful conversations. Frontend prototype, still in progress.',
    tags: ['React', 'Frontend', 'AI'],
    kinds: ['web', 'ai'],
    art: 'pdf',
    link: '',
    details: {
      intro:
        'Syntrix is a chat-with-your-documents web app. You drop in a PDF, DOCX or TXT file, see a summary of what is inside it, and ask questions across one or all of your documents. This is the frontend, shown with sample content while the project is still in progress.',
      images: [
        { src: '/syntrix-1.jpg', caption: 'Landing page' },
        { src: '/syntrix-2.jpg', caption: 'Upload area and feature list' },
        { src: '/syntrix-3.jpg', caption: 'Document library with a summary of the uploaded file' },
        { src: '/syntrix-4.jpg', caption: 'Chat across all documents, with suggested questions' },
      ],
      points: [
        { title: 'Upload', text: 'Drag in PDF, DOCX or TXT files and see pages, sections, tables and key topics at a glance.' },
        { title: 'Ask', text: 'Chat with one document or all of them at once, with suggested questions to start from.' },
        { title: 'Still to come', text: 'A knowledge graph and contradiction detection are planned next.' },
      ],
      // role: 'My part: ...',   // TODO: write what you built, then uncomment
      links: [
        // { label: 'GitHub', url: 'https://github.com/...' },
      ],
    },
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