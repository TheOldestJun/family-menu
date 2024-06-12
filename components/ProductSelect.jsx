import CreatableSelect from "react-select/creatable"
import { useState } from "react";
import { cn } from "@/lib/utils";

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
            height: '30px',
            padding: '0 6px'
        }),
        multiValueContainer: (provided, state) => ({
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
            unstyled
            isMulti={isMulti}
            noOptionsMessage={() => "Ничего нет"}
            placeholder="Выберите продукт"
            onChange={(value) => onSelectedOption(value)}
            onCreateOption={(value => onCreateOption(value))}
            options={options}
            value={value}
            createOptionPosition="last"
            formatCreateLabel={
                (inputValue) => `Создать "${inputValue}?"`}/* 
            classNames={{
                control: ({ isFocused }) => `@apply ${isFocused ? 'border-none' : 'border-none'} w-full h-9 rounded-md !important`,
                valueContainer: () => '@apply h-9 text-3xl rounded-md !important',
                multiValue: () => '@apply h-8 rounded-xl bg-primary !important',
            }} */
            classNames={{
                control: ({ isFocused }) => `@apply border border-input rounded-md bg-transparent ${isFocused ? "outline-none ring-1 ring-ring" : ''} !important`,
                placeholder: () => `@apply text-3xl px-3 !important`,
                multiValue: () => `@apply rounded-xl bg-secondary mx-2 text-primary overflow-visible !important`,
                multiValueLabel: () => `@apply px-2 !important`,
                multiValueRemove: () => `@apply mx-2 !important`,
                menu: () => `@apply w-full !important bg-card mt-2 rounded-xl text-center text-3xl  !important`,
                menuList: () => `@apply overflow-y-scroll no-scrollbar !important`,
                option: () => `@apply hover:bg-secondary !important`,
            }}
        /*             styles={customStyles}
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