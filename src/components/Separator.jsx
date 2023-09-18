import React from 'react'
import styled from 'styled-components'
function Separator() {
  return (
    <SeparatorWrapper>

    </SeparatorWrapper>
  )
}

export default Separator

const SeparatorWrapper = styled.div`
    width: 100%;
    height: 2px;
    background-color: rgb(32, 141, 108, .7);
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
`