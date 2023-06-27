import React from 'react'
import { useRouter } from 'next/router'

const ClientPage = () => {
  const router = useRouter();

  function loadProjectHandler(params) {
    router.push({
      pathname:'/clients/[id]/[clientprojectid]',
      query: {id:'max', clientprojectid: 'sdlfsd'}

    })
  }
  return (
    <div>
      ClientPage
      <button onClick={loadProjectHandler}>Click</button>
    </div>
  )
}

export default ClientPage