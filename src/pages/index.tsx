import { inputValueAtom } from "@/atoms/inputvalue"
import { useAtom } from "jotai"
import { ChangeEvent } from "react"
export default function Calculator() {
    const [inputValue, setInputValue] = useAtom(inputValueAtom)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(parseInt(e.currentTarget.value))
    }
    return (
        <>
            <div className='flex justify-center'>
                <p>단위 환산</p>
                <p>속도 단위 환산</p>
                <li>
                    이 계산기는 미터법, 영미 기타 속도 단위를 환산해 줍니다.
                </li>
                <p>계산기</p>
                <p>속도를 입력하고 단위를 선택하십시오</p>
                <input
                    type='number'
                    className='absolute pl-10 w-full h-full bg-transparent border-solid border-gray-700 focus:border-gray-700 transition-all ease-in'
                    value={inputValue}
                    onChange={handleChange}
                />
            </div>
        </>
    )
}
