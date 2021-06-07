import React, { ReactElement } from "react"
import BlogCard from "../components/BlogCard"
import Header from '../components/Header'

interface Props {}

function Index(_props: Props): ReactElement {
  return (
    <>
      <Header />
      <BlogCard />
    </>
  )
}

export default Index
