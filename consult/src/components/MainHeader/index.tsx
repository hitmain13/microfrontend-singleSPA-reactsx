import React from 'react'
import { FiLogOut } from 'react-icons/fi'
import { Container, LeftSide, CircularIcon, RightSide } from './styles'
import perfilIMG from '../../assets/perfil.png'

const MainHeader: React.FC = () => (
    <Container>
        <LeftSide>
            <img src={perfilIMG} title="Foto de perfil" alt="perfil logo" />
            <p>Olá, cliente!</p>
        </LeftSide>
        <RightSide>
            <CircularIcon title="Logout...">
                <FiLogOut />
            </CircularIcon>
        </RightSide>
    </Container>
)

export default MainHeader