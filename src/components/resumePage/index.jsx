import PDF from "../../assets/Resume.pdf"
import { useState } from "react"

export default function ResumePage() {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (<div>
        <h2>Resume</h2>
        <h6>Print or Download My <a href="#resume" onClick={handleOpen}>Resume.</a></h6>
        {isOpen ? (<div className="w-100">
            <object aria-label="pdf resume" width="100%" height="800" data={PDF} type="application/pdf" />
        </div>) : (
            <div>
                <ul>
                    Front end proficiencies
                    <li>
                        html
                    </li>
                    <li>
                        css
                    </li>
                    <li>
                        JavaScript
                    </li>
                </ul>
                <ul>
                    Back end proficiencies
                    <li>
                        node.js
                    </li>
                    <li>
                        mySQL
                    </li>
                    <li>
                        Express.js
                    </li>
                </ul>
            </div>
        )}
    </div>)
}