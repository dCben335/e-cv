import styles from './Page.module.scss'

import { ReactNode } from "react";

interface PageProps {
    children: ReactNode;
    page: number;
    totalPages: number;
    setPage: (page: number) => void;
}

export default function Page({ children, page, totalPages, setPage }: PageProps) {
    return (
        <section>
            
        </section>
    )
}