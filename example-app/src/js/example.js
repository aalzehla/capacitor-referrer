import { CapacitorReferrer } from '@aalzehla/capacitor-referrer';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    CapacitorReferrer.echo({ value: inputValue })
}
