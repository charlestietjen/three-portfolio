import './styles.css';

export const ProjectsList = () => {
    const projects = [{
        name: 'Project 1',
        description: 'Very cool project taht I love so much mwah mwah'
    }, {
        name: 'Project 2',
        description: 'oh i could take 2 or leave it idc really, not weven worth grammar or s-peling'
    }]
    return (
        <div className='ProjectsList'>
            {projects.map((project, i) => (
                <div key={i}>
                    <div>{project.name}</div>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    )
}