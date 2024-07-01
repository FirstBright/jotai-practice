import { inputValueAtom } from "@/atoms/inputvalue"
import { useAtom } from "jotai"
import { ChangeEvent } from "react"

export function Calcluator(){
    const [inputValue, setInputValue] = useAtom(inputValueAtom)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(parseInt(e.currentTarget.value))
    }
    return (
        <>
        <div className='flex flex-col items-center'>                
                <p>계산기</p>
                <p>속도를 입력하고 단위를 선택하십시오</p>
            </div>
            <input
                type='number'
                className='border-gray-700 focus:border-gray-700 transition-all ease-in'
                value={inputValue}
                onChange={handleChange}
            />
            <select name='measure' id='measure'>
                <optgroup label='미터 단위'>
                    <option>m/s</option>
                    <option>km/h</option>
                </optgroup>
                <optgroup label='기타 단위'>
                    <option>mph</option>
                    <option>fps</option>
                    <option>kt</option>
                </optgroup>
            </select>
            <div>
                소수점 <input type='text' />
                자리로 반올림
            </div>
            <button>계산</button>
            <button>삭제</button>
        </>
    )
}