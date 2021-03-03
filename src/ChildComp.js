import React from 'react'

export default function ChildComp({ option }) {
  return (
    <div>
      <bittpm onClick={option.func}>child</bittpm>
    </div>
  )
}
