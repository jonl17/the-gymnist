import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { Nav } from "./styled"
import { Bandcamp, Instagram, Spotify, Youtube } from "@styled-icons/fa-brands"

type Props = {
  pathname: string;
}

const Header: React.FC<Props> = ({ pathname }) => {
  const data = useStaticQuery(graphql`
    {
      logo: imageSharp(fluid: {originalName: {eq: "logo.png"}}) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)
  return (
    <Nav>
      <div className="logo-wrap">
        <Link to="/">
          <Img imgStyle={{ zIndex: "2" }} style={{ height: "100%", width: "250px" }} fluid={data.logo.fluid}></Img>
        </Link>
      </div>
      
    </Nav>
  )
}

export default Header
