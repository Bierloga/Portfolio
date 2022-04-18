import { NavLink } from "react-router-dom";

function Winc() {
    return (
        <div className="content">
            <div className="contentDiv">
                <h2 class="lower-title">Winc Academy</h2>
                <p>Vanaf september 2021 t/m Maart 2022 ben ik bezig geweest met een cursus full-stack development bij Winc Academy. Hier heb ik
                    geleerd
                    over HTML, CSS(+SASS), JavaScript, Jest, React (met hooks en redux), Python, Flask, databases en deployment.<br></br><br></br>
                    Hierin werden we stapgewijs meegenomen in het creeëren van webapplicaties, waarbij bronnen werden gegeven en opdrachten werden
                    gedaan, onder toezicht van docenten en mentoren. Zij waren ook verantwoordeljk voor code review.
                    Het was een fijne cursus, omdat er veel van je eigen zelfstandigheid en probleemoplossend vermogen werd gevraagd.
                    </p>
                <NavLink to="/certificate"><span className="linkbtn">Certificaat</span></NavLink>
            </div>
        </div>
    )
}

export default Winc;