import { useEffect, useState } from 'react'
import { SITE, NAV, JOURNEY, PROJECTS, CREATIVE, POSTS } from './data.js'
import { POST_BODIES } from './posts.js'
import { FLEURIE } from './fleurie.js'
import { Avatar, PdfArt, PortalArt, AiArt, EyraArt, CreativeArt, Icon } from './art.jsx'
import { BEYOND } from './beyond.js'

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'ai', label: 'AI' },
  { id: 'freelance', label: 'Freelance' },
]

function Eyebrow({ children }) {
  return (
    <p className="eyebrow">
      <span className="eyebrow-line" />
      {children}
    </p>
  )
}

function DotDivider() {
  return (
    <div className="dot-divider" aria-hidden="true">
      <span />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <i key={i} className={i % 2 ? 'lav' : 'rose'} />
      ))}
      <span />
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Main">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">M</span>
          <span className="brand-name">
            {SITE.name}
            <b>.</b>
          </span>
        </a>

        <ul className="nav-links">
          {NAV.filter((n) => n.id !== 'home').map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`}>{n.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn-small nav-cta">
          Hire me
        </a>

        <button
          className="menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? Icon.close : Icon.menu}
        </button>
      </nav>

      {open && (
        <div className="menu-panel" role="menu">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} role="menuitem" onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn" onClick={() => setOpen(false)}>
            Hire me
          </a>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="pill">
            <span className="pill-dot" />
            Available for thoughtful projects
          </span>
          <p className="hello">
            Hello there
            <svg viewBox="0 0 60 12" width="54" height="12" aria-hidden="true">
              <path d="M2 6 q7 -8 14 0 t14 0 t14 0 t14 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </p>
          <h1 className="h1">
            Hi, I’m <em>Merwa</em>
          </h1>
          <h2 className="tagline">
            I can’t stick to one subject, so I build things where{' '}
            <span className="hl">ideas meet.</span>
          </h2>
          <p className="lead">
            CS engineering student and freelance web developer — always following curiosity from a tiny detail to a
            bigger possibility.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-grad">
              See my projects {Icon.arrow}
            </a>
            <a href="#contact" className="link-squiggle">
              Get in touch
            </a>
          </div>
          <p className="curious">
            {Icon.sparkOutline}
            Currently curious about AI, quantum computing &amp; the spaces between
          </p>
        </div>

        <div className="hero-art" aria-hidden="false">
          <svg className="orbit" viewBox="0 0 500 500" aria-hidden="true">
            <circle cx="250" cy="250" r="240" fill="none" stroke="#B8A4E3" strokeOpacity=".5" strokeDasharray="3 5" />
            <circle cx="250" cy="250" r="190" fill="none" stroke="#B8A4E3" strokeOpacity=".4" strokeDasharray="3 5" />
            <g stroke="#E8C27A" strokeOpacity=".7" strokeDasharray="3 4" fill="none">
              <path d="M70 150 L160 110 L250 150" />
              <path d="M290 130 L360 170 L400 100" />
            </g>
            <g fill="#E8C27A">
              <circle cx="70" cy="150" r="5" />
              <circle cx="160" cy="110" r="6" />
              <circle cx="250" cy="150" r="4" />
              <circle cx="360" cy="170" r="6" />
              <circle cx="400" cy="100" r="5" />
            </g>
          </svg>
          <div className="blob" />
          <Avatar />
          <div className="float f-building">
            {Icon.code}
            <b>building...</b>
          </div>
          <div className="float f-details">
            notices tiny details <span>↗</span>
          </div>
          <div className="float f-care">
            {Icon.sparkOutline}
            <span>
              small details,
              <br />
              big care
            </span>
          </div>
          <div className="float f-spark">{Icon.spark}</div>
        </div>
      </div>
      <div className="container">
        <DotDivider />
      </div>
    </section>
  )
}

const BEYOND_ICONS = { detail: Icon.check, languages: Icon.translate, learning: Icon.spark }

function BeyondModal({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="modal-back" onClick={onClose}>
      <div
        className="modal modal-detail"
        role="dialog"
        aria-modal="true"
        aria-labelledby="beyond-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-x" aria-label="Close" onClick={onClose}>
          {Icon.close}
        </button>
        <span className={`icon-tile ${item.tone}`}>{BEYOND_ICONS[item.id]}</span>
        <h3 id="beyond-title">{item.title}</h3>
        <p className="modal-intro">{item.intro}</p>

        {item.levels && (
          <ul className="levels">
            {item.levels.map((l) => (
              <li key={l.name}>
                <div className="level-head">
                  <span>{l.name}</span>
                  <span>{l.level}</span>
                </div>
                <div className="level-bar" role="img" aria-label={`${l.name}: ${l.level}`}>
                  <i style={{ width: `${l.pct}%` }} />
                </div>
              </li>
            ))}
          </ul>
        )}

        {item.points && (
          <ul className="points">
            {item.points.map((p) => (
              <li key={p.title}>
                <b>{p.title}</b>
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
        )}

        <button className="btn btn-grad" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

function About() {
  const [open, setOpen] = useState(null) // null | 'detail' | 'languages' | 'learning'
  const pick = (id) => ({
    role: 'button',
    tabIndex: 0,
    'aria-haspopup': 'dialog',
    onClick: () => setOpen(id),
    onKeyDown: (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        setOpen(id)
      }
    },
  })

  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <Eyebrow>A little about me</Eyebrow>
          <h2 className="h2">
            Curiosity is my
            <br />
            compass.
          </h2>
          <p className="body">
            I’m a computer science engineering student who feels most alive when I’m learning. One day I’m untangling an
            AI concept, the next I’m wondering how a quantum bit can be two things at once.
          </p>
          <p className="body">
            I love problems with hidden doors — the kind that reward patience, imagination, and noticing the small
            details others might pass by. I crochet, so I care about every stitch, and I bring that same care to every
            project.
          </p>
          <div className="chips">
            <span>Artificial intelligence</span>
            <span>Quantum computing</span>
            <span>Problem solving</span>
          </div>
        </div>

        <div className="beyond">
          <p className="beyond-label">Beyond code</p>
          <div className="beyond-grid">
            <article className="card-detail" {...pick('detail')}>
              <span className="icon-tile grad">{Icon.check}</span>
              <h3>Attention to detail</h3>
              <p>I notice the tiny choices that make an experience feel considered, clear, and complete.</p>
              <span className="more">
                More about this {Icon.arrow}
              </span>
              <svg className="loops" viewBox="0 0 300 70" aria-hidden="true">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <ellipse key={i} cx={20 + i * 50} cy="46" rx="20" ry="30" fill="none" stroke="#E7A7B8" strokeWidth="3" transform={`rotate(-8 ${20 + i * 50} 46)`} />
                ))}
              </svg>
            </article>
            <div className="beyond-col">
              <article className="card-mini" {...pick('languages')}>
                <span className="icon-tile lav">{Icon.translate}</span>
                <h3>Languages</h3>
                <p>New words are new ways to see the world. I’m always adding a few more.</p>
                <span className="more">
                  See my levels {Icon.arrow}
                </span>
              </article>
              <article className="card-mini" {...pick('learning')}>
                <span className="icon-tile dark">{Icon.spark}</span>
                <h3>Daily learning</h3>
                <p>A concept, a technique, a surprising fact — something new, every single day.</p>
                <span className="more">
                  What I’m learning {Icon.arrow}
                </span>
              </article>
            </div>
          </div>
        </div>
      </div>
      {open && <BeyondModal item={BEYOND[open]} onClose={() => setOpen(null)} />}
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <Eyebrow>Education</Eyebrow>
        <h2 className="h2">Building strong foundations.</h2>
        <article className="edu-card">
          <div className="edu-seal" aria-hidden="true">
            <b>ESI</b>
            <small>SBA</small>
          </div>
          <div>
            <p className="edu-place">Sidi Bel Abbès, Algeria</p>
            <h3>École Supérieure en Informatique</h3>
            <p className="edu-deg">Computer Science Engineering</p>
            <div className="edu-tags">
              <span>Programming</span>
              <span>Probability &amp; statistics</span>
              <span>Mathematical analysis</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section id="journey" className="section">
      <div className="container journey-grid">
        <div>
          <Eyebrow>My journey</Eyebrow>
          <h2 className="h2">
            Learning by
            <br />
            doing, then
            <br />
            doing more.
          </h2>
          <p className="body">There’s no straight line — just a thread connecting every curious experiment.</p>
        </div>
        <div>
          <ol className="timeline">
            {JOURNEY.map((j, i) => (
              <li key={j.title}>
                <span className="tl-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{j.title}</h3>
                  <p>{j.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="quote">
            {Icon.heart}
            <p>Along the way, I want my work to help others and leave a positive mark in my country.</p>
            <small>Algeria</small>
          </div>
        </div>
      </div>
    </section>
  )
}

const ART = { pdf: PdfArt, portal: PortalArt, ai: AiArt, eyra: EyraArt }

function ProjectModal({ project, onClose }) {
  const [shot, setShot] = useState(0)
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])
  const d = project.details

  return (
    <div className="modal-back" onClick={onClose}>
      <div
        className="modal modal-detail modal-post"
        role="dialog"
        aria-modal="true"
        aria-labelledby="proj-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-x" aria-label="Close" onClick={onClose}>
          {Icon.close}
        </button>
        <p className="post-meta">{project.badge}</p>
        <h3 id="proj-title">{project.title}</h3>
        <p className="modal-intro">{d.intro}</p>
        {d.video && (
          <figure className="proj-video">
            <video poster={d.video.poster} controls muted loop playsInline preload="metadata">
              <source src={d.video.src} type="video/mp4" />
              {d.video.webm && <source src={d.video.webm} type="video/webm" />}
            </video>
            <figcaption>{d.video.caption}</figcaption>
          </figure>
        )}
        {d.images && (
          <>
            <figure className="fl-main">
              <img src={d.images[shot].src} alt={d.images[shot].caption} />
              <figcaption>{d.images[shot].caption}</figcaption>
            </figure>
            <div className="fl-thumbs proj-thumbs">
              {d.images.map((im, n) => (
                <button
                  key={im.src}
                  className={n === shot ? 'on' : ''}
                  onClick={() => setShot(n)}
                  aria-label={`Show screenshot ${n + 1}: ${im.caption}`}
                >
                  <img src={im.src} alt="" />
                </button>
              ))}
            </div>
          </>
        )}
        {d.steps && (
          <>
            <p className="proj-sub">{d.stepsTitle || 'How it works'}</p>
            <ol className="proj-steps">
              {d.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </>
        )}
        <ul className="points">
          {d.points.map((p) => (
            <li key={p.title}>
              <b>{p.title}</b>
              <span>{p.text}</span>
            </li>
          ))}
        </ul>
        {d.role && <p className="proj-role">{d.role}</p>}
        <div className="tags proj-modal-tags">
          {project.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="proj-links">
          {(d.links || []).map((l) => (
            <a key={l.url} className="btn btn-grad" href={l.url} target="_blank" rel="noopener noreferrer">
              {l.label} {Icon.ext}
            </a>
          ))}
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(null)
  const list = PROJECTS.filter((p) => filter === 'all' || p.kinds.includes(filter))

  return (
    <section id="projects" className="section section-tint">
      <div className="container">
        <div className="head-row">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <h2 className="h2">Things I’ve built.</h2>
            <p className="body">Projects where useful ideas meet careful execution.</p>
          </div>
          <div className="tabs" role="tablist" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                className={filter === f.id ? 'on' : ''}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="proj-grid">
          {list.map((p) => {
            const Art = ART[p.art]
            return (
              <article
                key={p.title}
                className={`proj proj-${p.art}${p.details ? ' proj-click' : ''}`}
                {...(p.details && {
                  role: 'button',
                  tabIndex: 0,
                  'aria-haspopup': 'dialog',
                  onClick: () => setOpen(p),
                  onKeyDown: (e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setOpen(p)),
                })}
              >
                <div className="proj-top">
                  <span className="badge">{p.badge}</span>
                  <Art />
                </div>
                <div className="proj-body">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <div className="proj-foot">
                    <div className="tags">
                      {p.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    {p.details ? (
                      <span className="round-btn" aria-hidden="true">
                        {Icon.arrow}
                      </span>
                    ) : p.link ? (
                      <a className="round-btn" href={p.link} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}>
                        {Icon.arrow}
                      </a>
                    ) : (
                      <span className="round-btn is-soon" title="Link coming soon" aria-label="Link coming soon">
                        {Icon.arrow}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
          <article className="proj proj-soon">
            <span className="soon-icon">{Icon.spark}</span>
            <h3>
              More ideas are
              <br />
              taking shape.
            </h3>
            <p>Something new is always on my desk.</p>
            <b>Add more soon</b>
          </article>
        </div>
      </div>
      {open && <ProjectModal project={open} onClose={() => setOpen(null)} />}
    </section>
  )
}

function FleurieModal({ onClose }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])
  const ph = FLEURIE.photos[i]

  return (
    <div className="modal-back" onClick={onClose}>
      <div
        className="modal modal-detail modal-fleurie"
        role="dialog"
        aria-modal="true"
        aria-labelledby="fleurie-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-x" aria-label="Close" onClick={onClose}>
          {Icon.close}
        </button>
        <p className="post-meta">{FLEURIE.label}</p>
        <h3 id="fleurie-title">{FLEURIE.title}</h3>
        <p className="modal-intro">{FLEURIE.intro}</p>

        <figure className="fl-main">
          <img src={ph.src} alt={ph.caption} />
          <figcaption>{ph.caption}</figcaption>
        </figure>
        <div className="fl-thumbs">
          {FLEURIE.photos.map((p, n) => (
            <button
              key={p.src}
              className={n === i ? 'on' : ''}
              onClick={() => setI(n)}
              aria-label={`Show photo ${n + 1}: ${p.caption}`}
            >
              <img src={p.src} alt="" />
            </button>
          ))}
        </div>

        <ul className="points">
          {FLEURIE.points.map((p) => (
            <li key={p.title}>
              <b>{p.title}</b>
              <span>{p.text}</span>
            </li>
          ))}
        </ul>

        {FLEURIE.instagram && (
          <a className="btn btn-grad" href={FLEURIE.instagram} target="_blank" rel="noopener noreferrer">
            See Fleurie on Instagram
          </a>
        )}
      </div>
    </div>
  )
}

function Creative() {
  const [open, setOpen] = useState(false)
  const rest = CREATIVE.filter((c) => !c.wide)

  return (
    <section id="creative" className="section">
      <div className="container creative-grid">
        <div>
          <Eyebrow>Creative corner</Eyebrow>
          <h2 className="h2">
            Made by
            <br />
            hand,
            <br />
            mouse &amp;
            <br />
            imagination.
          </h2>
          <p className="body">
            Code isn’t my only canvas. Here are a few things that begin with curiosity and end with something tangible.
          </p>
        </div>
        <div className="cr-grid">
          <article
            className="cr cr-wide cr-fleurie"
            role="button"
            tabIndex={0}
            onClick={() => setOpen(true)}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setOpen(true))}
          >
            <img className="cr-photo" src={FLEURIE.cover} alt="Fleurie logo" />
            <div>
              <p className="cr-label">{FLEURIE.label}</p>
              <h3>{FLEURIE.title}</h3>
              <p className="cr-tag">{FLEURIE.tagline}</p>
              <span className="read">
                See the flowers {Icon.arrow}
              </span>
            </div>
          </article>
          {rest.map((c) => (
            <article key={c.title} className={`cr cr-${c.tone}`}>
              <p className="cr-label">{c.label}</p>
              <CreativeArt kind={c.art} />
              <h3>{c.title}</h3>
            </article>
          ))}
        </div>
      </div>
      {open && <FleurieModal onClose={() => setOpen(false)} />}
    </section>
  )
}

function PostModal({ post, body, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="modal-back" onClick={onClose}>
      <div
        className="modal modal-detail modal-post"
        role="dialog"
        aria-modal="true"
        aria-labelledby="post-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-x" aria-label="Close" onClick={onClose}>
          {Icon.close}
        </button>
        <p className="post-meta">
          {post.tag} · {post.min} MIN
        </p>
        <h3 id="post-title">{post.title}</h3>
        <div className="post-body">
          {body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <button className="btn btn-grad" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

function Blog() {
  const [open, setOpen] = useState(null)
  const pick = (i) => POST_BODIES[i] && setOpen(i)

  return (
    <section id="blog" className="section section-cream">
      <div className="container">
        <div className="head-row">
          <div>
            <Eyebrow>Notes &amp; thoughts</Eyebrow>
            <h2 className="h2">Ideas I’m untangling.</h2>
            <p className="body">Learning out loud — about code, curiosity, and all the threads in between.</p>
          </div>
          <a href="#blog" className="link-squiggle">
            See all posts
          </a>
        </div>
        <div className="post-grid">
          {POSTS.map((p, i) => (
            <article
              key={p.title}
              className="post post-click"
              role="button"
              tabIndex={0}
              onClick={() => (p.link ? window.open(p.link, '_blank', 'noopener') : pick(i))}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), p.link ? window.open(p.link, '_blank', 'noopener') : pick(i))}
            >
              <span className="post-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="post-meta">
                {p.tag} · {p.min} MIN
              </p>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <span className="read">Read the note {Icon.arrow}</span>
            </article>
          ))}
        </div>
      </div>
      {open !== null && <PostModal post={POSTS[open]} body={POST_BODIES[open]} onClose={() => setOpen(null)} />}
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', idea: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const [sentName, setSentName] = useState('')

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  useEffect(() => {
    if (status !== 'sent') return
    const onKey = (e) => e.key === 'Escape' && setStatus('idle')
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [status])

  async function submit(e) {
    e.preventDefault()
    setSentName(form.name.trim().split(' ')[0])
    if (SITE.formEndpoint) {
      setStatus('sending')
      try {
        const res = await fetch(SITE.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name: form.name, email: form.email, message: form.idea }),
        })
        if (!res.ok) throw new Error('bad response')
        setStatus('sent')
        setForm({ name: '', email: '', idea: '' })
      } catch {
        setStatus('error')
      }
    } else {
      const subject = encodeURIComponent(`Project idea from ${form.name || 'your website'}`)
      const body = encodeURIComponent(`${form.idea}\n\n— ${form.name} (${form.email})`)
      window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
      setStatus('sent')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact">
          <div className="contact-copy">
            <Eyebrow>Say hello</Eyebrow>
            <h2 className="h2 on-dark">
              Let’s make something <em>together.</em>
            </h2>
            <p className="body on-dark">
              Have a thoughtful project, a curious idea, or simply want to talk about AI and possibility? My inbox is
              open.
            </p>
            <a href={`mailto:${SITE.email}`} className="mail">
              {Icon.mail}
              {SITE.email}
            </a>
            <div className="socials">
              <a href={SITE.links.mostaql} target="_blank" rel="noreferrer">
                Mostaql {Icon.ext}
              </a>
              <a href={SITE.links.khamsat} target="_blank" rel="noreferrer">
                Khamsat {Icon.ext}
              </a>
              <a href={SITE.links.github} target="_blank" rel="noreferrer">
                {Icon.github} GitHub
              </a>
            </div>
          </div>

          <form className="form" onSubmit={submit}>
            <label>
              Your name
              <input required value={form.name} onChange={set('name')} placeholder="What should I call you?" />
            </label>
            <label>
              Email address
              <input required type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" />
            </label>
            <label>
              Tell me about your idea
              <textarea required rows="4" value={form.idea} onChange={set('idea')} placeholder="A few details about what you have in mind..." />
            </label>
            <button type="submit" className="btn btn-grad btn-block" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send message'} {Icon.arrow}
            </button>
            <p className="form-note" role="status">
              {status === 'error' && 'Something went wrong. Please email me directly instead.'}
            </p>
          </form>

          {status === 'sent' && (
            <div className="modal-back" onClick={() => setStatus('idle')}>
              <div
                className="modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="thanks-title"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="modal-icon">{Icon.heart}</span>
                <h3 id="thanks-title">Thank you{sentName ? `, ${sentName}` : ''}!</h3>
                <p>Your message is on its way. I’ll get back to you as soon as I can.</p>
                <button className="btn btn-grad" autoFocus onClick={() => setStatus('idle')}>
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="wave" aria-hidden="true">
          <svg viewBox="0 0 1200 20" preserveAspectRatio="none">
            <path d="M0 10 q15 -9 30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0 t30 0" fill="none" stroke="#E57A9E" strokeOpacity=".5" strokeWidth="1.6" />
          </svg>
        </div>
        <div className="foot-row">
          <a href="#home" className="brand">
            <span className="brand-mark">M</span>
            <span className="brand-name">
              {SITE.name}
              <b>.</b>
            </span>
          </a>
          <p>Made with curiosity and attention to detail.</p>
          <a href="#home" className="to-top">
            Back to top {Icon.up}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Journey />
        <Projects />
        <Creative />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}