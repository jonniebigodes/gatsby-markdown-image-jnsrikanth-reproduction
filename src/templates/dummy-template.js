import React from 'react'
import {graphql } from 'gatsby'
import Img from 'gatsby-image'
const DummyTemplate=({ data })=>{
    return (
        <div>
            <h1>
            {data.markdownRemark.frontmatter.title}
        </h1>
        <Img fluid={data.markdownRemark.frontmatter.image.childImageSharp.fluid} alt="acounting image"/>
        <br/>
        <div dangerouslySetInnerHTML={{__html:data.markdownRemark.html}}/>
        </div>
    )
}

export const query= graphql`
    query myMarkdown($title: String!) {
        markdownRemark(frontmatter: {title: {eq: $title}}) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 600){
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            html
        }
    }
`
export default DummyTemplate