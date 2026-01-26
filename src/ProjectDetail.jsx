import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { projects } from './data';

function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) return <div>Project not found</div>;

    return (
        <div className="project-detail py-8">
            <Link to="/" className="text-tag-text hover:underline mb-8 inline-block font-medium">← Back to Home</Link>
            <h1 className="text-3xl md:text-4xl font-extrabold text-title mb-4 leading-tight">
                {project.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                    <span key={tag} className="bg-tag-bg text-tag-text px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="markdown-content">
                <ReactMarkdown>{project.content}</ReactMarkdown>
            </div>
        </div>
    );
}

export default ProjectDetail;
