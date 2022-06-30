import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string

        colors: {
            primary: string
            secondary: string
            tertiary: string
            quartiary: string

            background: string
            input: string
            label: string

            letter: string
            title: string
            type: string
            black: string
            details: string
            
            accept: string
            decline: string
            info: string

            money: string
        }
    }
}