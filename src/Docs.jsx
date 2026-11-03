import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  Code,
  FileText,
  Stack,
} from '@phosphor-icons/react'

const groups = [
  {
    number: '01',
    title: 'Product',
    description: 'The purpose, scope, and direction behind Atria.',
    items: [
      { icon: FileText, title: 'Product Requirements Document', type: 'PRD', status: 'COMING SOON', description: 'Product vision, goals, user needs, and functional requirements.' },
      { icon: BookOpen, title: 'Product Overview', type: 'OVERVIEW', status: 'COMING SOON', description: 'A concise introduction to the project and its principles.' },
    ],
  },
  {
    number: '02',
    title: 'Design',
    description: 'The visual language and reusable interface decisions.',
    items: [
      { icon: Stack, title: 'Design System Guidelines', type: 'DESIGN SYSTEM', status: 'COMING SOON', description: 'Foundations, tokens, components, states, and usage guidance.' },
      { icon: Stack, title: 'Component Documentation', type: 'REFERENCE', status: 'COMING SOON', description: 'Component anatomy, variants, behaviour, and accessibility notes.' },
    ],
  },
  {
    number: '03',
    title: 'Engineering',
    description: 'How the product is structured, built, and maintained.',
    items: [
      { icon: Code, title: 'Architecture Notes', type: 'ARCHITECTURE', status: 'COMING SOON', description: 'Application structure, technical decisions, and system boundaries.' },
      { icon: FileText, title: 'Developer Notes', type: 'DEVELOPER GUIDE', status: 'COMING SOON', description: 'Setup instructions, conventions, workflows, and implementation notes.' },
    ],
  },
]

function Docs() {
  return (
    <main className="docs-page">
      <nav className="nav shell">
        <a className="brand" href="/" aria-label="Atria home">
          <span className="brand-mark"><span /><span /><span /><span /></span>
          <span>atria<span className="brand-period">.</span></span>
        </a>
        <div className="nav-links"><a href="/">Home</a><a href="/#studio">The studio</a><a href="/#contact">Contact</a></div>
        <a className="nav-cta" href="https://github.com/breeze-sn/Atria" target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={14} /></a>
      </nav>

      <section className="docs-hero shell">
        <a className="docs-back" href="/"><ArrowLeft size={14} /> BACK TO ATRIA</a>
        <div className="eyebrow"><span className="live-dot" /> THE KNOWLEDGE SPACE</div>
        <h1>Made to be<br /><em>understood.</em></h1>
        <p className="hero-description">A growing library of product thinking, design decisions, and technical documentation behind Atria. One place to find the context behind the craft.</p>
        <div className="docs-hero-meta"><span>DOCUMENTATION / INDEX</span><span>03 COLLECTIONS · 06 DOCUMENTS</span></div>
      </section>

      <section className="docs-content">
        <div className="shell">
          <div className="docs-content-heading"><div><div className="section-index">[ THE LIBRARY ]</div><h2>Explore the <em>documents.</em></h2></div><span className="docs-count">06 ENTRIES / IN PROGRESS</span></div>
          {groups.map(group => (
            <section className="doc-group" key={group.number}>
              <div className="doc-group-heading"><span className="doc-number">{group.number}</span><div><h3>{group.title}</h3><p>{group.description}</p></div></div>
              <div className="doc-list">
                {group.items.map(item => {
                  const Icon = item.icon
                  return <article className="doc-card" key={item.title}>
                    <div className="doc-icon"><Icon size={20} weight="light" /></div>
                    <div className="doc-card-copy"><div className="doc-type">{item.type}</div><h4>{item.title}</h4><p>{item.description}</p></div>
                    <div className="doc-card-end"><span className="doc-status">{item.status}</span><span className="doc-arrow"><ArrowUpRight size={16} /></span></div>
                  </article>
                })}
              </div>
            </section>
          ))}
        </div>
      </section>

      <footer className="footer shell">
        <div className="footer-top"><a className="brand" href="/"><span className="brand-mark"><span /><span /><span /><span /></span><span>atria<span className="brand-period">.</span></span></a><p>A more considered way to build<br />and maintain design systems.</p><a className="footer-github" href="https://github.com/breeze-sn/Atria" target="_blank" rel="noreferrer">Star the project <ArrowUpRight size={14} /></a></div>
        <div className="footer-bottom"><span>© 2026 ATRIA STUDIO</span><span>DOCUMENTATION · EARLY DEVELOPMENT</span><a href="/">BACK TO HOME <ArrowUpRight size={12} /></a></div>
      </footer>
    </main>
  )
}

export default Docs
