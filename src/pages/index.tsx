import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'
export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1>
        Hello World, Welcome to my{' '}
        <span className="dotted" style={{ color: 'inherit' }}>
          Personal Blog
        </span>
      </h1>
      <h2>
        I'm Sayyid Haidar <br />
        Programming Enthusiast <br />
        Full-time Programmer and Part-time Writter
      </h2>
    </div>
  </>
)
