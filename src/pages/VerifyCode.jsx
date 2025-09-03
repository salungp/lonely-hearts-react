import Header from '../components/Header'
import PinInput from '../components/PinInput'

function VerifyCode() {
    return (<>
        <Header back={true} backTo="/offer"></Header>
        <div className="container-sm">
            <h1 className="lh-title mb-3">Verify code</h1>
            <PinInput length={4} correctPin="2222" button="Verify code" />
        </div>
    </>)
}

export default VerifyCode