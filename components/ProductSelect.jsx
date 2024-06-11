import CreatableSelect from "react-select/creatable"
import { useState } from "react";

export default function ProductSelect({ options, value, isMulti, onCreateOption, onSelectedOption }) {
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            height: '36px',
            minHeight: '36px',
            boxShadow: state.isFocused ? null : null,
        }),
        container: (provided) => ({
            ...provided,
            width: 'full',

        }),
        valueContainer: (provided, state) => ({
            ...provided,
            height: '36px',
            padding: '0 6px'
        }),
        input: (provided, state) => ({
            ...provided,
            margin: '0px',
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#09090b', // Set the placeholder text color to match Shadcn UI
            fontWeight: 500, // Set the font weight to match Shadcn UI
            fontSize: '30px', // Set the font size to match Shadcn UI
            lineHeight: '36px', // Set the line height to match Shadcn UI
            height: '36px',
        }),
        menu: (provided) => ({
            ...provided,
            width: '100%',
        }),
    };

    return (
        <CreatableSelect
            isClearable
            isMulti={isMulti}
            noOptionsMessage={() => "Ничего нет"}
            placeholder="Выберите продукт"
            onChange={(value) => onSelectedOption(value)}
            onCreateOption={(value => onCreateOption(value))}
            options={options}
            value={value}
            createOptionPosition="last"
            formatCreateLabel={
                (inputValue) => `Создать "${inputValue}?"`}
            classNames={{
                control: () => 'h9 min-h-9 shadow-none rounded-xl',
                container: () => 'w-full rounded-xl',
                valueContainer: () => 'h-9 pb-1.5 rounded-xl',
                multiValue: () => '',
                input: () => 'm-0 rounded-xl',
                placeholder: () => 'text-3xl h-9',
                menu: () => 'w-full',
            }}

        /*            styles={customStyles}
                   theme={(theme) => ({
                       ...theme,
                       borderRadius: '0.75rem',
                       colors: {
                           ...theme.colors,
                           primary: '#e21d48',
                       },
                   })} */
        />
    )
}