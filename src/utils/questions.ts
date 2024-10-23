import { Key, ReactNode } from "react";

export interface QuestionProps{
    title: string;
    question: string;
    key: Key | null | undefined
}