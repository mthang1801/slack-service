import { v4 as uuid } from 'uuid';
import Namespace from './Namespace';
interface IRoom {
    name :string; 
    isPrivate?: boolean; 
    
}

export class Room {
    private id : string ; 
    private name : string; 
    private namespace?: Namespace | null = null;
    private isPrivate : boolean; 

    constructor(props : IRoom){
        const { name, isPrivate} = props;
        this.id = uuid();
        this.name = name;         
        this.isPrivate = isPrivate ?? false;
    }

    public getId(){
        return this.id;
    }

    public getRoomName(){
        return this.name;
    }

    public isPrivateRoom(){
        return this.isPrivate;
    }

    public getNameSpace(){
        return this.namespace;
    }
    
    public setNamespace(namespace : Namespace){
        this.namespace = namespace
        return this;
    }
}