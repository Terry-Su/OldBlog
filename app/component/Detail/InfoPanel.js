import React from 'react'


const InfoPanel = ({ modifyTime, createTime, tags = [], link }) => (
  <section>
    {modifyTime && <section><b>修改时间</b>{modifyTime}</section>}

    <section><b>发表时间</b>：{createTime}</section>

    <section>
      {tags.map(tag => <span>{tag}</span>)}
    </section>

    <section><b>版权声明</b> 转载请注明出处: <a href={link} target='_self'></a></section>

  </section>
)


export default InfoPanel