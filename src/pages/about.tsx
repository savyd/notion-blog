import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'
import profilStyles from '../styles/profil.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/SayidHaidar1',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/savyd',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/sayyid-abdul-aziz-3a9230146/',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:hello@sayid.id?subject=Notion Blog',
  },
]

export default () => (
  <>
    <Header titlePre="Contact" />
    <div className={sharedStyles.layout}>
      <div className={profilStyles.profil}>
        <img
          src="/profil-img.jpg"
          height="85"
          width="250"
          alt="Sayyid Profil"
        />

        <h1>Hi, I'm Sayyid Haidar</h1>
      </div>

      <div className={contactStyles.name}>
        Backend Engineer @ <ExtLink href="https://skydu.id">Skydu</ExtLink>
      </div>

      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>
    </div>
  </>
)
