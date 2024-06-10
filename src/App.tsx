import FormView from "./components/FormView/FormView";
import ResultTable from "./components/ResultTable/ResultTable";
import {useState} from "react";
import ResultModel from "./models/ResultModel";
import OnHandleClickResultModel from "./models/OnHandleClickResultModel"

const initialResult = {
	date: "",
	distance: 0,
}

const sortingByDate = (prevState: ResultModel[], result: ResultModel): ResultModel[] => [...prevState, result].sort((a: any,b: any) => +new Date(b.date) - +new Date(a.date))

export default function App() {
    const [result, setResult] = useState(initialResult);
    let [results, setResults] = useState<Array<ResultModel>>([]);

    const onChangeResult = (key: string, value: string) => {
        if (key === 'distance') setResult(prevState => ({...prevState, ...{[key]: +value}}));
        else setResult(prevState => ({...prevState, ...{[key]: value}}));
    }
	const updateResults = (index: number) => {
		results[index].distance += result.distance;
		setResults(results);
		setResult(initialResult);
	}

	const onAddResult = () => {
		if (result.distance === 0 || result.date === "") return;

		const isIndex = results.findIndex(({date}) => date === result.date);
		if (isIndex !== -1) updateResults(isIndex);
		else {
			setResults((prevState: ResultModel[]): ResultModel[] => sortingByDate(prevState, result));
			setResult(initialResult);
			}
	}
	const deleteResult = (result: any) => setResults(results.filter(({date}) => date !== result.date));

	const onHandleClickResult = ({key, result}: OnHandleClickResultModel) => {
		if (key === 'edit') setResult(result);
		else deleteResult(result);
	}

	return (
		<div>
			<FormView result={result} onAddResult={onAddResult} onChange={onChangeResult}/>
			<ResultTable results={results} onHandleClickResult={onHandleClickResult}/>
		</div>
	);
}