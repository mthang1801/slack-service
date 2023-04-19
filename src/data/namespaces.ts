import Namespace from "../classes/Namespace";
import { rooms } from "./rooms";

export const wikiNS = new Namespace({namespace : "Wiki", thumbnail : "https://upload.wikimedia.org/wikipedia/commons/d/de/Wikipedia_Logo_1.0.png", url : "wiki"});
export const mozNS = new Namespace({namespace : "Mozila", thumbnail : "https://upload.wikimedia.org/wikipedia/commons/d/de/Wikipedia_Logo_1.0.png", url : "mozila"});
export const linuxNS = new Namespace({namespace : "Linux", thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png", url : "linux"});

wikiNS.addRooms(rooms.wiki);
mozNS.addRooms(rooms.moz);
linuxNS.addRooms(rooms.linux)

const namespaces = [wikiNS, mozNS, linuxNS];

export default namespaces