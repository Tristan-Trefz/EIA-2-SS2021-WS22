/*
Aufgabe: <Abschlussarbeit S21>
Name: <Tristan Trefz>
Matrikel: <266703>
Datum: <19.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Moritz Hinderer, Martin Fuhr, Julian Himmel, weitere Quellen: Inverted Classroon, Internet>
*/
var Endabgabe;
(function (Endabgabe) {
    class Linesman extends Endabgabe.Movable {
        constructor(_position) {
            super(new Endabgabe.Vector(_position.X, _position.Y));
            this.target = new Endabgabe.Vector(_position.X, _position.Y);
            this.radius = 1.5;
        }
        setTargetFn(cb) {
            this.targetFn = cb;
        }
        getTargetFn() {
            return this.targetFn();
        }
        draw() {
            Endabgabe.ctx.save();
            //draw player center
            Endabgabe.ctx.beginPath();
            Endabgabe.ctx.arc(this.position.X, this.position.Y, this.getRadius(), 0, 2 * Math.PI, false);
            Endabgabe.ctx.fillStyle = this.color;
            Endabgabe.ctx.fill();
            Endabgabe.ctx.lineWidth = 1;
            Endabgabe.ctx.strokeStyle = "#003300";
            Endabgabe.ctx.stroke();
            Endabgabe.ctx.restore();
        }
    }
    Endabgabe.Linesman = Linesman;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=linesman.js.map