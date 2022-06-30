import React, { useEffect } from 'react'
import formatCurrency from '../../../utils/formatCurrency'
import { useNavigate } from 'react-router-dom'
import { ProductProps } from '../../../contexts/ProductContext'
import useProducts from '../../../hooks/useProducts'
import { TbEdit } from 'react-icons/tb'
import { MdDeleteForever } from 'react-icons/md'
import MessageBox from '../../../components/MessageBox'
import EmptyBoxSVG from '../../../assets/empty-animate.svg'
import {
    Container,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Button,
    ButtonContainer,
    TdButton,
    Footer,
    Img
} from './styles'

const Consult: React.FC = () => {
    const { productsList, removeProduct, selectProductToUpate, message, updateMessage } = useProducts()
    const navigate = useNavigate()

    const handleUpdateProduct = (product: ProductProps) => {
        selectProductToUpate(product)
        navigate('/prods/update')
    }

    const handleRemoveProduct = (product: ProductProps) => removeProduct(product)

    useEffect(() => {
        if (productsList.length === 0) updateMessage('')
    }, [productsList.length])

    return (
        <Container>
            {productsList.length > 0 ? (
                <Table>
                    <Thead>
                        <Tr >
                            <Th>ID</Th>
                            <Th>Nome</Th>
                            <Th>Categoria</Th>
                            <Th>Fornecedor</Th>
                            <Th>Valor</Th>
                            <Th>Ações</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {productsList.map((prod) => (
                            <Tr key={prod.id}>
                                <Td title={prod.id}>{prod.id}</Td>
                                <Td title={prod.name}>{prod.name}</Td>
                                <Td title={prod.category}>{prod.category}</Td>
                                <Td title={prod.provider}>{prod.provider}</Td>
                                <Td title={prod.price}>{formatCurrency(prod.price)}</Td>
                                <TdButton>
                                    <ButtonContainer>
                                        <Button
                                            name="edit"
                                            type="button"
                                            title="Editar este produto"
                                            onClick={() => {
                                                handleUpdateProduct(prod)
                                                updateMessage('')
                                            }}>
                                            <TbEdit />
                                        </Button>
                                        <Button
                                            name="remove"
                                            type="button"
                                            title="Excluir este produto"
                                            onClick={() => handleRemoveProduct(prod)}>
                                            <MdDeleteForever />
                                        </Button>
                                    </ButtonContainer>
                                </TdButton>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            ) : (
                <Footer>
                    <MessageBox message="Ainda não foi adicionado nenhum produto." size='25px' />
                    <Img src={EmptyBoxSVG} alt='empty box image' />
                </Footer>
            )}
            <MessageBox message={message} />
        </Container>
    )
}

export default Consult