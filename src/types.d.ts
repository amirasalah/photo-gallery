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
interface IUserData {
    first_name: string
    last_name: string
}
interface IUserAndImageDetailsContainerPropperties {
    username: string
    title: string
    likes: number
    createdAt: string
    description: string
}
interface IImageContainerProperties {
    mediaId: string
}
interface IImageStyleWrapperProperties {
    children: React.ReactNode
    hasBackground?: boolean
}
