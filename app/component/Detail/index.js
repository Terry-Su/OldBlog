import React from 'react'

import InfoPanel from './InfoPanel'


const Detail = ({ title, text, createTime, modifyTime, tags = [], link }) => (
  <section>
    <header>{title}</header>
    <article>{text}</article>
    <InfoPanel modifyTime={modifyTime} createTime={createTime} tags={tags} link={link} />
  </section>
)


export default Detail