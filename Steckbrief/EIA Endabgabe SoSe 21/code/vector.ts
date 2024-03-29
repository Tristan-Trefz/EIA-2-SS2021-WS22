/*
Aufgabe: <Abschlussarbeit S21>
Name: <Tristan Trefz>
Matrikel: <266703>
Datum: <19.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Moritz Hinderer, Martin Fuhr, Julian Himmel, weitere Quellen: Inverted Classroon, Internet>
*/

namespace Endabgabe {
    //Jirkas Code (Asteroids/vector.ts)

    export class Vector {
        public X: number;
        public Y: number;

        constructor(_X: number, _Y: number) {
            this.X = _X;
            this.Y = _Y;
        }

        public scale(_factor: number): void {
            this.X *= _factor;
            this.Y *= _factor;
        }

        public add(_added: Vector): void {
            this.X += _added.X;
            this.Y += _added.Y;
        }

        draw(color: string = "red", radius: number = 1): void {
            ctx.beginPath();
            ctx.arc(this.X, this.Y, radius, 0, 2 * Math.PI, false);
            ctx.lineWidth = 1;
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    }
}