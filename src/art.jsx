// Small hand-built SVG illustrations used across the site.

export function Avatar() {
  return (
    <svg viewBox="0 0 400 420" className="avatar-svg" role="img" aria-label="Illustration of Merwa working on a laptop">
      {/* hair back / hijab */}
      <path d="M95 400 C90 300 120 215 200 215 C280 215 310 300 305 400 Z" fill="#3D2C4F" />
      {/* neck */}
      <rect x="178" y="262" width="44" height="50" rx="18" fill="#A9684A" />
      {/* face */}
      <ellipse cx="200" cy="205" rx="66" ry="78" fill="#B5714F" />
      {/* hair front */}
      <path d="M134 190 C128 135 170 110 205 112 C250 114 270 150 266 205 C250 170 220 150 188 160 C165 166 150 176 134 190 Z" fill="#5A4170" />
      <path d="M134 190 C150 176 165 166 188 160 C170 190 160 215 140 225 C134 215 132 200 134 190 Z" fill="#4A3560" />
      {/* eyes */}
      <path d="M168 205 q9 -8 18 0" stroke="#3D2C4F" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M216 205 q9 -8 18 0" stroke="#3D2C4F" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      {/* cheeks */}
      <circle cx="160" cy="226" r="11" fill="#E57A9E" opacity=".45" />
      <circle cx="240" cy="226" r="11" fill="#E57A9E" opacity=".45" />
      {/* smile */}
      <path d="M186 238 q14 12 28 0" stroke="#3D2C4F" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      {/* shoulders */}
      <path d="M70 420 C75 340 130 300 200 300 C270 300 325 340 330 420 Z" fill="#3D2C4F" />
      {/* laptop */}
      <rect x="90" y="330" width="220" height="110" rx="6" fill="#FFF7F2" stroke="#3D2C4F" strokeWidth="6" />
      <path d="M200 362 l11 17 l-11 17 l-11 -17 Z" fill="#E8C27A" />
    </svg>
  )
}

export function PdfArt() {
  return (
    <div className="art art-pdf" aria-hidden="true">
      <div className="pdf-card">
        <span className="pdf-badge">PDF</span>
        <i style={{ width: '62%' }} />
        <i style={{ width: '54%' }} />
        <i style={{ width: '34%' }} />
        <div className="pdf-ask">Ask anything...</div>
      </div>
    </div>
  )
}

export function PortalArt() {
  return (
    <div className="art art-portal" aria-hidden="true">
      <div className="portal-screen">
        <span className="portal-dot" />
        <b>hello,<br />locally.</b>
        <span className="portal-bar" />
      </div>
    </div>
  )
}

export function EyraArt() {
  return (
    <div className="art art-eyra" aria-hidden="true">
      <div className="eyra-screen">
        <svg viewBox="0 0 240 150" width="100%" height="100%">
          <circle cx="62" cy="52" r="30" fill="none" stroke="#5FD08A" strokeWidth="2.5" />
          <text x="62" y="57" textAnchor="middle" fontSize="12" fontWeight="700" fill="#5FD08A" fontFamily="Inter,sans-serif">SPEECH</text>
          <circle cx="178" cy="52" r="30" fill="#4363DB" stroke="#fff" strokeWidth="2.5" />
          <text x="178" y="57" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" fontFamily="Inter,sans-serif">MOVE</text>
          <circle cx="120" cy="112" r="30" fill="none" stroke="#E8283A" strokeWidth="2.5" />
          <text x="120" y="117" textAnchor="middle" fontSize="13" fontWeight="700" fill="#E8283A" fontFamily="Inter,sans-serif">SOS</text>
        </svg>
      </div>
    </div>
  )
}

export function AiArt() {
  return (
    <div className="art art-ai" aria-hidden="true">
      <svg viewBox="0 0 200 160" width="200" height="160">
        <ellipse cx="100" cy="80" rx="72" ry="26" fill="none" stroke="#B8A4E3" strokeWidth="1.5" />
        <ellipse cx="100" cy="80" rx="72" ry="26" fill="none" stroke="#B8A4E3" strokeWidth="1.5" transform="rotate(60 100 80)" />
        <ellipse cx="100" cy="80" rx="72" ry="26" fill="none" stroke="#B8A4E3" strokeWidth="1.5" transform="rotate(-60 100 80)" />
        <circle cx="100" cy="80" r="26" fill="#3D2C4F" />
        <text x="100" y="87" textAnchor="middle" fontFamily="Fraunces,serif" fontWeight="600" fontSize="20" fill="#fff">AI</text>
        <circle cx="100" cy="8" r="6" fill="#E8C27A" />
        <circle cx="30" cy="118" r="6" fill="#E8C27A" />
        <circle cx="170" cy="118" r="6" fill="#E8C27A" />
      </svg>
    </div>
  )
}

export function CreativeArt({ kind }) {
  if (kind === 'flower')
    return (
      <svg className="cr-art" viewBox="0 0 220 180" aria-hidden="true">
        <g fill="#F4C6D6">
          <ellipse cx="110" cy="70" rx="42" ry="34" />
          <ellipse cx="74" cy="112" rx="38" ry="40" transform="rotate(-25 74 112)" />
          <ellipse cx="148" cy="112" rx="38" ry="40" transform="rotate(25 148 112)" />
          <ellipse cx="110" cy="140" rx="40" ry="28" />
        </g>
        <circle cx="110" cy="102" r="26" fill="#EBA4BD" />
        <circle cx="110" cy="102" r="18" fill="#E57A9E" />
      </svg>
    )
  if (kind === 'paper')
    return (
      <svg className="cr-art" viewBox="0 0 220 180" aria-hidden="true">
        <rect x="64" y="22" width="110" height="130" rx="8" fill="#EBB4C4" transform="translate(8 8)" />
        <rect x="56" y="14" width="110" height="130" rx="8" fill="#FFF7F2" transform="rotate(4 110 80)" />
        <g transform="rotate(4 110 80)">
          <rect x="76" y="38" width="62" height="3" rx="1.5" fill="#B8A4E3" />
          <rect x="76" y="56" width="72" height="8" rx="4" fill="#F8DDE6" />
          <rect x="76" y="74" width="50" height="8" rx="4" fill="#F8DDE6" />
          <rect x="76" y="92" width="64" height="8" rx="4" fill="#F8DDE6" />
        </g>
      </svg>
    )
  if (kind === 'loops') {
    const cols = ['#8E7FA0', '#E57A9E', '#E8C27A', '#8E7FA0', '#8E7FA0']
    const rows = []
    for (let r = 0; r < 4; r++)
      for (let c = 0; c < 5; c++) {
        const i = r * 5 + c
        const color = cols[(i * 7 + r) % 5]
        rows.push(
          <circle key={i} cx={28 + c * 48 + (r % 2) * 6} cy={28 + r * 44} r="21" fill="none" stroke={color} strokeWidth="2.6" opacity={color === '#8E7FA0' ? 0.75 : 1} />,
        )
      }
    return (
      <svg className="cr-loops" viewBox="0 0 280 190" aria-hidden="true">
        {rows}
      </svg>
    )
  }
  // notes
  return (
    <svg className="cr-art" viewBox="0 0 220 160" aria-hidden="true">
      <path d="M10 40 Q70 30 130 32" stroke="#B8A4E3" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M40 62 Q100 52 150 56" stroke="#B8A4E3" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M22 84 Q60 78 96 82" stroke="#B8A4E3" strokeWidth="3" fill="none" strokeLinecap="round" />
      <text x="170" y="150" fontFamily="Fraunces,serif" fontSize="90" fontWeight="600" fill="#E57A9E" opacity=".35">?</text>
    </svg>
  )
}

export const Icon = {
  arrow: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  ),
  up: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" /></svg>
  ),
  ext: (
    <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M3 8l9 6 9-6" /></svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
  ),
  translate: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6h9M8.5 4v2M6 6c.5 3 2.5 5.5 5.5 7M12 6c-.6 3-3 6-7 8M13 20l4-9 4 9M14.4 17h5.2" /></svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9z" /></svg>
  ),
  sparkOutline: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l1.8 5.7L19.5 10.5l-5.7 1.8L12 18l-1.8-5.7L4.5 10.5l5.7-1.8z" /></svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 5l-4 14" /></svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" /></svg>
  ),
  menu: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
  ),
  close: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
  ),
}