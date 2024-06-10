import InputModel from "../../models/InputModel"

interface AppInputProps {
    input: InputModel
    onChange: (key: string, value: string) => void
}

export default function AppInput({input: {label, dataInput, key, max, min, type}, onChange}: AppInputProps) {
    return (
        <label>
            <span>{label}</span>
            <input value={dataInput} type={type} min={min} max={max} onChange={event => onChange(key, event.target.value)}/>
        </label>
        )
    }