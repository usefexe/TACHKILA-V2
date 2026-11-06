
const assignSuccess = document.getElementById("assignSuccess");

let successTimeout;
//ai
export function showAssignSuccess() {
    clearTimeout(successTimeout);

    assignSuccess.classList.remove("hidden");

    requestAnimationFrame(() => {
        assignSuccess.classList.remove(
            "opacity-0",
            "translate-x-10"
        );
        assignSuccess.classList.add(
            "flex",
            "opacity-100",
            "translate-x-0"
        );
    });

    successTimeout = setTimeout(() => {
        assignSuccess.classList.remove(
            "opacity-100",
            "translate-x-0"
        );
        assignSuccess.classList.add(
            "opacity-0",
            "translate-x-10"
        );

        setTimeout(() => {
            assignSuccess.classList.add("hidden");
            assignSuccess.classList.remove("flex");
        }, 500);
    }, 3000);
}
