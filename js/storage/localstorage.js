// const getPlayer= JSON.parse(localStorage.getItem("joueurs")) || []
const getPlayer = [
    { name: "salime", nubmer: 2, post: "ATT", inlineup: false, positoninlinup: "libre", itcapitan: false, age: 22, status: "enforme" },
    { name: "yassine", nubmer: 5, post: "CB", inlineup: false, positoninlinup: "libre", itcapitan: true, age: 28, status: "enforme" },
    { name: "amine", nubmer: 1, post: "GK", inlineup: false, positoninlinup: "libre", itcapitan: false, age: 31, status: "enforme" },
    { name: "hamza", nubmer: 4, post: "CB", inlineup: false, positoninlinup: "libre", itcapitan: false, age: 25, status: "blese" },
    { name: "ayoub", nubmer: 8, post: "CM", inlineup: false, positoninlinup: "libre", itcapitan: false, age: 24, status: "enforme" },
    { name: "mehdi", nubmer: 9, post: "ATT", inlineup: false, positoninlinup: "libre", itcapitan: false, age: 19, status: "enforme" },
    { name: "omar", nubmer: 6, post: "CM", inlineup: false, positoninlinup: "libre", itcapitan: false, age: 29, status: "blese" },
    { name: "zakaria", nubmer: 3, post: "CB", inlineup: false, positoninlinup: "libre", itcapitan: false, age: 27, status: "enforme" },
    { name: "reda", nubmer: 11, post: "ATT", inlineup: false, positoninlinup: "libre", itcapitan: false, age: 21, status: "enforme" },
    { name: "bilal", nubmer: 10, post: "CM", inlineup: false, positoninlinup: "libre", itcapitan: false, age: 35, status: "blese" },
        { name: "salime", nubmer: 2, post: "ATT", inlineup: false, positoninlinup: "libre", itcapitan: false, age: 22, status: "enforme" },
    { name: "yassine", nubmer: 5, post: "CB", inlineup: false, positoninlinup: "libre", itcapitan: true, age: 28, status: "enforme" },
    { name: "amine", nubmer: 1, post: "GK", inlineup: false, positoninlinup: "libre", itcapitan: false, age: 31, status: "enforme" },
    { name: "hamza", nubmer: 4, post: "CB", inlineup: false, positoninlinup: "libre", itcapitan: false, age: 25, status: "blese" },
    { name: "ayoub", nubmer: 8, post: "CM", inlineup: false, positoninlinup: "libre", itcapitan: false, age: 24, status: "enforme" },
    { name: "mehdi", nubmer: 9, post: "ATT", inlineup: false, positoninlinup: "libre", itcapitan: false, age: 19, status: "enforme" },
    { name: "omar", nubmer: 6, post: "CM", inlineup: false, positoninlinup: "libre", itcapitan: false, age: 29, status: "blese" },
    { name: "zakaria", nubmer: 3, post: "CB", inlineup: false, positoninlinup: "libre", itcapitan: false, age: 27, status: "enforme" },
    { name: "reda", nubmer: 11, post: "ATT", inlineup: false, positoninlinup: "libre", itcapitan: false, age: 21, status: "enforme" },
    { name: "bilal", nubmer: 10, post: "CM", inlineup: false, positoninlinup: "libre", itcapitan: false, age: 35, status: "blese" }
];

export{getPlayer}  

export const state = {
    playerToEdit: null,
    selectedPost: ""
    
};
export const   effstate={
    filtered:"ALL",
    searchValue:null,
    currentpage:1,
    totalpage:1
}