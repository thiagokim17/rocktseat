import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'

const repository = {
    name: 'unform2',
    description: 'Forms in React',
    link: 'https://github.com/thiagokim17'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem reporitory={repository} />
                <RepositoryItem reporitory={repository} />
                <RepositoryItem reporitory={repository} />
                <RepositoryItem reporitory={repository} />
            </ul>
        </section>
    )
}