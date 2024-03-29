import styled from 'styled-components'

const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 12px;

  justify-items: center;

  @media (min-width: 350px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 500px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export { Grid }
