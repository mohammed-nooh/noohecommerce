import React from 'react'
import styled from 'styled-components'


const AnnouncementTag=styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <AnnouncementTag>Super Deal!! Free shipping on orders above $50</AnnouncementTag>
  )
}

export default Announcement