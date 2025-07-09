export function createNewDetails(details, text) {
    const nextDetailId = details.length === 0 ? 1 : Math.max(...details.map((d) => d.id)) + 1

    return [
        ...details,
        {
            id: nextDetailId,
            text,
            checked: false,
        },
    ]
}

export function createToggledDetails(details, detailId) {
    return details.map((detail) => (detail.id === detailId ? { ...detail, checked: !detail.checked } : detail))
}

export function createRemovedDetails(details, detailId) {
    return details.filter((detail) => detail.id !== detailId)
}
