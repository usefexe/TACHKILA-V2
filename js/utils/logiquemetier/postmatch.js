export function postMatch(choix, player) {
    let match = false
    if (choix === "GB") {
        player.post === "GK" ? match = true : match = false
    } else if (["CM1", "CM2", "RM", "LM"].includes(choix)) {
        player.post === "CM" ? match = true : match = false
    } else if (["CB1", "CB2", "RB", "LB"].includes(choix)) {
        player.post === "CB" ? match = true : match = false
    } else if (["ST1", "ST2"].includes(choix)) {
        player.post === "ATT" ? match = true : match = false
    }
    return match
}
