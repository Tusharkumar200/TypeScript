/// <reference types="vite/client" />

type LangType = 'ja' |'hi' | 'es'| 'fr';

type WordType={
    word: string;
    mening: string;
    options:string[];
}

interface StateType{
    loading: boolean;
    result:string[];
    words:WordType[];
    error?:string;
}

type FetchedDataType = {
    translations:{
        text: string;
    }[]
}