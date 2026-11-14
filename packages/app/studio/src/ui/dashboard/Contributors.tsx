import {createElement} from "@opendaw/lib-jsx"
import {IconSymbol} from "@opendaw/studio-enums"
import {Icon} from "@/ui/components/Icon"
import {RailSection} from "@/ui/dashboard/RailSection"
import {RailFooterLink} from "@/ui/dashboard/RailFooterLink"

// Embryo Studio: the credit to openDAW and its contributors stays, as a plain link. The avatar wall
// (live calls to api.github.com and avatars.githubusercontent.com on every visit) is left out, so
// opening the studio contacts no outside server.
export const Contributors = () => (
    <RailSection title={[<span>Built on openDAW</span>, <Icon symbol={IconSymbol.Github}/>]}>
        <p>Embryo Studio is built on openDAW by André Michelle and its contributors (AGPL v3).</p>
        <RailFooterLink href="https://github.com/andremichelle/openDAW/graphs/contributors">Thank you ♡</RailFooterLink>
    </RailSection>
)
