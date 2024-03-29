/*
Aufgabe: <Abschlussarbeit S21>
Name: <Tristan Trefz>
Matrikel: <266703>
Datum: <19.07.2021>
Quellen: <Kommilitonen mit denen ich zusammengearbeitet habe: Moritz Hinderer, Martin Fuhr, Julian Himmel, weitere Quellen: Inverted Classroon, Internet>
*/
var Endabgabe;
(function (Endabgabe) {
    //class to handle general ui stuff
    class UI {
        //gets score of home team
        getHomeScore() {
            return this.homeScore || 0;
        }
        //set score for home team
        setHomeScore(homeScore) {
            this.homeScore = homeScore;
            this.updateScore();
        }
        //gets score of away team
        getAwayScore() {
            return this.awayScore || 0;
        }
        //set score for away team
        setAwayScore(awayScore) {
            this.awayScore = awayScore;
            this.updateScore();
        }
        //redraws general ui
        draw(time) {
            const playerUi = document.getElementById("upper-ui");
            if (!playerUi) {
                return;
            }
            //creats clock
            this.createTime(playerUi, time);
        }
        //updates score
        updateScore() {
            const playerUi = document.getElementById("upper-ui");
            if (!playerUi) {
                return;
            }
            let scoreElement = document.getElementById("score");
            if (!scoreElement) {
                const scorePre = document.createElement("span");
                scorePre.setAttribute("id", "score-pre");
                const scorePost = document.createElement("span");
                scorePost.setAttribute("id", "score-post");
                scoreElement = document.createElement("span");
                scoreElement.setAttribute("id", "score");
                playerUi.appendChild(scorePre);
                playerUi.appendChild(scoreElement);
                playerUi.appendChild(scorePost);
            }
            scoreElement.innerHTML = `${this.getHomeScore()} : ${this.getAwayScore()}`;
        }
        //creates clock
        createTime(playerUi, time) {
            let timeElement = document.getElementById("time");
            if (!timeElement) {
                timeElement = document.createElement("span");
                timeElement.setAttribute("id", "time");
                playerUi.appendChild(timeElement);
            }
            if (!time) {
                return;
            }
            //calculates human readable time
            const minutes = Math.floor(time / (1000 * 60));
            const minuteRest = time % (1000 * 60);
            const seconds = Math.floor(minuteRest / 1000);
            timeElement.innerHTML = `Zeit: ${minutes.toString().length < 2 ? `0${minutes}` : minutes}:${seconds.toString().length < 2 ? `0${seconds}` : seconds}`;
        }
    }
    Endabgabe.UI = UI;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=ui.js.map