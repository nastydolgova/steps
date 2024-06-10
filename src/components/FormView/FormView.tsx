import AppInput from "../AppInput/AppInput";
import ResultModel from "../../models/ResultModel";
import InputModel from "../../models/InputModel"

interface FormViewProps{
    result: ResultModel
    onAddResult: (arg0: any) => void
    onChange: (key: string, value: string) => void
}

export default function FormView({result, onAddResult, onChange}: FormViewProps) {
    const maxDate = new Date().toLocaleDateString('ru-RU');

    const inputs: InputModel[]  = [
        {
            label: 'Дата (дд.мм.гг)',
            key: 'date',
            dataInput: result.date,
            type: 'date',
            max: maxDate.split(".").reverse().join("-"),
        },
        {
            label: 'Пройдено (км)',
            key: 'distance',
            dataInput: result.distance,
            type: 'number',
            min: 0,
        }
    ]

    return (
        <fieldset>
            <div>
                {inputs.map(input => <AppInput key={input.key} input={input} onChange={onChange}/>)}
                <button onClick={onAddResult}>ok</button>
            </div>
        </fieldset>
    )
}