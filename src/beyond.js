// ============================================================
//  "BEYOND CODE" CARDS (About section). Click a card = this popup opens.
//  Edit the texts freely. `tone` is the icon color: 'grad' | 'lav' | 'dark'
//  For languages, `pct` is how full the bar is (0-100).
// ============================================================

export const BEYOND = {
  detail: {
    id: 'detail',
    tone: 'grad',
    title: 'Attention to detail',
    intro:
      'When I crochet, one missed stitch shows up rows later. I work the same way with code and design: the small things matter.',
    points: [
      { title: 'Pixel by pixel', text: 'Spacing, alignment and colors that feel calm and consistent.' },
      { title: 'Clean, readable code', text: 'Clear names and tidy structure, so anyone can understand it quickly.' },
      { title: 'Tested on real screens', text: 'I check my work on phone and desktop before I call it done.' },
      { title: 'Words matter too', text: 'I proofread every text, because small typos break trust.' },
    ],
  },
  languages: {
    id: 'languages',
    tone: 'lav',
    title: 'Languages',
    intro: 'New words are new ways to see the world. I’m always adding a few more.',
    levels: [
      { name: 'Arabic', level: 'Native', pct: 100 },
      { name: 'English', level: 'Advanced', pct: 80 },
      { name: 'French', level: 'Intermediate', pct: 55 },
    ],
  },
  learning: {
    id: 'learning',
    tone: 'dark',
    title: 'Daily learning',
    intro: 'A concept, a technique, a surprising fact. I try to learn something new every single day.',
    points: [
      { title: 'AI & machine learning', text: 'Models, mathematics, and how thoughtful technology gets made.' },
      { title: 'Quantum computing', text: 'Wondering how a quantum bit can be two things at once.' },
      { title: 'Building to learn', text: 'Small projects teach me more than any tutorial.' },
      { title: 'Languages', text: 'New words, new phrases, new ways to see the world.' },
    ],
  },
}
