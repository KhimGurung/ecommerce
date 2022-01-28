import React from 'react'

interface ISectionTitle {
    title: string,
    className?: string
}

const SectionTitle = ({ title="Title", className }: ISectionTitle) => {
    return (
        <h3 className={`text-2xl mb-2 ${ className }`}>{ title }</h3>
    )
}

export default SectionTitle
