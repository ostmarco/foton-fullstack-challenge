import styled from 'styled-components'

const Button = styled.button`
  width: 100%;
  height: 48px;

  margin: 20px 0;

  background: #ff6978;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.4926);
  border-width: 0;
  border-radius: 10px;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;

  cursor: pointer;

  @media (min-width: 768px) {
    margin: 20px 0 80px 0;
  }
`

export { Button }
