import {Poin2d} from "./poin2d";

class Poin3d  extends  Poin2d{
    private _z : number
    constructor(x: number, y: number, z:number) {
        super(x, y);
        this._z=z
    }

    get z(): number {
        return this._z;
    }

    set z(value: number) {
        this._z = value;
    }
    getXYZ():object{
        return {z:this.z,x:this.x,y:this.y}
    }
    setXYZ(x:number,y:number,z:number){
        this.z = z;
        this.x=x;
        this.y=y
    }
}
let poin2d =new Poin2d(3,4)
let poin3d = new Poin3d(1,2,3)
console.log(poin2d.getXY())
console.log(poin3d.getXYZ())