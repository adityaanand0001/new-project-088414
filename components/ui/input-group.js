
import React from "react";
export const InputGroup = ({ className = "", children }) => (
    <div className={`flex items-center relative ${className}`}>
        {React.Children.map(children, (child, index) => {
            let roundedClass = "";
            if (React.Children.count(children) > 1) {
                if (index === 0) roundedClass = "rounded-r-none";
                else if (index === React.Children.count(children) - 1) roundedClass = "rounded-l-none";
                else roundedClass = "rounded-none";
            }
            return React.cloneElement(child, {
                className: `${child.props.className} ${roundedClass} z-${index}`
            });
        })}
    </div>
);
