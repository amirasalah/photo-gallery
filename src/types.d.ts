interface IImageProperties {
    url: string
}
interface IUserDetailsProperties {
    firstName: string
    lastName: string
    imageURL: string
}
interface IImageDetailsProperties {
    title: string
    description: string
}
interface IImageMetaDataProperties {
    likesCount: number
    datePosted: string
}
interface IImageData {
    title: string
    description: string
    likes: number
    created: string
}
interface IUserAndImageDetailsContainerPropperties extends IImageData {
    username: string
}
interface IImageContainerProperties {
    mediaId: string
}
interface IImageStyleWrapperProperties {
    children: React.ReactNode
    hasBackground?: boolean
}
interface IUser {
    id: string
    username: string
    first_name: string
    last_name: string
    profile_images: IprofileImages
}
interface IPost extends IImageData {
    id: string
    mediaId: string
    user: IUser
}
interface IGetPostsResponse {
    response: {
        count: number
        posts: IPost[]
    }
}
interface IImageURLS {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
    small_s3: string
}
interface IImageStatistics {
    views: number
    downloads: number
    likes: number
    created: number
}
interface IGetImageResponse {
    response: {
        media: {
            id: string
            type: string
            statistics: IImageStatistics
            urls: IImageURLS
            owner: IUser
        }
    }
}
interface IprofileImages {
    small: string
    medium: string
    large: string
}
interface IGetUserResponse {
    response: {
        user: IUser
    }
}
