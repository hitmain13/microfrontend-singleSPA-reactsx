import React, { useState } from 'react'
import useProducts from '../../hooks/useProducts'
import { nanoid } from 'nanoid'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdClose, MdMenu } from 'react-icons/md'
import { MdOutlineAdd } from 'react-icons/md'
import { Container, Header, ToggleMenu, Content, LinkItem, Ul, Li } from './styles'
import logoIMG from '../../assets/logo-larger.png'

const initialState = {
    id: nanoid(6),
    name: '',
    category: '',
    provider: '',
    price: '0',
    created_at: '',
    updated_at: ''
}

const Aside: React.FC = () => {
    const [menuIsOpenned, setMenuIsOpenned] = useState(false);
    const { selectProductToUpate, updateMessage } = useProducts()
    const resetMessage = () => updateMessage('')

    const handleToggleMenu = () => setMenuIsOpenned(!menuIsOpenned)

    return (
        <Container menuIsOpen={menuIsOpenned}>
            <Header>
                <ToggleMenu
                    menuIsOpen={menuIsOpenned}
                    onClick={handleToggleMenu}
                >
                    {menuIsOpenned ? <MdClose /> : <MdMenu />}
                </ToggleMenu>
                <img src={logoIMG} alt="James Tip Logo" />
            </Header>
            <Content>
                <Ul>
                    <LinkItem
                        onClick={() => {
                            handleToggleMenu()
                            selectProductToUpate(initialState);
                            resetMessage()
                        }
                        }
                        to='/prods/consult' title="Acessar página de consulta">
                        <AiOutlineSearch /><Li>Consultar</Li>
                    </LinkItem>
                    <LinkItem
                        onClick={() => {
                            handleToggleMenu()
                            selectProductToUpate(initialState);
                            resetMessage()
                        }
                        }
                        to='/prods/create' title="Acessar página de registro">
                        <MdOutlineAdd /><Li>Adicionar</Li>
                    </LinkItem>
                </Ul>
            </Content>
        </Container >
    )
}

export default Aside