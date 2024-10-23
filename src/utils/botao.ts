import { ReactNode } from "react"

export interface BotaoProps{
    onClick?: () => void;
    children: ReactNode;
    type:'submit' | 'button' | 'reset' | undefined
}