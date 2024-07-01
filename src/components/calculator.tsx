import { decimalAtom } from "@/atoms/decimal"
import { inputValueAtom } from "@/atoms/inputvalue"
import { unitAtom } from "@/atoms/unit"
import { useAtom } from "jotai"
import { ChangeEvent } from "react"

export function Calculator() {
    const [inputValue, setInputValue] = useAtom(inputValueAtom)
    const [decimalPlaces, setDecimalPlaces] = useAtom(decimalAtom)
    const [_, setUnit] = useAtom(unitAtom)
    let result

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        result = value
        if (!isNaN(Number(value))) {
            setInputValue(value)
        }
    }

    const handleUnitChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setUnit(e.currentTarget.value)
    }

    const handleDecimalChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        if (!isNaN(Number(value))) {
            setDecimalPlaces(Number(value))
        }
    }

    return (
        <>
            <div className='flex flex-col items-center p-4'>
                <p className='text-xl font-bold'>계산기</p>
                <p className='text-sm mb-4'>
                    속도를 입력하고 단위를 선택하십시오
                </p>
                <div className='flex flex-col items-center w-full max-w-xs'>
                    <input
                        type='text'
                        autoFocus
                        className='p-2 border border-gray-300 rounded mb-4 w-full'
                        value={inputValue}
                        onChange={handleChange}
                    />
                    <select
                        name='measure'
                        id='measure'
                        className='p-2 border border-gray-300 rounded mb-4 w-full'
                        onChange={handleUnitChange}
                    >
                        <optgroup label='미터 단위'>
                            <option value='m/s'>m/s</option>
                            <option value='km/h'>km/h</option>
                        </optgroup>
                        <optgroup label='기타 단위'>
                            <option value='mph'>mph</option>
                            <option value='fps'>fps</option>
                            <option value='kt'>kt</option>
                        </optgroup>
                    </select>
                    <div className='flex items-center mb-4'>
                        <label className='mr-2'>소수점</label>
                        <input
                            type='text'
                            className='p-2 border border-gray-300 rounded w-16 text-center'
                            value={decimalPlaces}
                            onChange={handleDecimalChange}
                        />
                        <span className='ml-2'>자리로 반올림</span>
                    </div>
                    <button
                        className='p-2 bg-red-500 text-white rounded'
                        onClick={() => setInputValue("")}
                    >
                        삭제
                    </button>
                </div>
            </div>
        </>
    )
}
