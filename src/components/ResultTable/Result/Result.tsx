import ResultModel from "../../../models/ResultModel"
import OnHandleClickResultModel from "../../../models/OnHandleClickResultModel"

interface ResultProps{
    result: ResultModel
    onHandleClickResult: (arg0: OnHandleClickResultModel) => void
}

export default function Result({result: {date, distance}, onHandleClickResult}: ResultProps) {
    return (
        <li>
            <div>{date}</div>
            <div>{distance}</div>
            <div className="controls">
                <span className="material-icons" onClick={() => onHandleClickResult({key: 'edit', result: {date, distance}})}>edit_note</span>
                <span className="material-icons" onClick={() => onHandleClickResult({key: 'delete', result: {date, distance} })}>delete</span>
            </div>
        </li>
    )
}