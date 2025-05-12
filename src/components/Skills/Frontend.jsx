import React from 'react';
import "./skills.css";

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend Developer</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">HTML</h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">CSS</h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">ReactJs</h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">Flutter</h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name">NextJs</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend