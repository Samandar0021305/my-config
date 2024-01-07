import { type TypeComponents } from "@/utils/types"

import SText from "./components/text.vue";
import SIcon from "./components/icon.vue"
import SCard from "./components/card.vue"

export const useComponents:TypeComponents = {
    text:{tag:"s-text",value:SText},
    icon:{tag:"s-icon",value:SIcon},
    card:{tag:"s-card",value:SCard},
}