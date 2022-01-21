import React from 'react'

export default function ProjectTile(props) {

    const sampleImage = props.imageURL;
    const projectTitle = props.title;
    const projectID = props.id;
    
    return (
        <div>
            <div><img src={sampleImage} style={{border:'2px solid gold'}}></img></div>
            <div style={{margin:'5px', fontSize: 'large', fontWeight: 'bold'}}>{projectTitle}</div>
            <div><button className="yellow-button">View Project</button></div>
        </div>
    )
}
