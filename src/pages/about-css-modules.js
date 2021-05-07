import React from "react"
import { Link } from "gatsby"
import * as styles from "./about-css-modules.module.css"
import Container from "../components/container"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function About() {
  return (
    <Container>
      <p>
        <Link to="/">Home</Link>
      </p>

      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool! And that is why I am obsessed with them!</p>
      <User
        username="Maria Randall"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-daniel-xavier-1102341.jpg"
        excerpt="Bacon ipsum dolor amet jowl eu pork loin chuck, ribeye dolor filet mignon meatloaf shoulder cupim beef ribs aliqua officia. Proident ipsum meatball pork. Turkey flank shankle."
      />
      <User
        username="Daniela DeWitt"
        avatar="https://raw.githubusercontent.com/gatsbyjs/gatsby/master/docs/docs/tutorial/part-two/pexels-guilherme-almeida-1858175.jpg"
        excerpt="I'm Daniela Dewitt. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
  )
}
