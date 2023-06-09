import React from "react";
import './checkbox.css';

/**
 * Renders a checkbox element.
 * @param {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
 *  label?: string;
 * }} props 
 */

const Checkbox = (props) => {
    const { label, ...inputProps } = props;

    return (
        <div className='checkbox-group'>
            <input
                value={props.value}
                type="checkbox"
                id={`checkbox_id_for_${props.label}`}
                checked={props.checked}
                onChange={props.onChange} />

            <label
                {...inputProps}
                htmlFor={`checkbox_id_for_${props.label}`}
            >
                {props.label}
            </label>
        </div>
    );
};
export default Checkbox;