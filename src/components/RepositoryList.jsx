import { useState, useEffect } from "react"
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'

//https://api.github.com/users/thiagokim17/repos

const repository = {
    name: 'unform2',
    description: 'Forms in React',
    link: 'https://github.com/thiagokim17'
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/thiagokim17/repos')
            .then(response => response.json())
            .then(data => setRepositories(data.map(repo => ({
                id: repo.id,
                name: repo.name,
                description: repo.description,
                link: repo.svn_url
            }))))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {
                    repositories.map(repo => {
                        return    <RepositoryItem key={repo.id} reporitory={repo} />
                    })
                }

            </ul>
        </section>
    )
}