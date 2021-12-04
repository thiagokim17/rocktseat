export function RepositoryItem(props) {
    return (
        <li>
        <strong>{props.reporitory.name ?? 'Default'}</strong>
        <p>{props.reporitory.description}</p>

        <a href={props.reporitory.link}>
            Acessar repositório
        </a>
    </li>
    )
}