import React from 'react';




function Footer(){
    const icons = [
        {
            name: "fab fa-github fa-xl",
            links: "https://github.com/pandord24"
        },
        {
            name: "fab fa-linkedin fa-xl",
            links: "https://www.linkedin.com/in/gordon-k-kwan/"
        },
        {
            name: "fa-regular fa-envelope fa-xl",
            links: "mailto:gordonkwan@msn.com"
        }
    ]


    return (
        <footer className="d-flex justify-content-around align-items-center">
            
            {icons.map(icon => {
                return <a href={icon.links} key={icon.name} target="_blank"><i className={`${icon.name} xl`}></i></a>
            })}
        </footer>
    )
}


export default Footer;