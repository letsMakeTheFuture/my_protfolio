// ============================================================
//  FLEURIE (Creative section): your crochet flower mini-brand.
//  Edit texts, captions, or the Instagram link freely.
//  Set `instagram: ''` if you don't want to show the link.
// ============================================================
// Photos live in the `public` folder (same level as `src`).
const bouquet = '/fleurie-bouquet.png'
const rose = '/fleurie-rose.png'
const rose2 = '/fleurie-rose-2.png'

export const FLEURIE = {
  label: 'Handmade work',
  title: 'Fleurie',
  tagline: 'Turning flowers into little memories.',
  intro:
    'Fleurie is my small crochet studio: bouquets, gifts and decor made stitch by stitch, wrapped with care. Every petal is shaped by hand, so no two flowers are exactly alike.',
  instagram: 'https://www.instagram.com/by_fleurie/',
  cover: '/logo.jpg', // the logo shown on the tile
  photos: [
    { src: bouquet, caption: 'Spring bouquet: tulips, roses and a lily' },
    { src: rose, caption: 'The classic crochet rose' },
    { src: rose2, caption: 'Wrapped and ribboned, ready to gift' },
  ],
  points: [
    { title: 'Details that last', text: 'Even stitches, clean shaping and neat finishing, so every piece holds up.' },
    { title: 'Designed as a gift', text: 'Wrapping, ribbon and presentation are part of the work, not an afterthought.' },
    { title: 'A small business', text: 'Taking orders, choosing materials and delivering on time, the same habits I bring to client projects.' },
  ],
}