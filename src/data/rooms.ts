import { Room } from "../classes/Room";

const wikiNewArticle = new Room({name : "New Article" })
const wikiEditors = new Room({name : "Editors" })
const wikiOthers = new Room({name : "Others" })

const mozFirefox = new Room({name : "Firefox"});
const mozSeaMonkey = new Room({name : "SeaMonkey"});
const mozSpiderMonkey = new Room({name : "SpiderMonkey"});
const mozRust = new Room({name : "Rust"});

const linuxDebian = new Room({name :"Debian"});
const linuxRedhat = new Room({name :"Redhat"});
const linuxMacOS = new Room({name :"MacOS"});

export const rooms = {
    wiki : [wikiNewArticle,wikiEditors,wikiOthers ],
    moz : [mozFirefox, mozSeaMonkey, mozSpiderMonkey, mozRust],
    linux : [linuxDebian, linuxRedhat, linuxMacOS]
}