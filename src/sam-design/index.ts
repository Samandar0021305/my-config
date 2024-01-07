import { type TypeComponents } from "@/utils/types"

import SText from "./components/text.vue";
import SIcon from "./components/icon.vue"

export const useComponents:TypeComponents = {
    text:{tag:"s-text",value:SText},
    icon:{tag:"s-icon",value:SIcon}
}