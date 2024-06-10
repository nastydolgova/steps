import ResultModel from "../../models/ResultModel";
import Result from "./Result/Result";

interface ResultTableProps{
    results: ResultModel[]
    onHandleClickResult: (arg0: any) => void
}

export default function ResultTable({results, onHandleClickResult}: ResultTableProps) {
    if (results.length > 0) {
        const resultsList = results.map((result, index) =>
        <Result
            key={`result ${index}`}
            result={result}
            onHandleClickResult={onHandleClickResult}
        />)
        return (
            <div>
                <ul>
                    {resultsList}
                </ul>
            </div>
        )
    }
    return (<div>Нет тренировок</div>);
}