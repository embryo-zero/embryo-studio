import css from "./Dashboard.sass?inline"
import {Lifecycle} from "@opendaw/lib-std"
import {createElement} from "@opendaw/lib-jsx"
import {StudioService} from "@/service/StudioService.ts"
import {Html} from "@opendaw/lib-dom"
import {Resources} from "@/ui/dashboard/Resources"
import {IntroTiles} from "@/ui/dashboard/IntroTiles"
import {ActionButtons} from "@/ui/dashboard/ActionButtons"
import {Backup} from "@/ui/dashboard/Backup"
import {Contributors} from "@/ui/dashboard/Contributors"
import {HelpFeedback} from "@/ui/dashboard/HelpFeedback"

const className = Html.adoptStyleSheet(css, "Dashboard")

type Construct = {
    lifecycle: Lifecycle
    service: StudioService
}

export const Dashboard = ({lifecycle, service}: Construct) => (
    <div className={className}>
        <div className="intro">
            <header className="hero">
                <h1>Embryo Studio</h1>
                <div className="tagline">Make music on Embryo-Zero</div>
                {/* AGPL-3.0 section 13: everyone using this changed version is offered its source */}
                <div className="tagline" style={{fontSize: "0.75em", opacity: "0.8"}}>
                    Free software based on <a href="https://github.com/andremichelle/openDAW" target="_blank" rel="noopener noreferrer">openDAW</a>,
                    licensed <a href="https://www.gnu.org/licenses/agpl-3.0.html" target="_blank" rel="noopener noreferrer">AGPL-3.0</a> ·{" "}
                    <a href="https://github.com/embryo-zero/embryo-studio/tree/embryo" target="_blank" rel="noopener noreferrer">Embryo Studio source code</a>
                </div>
            </header>
            <ActionButtons lifecycle={lifecycle} service={service}/>
        </div>
        <div className="main">
            <div className="panel">
                <Resources lifecycle={lifecycle} service={service}/>
            </div>
            <div className="rail">
                <HelpFeedback/>
                <Backup service={service}/>
                <Contributors/>
            </div>
        </div>
        <IntroTiles/>
    </div>
)