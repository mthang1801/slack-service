import { v4 as uuid } from "uuid";
import { Room } from "./Room";

export interface INameSpace {
	id?: string;
	namespace: string;
	thumbnail?: string | "default-thumbnail.png";
	url: string;
    rooms?: Room[]
}

class Namespace {
	private id: number;
	private namespace: string;
	private thumbnail: string;
	private url: string;
    private rooms : Room[] = []

	constructor(props: INameSpace) {
		const { namespace, thumbnail, url } = props;
		this.id = uuid();
		this.namespace = namespace;
		this.url = url;
		this.thumbnail = thumbnail;
	}

	public getNamespace() {
		return this.namespace;
	}

	public getThumbnail() {
		return this.thumbnail;
	}

	public getId() {
		return this.id;
	}

	public getUrl() {
		return this.url;
	}

    public addRoom(room : Room){
        this.rooms.push(room)
        room.setNamespace(this)        
        return this;
    }

    public addRooms(rooms: Room[]) {        
        rooms.forEach(room => {
            this.addRoom(room);
        })        
        return this;
    }

    public getRoomsList(){
        return this.rooms;
    }

    public getRoomById(roomId: string){
        return this.rooms.find(room => room.getId() === roomId)
    }
}

export default Namespace;
