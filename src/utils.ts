export function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
        width,
        height,
    }
}

export const LARGE_SCREEN_SIZE = 400

export const SCREEN_SIZE_PROFILE_IMAGE_LIMIT = 1200
