import React, { createContext, useState, useEffect } from 'react'

type ProductProviderProps = { // no React 18+, necessário tipagem do children através do type ou interface;
    children?: React.ReactNode
}

export type ProductProps = { // "tipagem" do produto;
    id: string
    name: string
    category: string
    provider: string
    price: string
    created_at: string
    updated_at: string
}

interface IProductContext { // interface para "tipar" as funções do contexto;
    productsList: ProductProps[]
    selectProductToUpate: (product: ProductProps) => void
    selectedProduct: ProductProps | null
    createProduct: (product: ProductProps) => void
    updateProduct: (product: ProductProps) => void
    removeProduct: (product: ProductProps) => void
    message: string
    updateMessage: (message: string) => void
}

export const ProductContext = createContext<IProductContext>({} as IProductContext)

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
    const storedProducts = localStorage.getItem('@jamestip:products-list') // localStorage de onde é armazenado a lista de produtos;
    const [productsList, setProductsList] = useState<ProductProps[]>([]) // estado onde é guardado os produtos puxados do localStorage;
    const [message, setMessage] = useState<string>('') // notificar ao realizar alguma ação;
    const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(null) // estado que guarda os valores do produto a ser editado;
    const now = () => String(new Date()) // função que retorna a hora atual;

    useEffect(() => {
        storedProducts
            ? setProductsList(JSON.parse(storedProducts))
            : localStorage.setItem('@jamestip:products-list', '[]')
    }, [storedProducts])

    const saveProduct = (data: ProductProps[]) => { 
        localStorage.setItem('@jamestip:products-list', JSON.stringify(data))
        setProductsList(data)
    }

    const createProduct = (product: ProductProps) => { // CRUD: Create - criação de um novo produto;
        try {
            const newProduct = {
                ...product,
                created_at: now(),
                updated_at: now()
            }
            const newProductsList = [...productsList, newProduct]
            saveProduct(newProductsList)
            setMessage('Produto criado com sucesso!')
        } catch (err) {
            return `Error creating product. ${err}`
        }
    }

    const selectProductToUpate = (product: ProductProps) => { // função para guardar os valores do produto a ser editado no estado;
        setSelectedProduct(product)
    }

    const updateProduct = (product: ProductProps) => { // CRUD: Update - função para armazenar os dados editados;
        try {
            const filteredList = productsList.filter((prod) => product.id !== prod.id)
            const updatedProduct = {
                ...product,
                updated_at: now()
            }
            filteredList.push(updatedProduct)
            saveProduct(filteredList)
            setMessage('Produto alterado com sucesso!')
        } catch (err) {
            return `Error creating product. ${err}`
        }
    }

    const removeProduct = (product: ProductProps) => { // CRUD: Delete - função para excluir o produto selecionado;
        try {
            const newProductList = productsList.filter((prod) => prod.id !== product.id)
            saveProduct(newProductList)
            setMessage('Produto excluído com sucesso!')
        } catch (err) {
            return `Error creating product. ${err}`
        }
    }

    const updateMessage = (message: string) => // função para atualizar a mensagem após uma ação;
        setMessage(message)

    return (
        <ProductContext.Provider 
            value={{
                productsList,
                selectProductToUpate,
                selectedProduct,
                createProduct,
                updateProduct,
                removeProduct,
                message,
                updateMessage
            }}>
            {children}
        </ProductContext.Provider>
    )
}