import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { projects } from './data';

function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) return <div>Project not found</div>;

    return (
        <div className="project-detail">
            <Link to="/" style={{ color: 'var(--tag-text)', textDecoration: 'none' }}>← Back to Home</Link>
            <h1 style={{ marginTop: '20px' }}>{project.title}</h1>


            <div className="markdown-content">
                <ReactMarkdown>{project.content}</ReactMarkdown>
            </div>
        </div>
    );
}

export default ProjectDetail;
