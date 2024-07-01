import { Calcluator } from "@/components/calculator"
import { EtcUnit } from "@/components/etc-unit"
import { MeterUnit } from "@/components/meter-unit"

export default function CalculatorPage() {
    return (
        <>
            <Calcluator />
            <MeterUnit />
            <EtcUnit/>
        </>
    )
}
