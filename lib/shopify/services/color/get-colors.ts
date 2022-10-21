import { getAllCollections } from "../collection";

const colorMenuTag = process.env.COLOR_MENU_TAG;

const sortColorsMenu = (prev: any, actual: any) => {
    if (prev.description < actual.description) {
        return -1;
    }
    if (prev.description > actual.description) {
        return 1;
    }
    return 0;
}

const getAllColorsMenu = async () => {
    const collections = await getAllCollections();

    const colorsMenu =
        collections
            .filter((collection: any) => (
                collection
                    .description
                    .match(RegExp(`${colorMenuTag}$`, 'gmi'))
                    ?.length > 0
            ))
            .sort(sortColorsMenu)

    return colorsMenu ?? []
}

export { getAllColorsMenu }