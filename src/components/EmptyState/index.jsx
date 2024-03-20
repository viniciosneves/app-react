import styled from 'styled-components'
import imageSrc from './empty-state.png'

const EmptyStateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    p {
        color: #DBE4EF;
        margin: 0;
        font-size: 18px;
    }
`

const EmptyState = () => {
    return (<EmptyStateContainer>
        <img src={imageSrc} alt="" />
        <p>
            No momento não há cursos listados.
        </p>
    </EmptyStateContainer>)
}

export default EmptyState