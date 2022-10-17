import { CollectionQueries } from "../../query";

import { ShopifyProvider } from "../../ShopifyProvider"

const collectionMenuTag = process.env.COLLECTION_MENU_TAG;

const getAllCollections = async () => {
    const response = await ShopifyProvider(CollectionQueries.getAllCollections())

    const mapCollections = response.data.collections.edges?.map((collection: any) => (
        { ...collection.node }
    ))

    return mapCollections ?? [];
}

const sortCollectionsMenu = (prev: any, actual: any) => {
    if (prev.description < actual.description) {
        return -1;
    }
    if (prev.description > actual.description) {
        return 1;
    }
    return 0;
}

const getAllCollectionsMenu = async () => {
    const collections = await getAllCollections();

    const collectionsMenu =
        collections
            .filter((collection: any) => (
                collection
                    .description
                    .match(RegExp(`${collectionMenuTag}$`, 'gmi'))
                    ?.length > 0
            ))
            .sort(sortCollectionsMenu)

    return collectionsMenu ?? []
}

export { getAllCollections, getAllCollectionsMenu }