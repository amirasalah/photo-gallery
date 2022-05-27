interface IImageProps{
    url: string
    description: string
}
interface IUserDetailsProperties{
    firstName: string;
    lastName: string;
    imageURL: string;
}
interface IImageDetailsProperties {
    title: string;
    description: string;
}
interface IImageMetaDataProperties{
    likesCount:number;
    datePosted: string;
}