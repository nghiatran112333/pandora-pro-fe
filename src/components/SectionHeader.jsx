import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SectionHeader = ({ title, showArrows = false, onLeftClick, onRightClick, children }) => {
    return (
        <div className="section-header-simple">
            <div className="section-header-left">
                <h2>{title}</h2>
                {children}
            </div>
            {showArrows && (
                <div className="nav-arrows">
                    <button className="arrow" onClick={onLeftClick} aria-label="Previous">
                        <ChevronLeft size={20} />
                    </button>
                    <button className="arrow" onClick={onRightClick} aria-label="Next">
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default SectionHeader;
