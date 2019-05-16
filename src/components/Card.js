import React from 'react'
import Tag from './Tag'
import styled from 'styled-components'

const StyledCard = styled.article`
  position: relative;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  h2 {
    border-radius: 5px;
    color: white;
    background: salmon;
    height: 100%;
    padding: 10px;
    margin: 0;
  }
  span {
    position: absolute;
    right: 15px;
    cursor: pointer;
  }

  p {
    padding: 0 10px;
  }

  ul {
    display: flex;
    padding: 0;
    li {
      list-style: none;
      background: teal;
      margin-left: 10px;
      padding: 5px 10px;
      border-radius: 10px;
      color: white;
    }
  }
`

export default function Card({
  title,
  description,
  bookmarked,
  tags,
  onToggleBookmark
}) {
  return (
    <StyledCard>
      <h2>
        {title}
        <span onClick={onToggleBookmark}>{bookmarked ? '🔖' : '🗌'}</span>
      </h2>
      <p>{description}</p>
      {tags && (
        <ul>
          {tags
            .filter(tag => tag !== '')
            .map(tag => (
              <Tag key={tag} text={tag} />
            ))}
        </ul>
      )}
    </StyledCard>
  )
}
