import { Calculator } from "@/components/calculator"
import { EtcUnit } from "@/components/etc-unit"
import { MeterUnit } from "@/components/meter-unit"

export default function CalculatorPage() {
    return (
        <>
            <div className='w-full h-full flex justify-center bgbox'>
                <div
                    className='w-full max-w-3xl m-4 p-4 bg-slate-200
                 shadow-gray-300 flex flex-col gap-4'
                >
                    <Calculator />
                    <MeterUnit />
                    <EtcUnit />
                </div>
            </div>
        </>
    )
}
