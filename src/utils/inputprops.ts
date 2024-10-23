import { ReactNode } from "react";

export interface InputProps {
    onClick?: () => void;
    type: 'text' | 'email' | 'password' | undefined;
    placeHolder: string
}