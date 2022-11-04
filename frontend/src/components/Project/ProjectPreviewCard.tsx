
type ProjectPreviewCardProps = {
    previewImg: string,
    title: string,
    date: string,
    description: string,
    slug: string
}
const ProjectPreviewCard = ({previewImg, title, date, description, slug}: ProjectPreviewCardProps): JSX.Element => {
    return (
        <a href={`/project/${slug}`}>
            <div className="flex mt-4 bg-cyan-50 hover:bg-cyan-100 border-black border-solid border-2">
                <div className="pr-4 sm:h-[100px] md:h-[150px] lg:h-[175px]">
                    <img className="h-full w-full object-contain" src={`${previewImg}`} alt={`${title} preview`}></img></div>
                <div>
                    <div>
                        <h1 className="text-3xl font-bold">{title}</h1>
                    </div>
                    <div>
                        <h3 className="text-sm font-italic">{date}</h3>
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}
export default ProjectPreviewCard;