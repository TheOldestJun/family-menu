import CreatableSelect from "react-select/creatable"

export default function ProductSelect({ options, value, isMulti, onCreateOption, onSelectedOption }) {
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
                (inputValue) => `Создать "${inputValue}?"`}
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
        />
    )
}