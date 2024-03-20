/* eslint-disable react/prop-types */
import styled from "styled-components"

const StyledUl = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const StyledLi = styled.li`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    background-color: #041832;
    padding: 24px;
    border-radius: 16px;
    color: #DBE4EF;
    font-size: 24px;
    p {
        margin: 0;
    }
    strong {
        font-weight: 600;
        color: #00C86F;
        flex-grow: 1;
    }
`

const Tag = styled.p`
    margin: 0;
    padding: 8px;
    background-color: #2BDEFD;
    font-weight: 400;
    font-size: 16px;
    color: #01080E;
    border-radius: 4px;
`

const Courses = ({ items }) => {
    return (<StyledUl>
        {items.map(item => (<StyledLi key={item.codigo}>
            <p>{item.id}</p> 
            <p>|</p>  
            <p>{item.codigo}</p> 
            <strong>
                {item.descricao}
            </strong>
            <Tag>Nível {item.nivel}</Tag>
        </StyledLi>))}
    </StyledUl>)
}

export default Courses