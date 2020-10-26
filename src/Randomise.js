import Messages from "./Messages"

function Randomise() {
    let message = document.getElementById("wrapper");
    message.innerHTML = Messages();
}

export default Randomise